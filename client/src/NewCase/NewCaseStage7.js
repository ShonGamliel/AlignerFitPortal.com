import React from "react";
import colors from "../colors";
import NewCaseButtons from "../NewCaseButtons";
import Text from "../Text";
export default function NewCaseStage7({ setStage, setCaseDetail, newCase, setAdding, setNewCase }) {
    const [note, setNote] = React.useState(newCase.get("note"));

    let localNote = newCase.get("note");
    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: 19, fontWeight: 700 }}>
                    <Text>Step</Text> 7: <Text>Additional Notes</Text>
                    <span style={{ color: "#a9a9a9" }}>
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
            <div className="inner-dialog">
                <div contentEditable style={{ wordBreak: "break-word", wordWrap: "break-word" }} type="text" placeholder="Message" className="input-text additional-notes" onInput={(e) => setNote(e.target.innerText)}>
                    {localNote}
                </div>
            </div>
            <NewCaseButtons
                antibuttontext={"Back"}
                probuttontext={"Next"}
                onclickanti={() => {
                    setCaseDetail("note", note);
                    setStage(6);
                }}
                onclickpro={() => {
                    setCaseDetail("note", note);
                    setStage(8);
                }}
            />
        </div>
    );
}
