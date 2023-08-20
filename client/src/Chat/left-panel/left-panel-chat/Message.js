import "./Message.css";
import React from "react";
import MessageStatus from "./MessageStatus";
import { SocketContext, UserContext } from "../../../Contexts";
import { parseTimestamp, server } from "../../../env";

export default function Message({ message }) {
    const { user } = React.useContext(UserContext);
    const { socket } = React.useContext(SocketContext);
    let a = user._id == message.from ? "outcome" : "income";

    React.useEffect(() => {
        if (a == "income" && message.status != 3) {
            socket.emit("chat", { ...message, status: 3 });
        }
    }, []);

    const lines = message.text.split(/\n/g); // Split by whitespace
    let parsedContent = [];
    for (let line of lines) {
        let words = line.split(/\s+/);

        for (let word of words) {
            if (word.startsWith("http://") || word.startsWith("https://") || word.startsWith("www.")) {
                parsedContent.push(
                    <a href={word} target="_blank" rel="noopener noreferrer">
                        {word}
                    </a>
                );
            } else {
                parsedContent.push(<span>{word} </span>);
            }
        }
        parsedContent.push(<br></br>);
    }

    return (
        <div className={`message ${a}`}>
            <div className="message-options">
                <svg viewBox="0 0 18 18" height="18" width="18" x="0px" y="0px">
                    <path fill="#8696a0" d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path>
                </svg>
            </div>
            {a == "outcome" ? (
                <svg viewBox="0 0 8 13" height="13" width="8" x="0px" y="0px" className="message-quote">
                    <path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path>
                    <path fill="#d9fdd3" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
                </svg>
            ) : (
                <svg viewBox="0 0 8 13" height="13" width="8" x="0px" y="0px" className="message-quote">
                    <path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path>
                    <path fill="white" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path>
                </svg>
            )}

            <div className="message-text">
                {message.isfile ? (
                    <a href={`${server}/${message.text}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: 15, alignItems: "center", fontWeight: 600, fontSize: 16, cursor: "pointer", textDecoration: "none" }}>
                        {message.text.endsWith(".jpg") || message.text.endsWith(".png") || message.text.endsWith(".jpeg") ? (
                            <img src={`${server}/${message.text}`} style={{ width: 200 }} alt="" />
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512" fill="grey">
                                    <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                                </svg>
                                {decodeURIComponent(message.text.replace(`files/`, "").split("-").slice(2).join("-"))}
                            </>
                        )}
                    </a>
                ) : (
                    <div>{parsedContent}</div>
                )}
                <div className="message-details">
                    <div className="message-time">{parseTimestamp(message.date)}</div>
                    {a == "outcome" ? <MessageStatus status={message.status} /> : <></>}
                </div>
            </div>
        </div>
    );
}
