import axios from "axios";
import "./Cases.css";

import colors from "./colors";
import React, { Children } from "react";
import { CasesContext, NavContext, UserContext } from "./Contexts";
import { progresses, server } from "./env";
import CasePreview from "./CasePreview";
import Case from "./Case";
import AlignerCase from "./AlignerCase";
import StatusFilter from "./StatusFilter";
import Text from "./Text";

import NewCaseStage1 from "./NewCase/NewCaseStage1";
import NewCaseStage2 from "./NewCase/NewCaseStage2";
import NewCaseStage3 from "./NewCase/NewCaseStage3";
import NewCaseStage4 from "./NewCase/NewCaseStage4";
import NewCaseStage5 from "./NewCase/NewCaseStage5";
import NewCaseStage6 from "./NewCase/NewCaseStage6";
import NewCaseStage7 from "./NewCase/NewCaseStage7";
import NewCaseStage8 from "./NewCase/NewCaseStage8";
import AlignerNewCaseStage3 from "./AlignerNewCase/AlignerNewCaseStage3";
import AlignerNewCaseStage4 from "./AlignerNewCase/AlignerNewCaseStage4";
import AlignerNewCaseStage5 from "./AlignerNewCase/AlignerNewCaseStage5";

export default function Cases() {
    const { user } = React.useContext(UserContext);
    const { cases, setCases } = React.useContext(CasesContext);

    const { watchCase, setWatchCase, portal } = React.useContext(NavContext);

    const [filters, setFilters] = React.useState([]);

    const [search, setSearch] = React.useState("");

    const [sort, setSort] = React.useState("date");

    const [newCase, setNewCase] = React.useState(new Map());
    const [adding, setAdding] = React.useState(false);
    const [stage, setStage] = React.useState(1);

    const setCaseDetail = (key, value) => {
        // console.log(value);
        let prevState = new Map(newCase);
        prevState.set(key, value);
        setNewCase(prevState);
    };

    React.useEffect(() => {
        setAdding(false);
    }, [portal]);

    // console.log(Object.values(cases));
    return (
        <>
            {adding ? (
                portal == "prosthesis" ? (
                    <>
                        {stage == 1 ? <NewCaseStage1 setStage={setStage} setAdding={setAdding} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 2 ? <NewCaseStage2 setStage={setStage} setAdding={setAdding} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 3 ? <NewCaseStage3 setStage={setStage} setAdding={setAdding} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 4 ? <NewCaseStage4 setAdding={setAdding} setStage={setStage} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 5 ? <NewCaseStage5 setAdding={setAdding} setStage={setStage} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 6 ? <NewCaseStage6 setAdding={setAdding} setStage={setStage} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 7 ? <NewCaseStage7 setAdding={setAdding} setStage={setStage} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 8 ? <NewCaseStage8 setAdding={setAdding} setStage={setStage} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                    </>
                ) : (
                    <>
                        {stage == 1 ? <NewCaseStage1 setStage={setStage} setAdding={setAdding} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 2 ? <NewCaseStage2 setStage={setStage} setAdding={setAdding} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 3 ? <AlignerNewCaseStage3 setStage={setStage} setAdding={setAdding} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 4 ? <AlignerNewCaseStage4 setStage={setStage} setAdding={setAdding} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                        {stage == 5 ? <AlignerNewCaseStage5 setStage={setStage} setAdding={setAdding} setCaseDetail={setCaseDetail} newCase={newCase} setNewCase={setNewCase} /> : <></>}
                    </>
                )
            ) : (
                <>
                    {watchCase ? (
                        <>{watchCase.type == "prosthesis" ? <Case c={watchCase} /> : <AlignerCase c={watchCase} />}</>
                    ) : (
                        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground, width: "90%" }}>
                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                                    <div style={{ fontWeight: 700, fontSize: 18, color: "#daa520", textDecoration: "underline" }}>
                                        <Text>Cases</Text>
                                    </div>
                                    (
                                    {
                                        Object.values(cases)
                                            .filter((c) => c.type == portal)
                                            .filter((c) => (filters.length ? filters.includes(`progress_${c.progress}`) || filters.includes(`status_${c.status}`) : true)).length
                                    }
                                    )
                                </div>
                                <div style={{ fontSize: 20, fontWeight: 800, color: "#b9b9b9", userSelect: "none" }}>
                                    <Text>{portal == "clearaligners" ? "clear aligners" : portal}</Text>
                                </div>
                                {user.admin ? (
                                    <div></div>
                                ) : (
                                    <div
                                        className="btn"
                                        style={{ alignSelf: "center", alignItems: "center", gap: 5, paddingTop: 2, paddingBottom: 2, paddingRight: 6, paddingLeft: 4, fontSize: 18, justifyContent: "center", display: "flex", borderRadius: 5 }}
                                        onClick={() => {
                                            // setStage(1);
                                            setStage(7);

                                            setAdding(true);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white">
                                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                        </svg>
                                        <div style={{ color: "white" }}>
                                            <Text>New Case</Text>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div style={{ display: "flex", gap: 20 }}>
                                <StatusFilter setFilters={setFilters} filters={filters} />
                            </div>
                            <div id="right-panel-search">
                                <div id="right-panel-search-input">
                                    <div
                                        id="right-panel-search-input-text"
                                        placeholder={Text({ children: "Search" })}
                                        contentEditable="true"
                                        onInput={(e) => {
                                            setSearch(e.target.innerText);
                                        }}
                                    />
                                    <svg viewBox="0 0 24 24" height="24" width="24" x="0px" y="0px">
                                        <path
                                            fill="#54656f"
                                            d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>

                            {Object.values(cases).filter((c) => c.type == portal).length ? (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                #<Text>Case</Text>
                                            </th>
                                            <th style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                <Text>Date</Text>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" style={{ cursor: "pointer" }} onClick={() => setSort("date")}>
                                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                </svg>
                                            </th>
                                            <th>
                                                <Text>Clinic</Text>
                                            </th>
                                            <th>
                                                <Text>Patient</Text>
                                            </th>
                                            <th>
                                                <Text>Chat</Text>
                                            </th>
                                            <th>
                                                <Text>WhatsApp</Text>
                                            </th>
                                            <th>
                                                <Text>Status</Text>
                                            </th>
                                            <th style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                <Text>Progress</Text>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" style={{ cursor: "pointer" }} onClick={() => setSort("progress")}>
                                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                </svg>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody style={{}}>
                                        {sort == "date" ? (
                                            <>
                                                {Object.values(cases)
                                                    .filter((c) => (filters.length ? filters.includes(`progress_${c.progress}`) || filters.includes(`status_${c.status}`) : true))
                                                    .filter((c) => c.type == portal)
                                                    .filter((c) => (user.admin ? true : c.userid == user._id))
                                                    .filter((c) => (search.length ? c.patient_name.toLowerCase().includes(search.toLowerCase()) || c.caseid.toLowerCase().includes(search.toLowerCase()) : true))
                                                    .map((c, idx) => (
                                                        <CasePreview key={idx} c={c} />
                                                    ))}
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                        {sort == "progress" ? (
                                            <>
                                                {Object.values(cases)
                                                    .sort((a, b) => {
                                                        const aProgress = Object.keys(progresses).indexOf(cases[a.caseid].progress);
                                                        const bProgress = Object.keys(progresses).indexOf(cases[b.caseid].progress);
                                                        return aProgress - bProgress;
                                                    })
                                                    .filter((c) => (filters.length ? filters.includes(`progress_${c.progress}`) || filters.includes(`status_${c.status}`) : true))
                                                    .filter((c) => c.type == portal)
                                                    .filter((c) => (user.admin ? true : c.userid == user._id))
                                                    .filter((c) => (search.length ? c.patient_name.toLowerCase().includes(search.toLowerCase()) || c.caseid.toLowerCase().includes(search.toLowerCase()) : true))
                                                    .map((c, idx) => (
                                                        <CasePreview key={idx} c={c} />
                                                    ))}
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                    </tbody>
                                </table>
                            ) : (
                                <div>
                                    <Text>No cases yet</Text>
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </>
    );
}
