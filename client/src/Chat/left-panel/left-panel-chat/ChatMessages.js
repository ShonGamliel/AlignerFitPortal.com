import { ChatContext } from "../../../Contexts";
import "./ChatMessages.css";
import Message from "./Message";
import React from "react";

export default function ChatMessages() {
  const chatRef = React.useRef();
  const { messagesFromDB, newMessages } = React.useContext(ChatContext);

  React.useEffect(() => {
    setTimeout(() => (chatRef.current.scrollTop = chatRef.current.scrollHeight), 10);
  }, [newMessages, messagesFromDB]);

  return (
    <div id="chat-messages" ref={chatRef}>
      {Object.values({ ...messagesFromDB, ...newMessages })
        .sort((a, b) => a.date - b.date)
        .map((m, idx) => (
          <Message key={idx} message={m} />
        ))}
    </div>
  );
}
