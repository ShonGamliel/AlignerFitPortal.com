import axios from "axios";
import "./App.css";
import NavBar from "./NavBar";
import Start from "./Start";
import React from "react";
import { server } from "./env";
import { io } from "socket.io-client";

import { UserContext, ChatContext, NavContext, SocketContext, CasesContext, LanguageContext } from "./Contexts";
import Contact from "./Contact";
import Home from "./Home";
import Clinic from "./Clinic";
import Cases from "./Cases";
import Chats from "./Chats";
import Loader from "./Loader";
import PasswordReset from "./PasswordReset";
import colors from "./colors";
import Text from "./Text";
import Requests from "./Requests";
import Shipping from "./Shipping";

function App() {
    const [user, setUser] = React.useState(false);
    const [ready, setReady] = React.useState(false);
    const [screen, setScreen] = React.useState("home");
    const [portal, setPortal] = React.useState(false);
    const [socket, setSocket] = React.useState(false);

    const [clinics, setClinics] = React.useState({});
    const [cases, setCases] = React.useState({});

    const [clinicsReady, setClinicsReady] = React.useState(false);
    const [casesReady, setCasesReady] = React.useState(false);

    const [appReady, setAppReady] = React.useState(false);

    const [watchCase, setWatchCase] = React.useState(false);
    const [chat, setChat] = React.useState();

    const [chatsHistory, setChatsHistory] = React.useState({});

    const [newMessages, setNewMessages] = React.useState({});
    const [messagesFromDB, setMessagesFromDB] = React.useState({});

    const [lang, setLang] = React.useState("en");

    React.useEffect(() => {
        axios.defaults.headers.common["cookies"] = document.cookie;

        axios.interceptors.response.use((res) => {
            if (res.data.authenticated) {
                setUser(res.data);
                setLang(res.data.lang);
                setScreen("home");
                setPortal(false);
                setAppReady(false);
                axios.defaults.headers.common["cookies"] = res.data.session_id;
                var farFutureDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10);
                document.cookie = `connect_sid=${res.data.session_id}; expires=` + farFutureDate.toUTCString() + "; path=/";
            }
            if (res.data.logout) {
                setUser(false);
                setScreen("home");
                setPortal(false);
                document.cookie = "connect_sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                axios.defaults.headers.common["cookies"] = document.cookie;
            }
            return res;
        });
    }, []);

    React.useEffect(() => {
        axios.post(`${server}/user`).then((res) => {
            setUser(res.data);
            if (!res.data) setAppReady(true);
            if (res.data.admin && res.data.admin_type != "super") {
                setScreen("chat");
                setPortal(res.data.admin_type);
            }
            if (res.data) {
                setLang(res.data.lang);
            }
            setReady(true);
            // console.log(res.data);
        });
    }, []);

    // React.useEffect(() => {
    //     if (user) setLang(user.lang);
    // }, [user]);

    React.useEffect(() => {
        if (ready && user) {
            const socketio = io(server, {
                query: {
                    userid: user.admin ? `admin` : user._id,
                },
            });
            setSocket(socketio);

            return () => {
                socketio.disconnect();
            };
        }
    }, [user, ready]);

    const updateChatsHistory = (message, key = undefined, value = undefined, innerobject = undefined, remove = false) => {
        setChatsHistory((prevState) => {
            if (remove) {
                let tempState = { ...prevState };
                delete tempState[message.caseid];
                return tempState;
            } else {
                if (key) {
                    if (innerobject) {
                        return {
                            ...prevState,
                            [message.caseid]: {
                                ...prevState[message.caseid],
                                [innerobject]: {
                                    ...prevState[message.caseid][innerobject],
                                    [key]: value,
                                },
                            },
                        };
                    } else {
                        return {
                            ...prevState,
                            [message.caseid]: {
                                ...prevState[message.caseid],
                                [key]: value,
                            },
                        };
                    }
                } else {
                    return {
                        ...prevState,
                        [message.caseid]: { ...prevState[message.caseid], ...message },
                    };
                }
            }
        });
    };

    React.useEffect(() => {
        if (user && !clinicsReady) {
            axios.post(`${server}/clinics`, { userid: user.admin ? undefined : user._id, all: user.admin ? true : undefined }).then((res) => {
                const ms = {};
                res.data.forEach((m) => {
                    if (m._id) {
                        ms[m._id] = { ...m };
                    }
                });
                setClinics(ms);
                setClinicsReady(true);
            });
        }
    }, [user, clinicsReady]);

    React.useEffect(() => {
        if (clinicsReady && !casesReady) {
            if (user.email == "biotechsmile@gmail.com") {
                axios.post(`${server}/cases`, { userid: undefined, type: "super" }).then((res) => {
                    const ms = {};
                    res.data.forEach((m) => {
                        if (m.caseid) {
                            ms[m.caseid] = { ...m };
                        }
                    });
                    setCases(ms);
                    setCasesReady(true);
                });
            } else {
                axios.post(`${server}/cases`, { userid: user.admin ? undefined : user._id, type: user.admin ? user.admin_type : undefined }).then((res) => {
                    const ms = {};
                    res.data.forEach((m) => {
                        if (m.caseid) {
                            ms[m.caseid] = { ...m };
                        }
                    });
                    setCases(ms);
                    // console.log(ms);
                    setCasesReady(true);
                });
            }
        }
    }, [clinicsReady, casesReady]);

    React.useEffect(() => {
        if (casesReady && !appReady) {
            axios.post(`${server}/chats`, { userid: user.admin ? undefined : user._id, type: user.admin ? user.admin_type : undefined }).then((res) => {
                const ms = {};
                res.data.forEach((m) => {
                    if (m.caseid && cases[m.caseid]) {
                        ms[m.caseid] = { ...m };
                    }
                });
                setChatsHistory(ms);
                setAppReady(true);
            });
        }
    }, [casesReady, appReady]);

    const updateCases = (c, key = undefined, value = undefined, remove = false) => {
        setCases((prevState) => {
            if (remove) {
                let tempState = { ...prevState };
                delete tempState[c.caseid];
                return tempState;
            } else {
                if (key) {
                    return {
                        ...prevState,
                        [c.caseid]: { ...prevState[c.caseid], [key]: value },
                    };
                } else {
                    return {
                        ...prevState,
                        [c.caseid]: { ...prevState[c.caseid], ...c },
                    };
                }
            }
        });
    };

    const updateClinics = (c, key = undefined, value = undefined, remove = false) => {
        setClinics((prevState) => {
            if (remove) {
                let tempState = { ...prevState };
                delete tempState[c._id];
                return tempState;
            } else {
                if (key) {
                    return {
                        ...prevState,
                        [c._id]: { ...prevState[c._id], [key]: value },
                    };
                } else {
                    return {
                        ...prevState,
                        [c._id]: { ...prevState[c._id], ...c },
                    };
                }
            }
        });
    };

    const handleMessage = (message) => {
        // console.log(chat, ",", message);
        let a = user._id == message.from ? "outcome" : "income";
        if (a == "income" && message.status < 2) {
            socket.emit("chat", { ...message, status: 2 });
        }
        if (chat && chat.caseid == message.caseid) {
            setNewMessages((prevState) => ({ ...prevState, [message.messageid]: message }));
            setMessagesFromDB((prevState) => {
                if (prevState.hasOwnProperty(message.messageid)) {
                    return { ...prevState, [message.messageid]: message };
                } else {
                    return prevState;
                }
            });
        }
        if (!user.admin || (user.admin && user.admin_type == "super") || (user.admin && user.admin_type == message.type)) {
            updateChatsHistory(message);
        }
    };

    const handleCaseRemove = (message) => {
        if (chat && chat.caseid == message.caseid) {
            setChat(false);
        }
        updateChatsHistory(message, undefined, undefined, undefined, true);
        updateCases(message, undefined, undefined, true);

        if (watchCase?.caseid == message.caseid) setWatchCase(false);
    };

    const handleCaseAdded = (message) => {
        if (user.admin) {
            if (user.admin_type == message.type || user.admin_type == "super") {
                updateCases(message);
            }
        } else {
            updateCases(message);
        }
    };

    const handleUserApprove = (e) => {
        if (e.approved) {
            setUser({ ...user, approved: true });
        } else {
            setUser(false);
        }
    };

    const handleCaseTracking = (e) => {
        updateCases(e);
    };

    React.useEffect(() => {
        setNewMessages({});
        setMessagesFromDB({});
        if (socket) {
            socket.on("chat", handleMessage);
            socket.on("caseremove", handleCaseRemove);
            socket.on("caseadded", handleCaseAdded);
            socket.on("userapproved", handleUserApprove);
            socket.on("casetracking", handleCaseTracking);

            return () => {
                socket.off("chat", handleMessage);
                socket.off("caseremove", handleCaseRemove);
                socket.off("caseadded", handleCaseAdded);
                socket.off("userapproved", handleUserApprove);
                socket.off("casetracking", handleCaseTracking);
            };
        }
    }, [chat, socket]);

    React.useEffect(() => {
        if (chat) {
            axios.post(`${server}/chat`, { caseid: chat.caseid }).then((res) => {
                const ms = {};
                res.data.forEach((m) => {
                    if (m.messageid) {
                        ms[m.messageid] = m;
                    }
                });
                setMessagesFromDB(ms);
            });
        }
    }, [chat]);

    if (ready) {
        return (
            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <ChatContext.Provider
                    value={{
                        chat: chat,
                        setChat: setChat,
                        chatsHistory: chatsHistory,
                        setChatsHistory: setChatsHistory,
                        newMessages: newMessages,
                        setNewMessages: setNewMessages,
                        messagesFromDB: messagesFromDB,
                        setMessagesFromDB: setMessagesFromDB,
                        updateChatsHistory: updateChatsHistory,
                    }}
                >
                    <NavContext.Provider value={{ portal: portal, setPortal: setPortal, screen: screen, setScreen: setScreen, watchCase: watchCase, setWatchCase: setWatchCase }}>
                        <SocketContext.Provider value={{ socket: socket }}>
                            <CasesContext.Provider value={{ cases: cases, setCases: setCases, updateCases: updateCases, clinics: clinics, setClinics: setClinics, updateClinics: updateClinics }}>
                                <LanguageContext.Provider value={{ lang: lang, setLang: setLang }}>
                                    {!appReady ? (
                                        <div className="dialog center" id="cases-dialog" style={{ background: "25% linear-gradient(25deg, #dac25f 50%, #d4ad44 50%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Loader />
                                        </div>
                                    ) : (
                                        <>
                                            <NavBar setScreen={setScreen} setPortal={setPortal} portal={portal} screen={screen} />
                                            {user ? (
                                                <>
                                                    {user.approved ? (
                                                        <>
                                                            {screen == "contact" ? <Contact /> : <></>}
                                                            {screen == "home" ? <Home setPortal={setPortal} setScreen={setScreen} /> : <></>}
                                                            {screen == "clinic" ? <Clinic /> : <></>}
                                                            {screen == "cases" ? <Cases /> : <></>}
                                                            {screen == "chat" ? <Chats /> : <></>}
                                                            {screen == "passwordreset" ? <PasswordReset /> : <></>}
                                                            {screen == "requests" ? <Requests /> : <></>}
                                                            {screen == "shipping" ? <Shipping /> : <></>}
                                                        </>
                                                    ) : (
                                                        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground, alignItems: "center" }}>
                                                            <div style={{ fontWeight: 700, fontSize: 18, color: "#daa520" }}>
                                                                <Text>An admin needs to approve your registeration</Text>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <Start />
                                            )}
                                        </>
                                    )}
                                </LanguageContext.Provider>
                            </CasesContext.Provider>
                        </SocketContext.Provider>
                    </NavContext.Provider>
                </ChatContext.Provider>
            </UserContext.Provider>
        );
    }
}

export default App;
