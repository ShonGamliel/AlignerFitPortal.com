import React from "react";
import axios from "axios";
import { server, parseTimestamp } from "./env";
import CaseState from "./CaseState";
import { CasesContext, ChatContext, NavContext } from "./Contexts";

export default function CasePreview({ c }) {
    const { setChat } = React.useContext(ChatContext);
    const { setScreen, setWatchCase, portal } = React.useContext(NavContext);
    const { clinics } = React.useContext(CasesContext);

    // console.log(c)

    function isTimestampInPastThreeDays(timestamp) {
        const date = new Date(timestamp);
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - date.getTime();
        const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
        return timeDifference <= threeDaysInMilliseconds;
    }
    return (
        <tr style={{ position: "relative" }}>
            <td onClick={() => setWatchCase(c)} style={{ cursor: "pointer", position: "relative" }}>
                {c.caseid}
                {isTimestampInPastThreeDays(c.date) ? <div style={{ position: "absolute", right: 0, top: "50%", right: 0, transform: "translate(25%, -50%)", backgroundColor: "green", color: "white", fontWeight: 700, padding: 2, borderRadius: 5, fontSize: 10 }}>New</div> : <></>}
            </td>
            <td onClick={() => setWatchCase(c)} style={{ cursor: "pointer" }}>
                {parseTimestamp(c.date, "casepreview")}
            </td>
            <td onClick={() => setWatchCase(c)} style={{ cursor: "pointer" }}>
                {clinics[c.clinicid].name}
            </td>
            <td onClick={() => setWatchCase(c)} style={{ cursor: "pointer" }}>
                {c.patient_name}
            </td>
            <td>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 640 512"
                    fill="#f5981c"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setChat(c);
                        setScreen("chat");
                    }}
                >
                    <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
                </svg>
            </td>
            <td>
                {c.patient_phone ? (
                    <a href={`https://web.whatsapp.com/send/?phone=972${c.patient_phone}`} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" fill="green" style={{ cursor: "pointer" }}>
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                    </a>
                ) : (
                    <></>
                )}
            </td>

            <td>
                <CaseState c={c} state={"status"} />
            </td>
            <td>
                <CaseState c={c} state={"progress"} />
            </td>
        </tr>
    );
}
