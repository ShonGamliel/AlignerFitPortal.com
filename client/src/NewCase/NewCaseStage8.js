import React from "react";
import axios from "axios";
import { server } from "../env";
import colors from "../colors";
import { v4 as uuidv4 } from "uuid";
import Text from "../Text";
import { CasesContext, ChatContext, SocketContext, UserContext } from "../Contexts";
import NewCaseButtons from "../NewCaseButtons";
import Loader from "../Loader";
let documentations = ["Digital Scan (Upper Jaw)", "Digital Scan (Lower Jaw)", "Upper Jaw Scan Image (Optional)", "Lower Jaw Scan Image (Optional)"];
let facephotos = ["Big smile extraoral photo (full face)", "Smile with retractors extraoral photo (full face)", "Front View IntraOral Photo", "45º Right Side Intraoral Photo", "45º Left Side Intraoral Photo"];

export default function NewCaseStage8({ setStage, setAdding, newCase, setNewCase }) {
    const { user } = React.useContext(UserContext);
    const { socket } = React.useContext(SocketContext);
    const { updateChatsHistory } = React.useContext(ChatContext);
    const [sending, setSending] = React.useState();
    const { updateCases } = React.useContext(CasesContext);

    const getFileExtension = (filename) => {
        const lastDotIndex = filename.lastIndexOf(".");
        if (lastDotIndex === -1 || lastDotIndex === 0) {
            // The filename doesn't have an extension or starts with a dot
            return "";
        }
        return filename.slice(lastDotIndex).toLowerCase();
    };

    const sendCaseToServer = () => {
        // console.log(newCase.get("clinic"));

        setSending(true);
        axios.post(`${server}/casescount`, { type: "prosthesis" }).then((res) => {
            let caseid = `AF_P${res.data.counter.toString().padStart(4, "0")}`;

            const formData = new FormData();
            formData.append("caseid", caseid);
            formData.append("body_type", "case");
            formData.append("type", "prosthesis");
            formData.append("date", Date.now());
            formData.append("userid", user._id);
            formData.append("doctor", newCase.get("doctor"));
            formData.append("clinicid", newCase.get("clinic")._id);
            formData.append("patient_name", `${newCase.get("patient").firstname} ${newCase.get("patient").lastname}`);
            formData.append("patient_age", newCase.get("patient").age);
            formData.append("patient_gender", newCase.get("patient").gender);
            formData.append("patient_phone", newCase.get("patient").phone);

            formData.append("teeths_color", newCase.get("color").color);
            formData.append("teeths_translucency", newCase.get("color").translucency);
            formData.append("teeths_img", newCase.get("teeths").img);
            formData.append("teethsObject", JSON.stringify(newCase.get("teeths").teeths));
            if (newCase.get("note") && newCase.get("note").length) formData.append("note", newCase.get("note"));
            let files_names = [];
            [...documentations, ...facephotos].map((d) => {
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
                    let caseId = `AF_P${res.data.counter.toString().padStart(4, "0")}`;
                    let text = `cases/${caseId}/teeths.png`;
                    let messageToSend = { caseid: caseId, text: text, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "prosthesis", isfile: true };
                    updateChatsHistory(messageToSend);
                    socket.emit("chat", messageToSend);

                    let text3 = `Teeth color: ${newCase.get("color").color}`;
                    let messageToSend3 = { caseid: caseId, text: text3, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "prosthesis" };
                    updateChatsHistory(messageToSend3);
                    socket.emit("chat", messageToSend3);

                    let text2 = `I've sent a new case${newCase.get("note") && newCase.get("note").length ? `, notes: ${newCase.get("note")}` : ""}`;
                    let messageToSend2 = { caseid: caseId, text: text2, date: Date.now(), from: user._id, userid: user._id, status: 0, messageid: uuidv4(), type: "prosthesis" };
                    updateChatsHistory(messageToSend2);
                    socket.emit("chat", messageToSend2);

                    updateCases(r.data);

                    setSending(false);
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: 19, fontWeight: 700 }}>
                    <Text>Step</Text> 8: <Text>Summary</Text>
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

            <div className="inner-dialog" style={{ display: "flex", gap: 15, flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 15 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                            <Text>Restoration</Text>
                        </div>
                        <img src={newCase.get("teeths").img} alt="" style={{ mixBlendMode: "", borderRadius: 15, width: 200 }} />
                    </div>
                    <div style={{ display: "flex", gap: 15, flexDirection: "column" }}>
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
                        <div style={{ display: "flex", flexDirection: "column", display: "none" }}>
                            <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                <Text>Restoration</Text>
                            </div>
                            <img src={newCase.get("teeths")} alt="" style={{ mixBlendMode: "", borderRadius: 15, width: 200 }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                <Text>Teeth Color</Text>
                            </div>
                            <div style={{ display: "flex", gap: 5 }}>
                                <div style={{ fontSize: 14 }}>
                                    <Text>Color</Text>:
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>{newCase.get("color").color}</div>
                            </div>
                            <div style={{ display: "flex", gap: 5 }}>
                                <div style={{ fontSize: 14 }}>
                                    <Text>Translucency</Text>:
                                </div>
                                <div style={{ color: "grey", fontSize: 14 }}>{newCase.get("color").translucency}</div>
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

                        {newCase.has(facephotos[0]) || newCase.has(facephotos[1]) || newCase.has(facephotos[2]) || newCase.has(facephotos[3]) || newCase.has(facephotos[4]) ? (
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                    <Text>Face Photos</Text>
                                </div>
                                {facephotos.map((d, idx) => {
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
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                {newCase.get("note") && newCase.get("note").length ? (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                            <Text>Additional Notes</Text>
                        </div>
                        <div style={{ textAlign: "left", wordBreak: "break-word", wordWrap: "break-word" }} className="input-text additional-notes">
                            {newCase.get("note")}
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
                    setStage(7);
                }}
                onclickpro={() => (!sending ? sendCaseToServer() : undefined)}
            />
        </div>
    );
}
