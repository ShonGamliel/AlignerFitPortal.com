import React from "react";
import Text from "../Text";
import colors from "../colors";
import Input from "../Selectables/Input";
import Radio from "../Selectables/Radio";
import NewCaseButtons from "../NewCaseButtons";

export default function NewCaseStage2({ setStage, setAdding, setCaseDetail, newCase, setNewCase }) {
    const [firstname, setFirstName] = React.useState(newCase.get("patient")?.firstname);
    const [lastname, setLastName] = React.useState(newCase.get("patient")?.lastname);

    const [age, setAge] = React.useState(newCase.get("patient")?.age);
    const [gender, setGender] = React.useState(newCase.get("patient")?.gender);
    const [phone, setPhone] = React.useState(newCase.get("patient")?.phone);

    const [firstNameError, setFirstNameError] = React.useState();
    const [lastNameError, setLastNameError] = React.useState();
    const [ageError, setAgeError] = React.useState();
    const [genderError, setGenderError] = React.useState();
    const [phoneError, setPhoneError] = React.useState();

    const genders = ["Male", "Female", "Other"];

    return (
        <div className="dialog center" id="cases-dialog" style={{ backgroundColor: colors.containerBackground }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 19, fontWeight: 700 }}>
                        <Text>Step</Text> 2: <Text>Patient's Information</Text>
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
                <Input placeholder={"Patient's First Name"} setter={setFirstName} getter={firstname} error={firstNameError} seterror={setFirstNameError} />
                <Input placeholder={"Patient's Last Name"} setter={setLastName} getter={lastname} error={lastNameError} seterror={setLastNameError} />
                <Input placeholder={"Patient's Age"} setter={setAge} getter={age} error={ageError} seterror={setAgeError} />
                <Input placeholder={"Patient's Phone"} setter={setPhone} getter={phone} error={phoneError} seterror={setPhoneError} />

                <Radio options={genders} error={genderError} seterror={setGenderError} setter={setGender} getter={gender} title={"Gender"} column={false} />

                <NewCaseButtons
                    antibuttontext={"Back"}
                    probuttontext={"Next"}
                    onclickanti={() => {
                        setCaseDetail("patient", { firstname: firstname, lastname: lastname, age: age, gender: gender });

                        setStage(1);
                    }}
                    onclickpro={() => {
                        if (!firstname?.length) return setFirstNameError(true);
                        if (!lastname?.length) return setLastNameError(true);
                        if (!age?.length || !/^[0-9]+$/.test(age) || parseInt(age) > 99 || parseInt(age) < 10) return setAgeError(true);
                        if (!gender?.length) return setGenderError(true);
                        // if (!phone?.length) return setPhoneError(true);

                        setCaseDetail("patient", { firstname: firstname, lastname: lastname, age: age, gender: gender, phone: phone });
                        setStage(3);
                    }}
                />
            </div>
        </div>
    );
}
