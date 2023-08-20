import React from "react";
import html2canvas from "html2canvas";

import colors from "../colors";
import NewCaseButtons from "../NewCaseButtons";
import Teeths from "../Teeths";
import Text from "../Text";

import FullCrown from "../RestorationsIcons/FullCrown";
import ImplantCrown from "../RestorationsIcons/ImplantCrown";
import Lay from "../RestorationsIcons/Lay";
import PFMCrown from "../RestorationsIcons/PFMCrown";
import ProvisionalEggshell from "../RestorationsIcons/ProvisionalEggshell";
import Splints from "../RestorationsIcons/Splints";
import Totevet from "../RestorationsIcons/Totevet";
import Veener from "../RestorationsIcons/Veener";

export default function NewCaseStage3({ setAdding, setStage, setCaseDetail, newCase, setNewCase }) {
    const upperJaw = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
    const lowerJaw = [38, 37, 36, 35, 34, 33, 32, 31, 41, 42, 43, 44, 45, 46, 47, 48];
    const [mode, setMode] = React.useState({});
    const [list, setList] = React.useState();
    const [listStage, setListStage] = React.useState();
    const [step3Error, setStep3Error] = React.useState();

    const RTs = {
        "Provisional Eggshell": {
            name: "Provisional Eggshell",
            icon: <ProvisionalEggshell />,
            materials: ["PMMA", "3D Printed", "Acrylic"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        Mockup: {
            name: "Mockup",
            icon: <img src="./images/Mockup.jpg" height="49.6" width="63.8" style={{ margin: 5, borderRadius: 15 }} alt="" />,
            materials: ["Mockup"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        "PFM Crown": {
            name: "PFM Crown",
            icon: <PFMCrown />,
            materials: ["Feldspathic - Porcelanin Ceramic", "Lithium Disilicate", "Zirconia Multilayer", "PMMA", "3D Printed"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        "Full Crown": {
            name: "Full Crown",
            icon: <FullCrown />,
            materials: ["Feldspathic - Porcelanin Ceramic", "Lithium Disilicate", "Zirconia Multilayer", "PMMA", "3D Printed", "Acrylic"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        Pontic: {
            name: "Pontic",
            icon: <img src="./images/pontic.png" height="49.6" width="63.8" style={{ margin: 5, borderRadius: 15 }} alt="" />,
            materials: ["Missing Tooth"],
            modes: ["Unit"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        Onlay: {
            name: "Onlay",
            icon: <Lay />,
            materials: ["Feldspathic - Porcelanin Ceramic", "Lithium Disilicate", "Zirconia Multilayer", "PMMA", "3D Printed"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [18, 17, 16, 15, 14, 28, 27, 26, 25, 24, 34, 35, 36, 37, 38, 44, 45, 46, 47, 48],
        },
        Inlay: {
            name: "Inlay",
            icon: <Lay />,
            materials: ["Feldspathic - Porcelanin Ceramic", "Lithium Disilicate", "Zirconia Multilayer", "PMMA", "3D Printed"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [18, 17, 16, 15, 14, 28, 27, 26, 25, 24, 34, 35, 36, 37, 38, 44, 45, 46, 47, 48],
        },
        "Implant Crown": {
            name: "Implant Crown",
            icon: <ImplantCrown />,
            materials: ["Feldspathic - Porcelanin Ceramic", "Lithium Disilicate", "Zirconia Multilayer", "PMMA", "3D Printed"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        Veneer: {
            name: "Veneer",
            icon: <Veener />,
            materials: ["Feldspathic - Porcelanin Ceramic", "Lithium Disilicate", "Zirconia Multilayer", "PMMA", "3D Printed", "Acrylic"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        Splints: {
            name: "Splints",
            icon: <Splints />,
            materials: ["Retainer", "Night Guard", "Whitening Guard"],
            modes: ["Upper Jaw", "Lower Jaw", "Both Jaws"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        "Full Dentures": {
            name: "Full Dentures",
            icon: <Totevet />,
            materials: ["3D Printed", "Acrylic"],
            modes: ["Upper Jaw", "Lower Jaw", "Both Jaws"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
        Valpast: {
            name: "Valpast",
            icon: <Totevet />,
            materials: ["3D Printed", "Acrylic"],
            modes: ["Bridge", "Unit"],
            supportedTeeths: [11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48],
        },
    };

    const [teeths, setTeeths] = React.useState(newCase.get("teeths")?.teeths ? newCase.get("teeths").teeths : {});
    const updateTeeths = (number, object = {}, remove = false) => {
        setTeeths((prevState) => {
            if (remove) {
                let tempState = { ...prevState };
                delete tempState[number];
                return tempState;
            } else {
                return { ...prevState, [number]: { ...prevState[number], ...object, number: number } };
            }
        });
    };

    const [bridges, setBridges] = React.useState({});
    const [bridgeNumber, setBridgeNumber] = React.useState(0);

    const isBridgeOK = (number, bridge) => {
        if (!bridge?.length) return true;
        let jaw = upperJaw.includes(bridge[0]) ? [...upperJaw] : [...lowerJaw];
        let index = jaw.findIndex((n) => n == number);
        if (index == -1) return false;
        for (let i of bridge) {
            let iindex = jaw.findIndex((n) => n == i);
            if (iindex - 1 == index || iindex + 1 == index) return true;
        }
        return false;
    };

    const willBridgeOK = (number, bridge) => {
        let index = bridge.findIndex((n) => n == number);
        if (index == bridge.length - 1 || index == 0) return true;
        return false;
    };

    const updateBridges = (number, remove = false) => {
        setBridges((prevState) => {
            if (remove) {
                let oldArray = prevState[teeths[number].bridgeNumber] || [];
                oldArray = oldArray.filter((n) => n != number);
                return { ...prevState, [teeths[number].bridgeNumber]: [...oldArray] };
            } else {
                let oldArray = prevState[bridgeNumber] || [];
                return { ...prevState, [bridgeNumber]: [...oldArray, number] };
            }
        });
    };

    const addTeeth = (number) => {
        if (mode.mode == "Bridge") {
            if (isBridgeOK(number, bridges[bridgeNumber])) {
                updateBridges(number);
                updateTeeths(number, { ...mode, bridgeNumber: bridgeNumber });
            }
        } else {
            updateTeeths(number, mode);
        }
    };

    const handleTeethClick = (number) => {
        if (!teeths[number]) {
            if (mode.RT == "Pontic") return;
            //tooth not exists
            if (Object.values(mode).length == 3) {
                if (RTs[mode.RT].supportedTeeths.includes(number)) {
                    // in mode
                    addTeeth(number);
                }
            }
        } else {
            //tooth exists
            if (Object.values(mode).length != 3) {
                //not in mode
                if (teeths[number].mode == "Bridge") {
                    if (willBridgeOK(number, bridges[teeths[number].bridgeNumber])) {
                        updateBridges(number, true);
                        updateTeeths(number, {}, true);
                    }
                } else {
                    updateTeeths(number, {}, true);
                }
            } else {
                //in mode
                if (mode.RT == "Pontic") {
                    if (teeths[number].mode == "Bridge") {
                        updateTeeths(number, { pontic: true });
                    }
                } else {
                    if (RTs[mode.RT].supportedTeeths.includes(number)) {
                        if (teeths[number].mode == "Bridge") {
                            if (willBridgeOK(number, bridges[teeths[number].bridgeNumber])) {
                                updateBridges(number, true);

                                if (bridgeNumber == teeths[number].bridgeNumber) {
                                    //current bridge is tooth's bridge
                                    updateTeeths(number, {}, true);
                                } else {
                                    addTeeth(number);
                                }
                            }
                        } else {
                            if (teeths[number].RT == mode.RT) {
                                updateTeeths(number, {}, true);
                            } else {
                                updateTeeths(number, mode);
                            }
                        }
                    }
                }
            }
        }
    };

    const isUpperJawFree = () => {
        for (let i of upperJaw) {
            if (teeths[i]) return false;
        }
        return true;
    };

    const isLowerJawFree = () => {
        for (let i of lowerJaw) {
            if (teeths[i]) return false;
        }
        return true;
    };

    const [arranged, setArranged] = React.useState({});
    React.useEffect(() => {
        if (Object.values(teeths).length) {
            let tempArrange = {};

            for (let i of Object.values(teeths)) {
                let old = tempArrange[i.RT] ? { ...tempArrange[i.RT] } : { name: i.RT };
                if (i.mode == "Bridge") {
                    let oldBridge = old[`Bridge${i.bridgeNumber}`] || [];
                    oldBridge.push(i.number);
                    old[`Bridge${i.bridgeNumber}`] = oldBridge;
                } else {
                    old[i.number] = [i.number];
                }

                tempArrange[i.RT] = old;

                //{"Full Crown": {
                // 11: [11], "Bridge1": [12,13,14]
                // }}
            }
            setArranged(tempArrange);
        } else {
            setArranged({});
        }
    }, [teeths]);

    const teethsContainerRef = React.useRef();
    const convertDivToImage = async (element) => {
        try {
            element.style.maxHeight = "none";

            const canvas = await html2canvas(element);
            element.style.maxHeight = "";
            return canvas.toDataURL("image/jpeg", 0.8); // Convert canvas to a JPEG image with 80% quality
        } catch (error) {
            console.error("Error converting div to image:", error);
            return null;
        }
    };

    const RTsMenuRef = React.useRef();

    React.useEffect(() => {
        const handleClickOutsideRTs = (event) => {
       
            if (RTsMenuRef.current && !RTsMenuRef.current.contains(event.target)) {
                setTimeout(() => setList(false), 500);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideRTs);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideRTs);
        };
    }, []);

    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground, transform: "translate(-50%, -50%) translateY(27px)" }}>
            {list ? (
                <div ref={RTsMenuRef} style={{ position: "fixed" }}>
                    {listStage == 1 ? (
                        <div id="new-rt">
                            {Object.values(RTs).map((r, idx) => {
                                if (r.name == "Full Dentures" || r.name == "Splints") {
                                    if (!isLowerJawFree() && !isUpperJawFree()) return;
                                }
                                if (r.name == "Pontic") {
                                    if (!Object.values(bridges).length) return;
                                }
                                return (
                                    <div
                                        key={idx}
                                        className="rt"
                                        onClick={() => {
                                            setListStage(2);
                                            setMode((prevState) => ({ ...prevState, RT: r.name }));
                                        }}
                                    >
                                        {r.icon}
                                        <div className="rt-name">
                                            <Text>{r.name}</Text>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )}
                    {listStage == 2 ? (
                        <div id="new-rt" style={{ flexDirection: "column", gap: 5 }}>
                            {RTs[mode.RT].materials.map((m, idx) => (
                                <div
                                    className="material-list-item"
                                    key={idx}
                                    onClick={() => {
                                        setListStage(3);
                                        setMode((prevState) => ({ ...prevState, material: m }));
                                    }}
                                >
                                    <Text>{m}</Text>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                    {listStage == 3 ? (
                        <div id="new-rt" style={{ flexDirection: "column", gap: 5 }}>
                            {RTs[mode.RT].modes.map((m, idx) => {
                                if (mode.RT == "Full Dentures" || mode.RT == "Splints") {
                                    if (m == "Upper Jaw" && !isUpperJawFree()) return;
                                    else if (m == "Lower Jaw" && !isLowerJawFree()) return;
                                    else if (m == "Both Jaws" && (!isLowerJawFree() || !isUpperJawFree())) return;
                                }
                                return (
                                    <div
                                        className="material-list-item"
                                        key={idx}
                                        onClick={() => {
                                            if (mode.RT == "Full Dentures" || mode.RT == "Splints") {
                                                let tempTeeths = { ...teeths };
                                                if (m == "Upper Jaw") {
                                                    for (let i of upperJaw) {
                                                        tempTeeths = { ...tempTeeths, [i]: mode };
                                                    }
                                                }
                                                if (m == "Lower Jaw") {
                                                    for (let i of lowerJaw) {
                                                        tempTeeths = { ...tempTeeths, [i]: mode };
                                                    }
                                                }
                                                if (m == "Both Jaws") {
                                                    for (let i of [...lowerJaw, ...upperJaw]) {
                                                        tempTeeths = { ...tempTeeths, [i]: mode };
                                                    }
                                                }
                                                setTeeths(tempTeeths);
                                                setList(false);
                                            } else {
                                                setList(false);
                                                setBridgeNumber(bridgeNumber + 1);
                                                setMode((prevState) => ({ ...prevState, mode: m }));
                                            }
                                        }}
                                    >
                                        <Text>{m}</Text>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <></>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <div style={{ fontSize: 19, fontWeight: 700 }}>
                    <Text>Step</Text> 3: <Text>Restoration</Text>
                </div>
                <div style={{ display: "flex", gap: 15 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", position: "absolute", right: 50 }}>
                        <div
                            style={{ textAlign: "center", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}
                            onClick={() => {
                                setTeeths({});
                            }}
                        >
                            <Text>Reset</Text>
                        </div>
                        <div
                            className="btn"
                            style={{ alignSelf: "flex-end", alignItems: "center", gap: 10, padding: 5, fontSize: 18, justifyContent: "center", display: "flex", borderRadius: 5, paddingTop: 10, paddingBottom: 10, paddingRight: 10, paddingLeft: 10 }}
                            onClick={() => {
                                setList(true);
                                setListStage(1);
                                setMode(false);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white">
                                <path d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z" />
                            </svg>
                            <div style={{ color: "white" }}>
                                <Text>Type</Text>
                            </div>
                        </div>
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
            </div>

            <div ref={teethsContainerRef} className="inner-dialog" id="odontocontainer" style={{ alignSelf: "center", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", maxHeight: "68vh" }}>
                <Teeths teeths={teeths} handleTeethClick={handleTeethClick} mode={mode} />
                {Object.values(arranged).length ? (
                    <div id="rts-now">
                        {Object.values(arranged).map((r, idx) => (
                            <React.Fragment key={idx}>
                                <div className="rts-now-title">{r.name}</div>
                                <div className="rts-now-teeths">
                                    {Object.values(r).map((t, idx) => {
                                        if (t == r.name) return;
                                        if (t.length == 1 && teeths[t[0]]) {
                                            return (
                                                <div className="rts-now-teeth" key={idx}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#d4ad44">
                                                        <path d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z" />
                                                    </svg>
                                                    <div>{t[0]}</div>

                                                    <div style={{ color: "grey" }}>{teeths[t[0]].material}</div>
                                                </div>
                                            );
                                        } else if (t.length > 1) {
                                            return (
                                                <div className="rts-now-teeth" key={idx}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#d4ad44">
                                                        <path d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z" />
                                                    </svg>
                                                    {t.map((bt, idx) => (
                                                        <div key={idx}>{bt}</div>
                                                    ))}

                                                    <div style={{ color: "grey" }}>{teeths[t[0]].material}</div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {step3Error ? (
                <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                    <Text>Restorations Types Required</Text>
                </div>
            ) : (
                <></>
            )}
            <NewCaseButtons
                antibuttontext={"Back"}
                probuttontext={"Next"}
                onclickanti={() => {
                    setMode({});
                    setTimeout(() => {
                        if (Object.values(teeths).length != 0) {
                            convertDivToImage(teethsContainerRef.current).then((img) => {
                                // console.log(img);
                                setCaseDetail("teeths", { img: img, teeths: teeths });
                                setStage(2);
                            });
                        } else {
                            setStage(2);
                        }
                    }, 100);
                }}
                onclickpro={() => {
                    setMode({});
                    setTimeout(() => {
                        if (!Object.values(teeths).length) return setStep3Error(true);
                        convertDivToImage(teethsContainerRef.current).then((img) => {
                            // console.log(img);
                            setCaseDetail("teeths", { img: img, teeths: teeths });
                            setStage(4);
                        });
                    }, 100);
                }}
            />
        </div>
    );
}
