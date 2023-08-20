import { NavContext } from "./Contexts";
import colors from "./colors";
import React from "react";
import Text from "./Text";

export default function Home({ setPortal, setScreen }) {
    const { setWatchCase } = React.useContext(NavContext);
    React.useEffect(() => {
        setWatchCase(false);
    }, []);
    return (
        <div className="dialog center" id="home" style={{ backgroundColor: colors.containerBackground }}>
            <img src="./images/logo.png" style={{ marginBottom: -30, marginTop: -20 }} alt="" />
            <div style={{ fontSize: 26, color: "#daa520", fontWeight: 600 }}>
                <Text>Choose Portal</Text>
            </div>
            <div
                className="btn"
                style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12, whiteSpace: "nowrap" }}
                onClick={() => {
                    setPortal("prosthesis");
                    setScreen("cases");
                }}
            >
                <Text>Prosthesis</Text>
            </div>
            <div
                className="btn"
                style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12, whiteSpace: "nowrap" }}
                onClick={() => {
                    setPortal("clearaligners");
                    setScreen("cases");
                }}
            >
                <Text>Clear Aligners</Text>
            </div>
        </div>
    );
}
