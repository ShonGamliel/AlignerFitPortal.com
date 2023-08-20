import React from "react";
import { server } from "../env";
import axios from "axios";
import { CasesContext, ChatContext, SocketContext, UserContext } from "../Contexts";
import colors from "../colors";
import { v4 as uuidv4 } from "uuid";
import Text from "../Text";
import NewCaseButtons from "../NewCaseButtons";
import Loader from "../Loader";

let documentations = [
    "Digital Scan (Upper Jaw)",
    "Digital Scan (Lower Jaw)",
    "Upper Jaw Scan Image (Optional)",
    "Lower Jaw Scan Image (Optional)",
    "Intraoral Image 1",
    "Intraoral Image 2",
    "Intraoral Image 3",
    "Intraoral Image 4",
    "Intraoral Image 5",
    "Intraoral Image 6",
    "Intraoral Image 7",
    "Intraoral Image 8",
    "Panoramic Image",
    "Sefalometric Image",
];

export default function AlignerNewCaseStage5({ setStage, setAdding, newCase, setNewCase }) {
    const { user } = React.useContext(UserContext);
    const { socket } = React.useContext(SocketContext);
    const { updateChatsHistory } = React.useContext(ChatContext);
    const { updateCases } = React.useContext(CasesContext);

    const [waiting, setWaiting] = React.useState();

    const [sending, setSending] = React.useState();

    const [currentPlan, setCurrentPlan] = React.useState(newCase.get("notes")?.currentPlan || newCase.get("notes")?.plans[0] || 1);

    const getFileExtension = (filename) => {
        const lastDotIndex = filename.lastIndexOf(".");
        if (lastDotIndex === -1 || lastDotIndex === 0) {
            // The filename doesn't have an extension or starts with a dot
            return "";
        }
        return filename.slice(lastDotIndex).toLowerCase();
    };

    const sendCaseToServer = () => {
        setSending(true);
        axios.post(`${server}/casescount`, { type: "clearaligners" }).then((res) => {
            let caseid = `AF_CA${res.data.counter.toString().padStart(4, "0")}`;

            const formData = new FormData();
            formData.append("caseid", caseid);
            formData.append("body_type", "case");
            formData.append("type", "clearaligners");
            formData.append("date", Date.now());
            formData.append("userid", user._id);
            formData.append("doctor", newCase.get("doctor"));

            formData.append("clinicid", newCase.get("clinic")._id);
            formData.append("patient_name", `${newCase.get("patient").firstname} ${newCase.get("patient").lastname}`);
            formData.append("patient_age", newCase.get("patient").age);
            formData.append("patient_gender", newCase.get("patient").gender);
            formData.append("patient_phone", newCase.get("patient").phone);

            formData.append("plans", newCase.get("notes").plans);

            formData.append("conditions", newCase.get("notes").conditions);
            formData.append("patient_status", newCase.get("notes").patient_status);
            formData.append("requests", newCase.get("notes").requests);
            formData.append("additionals", newCase.get("notes").additionals);
            formData.append("material", newCase.get("notes").material);
            if (newCase.get("notes").note && newCase.get("notes").note.length) formData.append("note", newCase.get("notes").note);
            formData.append("jaw", newCase.get("notes").jaw);

            formData.append("conditions2", newCase.get("notes").conditions2);
            formData.append("patient_status2", newCase.get("notes").patient_status2);
            formData.append("requests2", newCase.get("notes").requests2);
            formData.append("additionals2", newCase.get("notes").additionals2);
            formData.append("material2", newCase.get("notes").material2);
            if (newCase.get("notes").note2 && newCase.get("notes").note2.length) formData.append("note2", newCase.get("notes").note2);
            formData.append("jaw2", newCase.get("notes").jaw2);

            formData.append("conditions3", newCase.get("notes").conditions3);
            formData.append("patient_status3", newCase.get("notes").patient_status3);
            formData.append("requests3", newCase.get("notes").requests3);
            formData.append("additionals3", newCase.get("notes").additionals3);
            formData.append("material3", newCase.get("notes").material3);
            if (newCase.get("notes").note3 && newCase.get("notes").note3.length) formData.append("note3", newCase.get("notes").note3);
            formData.append("jaw3", newCase.get("notes").jaw3);

            let files_names = [];
            [...documentations].map((d) => {
                if (newCase.has(d)) {
                    files_names.push(d);
                    formData.append("files", newCase.get(d).file, d + getFileExtension(newCase.get(d).file.name));
                }
            });
            formData.append("files_names", files_names);

            axios
                .post(`${server}/case`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((r) => {
                    let plans = newCase.get("notes").plans;

                    let caseId = `AF_CA${res.data.counter.toString().padStart(4, "0")}`;

                    let textmessage1 = `i've sent a new case, with ${plans.length} plan${plans.length == 1 ? "" : "s"}.`;
                    let textmessage2 = `first plan's jaw: ${newCase.get("notes")[`jaw${plans[0] == 1 ? "" : plans[0]}`]}, requests: ${newCase.get("notes")[`requests${plans[0] == 1 ? "" : plans[0]}`].map((r, idx) => `${r}`)}`;

                    let messageToSend1 = { caseid: caseId, text: textmessage1, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "clearaligners" };
                    updateChatsHistory(messageToSend1);
                    socket.emit("chat", messageToSend1);

                    let messageToSend2 = { caseid: caseId, text: textmessage2, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "clearaligners" };
                    updateChatsHistory(messageToSend2);
                    socket.emit("chat", messageToSend2);

                    if (newCase.get("notes")[`note${plans[0] == 1 ? "" : plans[0]}`] && newCase.get("notes")[`note${plans[0] == 1 ? "" : plans[0]}`].length) {
                        let textmessage3 = `notes: ${newCase.get("notes")[`note${plans[0] == 1 ? "" : plans[0]}`]}`;
                        let messageToSend3 = { caseid: caseId, text: textmessage3, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "clearaligners" };
                        updateChatsHistory(messageToSend3);
                        socket.emit("chat", messageToSend3);
                    }

                    if (plans.length > 1) {
                        let textmessage2 = `second plan's jaw: ${newCase.get("notes")[`jaw${plans[1] == 1 ? "" : plans[1]}`]}, requests: ${newCase.get("notes")[`requests${plans[1] == 1 ? "" : plans[1]}`].map((r, idx) => `${r}`)}`;

                        let messageToSend2 = { caseid: caseId, text: textmessage2, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "clearaligners" };
                        updateChatsHistory(messageToSend2);
                        socket.emit("chat", messageToSend2);

                        if (newCase.get("notes")[`note${plans[1] == 1 ? "" : plans[1]}`] && newCase.get("notes")[`note${plans[1] == 1 ? "" : plans[1]}`].length) {
                            let textmessage3 = `notes: ${newCase.get("notes")[`note${plans[1] == 1 ? "" : plans[1]}`]}`;
                            let messageToSend3 = { caseid: caseId, text: textmessage3, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "clearaligners" };
                            updateChatsHistory(messageToSend3);
                            socket.emit("chat", messageToSend3);
                        }
                    }

                    if (plans.length > 2) {
                        let textmessage2 = `third plan's jaw: ${newCase.get("notes")[`jaw${plans[2] == 1 ? "" : plans[2]}`]}, requests: ${newCase.get("notes")[`requests${plans[2] == 1 ? "" : plans[2]}`].map((r, idx) => `${r}`)}`;

                        let messageToSend2 = { caseid: caseId, text: textmessage2, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "clearaligners" };
                        updateChatsHistory(messageToSend2);
                        socket.emit("chat", messageToSend2);

                        if (newCase.get("notes")[`note${plans[2] == 1 ? "" : plans[2]}`] && newCase.get("notes")[`note${plans[2] == 1 ? "" : plans[2]}`].length) {
                            let textmessage3 = `notes: ${newCase.get("notes")[`note${plans[2] == 1 ? "" : plans[2]}`]}`;
                            let messageToSend3 = { caseid: caseId, text: textmessage3, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "clearaligners" };
                            updateChatsHistory(messageToSend3);
                            socket.emit("chat", messageToSend3);
                        }
                    }

                    setSending(false);
                    updateCases(r.data);
                    setNewCase(new Map());
                    setStage(1);
                    setAdding(false);
                });
        });
    };
    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
            {sending ? (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column", gap: 15, alignItems: "center", justifyContent: "center", padding: 20, borderRadius: 15 }}>
                    <div style={{ color: "white", fontWeight: 700 }}>
                        <Loader />
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 19, fontWeight: 700 }}>
                        <Text>Step</Text> 5: <Text>Summary</Text>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 384 512"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setAdding(false);
                            setStage(1);
                            setNewCase(new Map());
                        }}
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
                {newCase.get("notes").plans.length > 1 ? (
                    <div style={{ display: "flex", gap: 30 }}>
                        <div style={{ fontWeight: 700 }}>
                            <Text>Plans</Text>:
                        </div>
                        <div style={{ display: "flex", gap: 30 }}>
                            {newCase
                                .get("notes")
                                .plans.sort((a, b) => a - b)
                                .map((p, idx) => (
                                    <div key={idx} style={{ fontWeight: currentPlan == p ? 800 : 600, textDecoration: currentPlan == p ? "underline" : undefined, cursor: "pointer" }} onClick={() => setCurrentPlan(p)}>
                                        {p}
                                    </div>
                                ))}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                <div className="inner-dialog" style={{ display: "flex", gap: 15, flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: 15 }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                    <Text>Clinic</Text>
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>
                                    {newCase.get("clinic").name} - {newCase.get("clinic").address}
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                    <Text>Patient</Text>
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>
                                    {`${newCase.get("patient").firstname} ${newCase.get("patient").lastname}`}, {newCase.get("patient").age}, <Text>{newCase.get("patient").gender}</Text>
                                    <br></br>
                                    {newCase.get("patient").phone}
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                    <Text>Jaw</Text>
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>
                                    <Text>{currentPlan == 1 ? newCase.get("notes").jaw : currentPlan == 2 ? newCase.get("notes").jaw2 : currentPlan == 3 ? newCase.get("notes").jaw3 : ""}</Text>
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                    <Text>Documentation</Text>
                                </div>
                                {documentations.map((d, idx) => {
                                    if (newCase.has(d)) {
                                        return (
                                            <div key={idx}>
                                                <div style={{ fontSize: 14 }}>
                                                    <Text>{d}</Text>:
                                                </div>
                                                <div style={{ color: "grey", fontSize: 14 }}>{newCase.get(d).name}</div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: 15, flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontWeight: 600, color: "#d4ad44", fontSize: 17 }}>
                                    <Text>Conditions</Text>
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>
                                    {newCase.get("notes")[`conditions${currentPlan == 1 ? "" : currentPlan}`].map((c, idx) => (
                                        <React.Fragment key={idx}>
                                            <Text>{c}</Text>
                                            {newCase.get("notes")[`conditions${currentPlan == 1 ? "" : currentPlan}`].length == idx + 1 ? "" : ","}{" "}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, color: "#d4ad44", fontSize: 17 }}>
                                    <Text>Class</Text>
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>{currentPlan == 1 ? newCase.get("notes").patient_status : currentPlan == 2 ? newCase.get("notes").patient_status2 : currentPlan == 3 ? newCase.get("notes").patient_status3 : ""}</div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontWeight: 600, color: "#d4ad44", fontSize: 17 }}>
                                    <Text>Requests</Text>
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>
                                    {newCase.get("notes")[`requests${currentPlan == 1 ? "" : currentPlan}`].map((r, idx) => (
                                        <React.Fragment key={idx}>
                                            <Text>{r}</Text>
                                            {newCase.get("notes")[`requests${currentPlan == 1 ? "" : currentPlan}`].length == idx + 1 ? "" : ","}{" "}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontWeight: 600, color: "#d4ad44", fontSize: 17 }}>
                                    <Text>Additionals</Text>
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>
                                    {newCase.get("notes")[`additionals${currentPlan == 1 ? "" : currentPlan}`].map((r, idx) => (
                                        <React.Fragment key={idx}>
                                            <Text>{r}</Text>
                                            {newCase.get("notes")[`additionals${currentPlan == 1 ? "" : currentPlan}`].length == idx + 1 ? "" : ","}{" "}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div style={{ fontWeight: 600, color: "#d4ad44", fontSize: 17 }}>
                                    <Text>Material</Text>
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>
                                    <Text>{newCase.get("notes")[`material${currentPlan == 1 ? "" : currentPlan}`]}</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    {newCase.get("notes")[`note${currentPlan == 1 ? "" : currentPlan}`] && newCase.get("notes")[`note${currentPlan == 1 ? "" : currentPlan}`].length ? (
                        <div>
                            <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                <Text>Notes</Text>:
                            </div>
                            <div style={{ textAlign: "left", wordBreak: "break-word", wordWrap: "break-word" }} className="input-text additional-notes">
                                {newCase.get("notes")[`note${currentPlan == 1 ? "" : currentPlan}`]}
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <NewCaseButtons
                    antibuttontext={"Back"}
                    probuttontext={"Submit"}
                    onclickanti={() => {
                        setStage(4);
                    }}
                    onclickpro={() => (!sending ? sendCaseToServer() : undefined)}
                />
            </div>
        </div>
    );
}
