import React from "react";
import colors from "../colors";
import NewCaseButtons from "../NewCaseButtons";
import Select from "../Selectables/Select";
let teethsColors = ["A1", "A1.5", "A2", "A2.5", "A3", "A3.5", "A4", "B1", "B1.5", "B2", "B2.5", "B3", "B3.5", "B4", "C1", "C1.5", "C2", "C2.5", "C3", "C3.5", "C4", "D1", "D1.5", "D2", "D2.5", "D3", "D3.5", "D4", "BL1", "BL2", "BL3", "BL4"];
let translucencys = ["LT", "MT", "HT"];

export default function NewCaseStage4({ setStage, setAdding, setCaseDetail, newCase, setNewCase }) {
    const [color, setColor] = React.useState(newCase.get("color")?.color);
    const [translucency, setTranslucency] = React.useState(newCase.get("color")?.translucency);

    const [colorError, setColorError] = React.useState();

    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: 19, fontWeight: 700 }}>Step 4: Teeth Color</div>
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
            <Select title={"Color"} error={colorError} seterror={setColorError} options={teethsColors} placeholder={"Select Teeth's Color"} setter={setColor} getter={color} />
            <Select title={"Translucency"} options={translucencys} placeholder={"Select Translucency - Optional"} setter={setTranslucency} getter={translucency} error={colorError} seterror={setColorError} />

            <NewCaseButtons
                antibuttontext={"Back"}
                probuttontext={"Next"}
                onclickanti={() => {
                    setCaseDetail("color", { color: color, translucency: translucency });
                    setStage(3);
                }}
                onclickpro={() => {
                    if (!color?.length) return setColorError(true);
                    setCaseDetail("color", { color: color, translucency: translucency });
                    setStage(5);
                }}
            />
        </div>
    );
}
