import "./WhatsApp.css";
import RightPanel from "./right-panel/RightPanel";
import LeftPanel from "./left-panel/LeftPanel";
import React from "react";
import { ChatContext } from "../Contexts";

function WhatsApp() {
    const { chat } = React.useContext(ChatContext);

    return (
        <div id="container">
            <div id="app-container">
                <RightPanel />
                {chat ? <LeftPanel /> : <div id="left-panel-placeholder" style={{ width: "100%" }}></div>}
            </div>
        </div>
    );
}

export default WhatsApp;
