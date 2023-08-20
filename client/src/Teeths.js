import "./Teeths.css";
// carillaFF for edge color
//piezaSeleccionada  for mark number

import React from "react";
import Text from "./Text";

export default function Teeths({ handleTeethClick, teeths, mode }) {
    return (
        <section style={{ alignSelf: "center", position: "relative" }} id="odontograma" className="col-12 px-0 d-flex flex-wrap position-relative" data-seccion="true" data-funcion="checkPiezas">
            {Object.values(mode).length == 3 ? (
                <div id="current-rt" style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>
                        <Text>{mode.RT}</Text>
                    </div>
                    <div style={{ fontSize: 12, color: "grey", textAlign: "center" }}>
                        <Text>{mode.material}</Text>
                    </div>
                    <div style={{ color: "grey", fontSize: 11 }}>
                        <Text>{mode.mode}</Text>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <svg version="1.1" className="col-12 col-lg-8 col-xl-12 px-xl-0 mx-auto" style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 436.6 595.3" xmlSpace="preserve">
                <defs>
                    <linearGradient id="bg-pmma" x1="-100%" y1={0} x2="200%" y2={0} gradientTransform="rotate(90)">
                        <stop offset="0.3" stopColor="#f59618" />
                        <stop offset={1} stopColor="#ffecd4" />
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="bg-disilicato" x1="-100%" y1={0} x2="200%" y2={0} gradientTransform="rotate(90)">
                        <stop offset="0.3" stopColor="#4763AC" />
                        <stop offset={1} stopColor="#d3dcf2" />
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="bg-bridge" x1="-100%" y1={0} x2="200%" y2={0} gradientTransform="rotate(90)">
                        <stop offset="0.3" stopColor="#00ccb4" />
                        <stop offset={1} stopColor="#daf5f2" />
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="bg-metalceramico" x1="-100%" y1={0} x2="200%" y2={0} gradientTransform="rotate(90)">
                        <stop offset="0.3" stopColor="#656469" />
                        <stop offset={1} stopColor="#ecebf0" />
                    </linearGradient>
                </defs>
                <defs>
                    <radialGradient id="bg-direct">
                        <stop offset="5%" stopColor="#f7b7b7" />
                        <stop offset="95%" stopColor="#cc2f2f" />
                    </radialGradient>
                </defs>
                {[18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28, 38, 37, 36, 35, 34, 33, 32, 31, 41, 42, 43, 44, 45, 46, 47, 48].map((number, idx) => {
                    const Teeth = require(`./Teeths/Teeth${number}`).default;
                    return <Teeth key={idx} onClick={() => handleTeethClick(number)} teeths={teeths} number={number} />;
                })}
            </svg>
        </section>
    );
}
