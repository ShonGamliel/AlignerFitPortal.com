import React from "react";
import colors from "./colors";
import { CasesContext, NavContext, UserContext } from "./Contexts";
import ShippingStage1 from "./ShippingStages/ShippingStage1";
import Text from "./Text";
import { server, shippingstatuses } from "./env";
import ShippingState from "./ShippingState";

export default function Shipping() {
    const { portal, setScreen, setWatchCase } = React.useContext(NavContext);
    const { user } = React.useContext(UserContext);

    const [adding, setAdding] = React.useState();

    const { cases } = React.useContext(CasesContext);
    const [search, setSearch] = React.useState("");

    const [arranged, setArranged] = React.useState({});

    React.useEffect(() => {
        let temp = {};
        for (let c of Object.values(cases)
            .filter((c) => c.type == portal && c.trackingnumber)
            .filter((c) => (search.length ? c.patient_name.toLowerCase().includes(search.toLowerCase()) || c.caseid.toLowerCase().includes(search.toLowerCase()) : true))) {
            if (!temp[c.trackingnumber]) {
                temp[c.trackingnumber] = { trackingnumber: c.trackingnumber, cases: [] };
            }
            temp[c.trackingnumber] = { ...temp[c.trackingnumber], cases: [...temp[c.trackingnumber].cases, c.caseid] };
        }
        setArranged(temp);
    }, [cases, portal, search]);
    return (
        <>
            {adding ? (
                <ShippingStage1 setAdding={setAdding} />
            ) : (
                <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground, width: "90%" }}>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                            <div style={{ fontWeight: 700, fontSize: 18, color: "#daa520", textDecoration: "underline" }}>
                                <Text>Shipping</Text>
                            </div>
                        </div>
                        <div style={{ fontSize: 20, fontWeight: 800, color: "#b9b9b9", userSelect: "none" }}>
                            <Text>{portal == "clearaligners" ? "clear aligners" : portal}</Text>
                        </div>
                        {!user.admin ? (
                            <div></div>
                        ) : (
                            <div
                                className="btn"
                                style={{ alignSelf: "center", alignItems: "center", gap: 5, paddingTop: 2, paddingBottom: 2, paddingRight: 6, paddingLeft: 4, fontSize: 18, justifyContent: "center", display: "flex", borderRadius: 5 }}
                                onClick={() => {
                                    setAdding(true);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white">
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                </svg>
                                <div style={{ color: "white" }}>
                                    <Text>New Shipping</Text>
                                </div>
                            </div>
                        )}
                    </div>
                    <div id="right-panel-search">
                        <div id="right-panel-search-input">
                            <div
                                id="right-panel-search-input-text"
                                contentEditable="true"
                                placeholder={Text({ children: "Search" })}
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
                    <div className="inner-dialog" style={{ overflow: "auto" }}>
                        {Object.values(cases).filter((c) => c.type == portal && c.trackingnumber).length ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            #<Text>Cases</Text>
                                        </th>
                                        <th>
                                            #<Text>Tracking Number</Text>
                                        </th>
                                        <th>
                                            <Text>Shipping Status</Text>
                                        </th>
                                        <th>
                                            <Text>Track</Text>
                                        </th>
                                        <th>
                                            <Text>Additional File</Text>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.values(arranged).map((a, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                {a.cases.map((c, idx) => (
                                                    <span
                                                        key={idx}
                                                        onClick={() => {
                                                            setWatchCase(cases[c]);
                                                            setScreen("cases");
                                                        }}
                                                    >
                                                        <span style={{ textDecoration: "underline", cursor: "pointer", fontSize: 14 }}>{c}</span>{" "}
                                                        <span style={{ color: "grey", fontSize: 12 }}>
                                                            ({cases[c].patient_name}){idx + 1 == a.cases.length ? "" : ","}{" "}
                                                        </span>
                                                    </span>
                                                ))}
                                            </td>
                                            <td>{a.trackingnumber}</td>
                                            <td>
                                                <ShippingState c={cases[a.cases[0]]} />
                                            </td>
                                            <td style={{ display: "flex", alignItems: "center", gap: 15 }}>
                                                <a href={`https://parcelsapp.com/en/tracking/${a.trackingnumber}`} target="_blank">
                                                    <img alt="" src="./images/tracking.png" style={{ width: 62 }} />
                                                </a>
                                            </td>
                                            <td>
                                                {cases[a.cases[0]].istrackingfile ? (
                                                    <a href={`${server}/files/${a.trackingnumber}_shipping_file.${cases[a.cases[0]].trackingfileextension}`} target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 384 512" fill="#d4ad44">
                                                            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                                                        </svg>
                                                    </a>
                                                ) : (
                                                    <></>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    {/* {Object.values(cases)
                                        .filter((c) => c.type == portal && c.trackingnumber)
                                        .filter((c) => (search.length ? c.patient_name.toLowerCase().includes(search.toLowerCase()) || c.caseid.toLowerCase().includes(search.toLowerCase()) : true))
                                        .map((c, idx) => (
                                            <tr key={idx}>
                                                <td>{c.caseid}</td>
                                                <td>{c.trackingnumber}</td>
                                                <td>{c.patient_name}</td>
                                                <td style={{ display: "flex", alignItems: "center" }}>
                                                    <a href={`https://parcelsapp.com/en/tracking/${c.trackingnumber}`} target="_blank">
                                                        <img alt="" src="./images/tracking.png" style={{ width: 50 }} />
                                                    </a>
                                                    {c.istrackingfile ? (
                                                        <a href={`${server}/files/${c.trackingnumber}_shipping_file.${c.trackingfileextension}`} target="_blank">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 384 512" fill="#d4ad44">
                                                                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                                                            </svg>
                                                        </a>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </td>
                                            </tr>
                                        ))} */}
                                </tbody>
                            </table>
                        ) : (
                            <div>
                                <Text>No shippings yet</Text>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
