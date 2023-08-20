import colors from "./colors";
import { ChatContext, LanguageContext, NavContext, UserContext } from "./Contexts";
import "./NavBar.css";
import React from "react";
import axios from "axios";
import Text from "./Text";
import { parseTimestamp, server } from "./env";

const flags = {
    he: "https://www.worldometers.info/img/flags/is-flag.gif",
    en: "https://www.worldometers.info/img/flags/us-flag.gif",
    ch: "https://www.worldometers.info/img/flags/ch-flag.gif",
    tu: "https://www.worldometers.info/img/flags/tu-flag.gif",
    fr: "https://www.worldometers.info/img/flags/fr-flag.gif",
    ru: "https://www.worldometers.info/img/flags/rs-flag.gif",
};

const langNames = {
    he: "Hebrew",
    en: "English",
    ch: "Chinese",
    tu: "Turkish",
    fr: "France",
    ru: "Russian",
};

export default function NavBar() {
    const { user } = React.useContext(UserContext);
    const { setScreen, setPortal, portal, screen, setWatchCase } = React.useContext(NavContext);
    const [fullnameList, setFullnameList] = React.useState(false);
    const { lang, setLang } = React.useContext(LanguageContext);
    const { chatsHistory, setChat } = React.useContext(ChatContext);

    const casesMenuRef = React.useRef();
    const chatMenuRef = React.useRef();
    const [casesMenu, setCasesMenu] = React.useState();
    const [chatMenu, setChatMenu] = React.useState();

    const [notiList, setNotiList] = React.useState();
    const notiListRef = React.useRef();

    const [langMenu, setLangMenu] = React.useState();
    const langMenuRef = React.useRef();

    const shippingMenuRef = React.useRef();
    const [shippingMenu, setShippingMenu] = React.useState();

    React.useEffect(() => {
        const handleClickOutsidelang = (event) => {
            if (langMenuRef.current) {
                setTimeout(() => setLangMenu(false), 500);
            }
        };

        document.addEventListener("mousedown", handleClickOutsidelang);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsidelang);
        };
    }, []);

    React.useEffect(() => {
        const handleClickOutsideNoti = (event) => {
            if (notiListRef.current) {
                setTimeout(() => setNotiList(false), 500);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideNoti);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideNoti);
        };
    }, []);

    React.useEffect(() => {
        const handleClickOutsideCases = (event) => {
            if (casesMenuRef.current) {
                setTimeout(() => setCasesMenu(false), 500);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideCases);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideCases);
        };
    }, []);

    React.useEffect(() => {
        const handleClickOutsideShipping = (event) => {
            if (shippingMenuRef.current) {
                setTimeout(() => setShippingMenu(false), 500);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideShipping);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideShipping);
        };
    }, []);

    React.useEffect(() => {
        const handleClickOutsideChat = (event) => {
            if (chatMenuRef.current) {
                setTimeout(() => setChatMenu(false), 500);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideChat);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideChat);
        };
    }, []);

    React.useEffect(() => {
        const handleClick = () => {
            setFullnameList(false);
        };
        if (fullnameList) {
            window.addEventListener("click", handleClick);
        } else {
            window.removeEventListener("click", handleClick);
        }

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [fullnameList]);

    return (
        <div id="navbar" style={{ backgroundColor: colors.navbar, zIndex: 999, position: "relative" }}>
            <div id="logo">
                <img src={"./images/logo_logo.png"} alt="" style={{ height: "70%" }}></img>
                {/* <div id="logo-name">AlignerFit</div> */}
                <img id="logo-name" src={"./images/logo_name.png"} alt="" style={{}}></img>
            </div>

            {user ? (
                <>
                    <div id="navbar-buttons" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                        {/* {!user.admin || (user.admin && user.admin_type == "super") ? (
                            <div
                                className="navbar-button"
                                style={{ backgroundColor: screen == "home" ? "#f5e9c6" : undefined }}
                                onClick={() => {
                                    setPortal(false);
                                    setScreen("home");
                                }}
                            >
                                <svg className="navbar-button-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                                </svg>
                                <div className="navbar-button-text">Home</div>
                            </div>
                        ) : (
                            <></>
                        )} */}

                        {user.admin && user.admin_type == "super" ? (
                            <div
                                className="navbar-button"
                                style={{ backgroundColor: screen == "requests" ? "#f5e9c6" : undefined }}
                                onClick={() => {
                                    setScreen("requests");
                                }}
                            >
                                <svg className="navbar-button-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                                </svg>
                                <div className="navbar-button-text">
                                    <Text>Requests</Text>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <div
                            className="navbar-button"
                            onClick={() => {
                                if (user.admin && user.admin_type != "super") {
                                    setScreen("cases");
                                } else {
                                    setCasesMenu(true);
                                }
                            }}
                            style={{ backgroundColor: screen == "cases" ? "#f5e9c6" : undefined }}
                        >
                            {casesMenu ? (
                                <div ref={casesMenuRef} style={{ whiteSpace: "nowrap", position: "fixed", zIndex: 999, backgroundColor: "white", transform: "translateY(80%)", boxShadow: "0 1px 10px rgba(0, 0, 0, 0.5)", borderRadius: 15, padding: 5 }}>
                                    <div
                                        className="menu-item"
                                        onClick={() => {
                                            setPortal("clearaligners");
                                            setScreen("cases");
                                            setWatchCase(false);
                                            // setCasesMenu(false);
                                        }}
                                    >
                                        <Text>Clear Aligners</Text>
                                    </div>
                                    <div
                                        className="menu-item"
                                        onClick={() => {
                                            setPortal("prosthesis");
                                            setScreen("cases");
                                            setWatchCase(false);
                                            // setCasesMenu(false);
                                        }}
                                    >
                                        <Text>Prosthesis</Text>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            <svg className="navbar-button-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
                            </svg>
                            <div className="navbar-button-text">
                                <Text>Cases</Text>
                            </div>
                        </div>

                        {user.admin || user.email == "biotechsmile@gmail.com" ? (
                            <div
                                className="navbar-button"
                                onClick={() => {
                                    if (user.admin && user.admin_type != "super") {
                                        setScreen("shipping");
                                    } else {
                                        setShippingMenu(true);
                                    }
                                }}
                                style={{ backgroundColor: screen == "shipping" ? "#f5e9c6" : undefined }}
                            >
                                {shippingMenu ? (
                                    <div ref={shippingMenuRef} style={{ whiteSpace: "nowrap", position: "fixed", zIndex: 999, backgroundColor: "white", transform: "translateY(80%)", boxShadow: "0 1px 10px rgba(0, 0, 0, 0.5)", borderRadius: 15, padding: 5 }}>
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                setPortal("clearaligners");
                                                setScreen("shipping");
                                                setWatchCase(false);
                                                // setCasesMenu(false);
                                            }}
                                        >
                                            <Text>Clear Aligners</Text>
                                        </div>
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                setPortal("prosthesis");
                                                setScreen("shipping");
                                                setWatchCase(false);
                                                // setCasesMenu(false);
                                            }}
                                        >
                                            <Text>Prosthesis</Text>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                                <svg className="navbar-button-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="#D4AD44">
                                    <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                                </svg>
                                <div className="navbar-button-text">
                                    <Text>Shipping</Text>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        {user.admin ? (
                            <></>
                        ) : (
                            <div className="navbar-button" id="navbar-button-clinic" onClick={() => setScreen("clinic")} style={{ backgroundColor: screen == "clinic" ? "#f5e9c6" : undefined }}>
                                <svg className="navbar-button-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24zM272 192c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320h48c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H320V208c0-8.8-7.2-16-16-16H272z" />
                                </svg>
                                <div className="navbar-button-text">
                                    <Text>Clinics</Text>
                                </div>
                            </div>
                        )}

                        <div
                            className="navbar-button"
                            id="navbar-button-chat"
                            onClick={() => {
                                if (user.admin && user.admin_type != "super") {
                                    setScreen("chat");
                                } else {
                                    setChatMenu(true);
                                }
                            }}
                            style={{ backgroundColor: screen == "chat" ? "#f5e9c6" : undefined, position: "relative", zIndex: 999 }}
                        >
                            {chatMenu ? (
                                <div ref={chatMenuRef} style={{ whiteSpace: "nowrap", position: "fixed", zIndex: 999, backgroundColor: "white", transform: "translateY(80%)", boxShadow: "0 1px 10px rgba(0, 0, 0, 0.5)", borderRadius: 15, padding: 5 }}>
                                    <div
                                        className="menu-item"
                                        onClick={() => {
                                            // console.log("sadasd")
                                            setPortal("clearaligners");
                                            setScreen("chat");
                                            setWatchCase(false);
                                            // setChatMenu(false);
                                        }}
                                    >
                                        <Text>Clear Aligners</Text>
                                    </div>
                                    <div
                                        className="menu-item"
                                        onClick={() => {
                                            setPortal("prosthesis");
                                            setScreen("chat");
                                            setWatchCase(false);
                                            // setChatMenu(false);
                                        }}
                                    >
                                        <Text>Prosthesis</Text>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            <svg className="navbar-button-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                            </svg>
                            <div className="navbar-button-text">
                                <Text>Chat</Text>
                            </div>
                        </div>

                        {/* <div className="navbar-button" id="navbar-button-contact" onClick={() => setScreen("contact")} style={{ backgroundColor: screen == "contact" ? "#f5e9c6" : undefined }}>
                            <svg className="navbar-button-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                            </svg>
                            <div className="navbar-button-text">Contact</div>
                        </div> */}
                    </div>
                </>
            ) : (
                <></>
            )}
            <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
                {Object.values(chatsHistory).filter((c) => c.status != 3 && user._id != c.from).length > 0 ? (
                    <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setNotiList(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#D4AD44">
                            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                        </svg>
                        <div style={{ backgroundColor: "red", position: "absolute", top: -7, left: -7, borderRadius: "50%", width: 15, height: 15, display: "flex", justifyContent: "center", alignItems: "center", fontSize: 13, color: "white", fontWeight: 700 }}>
                            {Object.values(chatsHistory).filter((c) => c.status != 3 && user._id != c.from).length}
                        </div>
                        {notiList ? (
                            <div style={{ padding: 5, width: 200, backgroundColor: colors.containerBackground, top: "150%", left: "50%", transform: "translateX(-50%)", position: "absolute", borderRadius: 15, maxHeight: 700, overflowY: "auto" }}>
                                {Object.values(chatsHistory)
                                    .filter((c) => c.status != 3 && user._id != c.from)
                                    .map((c, idx) => (
                                        <div
                                            ref={notiListRef}
                                            className="notification-list-item"
                                            key={idx}
                                            style={{ borderRadius: 10, padding: 4 }}
                                            onClick={() => {
                                                setChat(c);
                                                setScreen("chat");
                                            }}
                                        >
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div style={{ fontSize: 12, fontWeight: 600 }}>{c.caseid}</div>
                                                <div style={{ fontSize: 11, fontWeight: 600 }}>{parseTimestamp(c.date, "chatpreview")}</div>
                                            </div>
                                            <div style={{ fontSize: 10, color: "grey" }}>{c.text}</div>
                                        </div>
                                    ))}
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                ) : (
                    <></>
                )}
                <div style={{ fontWeight: "600", cursor: "pointer", position: "relative", display: "flex", alignItems: "center", gap: 5 }} onClick={() => setLangMenu(true)}>
                    <Text>{langNames[lang]}</Text>
                    <img src={flags[lang]} alt="" style={{ width: 25, height: 20 }} />
                    {langMenu ? (
                        <div
                            ref={langMenuRef}
                            style={{
                                padding: 5,
                                backgroundColor: colors.containerBackground,
                                top: "150%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                position: "absolute",
                                borderRadius: 15,
                                maxHeight: 700,
                                overflowY: "auto",
                                display: "flex",
                                flexDirection: "column",
                                gap: 15,
                            }}
                        >
                            {Object.entries(langNames).map((l, idx) => (
                                <div
                                    className="notification-list-item"
                                    key={idx}
                                    style={{ display: "flex", alignItems: "center", gap: 5, justifyContent: "space-between", borderRadius: 10, padding: 4 }}
                                    onClick={() => {
                                        setLang(l[0]);
                                        if (user) axios.post(`${server}/setlang`, { lang: l[0] }).then(() => {});
                                    }}
                                >
                                    <Text>{l[1]}</Text>
                                    <img src={flags[l[0]]} alt="" style={{ width: 25, height: 20 }} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                {!user ? (
                    <></>
                ) : (
                    <div id="navbar-fullname" onClick={() => setTimeout(() => setFullnameList(!fullnameList), 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="grey">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#D4AD44" d="m11.998 17l7-8h-14z" />
                        </svg>
                        {fullnameList ? (
                            <div id="navbar-fullname-list">
                                <div className="navbar-fullname-list-item" id="fullname-list-clinic" onClick={() => setScreen("clinic")}>
                                    <svg className="navbar-fullname-list-item" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24zM272 192c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320h48c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H320V208c0-8.8-7.2-16-16-16H272z" />
                                    </svg>
                                    <div className="navbar-fullname-list-item-text">
                                        <Text>Clinics</Text>
                                    </div>
                                </div>

                                <div className="navbar-fullname-list-item" id="fullname-list-chat" onClick={() => setScreen("chat")}>
                                    <svg className="navbar-fullname-list-item" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                        <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                                    </svg>
                                    <div className="navbar-fullname-list-item-text">
                                        <Text>Chat</Text>
                                    </div>
                                </div>

                                <div className="navbar-fullname-list-item" onClick={() => setScreen("passwordreset")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                        <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                                    </svg>
                                    <div className="navbar-fullname-list-item-text">
                                        <Text>Change Password</Text>
                                    </div>
                                </div>

                                {/* <div className="navbar-fullname-list-item" id="fullname-list-contact" onClick={() => setScreen("contact")}>
                                    <svg className="navbar-fullname-list-item-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                        <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                                    </svg>
                                    <div className="navbar-fullname-list-item-text">Contact</div>
                                </div> */}

                                <div
                                    className="navbar-fullname-list-item"
                                    onClick={() => {
                                        axios.post(`${server}/logout`).catch();
                                    }}
                                >
                                    <svg className="navbar-fullname-list-item-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                    </svg>

                                    <div className="navbar-fullname-list-item-text">
                                        <Text>Logout</Text>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                )}
            </div>
            <img id="float-logo" src="./images/logo.png" alt="" />
        </div>
    );
}
