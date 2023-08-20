import { CasesContext, NavContext } from "../Contexts";
import React from "react";
import colors from "../colors";
import Select from "../Selectables/Select";
import Input from "../Selectables/Input";
import Text from "../Text";
import NewCaseButtons from "../NewCaseButtons";
import FileInput from "../FileInput";
import axios from "axios";
import { server, progresses, statuses } from "../env";
import Loader from "../Loader";

export default function ShippingStage1({ setAdding }) {
    const { cases, updateCases } = React.useContext(CasesContext);
    const { portal } = React.useContext(NavContext);

    const [search, setSearch] = React.useState("");

    const [chosen, setChosen] = React.useState([]);

    const [caseError, setCaseError] = React.useState();
    const [trackingNumberError, setTrackingNumberError] = React.useState();

    const [trackingNumber, setTrackingNumber] = React.useState();
    const [additionalFile, setAdditionalFile] = React.useState();

    const [sending, setSending] = React.useState();

    const [menu, setMenu] = React.useState();
    const menuRef = React.useRef();

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    React.useEffect(() => {
        if (caseError) {
            setTimeout(() => {
                setCaseError(false);
            }, 2000);
        }
    }, [caseError]);

    // React.useEffect(() => {
    //     console.log(chosen.length);
    // }, [chosen]);

    if (Object.values(cases).length) {
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
                        <Text>Add/Edit Shipping</Text>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 384 512"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setAdding(false);
                        }}
                    >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>

                <div>
                    {caseError ? (
                        <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                            <Text>Required</Text>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div ref={menuRef} className="select-multiple" style={{ alignSelf: "flex-start", position: "relative" }} onClick={() => setMenu(true)}>
                        <Text>Choose cases</Text>

                        {menu ? (
                            <div className="select-multiple-list" style={{ position: "fixed", display: "flex", flexDirection: "column", backgroundColor: "white", padding: "5px 10px 5px 10px", width: "300px", overflowY: "auto", maxHeight: 400 }}>
                                <div className="select-multiple-list-seperator">
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
                                </div>
                                {Object.values(cases)
                                    .filter((c) => (search.length ? c.patient_name.toLowerCase().includes(search.toLowerCase()) || c.caseid.toLowerCase().includes(search.toLowerCase()) : true))
                                    .map((s, idx) => (
                                        <div className="select-multiple-list-item" key={idx} style={{ display: "flex", gap: 5 }}>
                                            <input
                                                type="checkbox"
                                                id={s.caseid}
                                                name={s.caseid}
                                                value={s.caseid}
                                                checked={chosen.includes(s.caseid)}
                                                onChange={(e) => (chosen.includes(s.caseid) ? setChosen(chosen.filter((i) => i != s.caseid)) : setChosen([...chosen, s.caseid]))}
                                            />
                                            <label htmlFor={s.caseid}>
                                                {s.caseid} - {s.patient_name}
                                            </label>
                                        </div>
                                    ))}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <Input placeholder={"Tracking number"} setter={setTrackingNumber} getter={trackingNumber} error={trackingNumberError} seterror={setTrackingNumberError} />
                <FileInput id={"new-shipping-file"} placeholder={"Additional File (Optional)"} setter={setAdditionalFile} getter={additionalFile} />

                <NewCaseButtons
                    antibuttontext={"Abort"}
                    probuttontext={"Submit"}
                    onclickanti={() => {
                        setAdding(false);
                    }}
                    onclickpro={() => {
                        if (!chosen.length) return setCaseError(true);
                        if (!trackingNumber?.length) return setTrackingNumberError(true);

                        setSending(true);
                        const formData = new FormData();
                        formData.append("casesids", chosen);
                        formData.append("trackingnumber", trackingNumber);
                        formData.append("istrackingfile", additionalFile ? true : false);
                        if (additionalFile) formData.append("file", additionalFile.file, `${trackingNumber}_shipping_file.${additionalFile.name.slice(additionalFile.name.lastIndexOf(".") + 1)}`);
                        if (additionalFile) formData.append("trackingfileextension", additionalFile.name.slice(additionalFile.name.lastIndexOf(".") + 1));

                        axios
                            .post(`${server}/shipping`, formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            })
                            .then((res) => {
                                // updateCases({ ...cases[caseid], trackingnumber: trackingNumber, istrackingfile: additionalFile ? true : false });
                                setSending(false);
                                setAdding(false);
                            });
                    }}
                />
            </div>
        );
    } else {
        return (
            <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
                <div style={{ fontSize: 17, fontWeight: 600 }}>
                    <Text>There are no {portal == "clearaligners" ? "clear aligners" : portal} cases yet</Text>
                </div>
                <NewCaseButtons
                    disablepro={true}
                    antibuttontext={"Cancle"}
                    onclickanti={() => {
                        setAdding(false);
                    }}
                />
            </div>
        );
    }
}
