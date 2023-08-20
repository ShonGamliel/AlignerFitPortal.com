import Chat from "./left-panel-chat/Chat";
import "./LeftPanel.css";

import React from "react";

export default function LeftPanel() {
  return (
    <div id="left-panel" style={{ borderRadius: 15 }}>
      <Chat />
    </div>
  );
}
