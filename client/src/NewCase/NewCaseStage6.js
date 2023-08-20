import React from "react";
import colors from "../colors";
import FileInput from "../FileInput";
import NewCaseButtons from "../NewCaseButtons";
import Text from "../Text";
export default function NewCaseStage6({ setStage, setAdding, setCaseDetail, newCase, setNewCase }) {
    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: 19, fontWeight: 700 }}>
                    <Text>Step</Text> 6: <Text>Face Photos</Text>
                    <span style={{ color: "#a9a9a9" }}>
                        {" "}
                        - <Text>Optional</Text>
                    </span>
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
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <FileInput id={"new-case-big-smile"} placeholder={"Big smile extraoral photo (full face)"} icon={"./images/bigsmileextraoral.png"} updater={setCaseDetail} mapInfo={newCase} />
                <FileInput id={"new-case-smile"} placeholder={"Smile with retractors extraoral photo (full face)"} icon={"./images/smilewithretractors.png"} updater={setCaseDetail} mapInfo={newCase} />
                <FileInput id={"new-case-front-view"} placeholder={"Front View IntraOral Photo"} icon={"./images/frontview.png"} updater={setCaseDetail} mapInfo={newCase} />
                <FileInput id={"new-case-right-side"} placeholder={"45º Right Side Intraoral Photo"} icon={"./images/45right.png"} updater={setCaseDetail} mapInfo={newCase} />
                <FileInput id={"new-case-left-side"} placeholder={"45º Left Side Intraoral Photo"} icon={"./images/45left.png"} updater={setCaseDetail} mapInfo={newCase} />
            </div>

            <NewCaseButtons
                antibuttontext={"Back"}
                probuttontext={"Next"}
                onclickanti={() => {
                    setStage(5);
                }}
                onclickpro={() => {
                    setStage(7);
                }}
            />
        </div>
    );
}
