import "./Chat.css";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import ChatTop from "./ChatTop";

import React from "react";

export default function Chat() {
  return (
    <div id="chat">
      <ChatTop />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
