import React from "react";
import axios from "axios";
import colors from "./colors";
import Text from "./Text";
import { server } from "./env";

export default function Requests() {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        axios.post(`${server}/requests`).then((res) => {
            setUsers(res.data);
        });
    }, []);
    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground, width: "90%" }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: "#daa520", textDecoration: "underline" }}>
                <Text>Registeration Requests</Text>
            </div>
            <div className="inner-dialog" style={{ overflow: "auto" }}>
                {users.length ? (
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <Text>Email</Text>
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((c, idx) => (
                                <tr key={idx}>
                                    <td>{c.email}</td>
                                    <td style={{ display: "flex", gap: 20 }}>
                                        <div
                                            className="btn"
                                            style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", padding: 0, width: 100, cursor: "pointer" }}
                                            onClick={() => {
                                                axios.post(`${server}/request`, { userid: c._id, approve: true }).then(() => {
                                                    setUsers((users) => users.filter((u) => u._id != c._id));
                                                });
                                            }}
                                        >
                                            <Text>Accept</Text>
                                        </div>
                                        <div
                                            className="btn"
                                            style={{ backgroundColor: "#ff5252", alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", padding: 0, width: 100, cursor: "pointer" }}
                                            onClick={() => {
                                                axios.post(`${server}/request`, { userid: c._id, approve: false }).then(() => {
                                                    setUsers((users) => users.filter((u) => u._id != c._id));
                                                });
                                            }}
                                        >
                                            <Text>Ignore</Text>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div>
                        <Text>There are no registeration requests at the moment</Text>
                    </div>
                )}
            </div>
        </div>
    );
}
