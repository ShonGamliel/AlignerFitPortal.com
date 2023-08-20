import React from "react";
import axios from "axios";
import colors from "./colors";
import Text from "./Text";
import Input from "./Selectables/Input";
import NewCaseButtons from "./NewCaseButtons";
import { NavContext } from "./Contexts";
import { server } from "./env";
import Loader from "./Loader";

export default function PasswordReset() {
    const { setScreen } = React.useContext(NavContext);
    const [newPasswordCheck, setNewPasswordCheck] = React.useState();
    const [oldPassword, setOldPassword] = React.useState();
    const [newPassword, setNewPassword] = React.useState();

    const [success, setSuccess] = React.useState();

    const [newPasswordCheckError, setNewPasswordCheckError] = React.useState();
    const [oldPasswordError, setOldPasswordError] = React.useState();
    const [newPasswordError, setNewPasswordError] = React.useState();

    const [sending, setSending] = React.useState();

    return (
        <div className="dialog center" id="home" style={{ backgroundColor: colors.containerBackground }}>
            {sending ? (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column", gap: 15, alignItems: "center", justifyContent: "center", padding: 20, borderRadius: 15 }}>
                    <div style={{ color: "white", fontWeight: 700 }}>
                        <Loader />
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div style={{ fontSize: "30px", color: "#d4ad44", fontWeight: 600 }}>
                <Text>Change Password</Text>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, width: "90%" }}>
                <Input
                    getter={oldPassword}
                    setter={setOldPassword}
                    error={oldPasswordError}
                    seterror={setOldPasswordError}
                    errorText={true}
                    inputtype="password"
                    placeholder={"Old Password"}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill={"#d4ad44"}>
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                    }
                />
                <Input
                    getter={newPassword}
                    setter={setNewPassword}
                    error={newPasswordError}
                    seterror={setNewPasswordError}
                    errorText={true}
                    inputtype="password"
                    placeholder={"New Password"}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill={"#d4ad44"}>
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                    }
                />
                <Input
                    getter={newPasswordCheck}
                    setter={setNewPasswordCheck}
                    error={newPasswordCheckError}
                    seterror={setNewPasswordCheckError}
                    errorText={true}
                    inputtype="password"
                    placeholder={"Confirm New Password"}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill={"#d4ad44"}>
                            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                    }
                />
            </div>
            {success ? <div style={{ color: "#d4ad44", fontWeight: 700 }}>Password changed successfully</div> : <></>}
            <NewCaseButtons
                antibuttontext={"Cancle"}
                probuttontext={"OK"}
                onclickanti={() => setScreen("home")}
                onclickpro={() => {
                    if (!oldPassword || !oldPassword.length) {
                        return setOldPasswordError("Required");
                    }
                    if (!newPassword || !newPassword.length) {
                        return setNewPasswordError("Required");
                    }
                    if (!newPasswordCheck || !newPasswordCheck.length) {
                        return setNewPasswordCheckError("Required");
                    }
                    if (newPasswordCheck != newPassword) {
                        return setNewPasswordCheckError("Passwords are not match");
                    }
                    setSending(true);
                    axios.post(`${server}/changepassword`, { oldpassword: oldPassword, newpassword: newPassword, newpasswordcheck: newPasswordCheck }).then((res) => {
                        if (res.data.error) {
                            if (res.data.field == "oldpassword") {
                                setOldPasswordError(res.data.message);
                                setSending(false);
                            }
                        } else {
                            setOldPassword("");
                            setNewPassword("");
                            setNewPasswordCheck("");
                            setSuccess(true);
                            setSending(false);
                        }
                    });
                }}
            />
        </div>
    );
}
