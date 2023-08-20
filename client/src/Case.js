import React from "react";
import axios from "axios";
import { server } from "./env";
import colors from "./colors";
import { CasesContext, ChatContext, NavContext, UserContext } from "./Contexts";
import CaseState from "./CaseState";
import Text from "./Text";

export default function Case() {
    const { chat, setChat, setChatsHistory } = React.useContext(ChatContext);
    const { setWatchCase, setScreen, watchCase } = React.useContext(NavContext);
    const { cases, updateCases, clinics } = React.useContext(CasesContext);
    const { setUser, user } = React.useContext(UserContext);

    const [sureDelete, setSureDelete] = React.useState();

    return (
        // <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
            {sureDelete ? (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column", gap: 15, alignItems: "center", justifyContent: "center", padding: 20, borderRadius: 15 }}>
                    <div style={{ color: "white", fontWeight: 700 }}>
                        <Text>You are going to delete case</Text> {watchCase.caseid}, <Text>Are You Sure</Text>?
                    </div>
                    <div style={{ display: "flex", width: "100%", gap: 20, marginTop: 10 }}>
                        <div
                            className="btn"
                            style={{ backgroundColor: "#ff5252", alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12 }}
                            onClick={() => {
                                setSureDelete(false);
                            }}
                        >
                            <Text>No</Text>
                        </div>
                        <div
                            className="btn"
                            style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12 }}
                            onClick={() => {
                                axios.post(`${server}/deletecase`, { caseid: watchCase.caseid }).then((res) => {
                                    setWatchCase(false);
                                });
                            }}
                        >
                            <Text>Yes</Text>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: 5, fontWeight: 600, fontSize: 19 }}>
                        <Text>Case</Text> <div style={{ color: "#d4ad44", fontWeight: 700 }}>{watchCase.caseid}</div>
                    </div>
                    <div style={{ display: "flex", gap: 20 }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.5em"
                            viewBox="0 0 448 512"
                            fill="red"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setSureDelete(true);
                            }}
                        >
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1.5em"
                            viewBox="0 0 640 512"
                            fill="#f5981c"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                setChat(watchCase);
                                setScreen("chat");
                            }}
                        >
                            <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
                        </svg>
                    </div>
                </div>
                <div className="inner-dialog" style={{ overflow: "auto" }}>
                    <div style={{ display: "flex", gap: 5, flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: 15 }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                                <div style={{ color: "#d4ad44", fontWeight: 600, fontSize: 17 }}>
                                    <Text>Restoration</Text>
                                </div>
                                <img src={`${server}/cases/${watchCase.caseid}/teeths.png`} alt="" style={{ width: 200, borderRadius: 15 }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ color: "#d4ad44", fontWeight: 600, fontSize: 17 }}>
                                        <Text>Clinic</Text>
                                    </div>
                                    <div style={{ color: "grey" }}>{clinics[watchCase.clinicid].name}</div>
                                    <div style={{ fontWeight: 600, fontSize: 14 }}>
                                        Doctor: <span style={{ color: "grey" }}>{watchCase.doctor}</span>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ color: "#d4ad44", fontWeight: 600, fontSize: 17 }}>
                                        <Text>Patient</Text>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 14, display: "flex", gap: 5 }}>
                                            <Text>Name</Text>: <div style={{ color: "grey" }}>{watchCase.patient_name}</div>
                                        </div>
                                        <div style={{ fontSize: 14, display: "flex", gap: 5 }}>
                                            <Text>Gender</Text>: <div style={{ color: "grey" }}>{watchCase.patient_gender}</div>
                                        </div>
                                        <div style={{ fontSize: 14, display: "flex", gap: 5 }}>
                                            <Text>Age</Text>: <div style={{ color: "grey" }}>{watchCase.patient_age}</div>
                                        </div>
                                        <div style={{ fontSize: 14, display: "flex", gap: 5 }}>
                                            <Text>Phone</Text>: <div style={{ color: "grey" }}>{watchCase.patient_phone}</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ color: "#d4ad44", fontWeight: 600, fontSize: 17 }}>
                                        <Text>Color</Text>
                                    </div>
                                    <div style={{ fontSize: 14, color: "grey" }}>{watchCase.teeths_color}</div>
                                </div>
                                {watchCase.teeths_translucency && watchCase.teeths_translucency != "undefined" ? (
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div style={{ color: "#d4ad44", fontWeight: 600, fontSize: 17 }}>
                                            <Text>Translucency</Text>
                                        </div>
                                        <div style={{ fontSize: 14, color: "grey" }}>{watchCase.teeths_translucency}</div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                        <Text>Status</Text>
                                    </div>
                                    <CaseState c={watchCase} state={"status"} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600 }}>
                                        <Text>Progress</Text>
                                    </div>
                                    <CaseState c={watchCase} state={"progress"} />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                                {user.downloadedcases.includes(watchCase.caseid) ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#d4ad44">
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                    </svg>
                                ) : (
                                    <></>
                                )}
                                <a
                                    style={{ color: "#d4ad44", fontWeight: 600, fontSize: 14, cursor: "pointer", textDecoration: "underline" }}
                                    href={`${server}/files/${watchCase.caseid}.zip`}
                                    target="_blank"
                                    onClick={() => {
                                        axios.post(`${server}/downloadcase`, { caseid: watchCase.caseid }).then(() => {
                                            setUser((prevState) => ({ ...prevState, downloadedcases: [...prevState?.downloadedcases, watchCase.caseid] }));
                                        });
                                    }}
                                >
                                    <Text>Download All Files</Text>
                                </a>
                            </div>

                            {watchCase.note?.length ? (
                                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                                    <div style={{ color: "#d4ad44", fontWeight: 600, fontSize: 17 }}>
                                        <Text>Additional Notes</Text>
                                    </div>
                                    <div style={{ textAlign: "left", wordBreak: "break-word", wordWrap: "break-word" }} className="input-text additional-notes pre-wrapped">
                                        {watchCase.note ? watchCase.note : ""}
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", width: "100%", gap: 20 }}>
                <div className="btn" style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12 }} onClick={() => setWatchCase(false)}>
                    <Text>Back</Text>
                </div>
            </div>
        </div>
    );
}
