import React from "react";

import FileInput from "../FileInput";
import colors from "../colors";
import Text from "../Text";
import NewCaseButtons from "../NewCaseButtons";

export default function AlignerNewCaseStage3({ setStage, setAdding, setCaseDetail, newCase, setNewCase }) {
    const [fileError1, setFileError1] = React.useState();
    const [fileError2, setFileError2] = React.useState();
    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ fontSize: 19, fontWeight: 700 }}>
                    <Text>Step</Text> 3: <Text>Documentation</Text>
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
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", gap: 5 }}>
                        <div style={{ fontWeight: 600, fontSize: 16 }}>
                            <Text>Scans</Text>
                        </div>
                        <div style={{ color: "grey" }}>
                            {" "}
                            - <Text>Required</Text>
                        </div>
                    </div>
                    <FileInput id={"new-case-scan-upperjaw"} placeholder={"Digital Scan (Upper Jaw)"} icon={"./images/teethdocument.png"} updater={setCaseDetail} mapInfo={newCase} error={fileError1} seterror={setFileError1} />
                    <FileInput id={"new-case-scan-lowerjaw"} placeholder={"Digital Scan (Lower Jaw)"} icon={"./images/teethdocument.png"} updater={setCaseDetail} mapInfo={newCase} error={fileError2} seterror={setFileError2} />
                    <FileInput id={"new-case-img-upperjaw"} placeholder={"Upper Jaw Scan Image (Optional)"} updater={setCaseDetail} mapInfo={newCase} />
                    <FileInput id={"new-case-img-lowerjaw"} placeholder={"Lower Jaw Scan Image (Optional)"} updater={setCaseDetail} mapInfo={newCase} />
                    <div style={{ display: "flex", gap: 5 }}>
                        <div style={{ fontWeight: 600, fontSize: 16 }}>
                            <Text>Intraoral Images</Text>
                        </div>
                        <div style={{ color: "grey" }}>
                            {" "}
                            - <Text>Optional</Text>
                        </div>
                    </div>
                    <FileInput id={"aligner-new-case-intraoral-image-1"} placeholder={"Intraoral Image 1"} icon={"./images/intra1.png"} updater={setCaseDetail} mapInfo={newCase} />
                    <FileInput id={"aligner-new-case-intraoral-image-2"} placeholder={"Intraoral Image 2"} icon={"./images/intra2.png"} updater={setCaseDetail} mapInfo={newCase} />
                    <FileInput id={"aligner-new-case-intraoral-image-3"} placeholder={"Intraoral Image 3"} icon={"./images/intra3.png"} updater={setCaseDetail} mapInfo={newCase} />
                    <FileInput id={"aligner-new-case-intraoral-image-4"} placeholder={"Intraoral Image 4"} icon={"./images/intra4.png"} updater={setCaseDetail} mapInfo={newCase} />
                    <FileInput id={"aligner-new-case-intraoral-image-1"} placeholder={"Intraoral Image 5"} icon={"./images/intra6.png"} updater={setCaseDetail} mapInfo={newCase} />
                    <FileInput id={"aligner-new-case-intraoral-image-2"} placeholder={"Intraoral Image 6"} icon={"./images/intra7.png"} updater={setCaseDetail} mapInfo={newCase} />
                    <FileInput id={"aligner-new-case-intraoral-image-3"} placeholder={"Intraoral Image 7"} icon={"./images/intra8.png"} updater={setCaseDetail} mapInfo={newCase} />
                    <FileInput id={"aligner-new-case-intraoral-image-4"} placeholder={"Intraoral Image 8"} icon={"./images/intra9.png"} updater={setCaseDetail} mapInfo={newCase} />
                    <div style={{ display: "flex", gap: 5 }}>
                        <div style={{ fontWeight: 600, fontSize: 16 }}>
                            <Text>Panoramic Image</Text>
                        </div>
                        <div style={{ color: "grey" }}>
                            {" "}
                            - <Text>Optional</Text>
                        </div>
                    </div>
                    <FileInput id={"aligner-new-case-panoramic-image"} placeholder={"Panoramic Image"} icon={"./images/pano.jpg"} updater={setCaseDetail} mapInfo={newCase} />
                    <div style={{ display: "flex", gap: 5 }}>
                        <div style={{ fontWeight: 600, fontSize: 16 }}>
                            <Text>Sefalometric Image</Text>
                        </div>
                        <div style={{ color: "grey" }}>
                            {" "}
                            - <Text>Optional</Text>
                        </div>
                    </div>
                    <FileInput id={"aligner-new-case-sefalometric-image-1"} placeholder={"Sefalometric Image"} icon={"./images/sefa.png"} updater={setCaseDetail} mapInfo={newCase} />
                </div>
            </div>
            <NewCaseButtons
                antibuttontext={"Back"}
                probuttontext={"Next"}
                onclickanti={() => {
                    setStage(2);
                }}
                onclickpro={() => {
                    if (!newCase.has("Digital Scan (Upper Jaw)")) return setFileError1(true);
                    if (!newCase.has("Digital Scan (Lower Jaw)")) return setFileError2(true);

                    setStage(4);
                }}
            />
        </div>
    );
}
