import React from "react";
import colors from "../colors";
import NewCaseButtons from "../NewCaseButtons";
import Checkbox from "../Selectables/Checkbox";
import Radio from "../Selectables/Radio";
import Text from "../Text";

export default function AlignerNewCaseStage4({ setStage, setAdding, setCaseDetail, newCase, setNewCase }) {
    const [conditions, setConditions] = React.useState(newCase.get("notes")?.conditions || []);
    const [patientStatus, setPatientStatus] = React.useState(newCase.get("notes")?.patient_status);
    const [requests, setRequests] = React.useState(newCase.get("notes")?.requests || []);
    const [additionals, setAdditionals] = React.useState(newCase.get("notes")?.additionals || []);
    const [material, setMaterial] = React.useState(newCase.get("notes")?.material);
    const [jaw, setJaw] = React.useState(newCase.get("notes")?.jaw);
    const [note, setNote] = React.useState(newCase.get("notes")?.note);

    const [conditions2, setConditions2] = React.useState(newCase.get("notes")?.conditions2 || []);
    const [patientStatus2, setPatientStatus2] = React.useState(newCase.get("notes")?.patient_status2);
    const [requests2, setRequests2] = React.useState(newCase.get("notes")?.requests2 || []);
    const [additionals2, setAdditionals2] = React.useState(newCase.get("notes")?.additionals2 || []);
    const [material2, setMaterial2] = React.useState(newCase.get("notes")?.material2);
    const [jaw2, setJaw2] = React.useState(newCase.get("notes")?.jaw2);
    const [note2, setNote2] = React.useState(newCase.get("notes")?.note2);

    const [conditions3, setConditions3] = React.useState(newCase.get("notes")?.conditions3 || []);
    const [patientStatus3, setPatientStatus3] = React.useState(newCase.get("notes")?.patient_status3);
    const [requests3, setRequests3] = React.useState(newCase.get("notes")?.requests3 || []);
    const [additionals3, setAdditionals3] = React.useState(newCase.get("notes")?.additionals3 || []);
    const [material3, setMaterial3] = React.useState(newCase.get("notes")?.material3);
    const [jaw3, setJaw3] = React.useState(newCase.get("notes")?.jaw3);
    const [note3, setNote3] = React.useState(newCase.get("notes")?.note3);

    const localNote = {
        note: newCase.get("notes")?.note,
        note2: newCase.get("notes")?.note2,
        note3: newCase.get("notes")?.note3,
    };

    const [plans, setPlans] = React.useState(newCase.get("notes")?.plans || [1]);
    const [currentPlan, setCurrentPlan] = React.useState(newCase.get("notes")?.currentPlan || 1);

    const [jawError, setJawError] = React.useState();
    const [requestsError, setRequestsError] = React.useState();
    const [jawError2, setJawError2] = React.useState();
    const [requestsError2, setRequestsError2] = React.useState();
    const [jawError3, setJawError3] = React.useState();
    const [requestsError3, setRequestsError3] = React.useState();

    const addPlan = () => {
        for (let p of [1, 2, 3]) {
            if (!plans.includes(p)) {
                setPlans([...plans, p]);
                setCurrentPlan(p);
                return;
            }
        }
    };

    const removePlan = () => {
        setPlans((prevState) => {
            let newArray = prevState.filter((i) => i != currentPlan);
            setCurrentPlan(newArray[0]);
            return newArray;
        });
    };

    const Requests = ["Fix Bite", "Fix Contacts", "Close Gap", "Align Teeths", "Steel Retainer", "Splint Retainer"];
    const Additionals = ["Attachments", "IPR", "Elastics", "Miniscrews", "Extraction Wisdom"];
    const Conditions = ["Open Bite", "Cross Bite", "Over Bite", "Under Bite", "Spacing", "Crowding"];
    const Jaw = ["Upper Jaw", "Lower Jaw", "Both Jaws"];
    const ClassStatus = ["Class 1", "Class 2", "Class 3"];
    const Materials = ["CA Pro+", "Zendura FLX", "Duran"];

    const PlansButtons = () => {
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: 15, alignSelf: "center" }}>
                {plans.length < 3 ? (
                    <div className="btn" style={{ alignSelf: "center", alignItems: "center", gap: 5, paddingTop: 2, paddingBottom: 2, paddingRight: 6, paddingLeft: 4, fontSize: 18, justifyContent: "center", display: "flex", borderRadius: 5 }} onClick={() => {}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white">
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                        </svg>
                        <div
                            style={{ color: "white" }}
                            onClick={() => {
                                addPlan();
                            }}
                        >
                            <Text>Add Plan</Text>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {plans.length > 1 ? (
                    <div
                        className="btn"
                        style={{ backgroundColor: "#ff5252", alignSelf: "center", alignItems: "center", gap: 5, paddingTop: 2, paddingBottom: 2, paddingRight: 6, paddingLeft: 4, fontSize: 18, justifyContent: "center", display: "flex", borderRadius: 5 }}
                        onClick={() => {}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="white" style={{ cursor: "pointer" }} onClick={() => {}}>
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                        </svg>
                        <div
                            style={{ color: "white" }}
                            onClick={() => {
                                removePlan();
                            }}
                        >
                            <Text>Remove Plan</Text>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        );
    };

    const backupDetails = () => {
        setCaseDetail("notes", {
            requests: requests,
            conditions: conditions,
            patient_status: patientStatus,
            note: note,
            additionals: additionals,
            material: material,
            jaw: jaw,

            requests2: requests2,
            conditions2: conditions2,
            patient_status2: patientStatus2,
            note2: note2,
            additionals2: additionals2,
            material2: material2,
            jaw2: jaw2,

            requests3: requests3,
            conditions3: conditions3,
            patient_status3: patientStatus3,
            note3: note3,
            additionals3: additionals3,
            material3: material3,
            jaw3: jaw3,

            plans: plans,
            currentPlan: currentPlan,
        });
    };

    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 19, fontWeight: 700 }}>
                        <Text>Step</Text> 4: <Text>Case Details</Text>
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
                {plans.length > 1 ? (
                    <div style={{ display: "flex", gap: 30 }}>
                        <div style={{ fontWeight: 700 }}>
                            <Text>Plans</Text>:
                        </div>
                        <div style={{ display: "flex", gap: 30 }}>
                            {plans
                                .sort((a, b) => a - b)
                                .map((p, idx) => (
                                    <div key={idx} style={{ fontWeight: currentPlan == p ? 800 : 600, textDecoration: currentPlan == p ? "underline" : undefined, cursor: "pointer" }} onClick={() => setCurrentPlan(p)}>
                                        {p}
                                    </div>
                                ))}
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                <div className="inner-dialog" style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                    <div style={{ display: "flex", gap: 35 }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <Radio
                                error={currentPlan == 1 ? jawError : currentPlan == 2 ? jawError2 : currentPlan == 3 ? jawError3 : undefined}
                                seterror={currentPlan == 1 ? setJawError : currentPlan == 2 ? setJawError2 : currentPlan == 3 ? setJawError3 : undefined}
                                title={"Jaw"}
                                options={Jaw}
                                setter={currentPlan == 1 ? setJaw : currentPlan == 2 ? setJaw2 : currentPlan == 3 ? setJaw3 : undefined}
                                getter={currentPlan == 1 ? jaw : currentPlan == 2 ? jaw2 : currentPlan == 3 ? jaw3 : undefined}
                            />
                            <Checkbox
                                title={"Conditions"}
                                options={Conditions}
                                setter={currentPlan == 1 ? setConditions : currentPlan == 2 ? setConditions2 : currentPlan == 3 ? setConditions3 : undefined}
                                getter={currentPlan == 1 ? conditions : currentPlan == 2 ? conditions2 : currentPlan == 3 ? conditions3 : undefined}
                            />
                            <Radio
                                title={"Class Status"}
                                options={ClassStatus}
                                setter={currentPlan == 1 ? setPatientStatus : currentPlan == 2 ? setPatientStatus2 : currentPlan == 3 ? setPatientStatus3 : undefined}
                                getter={currentPlan == 1 ? patientStatus : currentPlan == 2 ? patientStatus2 : currentPlan == 3 ? patientStatus3 : undefined}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <Checkbox
                                error={currentPlan == 1 ? requestsError : currentPlan == 2 ? requestsError2 : currentPlan == 3 ? requestsError3 : undefined}
                                seterror={currentPlan == 1 ? setRequestsError : currentPlan == 2 ? setRequestsError2 : currentPlan == 3 ? setRequestsError3 : undefined}
                                title={"Requests"}
                                options={Requests}
                                setter={currentPlan == 1 ? setRequests : currentPlan == 2 ? setRequests2 : currentPlan == 3 ? setRequests3 : undefined}
                                getter={currentPlan == 1 ? requests : currentPlan == 2 ? requests2 : currentPlan == 3 ? requests3 : undefined}
                            />
                            <Checkbox
                                title={"Additionals"}
                                options={Additionals}
                                setter={currentPlan == 1 ? setAdditionals : currentPlan == 2 ? setAdditionals2 : currentPlan == 3 ? setAdditionals3 : undefined}
                                getter={currentPlan == 1 ? additionals : currentPlan == 2 ? additionals2 : currentPlan == 3 ? additionals3 : undefined}
                            />
                            <Radio
                                title={"Material"}
                                options={Materials}
                                setter={currentPlan == 1 ? setMaterial : currentPlan == 2 ? setMaterial2 : currentPlan == 3 ? setMaterial3 : undefined}
                                getter={currentPlan == 1 ? material : currentPlan == 2 ? material2 : currentPlan == 3 ? material3 : undefined}
                            />
                        </div>
                        <PlansButtons />
                    </div>

                    <div>
                        <div style={{ fontWeight: 600, fontSize: 16 }}>
                            <Text>Notes</Text>:
                        </div>
                        <div
                            contentEditable
                            style={{ wordBreak: "break-word", wordWrap: "break-word" }}
                            className="input-text additional-notes"
                            onInput={(e) => (currentPlan == 1 ? setNote(e.target.innerText) : currentPlan == 2 ? setNote2(e.target.innerText) : currentPlan == 3 ? setNote3(e.target.innerText) : undefined)}
                        >
                            {currentPlan == 1 ? localNote.note : currentPlan == 2 ? localNote.note2 : currentPlan == 3 ? localNote.note3 : undefined}
                        </div>
                    </div>
                </div>

                <NewCaseButtons
                    antibuttontext={"Back"}
                    probuttontext={"Next"}
                    onclickanti={() => {
                        backupDetails();
                        setStage(3);
                    }}
                    onclickpro={() => {
                        for (let i of plans) {
                            if (i == 1) {
                                if (!jaw?.length) {
                                    setJawError(true);
                                    setCurrentPlan(1);
                                    return;
                                }
                                if (!requests?.length) {
                                    setRequestsError(true);
                                    setCurrentPlan(1);
                                    return;
                                }
                            }
                            if (i == 2) {
                                if (!jaw2?.length) {
                                    setJawError2(true);
                                    setCurrentPlan(2);
                                    return;
                                }
                                if (!requests2?.length) {
                                    setRequestsError2(true);
                                    setCurrentPlan(2);
                                    return;
                                }
                            }
                            if (i == 3) {
                                if (!jaw3?.length) {
                                    setJawError3(true);
                                    setCurrentPlan(3);
                                    return;
                                }
                                if (!requests3?.length) {
                                    setRequestsError3(true);
                                    setCurrentPlan(3);
                                    return;
                                }
                            }
                        }
                        backupDetails();
                        setStage(5);
                    }}
                />
            </div>
        </div>
    );
}
