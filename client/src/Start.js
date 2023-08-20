import axios from "axios";
import "./Start.css";
import colors from "./colors";
import React from "react";

import { server } from "./env";
import { LanguageContext } from "./Contexts";
import Text from "./Text";

export default function Start() {
    const { lang, setLang } = React.useContext(LanguageContext);

    const [haveAccount, setHaveAccount] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const isEmail = (emailadd) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(emailadd);
    };

    const register = () => {
        if (!email.length || !isEmail(email)) {
            setEmailError(true);
            setTimeout(() => setEmailError(false), 2000);
            return;
        }
        if (!password.length) {
            setPasswordError(true);
            setTimeout(() => setPasswordError(false), 2000);
            return;
        }
        if (confirmPassword != password) {
            setConfirmPasswordError("passwords are not match");
            setTimeout(() => setConfirmPasswordError(false), 2000);
            return;
        }
        axios.post(`${server}/register`, { email: email.toLowerCase(), password: password }).then((res) => {
            if (res.data.error) {
                if (res.data.field == "email") {
                    setEmailError(res.data.message);
                    setTimeout(() => setEmailError(false), 2000);
                } else if (res.data.field == "password") {
                    setPasswordError(res.data.message);
                    setTimeout(() => setPasswordError(false), 2000);
                }
            }
        });
    };

    const login = () => {
        if (!email.length || !isEmail(email)) {
            setEmailError(true);
            setTimeout(() => setEmailError(false), 2000);
            return;
        }
        if (!password.length) {
            setPasswordError(true);
            setTimeout(() => setPasswordError(false), 2000);
            return;
        }
        axios.post(`${server}/login`, { email: email.toLowerCase(), password: password }).then((res) => {
            if (res.data.error) {
                if (res.data.field == "email") {
                    setEmailError(res.data.message);
                    setTimeout(() => setEmailError(false), 2000);
                } else if (res.data.field == "password") {
                    setPasswordError(res.data.message);
                    setTimeout(() => setPasswordError(false), 2000);
                }
            }
        });
    };

    React.useEffect(() => {
        setEmailError(false);
        setPasswordError(false);
        setConfirmPasswordError(false);
    }, [haveAccount]);

    return (
        <div className="center dialog" id="login-register">
            <img id="register-login-logo" src="./images/logo.png" alt="" />
            {haveAccount ? (
                <div id="login">
                    <div style={{ fontSize: "30px", color: "white", fontWeight: 600 }}>
                        <Text>Login</Text>
                    </div>

                    <div style={{ width: "100%" }}>
                        {emailError ? (
                            <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                                <Text>{emailError}</Text>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="input-container" style={{ border: emailError ? "red 2px solid" : "none" }}>
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#D4AD44">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                                className="input-text"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                            />
                        </div>
                    </div>

                    <div style={{ width: "100%" }}>
                        {passwordError ? (
                            <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                                <Text>{passwordError}</Text>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="input-container" style={{ border: passwordError ? "red 2px solid" : "none" }}>
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#D4AD44">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                            </svg>
                            <input
                                type="password"
                                placeholder={Text({ children: "Password" })}
                                className="input-text"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                value={password}
                            />
                        </div>
                    </div>

                    <div className="btn" style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12 }} onClick={() => login()}>
                        <Text>Sign In</Text>
                    </div>
                    <div style={{ fontSize: 18 }}>
                        <Text>Dont have an account?</Text>{" "}
                        <span className="switch-btn" style={{ fontWeight: 700 }} onClick={() => setHaveAccount(false)}>
                            <Text>Sign Up</Text>
                        </span>
                    </div>
                </div>
            ) : (
                <div id="register">
                    <div style={{ fontSize: "30px", color: "white", fontWeight: 600 }}>
                        <Text>Register</Text>
                    </div>

                    <div style={{ width: "100%" }}>
                        {emailError ? (
                            <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                                <Text>{emailError}</Text>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="input-container" style={{ border: emailError ? "red 2px solid" : "none" }}>
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#D4AD44">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                                className="input-text"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                value={email}
                            />
                        </div>
                    </div>

                    <div style={{ width: "100%" }}>
                        {passwordError ? (
                            <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                                <Text>{passwordError}</Text>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="input-container" style={{ border: passwordError ? "red 2px solid" : "none" }}>
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#D4AD44">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                            </svg>
                            <input
                                type="password"
                                placeholder={Text({ children: "Password" })}
                                className="input-text"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                value={password}
                            />
                        </div>
                    </div>

                    <div style={{ width: "100%" }}>
                        {confirmPasswordError ? (
                            <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                                <Text>{confirmPasswordError}</Text>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="input-container" style={{ border: confirmPasswordError ? "red 2px solid" : "none" }}>
                            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#D4AD44">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                            </svg>
                            <input type="password" placeholder={Text({ children: "Confirm Password" })} className="input-text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                        </div>
                    </div>

                    <div className="btn" style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12 }} onClick={() => register()}>
                        <Text>Sign Up</Text>
                    </div>
                    <div style={{ fontSize: 18 }}>
                        <Text>Already have an account?</Text>{" "}
                        <span className="switch-btn" style={{ fontWeight: 700 }} onClick={() => setHaveAccount(true)}>
                            <Text>Sign In</Text>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
