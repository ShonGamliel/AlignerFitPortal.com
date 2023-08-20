import { ChatContext, SocketContext, UserContext } from "../../../Contexts";
import { v4 as uuidv4 } from "uuid";
import "./ChatInput.css";
import React from "react";
import Text from "../../../Text";
import axios from "axios";
import { server } from "../../../env";

export default function ChatInput() {
    const { socket } = React.useContext(SocketContext);
    const { chat, setChatsHistory, updateChatsHistory, messagesFromDB, newMessages, setNewMessages } = React.useContext(ChatContext);
    const [message, setMessage] = React.useState("");
    const { user } = React.useContext(UserContext);

    const [sendFile, setSendFile] = React.useState();

    const sendMessage = (text, isfile = undefined) => {
        if (!text) text = message.trimStart().trimEnd();
        let messageToSend = { caseid: chat.caseid, text: text, date: Date.now(), from: user._id, userid: chat.userid, status: 0, messageid: uuidv4(), type: chat.type, isfile: isfile };
        setNewMessages((prevState) => ({ ...prevState, [messageToSend.messageid]: messageToSend }));
        updateChatsHistory(messageToSend);
        socket.emit("chat", messageToSend);
    };

    const qrRef = React.useRef();
    const [qrMenu, setQRMenu] = React.useState();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setSendFile(file);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (qrRef.current && !qrRef.current.contains(event.target)) {
                setQRMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    let quickReplies = user.admin
        ? ["Please Check the Treatment", "Please Check the Case", "Please Approve the Case", "Please check the photos/videos", "Waiting for Update", "The case is shipped"]
        : ["Send To Manufacturing", "Please Do a Revision", "Thanks, its good", "Doctor need to confirm", "You can Ship it", "Put the case in hold", "Waiting for patient Payment", "Need to call", "Waiting for Update"];

    return (
        <>
            {sendFile ? (
                <div style={{ display: "flex", padding: 5, gap: 10 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512" fill="grey">
                        <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                    </svg>
                    <div>{sendFile.name}</div>
                    <div
                        style={{ fontWeight: 700, cursor: "pointer" }}
                        onClick={() => {
                            const formData = new FormData();
                            const filename = `${chat.caseid}-${Date.now()}-${sendFile.name}`;
                            formData.append("file", sendFile, filename);
                            formData.append("body_type", "chatfile");

                            axios.post(`${server}/chatfile`, formData).then((res) => {
                                sendMessage(`files/${encodeURIComponent(filename)}`, true);
                                setSendFile(false);
                            });
                        }}
                    >
                        <Text>Send</Text>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div id="chat-input" style={{ borderRadius: 15 }}>
                {/* <div className="chat-input-button" id="chat-input-mic">
                <svg viewBox="0 0 24 24" height="24" width="24" x="0px" y="0px">
                    <path
                        fill="#54656f"
                        d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"
                    ></path>
                </svg>
            </div> */}
                <div
                    className="chat-input-button"
                    id="chat-input-send"
                    onClick={() => {
                        let text = message.trimStart().trimEnd();
                        if (text.length != 0) {
                            if (chat) {
                                setMessage("");
                                document.getElementById("chat-input-text").innerHTML = "";
                                sendMessage();
                            }
                        }
                    }}
                >
                    <svg viewBox="0 0 24 24" height="24" width="24" x="0px" y="0px">
                        <path fill="#54656f" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
                    </svg>
                </div>
                <div style={{ cursor: "pointer", position: "relative" }}>
                    <div style={{ fontSize: 14, textAlign: "center", fontWeight: 600 }} onClick={() => setQRMenu(true)}>
                        <Text>Quick Reply</Text>
                    </div>
                    {qrMenu ? (
                        <div
                            onClick={() => setQRMenu(false)}
                            className="select-multiple-list"
                            ref={qrRef}
                            style={{ zIndex: 9999, position: "absolute", bottom: 0, transform: "translateY(-30%)", display: "flex", flexDirection: "column", backgroundColor: "white", padding: "5px 10px 5px 10px", width: "300px" }}
                        >
                            {quickReplies.map((q, idx) => (
                                <div className="select-multiple-list-item" key={idx} onClick={() => sendMessage(q)}>
                                    <Text>{q}</Text>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div
                    id="chat-input-text"
                    contentEditable="true"
                    placeholder={Text({ children: "Type message" })}
                    onInput={(e) => {
                        setMessage(e.target.innerText);
                    }}
                    onKeyDown={(e) => {
                        if (e.code == "Enter" && !e.shiftKey) {
                            let text = message.trimStart().trimEnd();
                            if (text.length != 0) {
                                if (chat) {
                                    e.preventDefault();
                                    setMessage("");
                                    e.target.innerHTML = "";
                                    sendMessage();
                                }
                            }
                        }
                        if (e.target.innerText.length == 0) {
                            e.target.innerHTML = "";
                            //send typing false
                            socket.emit("typing", { caseid: chat.caseid, typing: false, from: user._id });
                        } else {
                            if (e.target.innerText.length % 5 == 0 || e.target.innerText.length == 1) {
                                //send typing true
                                socket.emit("typing", { caseid: chat.caseid, typing: true, from: user._id });
                            }
                        }
                    }}
                />
                <div id="chat-input-buttons">
                    <input type="file" id="chat-file-button" style={{ display: "none" }} onChange={handleFileUpload} />
                    <label htmlFor="chat-file-button" className="chat-input-button">
                        <svg viewBox="0 0 24 24" height="24" width="24" x="0px" y="0px">
                            <path
                                fill="#54656f"
                                d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z"
                            ></path>
                        </svg>
                    </label>
                </div>
            </div>
        </>
    );
}
