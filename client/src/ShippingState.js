import React from "react";
import { CasesContext, ChatContext, SocketContext, UserContext } from "./Contexts";
import axios from "axios";
import { server, shippingstatuses } from "./env";

import Text from "./Text";

export default function ShippingState({ c, disabled, style }) {
    const { user } = React.useContext(UserContext);

    const { socket } = React.useContext(SocketContext);
    const { cases, updateCases } = React.useContext(CasesContext);

    const [shippingstatus, setShippingstatus] = React.useState();

    React.useEffect(() => {
        setShippingstatus(cases[c.caseid].shippingstatus);
    }, [c.caseid]);

    const shippingstatusChange = (e) => {
        if (e.caseid == c.caseid) {
            setShippingstatus(e.shippingstatus);
            updateCases(e);
        }
    };

    React.useEffect(() => {
        if (socket) {
            socket.on("casestate", shippingstatusChange);
            return () => {
                socket.off("casestate", shippingstatusChange);
            };
        }
    }, [socket, c.caseid]);

    if (shippingstatus) {
        if (disabled)
            return (
                <div style={{ whiteSpace: "nowrap", backgroundColor: shippingstatuses[`${shippingstatus}`], fontWeight: 700, color: "white", borderRadius: "0.375rem", padding: 3, ...style }}>
                    <Text>{shippingstatus}</Text>{" "}
                </div>
            );
        return (
            <select
                value={shippingstatus}
                style={{ whiteSpace: "nowrap", cursor: disabled ? "normal" : "pointer", backgroundColor: shippingstatuses[`${shippingstatus}`], color: "white", fontWeight: 700, justifySelf: "flex-start", width: "auto", padding: 3, ...style }}
                onChange={(e) => {
                    setShippingstatus(e.target.value);

                    updateCases(c, "shippingstatus", e.target.value);

                    axios.post(`${server}/updatecase/${c.caseid}`, { shippingstatus: e.target.value });
                }}
            >
                {Object.keys(shippingstatuses).map((s, idx) => (
                    <option style={{ backgroundColor: "white" }} value={s} key={idx}>
                        {Text({ children: s })}
                    </option>
                ))}
            </select>
        );
    }
}
