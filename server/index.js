const express = require("express");
const app = express();
const mongoose = require("mongoose");

const hosted = false;

const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server, {
    cors: {},
});

const cors = require("cors");

if (!hosted) {
    app.use(cors({ origin: "http://localhost:3000" }));
}

server.listen(3002);

const bcrypt = require("bcryptjs");
const archiver = require("archiver");
const multer = require("multer");
const path = require("path");
const fspromise = require("fs").promises;
const fs = require("fs");

app.use("/cases", express.static(path.join(__dirname, "cases")));
app.use("/files", express.static(path.join(__dirname, "files")));

mongoose.set("strictQuery", false);
mongoose
    .connect(MONGODB_ADDRESS)
    .then(console.log("Connected to DataBase"))
    .catch((err) => console.log(err));

const CaseSchema = new mongoose.Schema({
    date: Number,
    shippingstatus: {
        type: "String",
        default: "On The Way",
    },
    teethsObject: String,
    trackingnumber: String,
    trackingfileextension: String,
    istrackingfile: Boolean,
    admin: Boolean,
    admin_type: String,
    type: String,
    doctor: String,
    files_names: [String],
    note: String,
    caseid: String,
    userid: String,
    clinicid: String,
    patient_name: String,
    patient_age: Number,
    patient_gender: String,
    patient_phone: String,
    teeths_color: String,
    teeths_translucency: String,

    plans: {
        type: Array,
        default: [1],
    },

    status: {
        type: String,
        default: "Pending",
    },

    conditions: [String],
    patient_status: String,
    requests: [String],
    additionals: [String],
    jaw: String,
    material: String,

    conditions2: [String],
    patient_status2: String,
    requests2: [String],
    additionals2: [String],
    jaw2: String,
    material2: String,
    note2: String,

    conditions3: [String],
    patient_status3: String,
    requests3: [String],
    additionals3: [String],
    jaw3: String,
    material3: String,
    note3: String,

    progress: {
        type: String,
        default: "Pending",
    },
});

const ClinicSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
    },
    name: String,
    address: String,
    city: String,
    country: String,
    postcode: String,
    phone: String,
    email: String,
});

const MessageSchema = new mongoose.Schema({
    messageid: String,
    text: String,
    type: String,
    from: String,
    isfile: Boolean,
    caseid: {
        type: String,
        ref: "case",
    },
    date: Number,
    status: Number,
    userid: String,
});

const SessionSchema = new mongoose.Schema({
    session_id: {
        type: String,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
});

const UserSchema = new mongoose.Schema({
    downloadedcases: Array,
    approved: Boolean,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    chats: Array,
    admin: Boolean,
    admin_type: String,
    archivedChats: Array,
    pinChats: Array,
    lang: {
        type: String,
        default: "en",
    },
});

const User = mongoose.model("users", UserSchema);
const Session = mongoose.model("sessions", SessionSchema);
const Message = mongoose.model("messages", MessageSchema);
const Clinic = mongoose.model("clinic", ClinicSchema);
const Case = mongoose.model("case", CaseSchema);

class Connections {
    constructor() {
        this.connections = new Map();
    }
    add(userid, socket) {
        // this.connections.set(userid, socket); // single connection
        let current = this.connections.get(userid) || [];
        current = current.filter((c) => c.handshake.address != socket.handshake.address);
        current.push(socket);
        this.connections.set(userid, current);
    }
    remove(userid, socket) {
        // if (this.connections.has(userid)) this.connections.delete(userid); //single connection
        let current = this.connections.get(userid) || [];
        current = current.filter((c) => c.handshake.address != socket.handshake.address);
        this.connections.set(userid, current);
    }
    send(userid, type, message) {
        if (this.connections.has(userid)) {
            let current = this.connections.get(userid) || [];
            for (let c of current) {
                c.emit(type, message);
            }
        }
    }
}

let connections = new Connections();

io.on("connection", (socket) => {
    const { userid } = socket.handshake.query;
    connections.add(userid, socket);

    socket.on("chat", async (message) => {
        if (!message.status) message.status = 1;
        await Message.findOneAndUpdate({ messageid: message.messageid }, message, { upsert: true });
        connections.send("admin", "chat", message);
        connections.send(message.userid, "chat", message);
    });

    socket.on("typing", (message) => {
        connections.send("admin", "typing", message);
        connections.send(message.userid, "typing", message);
    });

    socket.on("disconnect", () => {
        connections.remove(userid, socket);
    });
});

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    if (req.header("cookies")) {
        req.cookies = parseCookies(req.header("cookies"));
    }

    if (!req.cookies || !req.cookies.connect_sid) return next();
    let sessionFromDB = await Session.findOne({ session_id: req.cookies.connect_sid });
    if (!sessionFromDB) return next();
    let userFromDB = await User.findOne({ _id: sessionFromDB.userid });
    if (!userFromDB) {
        await Session.deleteOne({ _id: sessionFromDB._id });
        return next();
    }
    userFromDB.password = undefined;
    userFromDB.salt = undefined;
    req.user = userFromDB;
    next();
});

app.post("/user", (req, res) => {
    res.send(req.user);
});

function parseCookies(source) {
    if (!source.includes("connect_sid=")) source = "connect_sid=" + source;
    const lines = source.trim().split("\n");
    const result = {};

    for (const line of lines) {
        const [key, value] = line.split("=");
        result[key] = value;
    }

    return result;
}

app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    if (req.user) return res.sendStatus(401);
    if (!email || !isEmail(email)) return res.send({ error: true, field: "email", message: "enter an email" });
    let user = await User.findOne({ email: email });
    if (user) return res.send({ error: true, field: "email", message: "email already exists" });
    if (!password) return res.send({ error: true, field: "password", message: "enter a password" });
    if (password.length < 4) return res.send({ error: true, field: "password", message: "password must be at least 4 characters" });

    let salt = bcrypt.genSaltSync(10);
    let newUser = await User.create({ email: email, password: hashPassword(req.body.password, salt), salt: salt });
    let session = newsession();
    res.cookie("connect_sid", session);
    await Session.create({ session_id: session, userid: newUser._id });
    req.user = newUser._doc;
    res.user = newUser._doc;
    res.send({ authenticated: true, session_id: session, ...newUser._doc, password: undefined, salt: undefined });
});

app.post("/logout", async (req, res) => {
    if (!req.user) return res.sendStatus(401);
    let sessionFromDB = await Session.findOne({ session_id: req.cookies.connect_sid });
    req.user = undefined;
    if (sessionFromDB) await Session.deleteOne({ session_id: req.cookies.connect_sid });
    req.user = undefined;
    res.send({ logout: true });
});

app.post("/changepassword", async (req, res) => {
    const { oldpassword, newpasswordcheck, newpassword } = req.body;
    if (!req.user) return res.sendStatus(401);
    let user = await User.findOne({ _id: req.user._id });
    if (!comparePassword(oldpassword, user.password, user.salt)) return res.send({ error: true, field: "oldpassword", message: "incorrect password" });
    let salt = bcrypt.genSaltSync(10);
    await User.updateOne({ _id: req.user._id }, { password: hashPassword(newpassword, salt), salt: salt });
    res.sendStatus(200);
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (req.user) return res.sendStatus(401);
    if (!email || !isEmail(email)) return res.send({ error: true, field: "email", message: "enter an email" });
    let userFromDB = await User.findOne({ email: email });
    if (!userFromDB) return res.send({ error: true, field: "email", message: "email is not exists" });
    if (!password) return res.send({ error: true, field: "password", message: "enter a password" });
    if (!comparePassword(password, userFromDB.password, userFromDB.salt)) return res.send({ error: true, field: "password", message: "incorrect password" });
    // let existedSession = await Session.findOne({ userid: userFromDB._id });
    // if (existedSession) await Session.deleteOne({ _id: existedSession._id });
    let session = newsession();
    await Session.create({ session_id: session, userid: userFromDB._id });
    req.user = userFromDB._doc;
    res.user = userFromDB._doc;
    res.send({ authenticated: true, session_id: session, ...userFromDB._doc, password: undefined, salt: undefined });
});

function newsession() {
    let result = "";
    const characters = "j5d^zW8XvAa_LK?0kFyR>s`*iG}w)q3%[t@f{E!#o<2Q$6+SU1(4)p9]xO-cJrB&HNhMT^PbnYg7ClIeV}uZ)";
    for (let i = 0; i < characters.length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function hashPassword(password, salt) {
    const secretCode = "j5d^zW8XvAa_LK?0kFyR>s`*iG}w)q3%[t@f{E!#o<2Q$6+SU1(4)p9]xO-cJrB&HNhMT^PbnYg7ClIeV}uZ)";
    const hashedPassword = bcrypt.hashSync(password + secretCode, salt);
    return hashedPassword;
}

function comparePassword(password, passwordFromDB, saltFromDB) {
    const secretCode = "j5d^zW8XvAa_LK?0kFyR>s`*iG}w)q3%[t@f{E!#o<2Q$6+SU1(4)p9]xO-cJrB&HNhMT^PbnYg7ClIeV}uZ)";
    const hashedPassword = bcrypt.hashSync(password + secretCode, saltFromDB);
    return hashedPassword == passwordFromDB;
}

function isEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

app.post("/chat", async (req, res) => {
    await Message.updateMany({ caseid: req.body.caseid, status: { $lt: 2 } }, { $set: { status: 2 } });

    let messages = await Message.find({ caseid: req.body.caseid });
    for (let m of messages) {
        connections.send("admin", "chat", m);
        connections.send(m.userid, "chat", m);
    }
    res.send(messages);
});

app.post("/clinic", async (req, res) => {
    if (!req.body.name.length) return res.send({ error: true, field: "name" });
    if (!req.body.address.length) return res.send({ error: true, field: "address" });
    if (!req.body.city.length) return res.send({ error: true, field: "city" });
    if (!req.body.country.length) return res.send({ error: true, field: "country" });
    if (!req.body.postcode.length) return res.send({ error: true, field: "postcode" });
    if (!req.body.phone.length) return res.send({ error: true, field: "phone" });
    if (!req.body.email.length) return res.send({ error: true, field: "email" });

    let newclinic = await Clinic.create(req.body);
    res.send(newclinic);
});

app.post("/archivechat/:caseid", async (req, res) => {
    if (!req.user) return red.sendStatus(401);
    await User.updateOne({ _id: req.user._id }, { $addToSet: { archivedChats: req.params.caseid } });
    res.sendStatus(200);
});

app.post("/unarchivechat/:caseid", async (req, res) => {
    if (!req.user) return red.sendStatus(401);
    await User.updateOne({ _id: req.user._id }, { $pull: { archivedChats: req.params.caseid } });
    res.sendStatus(200);
});

app.post("/pinchat/:caseid", async (req, res) => {
    if (!req.user) return red.sendStatus(401);
    await User.updateOne({ _id: req.user._id }, { $addToSet: { pinChats: req.params.caseid } });
    res.sendStatus(200);
});

app.post("/unpinchat/:caseid", async (req, res) => {
    if (!req.user) return red.sendStatus(401);
    await User.updateOne({ _id: req.user._id }, { $pull: { pinChats: req.params.caseid } });
    res.sendStatus(200);
});

app.post("/setlang", async (req, res) => {
    if (!req.user) return red.sendStatus(401);
    await User.updateOne({ _id: req.user._id }, { lang: req.body.lang });
    res.sendStatus(200);
});
//  ==================================================================
app.post("/clinics", async (req, res) => {
    if (!req.user) return res.sendStatus(401);
    const { userid } = req.body;
    let clinics;
    if (req.body.all) {
        clinics = await Clinic.find({});
    } else {
        clinics = await Clinic.find({ userid: userid });
    }

    res.send(clinics);
});

app.post("/chats", async (req, res) => {
    if (!req.user) return res.sendStatus(401);

    const { userid, type } = req.body;
    const matchCriteria = userid ? { userid } : { type };

    let chats;
    if (type != "super") {
        chats = await Message.aggregate([
            { $match: matchCriteria },
            { $sort: { date: -1 } },
            {
                $group: {
                    _id: "$caseid",
                    lastMessage: { $first: "$$ROOT" },
                },
            },
            {
                $replaceRoot: {
                    newRoot: "$lastMessage",
                },
            },
            {
                $project: {
                    __v: 0,
                },
            },
        ]);
    } else {
        chats = await Message.aggregate([
            { $sort: { date: -1 } },
            {
                $group: {
                    _id: "$caseid",
                    lastMessage: { $first: "$$ROOT" },
                },
            },
            {
                $replaceRoot: {
                    newRoot: "$lastMessage",
                },
            },
            {
                $project: {
                    __v: 0,
                },
            },
        ]);
    }
    res.send(chats);
});

app.post("/requests", async (req, res) => {
    if (!req.user || !req.user.admin) return res.sendStatus(401);
    let users = await User.find({ $or: [{ approved: false }, { approved: undefined }] });
    res.send(users);
});

app.post("/request", async (req, res) => {
    if (!req.user || !req.user.admin) return res.sendStatus(401);
    if (req.body.approve == true) {
        await User.updateOne({ _id: req.body.userid }, { approved: true });
        connections.send(req.body.userid, "userapproved", { approved: true });
    } else {
        await User.deleteOne({ _id: req.body.userid });
        connections.send(req.body.userid, "userapproved", { approved: false });
    }
    res.sendStatus(200);
});

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        let uploadPath = "files";

        if (req.body.body_type === "case") {
            const caseId = req.body.caseid;
            uploadPath = `cases/${caseId}/`;
            await fspromise.mkdir(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.post(
    "/case",
    upload.array("files"),
    async (req, res, next) => {
        if (req.body.type == "clearaligners") {
            let temparray = Array.from(req.body.plans);
            let result = [];
            for (let i of temparray) {
                if (i == "1") result.push(1);
                if (i == "2") result.push(2);
                if (i == "3") result.push(3);
            }
            req.body.plans = result;
        }

        let newcase = await Case.create(req.body);

        let newcasemodi = JSON.stringify(newcase).replace(/,/g, "\n").replace(/\\n/g, "\n");
        fs.writeFile(`cases/${req.body.caseid}/${req.body.patient_name}.txt`, newcasemodi, (err) => {});

        connections.send("admin", "caseadded", newcase);
        connections.send(req.body.userid, "caseadded", newcase);
        if (req.body.type == "prosthesis") uploadImage(`cases/${req.body.caseid}`, "teeths", req.body.teeths_img);
        req.newCase = newcase;
        next();
    },
    (req, res) => {
        const folderPath = `${path.join(__dirname, "cases")}/${req.body.caseid}`;
        const zipFilePath = `${path.join(__dirname, "files")}/${req.body.caseid}.zip`;
        const output = fs.createWriteStream(zipFilePath);
        const archive = archiver("zip", {
            zlib: { level: 9 },
        });
        archive.pipe(output);
        archive.directory(folderPath, false);
        archive.finalize();
        res.send(req.newCase);
    }
);

app.post("/cases", async (req, res, next) => {
    // if (!req.user) return res.sendStatus(401);
    const { userid, type } = req.body;
    if (!userid && !type) return res.send([]);
    let cases;
    if (userid) {
        cases = await Case.find({ userid: userid });
    }
    if (type) {
        if (type == "super") {
            cases = await Case.find();
        } else {
            cases = await Case.find({ type: type });
        }
    }
    res.send(cases);
});

app.post("/updatecase/:caseid", async (req, res) => {
    await Case.findOneAndUpdate({ caseid: req.params.caseid }, req.body);
    let c = await Case.findOne({ caseid: req.params.caseid });

    connections.send(c.userid, "casestate", { ...req.body, caseid: req.params.caseid });
    connections.send("admin", "casestate", { ...req.body, caseid: req.params.caseid });

    res.sendStatus(200);
});

app.post("/casescount", async (req, res) => {
    const c = await Case.findOne({ type: req.body.type }, "caseid", { sort: { caseid: -1 } });
    if (c) {
        res.send({ counter: parseInt(c.caseid.split("_")[1].substring(2)) + 1 });
    } else {
        res.send({ counter: 0 });
    }
});

const upperJaw = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
const lowerJaw = [38, 37, 36, 35, 34, 33, 32, 31, 41, 42, 43, 44, 45, 46, 47, 48];

const isBridgeOK = (number, bridge) => {
    if (!bridge.length) return true;
    let jaw = upperJaw.includes(bridge[0]) ? [...upperJaw] : [...lowerJaw];
    let index = jaw.findIndex((n) => n == number);
    if (index == -1) return false;
    for (let i of bridge) {
        let iindex = jaw.findIndex((n) => n == i);
        if (iindex - 1 == index || iindex + 1 == index) return true;
    }
    return false;
};

app.post("/deletecase", async (req, res) => {
    let c = await Case.findOne({ caseid: req.body.caseid });
    await Case.deleteMany({ caseid: req.body.caseid });
    await Message.deleteMany({ caseid: req.body.caseid });
    connections.send("admin", "caseremove", { caseid: req.body.caseid });
    connections.send(c.userid, "caseremove", { caseid: req.body.caseid });
    res.sendStatus(200);
});

function uploadImage(path, name, imageData) {
    if (!imageData) {
        return console.log({ error: "No image data provided." });
    }

    const base64Data = imageData.replace(/^data:image\/jpeg;base64,/, "");
    const binaryData = Buffer.from(base64Data, "base64");

    const fileName = `${name}.png`;

    fs.writeFile(`${path}/${fileName}`, binaryData, (error) => {
        if (error) {
            console.error("Error saving image:", error);
            return;
        }

        console.log("Image saved successfully.");
    });
}

app.get("/files/:file", async (req, res) => {
    if (req.params.file.endsWith(".zip")) {
        let caseid = req.params.file.slice(0, -4);

        if (!fs.existsSync(`${path.join(__dirname, "files")}/${caseid}.zip`)) {
            let c = await Case.findOne({ caseid: caseid });
            if (c) {
                const folderPath = `${path.join(__dirname, "cases")}/${caseid}`;
                const zipFilePath = `${path.join(__dirname, "files")}/${caseid}.zip`;
                const output = fs.createWriteStream(zipFilePath);
                const archive = archiver("zip", {
                    zlib: { level: 9 },
                });
                archive.pipe(output);
                archive.directory(folderPath, false);
                archive.finalize();
            }
        }
    }
});

app.post("/chatfile", upload.single("file"), (req, res) => {
    console.log("file uploaded");
    console.log(req.body);

    res.sendStatus(200);
});

app.post("/downloadcase", async (req, res) => {
    if (!req.user) return res.send(401);
    await User.updateOne({ _id: req.user._id }, { $addToSet: { downloadedcases: req.body.caseid } });
    res.sendStatus(200);
});

app.post("/shipping", upload.single("file"), async (req, res) => {
    req.body.casesids = req.body.casesids.split(",");
    for (let c of req.body.casesids) {
        await Case.updateOne({ caseid: c }, req.body);
        let cc = await Case.findOne({ caseid: c });
        connections.send(cc.userid, "casetracking", { ...req.body, caseid: c });
        connections.send("admin", "casetracking", { ...req.body, caseid: c });
    }

    res.sendStatus(200);
});
