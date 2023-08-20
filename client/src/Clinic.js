import axios from "axios";
import "./Clinic.css";
import colors from "./colors";
import React from "react";
import { CasesContext, LanguageContext, UserContext } from "./Contexts";
import { server } from "./env";
import NewClinic from "./NewClinic";
import Text from "./Text";

export default function Clinic() {
    const { user } = React.useContext(UserContext);
    const { clinics, setClinics } = React.useContext(CasesContext);
    const [adding, setAdding] = React.useState(false);

    const { lang } = React.useContext(LanguageContext);

    return (
        <div className="dialog center" id="clinics-box" style={{ backgroundColor: colors.containerBackground }}>
            {adding ? (
                <NewClinic setAdding={setAdding} />
            ) : (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                            <div style={{ fontWeight: 700, fontSize: 18, color: "#daa520", textDecoration: "underline" }}>
                                <Text>Clinics</Text>
                            </div>
                            ({Object.values(clinics).length})
                        </div>

                        <div className="btn" style={{ alignSelf: "center", fontSize: 18, justifyContent: "center", display: "flex", padding: 10, borderRadius: 5 }} onClick={() => setAdding(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </div>
                    </div>
                    {Object.values(clinics).length ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <Text>Name</Text>
                                    </th>
                                    <th>
                                        <Text>Country</Text>
                                    </th>
                                    <th>
                                        <Text>City</Text>
                                    </th>
                                    <th>
                                        <Text>Address</Text>
                                    </th>
                                    <th>
                                        <Text>Phone</Text>
                                    </th>
                                    <th>
                                        <Text>Email</Text>
                                    </th>
                                    <th>
                                        <Text>Postcode</Text>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(clinics).map((c, idx) => (
                                    <tr key={idx} style={{ cursor: "pointer" }}>
                                        <td>{c.name}</td>
                                        <td>{c.country}</td>
                                        <td>{c.city}</td>
                                        <td>{c.address}</td>
                                        <td>{c.phone}</td>
                                        <td>{c.email}</td>
                                        <td>{c.postcode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div style={{ fontWeight: 600 }}>
                            <Text>No clinics yet</Text>,{" "}
                            <span style={{ color: "#daa520", cursor: "pointer", fontWeight: 700, textDecoration: "underline" }} onClick={() => setAdding(true)}>
                                <Text>Add now</Text>
                            </span>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
