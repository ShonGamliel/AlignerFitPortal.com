import React from "react";
import { CasesContext, NavContext, UserContext } from "../Contexts";
import colors from "../colors";
import Select from "../Selectables/Select";
import Input from "../Selectables/Input";
import NewCaseButtons from "../NewCaseButtons";
import Text from "../Text";

export default function NewCaseStage1({ setStage, setAdding, setCaseDetail, newCase, setNewCase }) {
    const { setScreen } = React.useContext(NavContext);
    const { clinics } = React.useContext(CasesContext);
    const [doctor, setDoctor] = React.useState(newCase.get("doctor"));
    const [doctorError, setDoctorError] = React.useState();

    const [clinicError, setClinicError] = React.useState();

    if (Object.values(clinics).length) {
        return (
            <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 19, fontWeight: 700 }}>
                        <Text>Step</Text> 1: <Text>Clinic</Text>
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

                <Select placeholder={"Choose case's clinic"} updater={setCaseDetail} updaterkey={"clinic"} mapInfo={newCase} options={Object.values(clinics)} optionkey={"name"} error={clinicError} seterror={setClinicError} />
                <Input placeholder={"Doctor's name"} setter={setDoctor} getter={doctor} error={doctorError} seterror={setDoctorError} />

                <NewCaseButtons
                    antibuttontext={"Abort"}
                    probuttontext={"Next"}
                    onclickanti={() => {
                        setNewCase(new Map());
                        setAdding(false);
                        setStage(1);
                    }}
                    onclickpro={() => {
                        if (!newCase.has("clinic")) return setClinicError(true);
                        if (!doctor?.length) return setDoctorError(true);
                        setCaseDetail("doctor", doctor);
                        setStage(2);
                    }}
                />
            </div>
        );
    } else {
        return (
            <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
                <div style={{ fontSize: 17, fontWeight: 600 }}>
                    <Text>You have not defined your clinics yet</Text>
                </div>
                <div style={{ cursor: "pointer", fontWeight: 700, textDecoration: "underline" }} onClick={() => setScreen("clinic")}>
                    <Text>Add now</Text>
                </div>
                <NewCaseButtons
                    disablepro={true}
                    antibuttontext={"Cancle"}
                    onclickanti={() => {
                        setAdding(false);
                        setStage(1);
                    }}
                />
            </div>
        );
    }
}
