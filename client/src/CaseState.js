import React from "react";
import { CasesContext, ChatContext, SocketContext, UserContext } from "./Contexts";
import axios from "axios";
import { server } from "./env";

import { progresses, statuses } from "./env";
import Text from "./Text";

export default function CaseState({ c, state, disabled, style }) {
    const { user } = React.useContext(UserContext);

    const { socket } = React.useContext(SocketContext);
    const { cases, updateCases } = React.useContext(CasesContext);

    const [status, setStatus] = React.useState();
    const [progress, setProgress] = React.useState();

    React.useEffect(() => {
        setProgress(cases[c.caseid].progress);
        setStatus(cases[c.caseid].status);
    }, [c.caseid]);

    const caseChange = (e) => {
        if (e.caseid == c.caseid) {
            if (e.status) {
                setStatus(e.status);
                updateCases(e);
            }
            if (e.progress) {
                setProgress(e.progress);
                updateCases(e);
            }
        }
    };

    React.useEffect(() => {
        if (socket) {
            socket.on("casestate", caseChange);
            return () => {
                socket.off("casestate", caseChange);
            };
        }
    }, [socket, c.caseid]);

    if (progress && status) {
        if (state == "status") {
            if (disabled)
                return (
                    <div style={{ whiteSpace: "nowrap", backgroundColor: statuses[`${status}`], fontWeight: 700, color: "white", borderRadius: "0.375rem", padding: 3, ...style }}>
                        <Text>{status}</Text>
                    </div>
                );
            if (!user.admin) {
                return (
                    <select
                        value={status}
                        style={{ whiteSpace: "nowrap", cursor: disabled ? "normal" : "pointer", backgroundColor: statuses[`${status}`], color: "white", fontWeight: 700, justifySelf: "flex-start", width: "auto", padding: 3, ...style }}
                        // defaultValue={status}
                        onChange={(e) => {
                            setStatus(e.target.value);
                            // setChatsHistory((prevState) => ({ ...prevState, [c.caseid]: { ...prevState[c.caseid], status: e.target.value } }));

                            updateCases(c, "status", e.target.value);
                            // updateChatsHistory(c, "status", e.target.value, "caseDetails");

                            axios.post(`${server}/updatecase/${c.caseid}`, { status: e.target.value });
                        }}
                    >
                        {Object.keys(statuses).map((s, idx) => (
                            <option style={{ backgroundColor: "white" }} value={s} key={idx}>
                                {Text({ children: s })}
                            </option>
                        ))}
                    </select>
                );
            } else {
                return (
                    <div style={{ whiteSpace: "nowrap", backgroundColor: statuses[`${status}`], fontWeight: 700, color: "white", borderRadius: "0.375rem", padding: 3, ...style }}>
                        <Text>{status}</Text>
                    </div>
                );
            }
        } else {
            if (disabled)
                return (
                    <div style={{ whiteSpace: "nowrap", backgroundColor: progresses[`${progress}`], fontWeight: 700, color: "white", borderRadius: "0.375rem", padding: 3, ...style }}>
                        <Text>{progress}</Text>
                    </div>
                );
            if (user.admin) {
                return (
                    <select
                        value={progress}
                        style={{ whiteSpace: "nowrap", cursor: disabled ? "normal" : "pointer", backgroundColor: progresses[`${progress}`], color: "white", fontWeight: 700, justifySelf: "flex-start", width: "auto", padding: 3, ...style }}
                        // defaultValue={progress}
                        onChange={(e) => {
                            setProgress(e.target.value);
                            // console.log("select" + c.caseid + e.target.value);
                            updateCases(c, "progress", e.target.value);
                            // updateChatsHistory(c, "progress", e.target.value, "caseDetails");

                            axios.post(`${server}/updatecase/${c.caseid}`, { progress: e.target.value });
                        }}
                    >
                        {Object.keys(progresses).map((s, idx) => (
                            <option style={{ backgroundColor: "white" }} value={s} key={idx}>
                                {Text({ children: s })}
                            </option>
                        ))}
                    </select>
                );
            } else {
                return (
                    <div style={{ whiteSpace: "nowrap", backgroundColor: progresses[`${progress}`], fontWeight: 700, color: "white", borderRadius: "0.375rem", padding: 3, ...style }}>
                        <Text>{progress}</Text>
                    </div>
                );
            }
        }
    }
}
