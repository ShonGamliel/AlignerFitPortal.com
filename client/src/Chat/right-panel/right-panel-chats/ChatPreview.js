import "./ChatPreview.css";

import React from "react";
import axios from "axios";
import { parseTimestamp, server } from "../../../env";
import MessageStatus from "../../left-panel/left-panel-chat/MessageStatus";
import { CasesContext, ChatContext, LanguageContext, NavContext, UserContext } from "../../../Contexts";
import CaseState from "../../../CaseState";
import Text from "../../../Text";

export default function ChatPreview({ c }) {
    const { setChat, chat } = React.useContext(ChatContext);
    const { user, setUser } = React.useContext(UserContext);
    const { cases } = React.useContext(CasesContext);

    let a = user._id == c.from ? "outcome" : "income";

    return (
        <div className={c.caseid == chat?.caseid ? "chat-preview chat-preview-selected" : "chat-preview"} style={{ position: "relative", marginBottom: 15, marginTop: 10 }}>
            <div style={{ display: "flex", gap: 30, position: "absolute", zIndex: 99, top: "100%", left: "50%", transform: "translateX(-50%) translateY(-50%)", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 15 }}>
                    <CaseState c={c} state={"status"} style={{ padding: 2, paddingLeft: 4, paddingRight: 4, fontSize: 12, fontWeight: 800 }} />
                    <CaseState c={c} state={"progress"} style={{ padding: 2, paddingLeft: 4, paddingRight: 4, fontSize: 12, fontWeight: 800 }} />
                </div>

                {user.archivedChats?.includes(c.caseid) ? (
                    <div
                        style={{ cursor: "pointer", whiteSpace: "nowrap", padding: 2, paddingLeft: 4, paddingRight: 4, fontSize: 12, fontWeight: 800, backgroundColor: "#ff3639", borderRadius: 5, color: "white" }}
                        onClick={() => {
                            axios.post(`${server}/unarchivechat/${c.caseid}`).then((res) => {
                                let newArray = user.archivedChats.filter((i) => i != c.caseid);
                                setUser({ ...user, archivedChats: [...newArray] });
                            });
                        }}
                    >
                        <Text>Unarchive</Text>
                    </div>
                ) : (
                    <div
                        style={{ cursor: "pointer", whiteSpace: "nowrap", padding: 2, paddingLeft: 4, paddingRight: 4, fontSize: 12, fontWeight: 800, backgroundColor: "#ff3639", borderRadius: 5, color: "white" }}
                        onClick={() => {
                            axios.post(`${server}/archivechat/${c.caseid}`).then((res) => {
                                setUser({ ...user, archivedChats: [...user.archivedChats, c.caseid] });
                            });
                        }}
                    >
                        <Text>Archive</Text>
                    </div>
                )}

                {user.pinChats?.includes(c.caseid) ? (
                    <svg
                        style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 384 512"
                        onClick={() => {
                            axios.post(`${server}/unpinchat/${c.caseid}`).then((res) => {
                                let newArray = user.pinChats.filter((i) => i != c.caseid);
                                setUser({ ...user, pinChats: [...newArray] });
                            });
                        }}
                    >
                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                    </svg>
                ) : (
                    <svg
                        style={{ cursor: "pointer" }}
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 384 512"
                        onClick={() => {
                            axios.post(`${server}/pinchat/${c.caseid}`).then((res) => {
                                setUser({ ...user, pinChats: [...user.pinChats, c.caseid] });
                            });
                        }}
                    >
                        <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                    </svg>
                )}
            </div>

            <div style={{ direction: "ltr", position: "absolute", top: 0, right: "1%", transform: "translate(0%, 0%)", fontSize: 12, display: "flex", gap: 5, color: "grey" }}>
                <Text>Patient</Text>: <div style={{ fontWeight: 700 }}>{cases[c.caseid].patient_name}</div>
            </div>

            <div
                className="chat-preview-inner"
                onClick={() => {
                    setChat(c);
                }}
            >
                <div className="chat-preview-top">
                    <div className="chat-preview-time" style={{ fontWeight: c.status != 3 && a == "income" ? 700 : undefined, color: c.status != 3 && a == "income" ? "black" : undefined }}>
                        {parseTimestamp(c.date, "chatpreview")}
                    </div>

                    <div className="chat-preview-details-name" style={{ fontWeight: c.status != 3 && a == "income" ? 700 : undefined }}>
                        <Text>Case</Text> #{c.caseid}
                    </div>
                </div>
                <div className="chat-preview-bottom">
                    <div style={{ display: "flex", gap: "2px" }}>
                        <div style={{ height: "20px" }}></div>
                        {c.status != 3 && a == "income" ? (
                            <div className="chat-preview-messages-count" style={{ borderRadius: 10, padding: "0 5px 0 5px", fontWeight: 700 }}>
                                New Message
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="chat-preview-details-message" style={{ fontWeight: c.status != 3 && a == "income" ? 700 : undefined, color: c.status != 3 && a == "income" ? "black" : undefined }}>
                        {c.typing ? "...מקליד/ה" : c.text}
                        {a == "outcome" ? <MessageStatus status={c.status} /> : <></>}
                    </div>
                </div>
            </div>
            <img src="./images/logo.png" alt="" className="chat-preview-img" />
        </div>
    );
}
