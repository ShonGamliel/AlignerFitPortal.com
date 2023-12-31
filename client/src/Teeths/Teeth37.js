export default function Teeth37({ onClick, teeths, number }) {
    return (
        <g id="d-37" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={37} data-classreset="diente reset" data-nearbyteeth="38-36" onClick={onClick}>
            <path
                id="pontic-37"
                className="pontic reset"
                d="M306.8,363.2c-0.3-0.1-0.6-0.1-1-0.2c-0.3,0-0.5,0-0.8,0c-4,0-7.2,3.2-7.2,7.2c0,3.4,2.4,6.2,5.5,7
      c0.3,0.1,0.6,0.1,1,0.2c0.2,0,0.5,0,0.7,0c4,0,7.2-3.2,7.2-7.2C312.3,366.8,309.9,364,306.8,363.2z"
                data-classreset="pontic reset"
            />
            <path
                id="inlay-onlay-37"
                className="inlay-onlay reset"
                style={{ display: teeths[number]?.RT == "Onlay" || teeths[number]?.RT == "Inlay" ? "block" : "none" }}
                d="M347.7,391.5c0,0,7-7.7,6.1-10.8c-0.9-3.1-0.3-4.8-2.9-8.3c0,0,3.6,0.1,3.3-5.5
          c-0.3-5.6-4-7.5-4-7.5l-3.5-3c0,0-1.7-1-2.9-0.7c-1.2,0.3-1.8-0.1-1.8-0.1s-1.2-0.4-5.1,2.4c0,0-1.5,1.4-2.5,1.6
          c-1,0.2-1.9,0.2-2.3,1.7c-0.4,1.5-0.7,2.6-0.7,2.6s-1.1,3.9,0.2,7.1c0,0-0.8,4.7-0.4,5.7c0.4,1.1-0.5,5-0.5,5s-0.5,2.5,1.7,4.5
          c2.2,2,3.4,2.5,3.4,2.5s0.9,1.3,2.2,1.4s1.4-0.3,3.1,0.2c1.6,0.4,1.7,0.5,2.4,1C344.1,391.9,346.3,392.6,347.7,391.5z"
                data-classreset="inlay-onlay reset"
            />
            <path
                id="d-37-background"
                style={
                    teeths[number]?.RT === "Full Crown"
                        ? { fill: "url(#bg-disilicato)" }
                        : teeths[number]?.RT === "PFM Crown"
                        ? { fill: "#8a8c91" }
                        : teeths[number]?.RT === "Provisional Eggshell"
                        ? { fill: "#fffb7b" }
                        : teeths[number]?.RT === "Implant Crown"
                        ? { fill: "#63c66d" }
                        : teeths[number]?.RT === "Splints"
                        ? { fill: "#e8e0d5" }
                        : teeths[number]?.RT === "Full Dentures"
                        ? { fill: "#e79ea6" }
                        : teeths[number]?.RT === "Valpast"
                        ? { fill: "#e79ea6" }
                        : {}
                }
                className="background ondoto-transition reset"
                data-classreset="background ondoto-transition reset"
                d="M351.8,351.5c3.5,1.6,7,2.6,10.3,6.1c2.7,2.1,4.7,5.9,5.2,13.5c0.2,5.3,1.5,10.5-2,16.3
          c-3,2.6-1.2,3.4-9.4,7.8c-4.2,1.8-7.3,5.7-13.8,3.4c-3.2-0.9-4.2-0.5-9.6-2.8c-2.3-0.5-4.2-1.8-5.2-4.8c-1.1-1.9-2.1-4.6-2.7-8.6
          c0.2-3.4,0.7-4.8,1.2-6.5c0.7-4.6,0.5-6.5,0-7.8c-0.1-2.3,0.4-4.6,1.8-6.9c0.8-2.5,1.3-4.9,5.7-7.6
          C337.1,350.5,339.7,348.3,351.8,351.5L351.8,351.5z"
            />
            <g id="d-37-raices" className="raices reset" data-classreset="raices reset">
                <g id="path4384_00000062880193115846678920000004949198080868191381_">
                    <path
                        d="M344.1,395.6c-0.4-0.2-0.7-0.4-1-0.6c-0.9-0.7-1.7-1.3-5.3-1h-0.3c-1.1-0.1-2.2-0.3-3.3-1.8l-2.5-1.6
                  l-2.2-1.9c-1.6-1.8-2.2-3.8-1.6-6c0-0.4,0.1-0.8,0.2-1.2c0.2-1.6,0.5-3.9,0.2-4.2l0,0v-0.1c-0.2-1.5,0.2-3.9,0.7-6.2
                  c-0.1-0.8-0.3-1.4-0.5-2c-0.6-1.5-1.2-3.1,0.9-9.4c0.2-1.9,1.2-2.9,3.1-2.9c1-0.2,1.5-0.6,2.4-1.4c0.3-0.3,0.7-0.6,1.2-1
                  c0.3-0.2,0.6-0.4,0.8-0.5c0.9-0.6,1.9-1.2,4.2-1.9l0,0l0,0c0.6,0.1,1.3,0.1,1.9,0.1c1.6,0,3.3,0,4.9,1.3l3.9,3.5
                  c3.1,2.5,3.5,4,3.8,5.6c0.9,2.1,0.5,4.3,0.2,6.3v0.1c-0.1,2-0.9,3.4-2.4,4.1c0.1,0.1,0.2,0.2,0.3,0.3c0.8,0.8,1.5,1.6,1.9,4.6
                  c0.8,5-0.1,6.9-1,8.8c-0.2,0.4-0.3,0.7-0.5,1.1c-1.4,2.1-2.9,3.8-4.3,5.5c-0.5,0.6-0.9,1.1-1.4,1.7l-0.3-0.2
                  c0.5-0.6,0.9-1.1,1.4-1.7c1.4-1.7,2.8-3.4,4.3-5.4c0.1-0.4,0.3-0.7,0.5-1.1c0.8-1.8,1.7-3.7,1-8.6c-0.3-2.8-1-3.6-1.8-4.4
                  c-0.1-0.2-0.3-0.3-0.4-0.5l-0.1-0.2l0.2-0.1c1.6-0.7,2.3-2,2.4-4v-0.1c0.3-2,0.7-4.2-0.2-6.2c-0.2-1.3-0.5-2.8-3.7-5.4l-3.8-3.4
                  c-1.6-1.3-3.1-1.3-4.7-1.3c-0.6,0-1.3,0-1.9-0.1c-2.2,0.6-3.2,1.2-4.1,1.8c-0.3,0.2-0.5,0.3-0.8,0.5c-0.5,0.4-0.8,0.7-1.2,1
                  c-0.9,0.8-1.5,1.3-2.6,1.5c-1.7,0-2.7,0.9-2.9,2.7c-2.1,6.3-1.5,7.8-1,9.3c0.2,0.6,0.4,1.2,0.5,2.1l0,0l0,0
                  c-0.5,2.3-0.9,4.6-0.7,6.1c0.3,0.5,0.1,2-0.2,4.4c-0.1,0.4-0.1,0.8-0.2,1.2c-0.6,2.2-0.1,4,1.5,5.7l2.1,1.8l2.6,1.6
                  c1,1.4,2,1.5,3.1,1.7h0.3c3.6-0.3,4.6,0.4,5.5,1.1c0.3,0.2,0.6,0.4,0.9,0.6L344.1,395.6z"
                    />
                </g>
                <g id="path4386_00000015320039177787986520000017249803940850516131_">
                    <path
                        d="M343.2,393c-3.4-3.6-4.1-7.6-2-12.1c0.3-0.6-0.1-1.4-1.1-2.4l0,0v-0.1c-0.5-4.3,0.1-5.5,0.6-6.7
                  c0.2-0.5,0.4-1,0.5-1.7c0.5-1.7,1.1-3.5,1.4-5.8c-0.6-2.6-1.9-4.5-3.7-5.7l0.2-0.3c1.9,1.3,3.1,3.2,3.8,6l0,0l0,0
                  c-0.3,2.3-0.9,4.2-1.4,5.9c-0.1,0.7-0.4,1.2-0.6,1.7c-0.5,1.1-1,2.3-0.5,6.4c1.1,1.1,1.5,2,1.1,2.8c-2,4.3-1.4,8.3,2,11.8
                  L343.2,393z"
                    />
                </g>
                <g id="path4388_00000098178764639181860460000014742403800320145028_">
                    <path
                        d="M335.8,387.5l-0.3-0.1c1.1-2.3,2.3-4.5,5.2-5.8c0.5-1.4,2-1.8,4.6-1.4l-0.1,0.3c-2.5-0.4-3.9,0-4.3,1.2v0.1
                  h-0.1C338.1,383.1,336.9,385.3,335.8,387.5z"
                    />
                </g>
                <g id="path4390_00000005250845646476177930000014314235017534277025_">
                    <path d="M340.5,373.5l-0.2-0.2c1.4-1.5,5.3-1.3,9.4-1v0.3C345.9,372.3,341.8,372.2,340.5,373.5z" />
                </g>
                <g id="path4392_00000115494966721205415940000004716490921005360529_">
                    <path
                        d="M329.8,375.2l-0.1-0.3c0.9-0.2,1.7-0.6,2.5-0.9c2.2-0.8,4.5-1.7,8.3-1.2v0.3c-3.7-0.5-6,0.4-8.2,1.2
                  C331.5,374.6,330.7,375,329.8,375.2z"
                    />
                </g>
                <g id="path4394_00000052091643388770738950000017861838535096181928_">
                    <rect x="333.1" y="369.6" transform="matrix(0.4664 -0.8846 0.8846 0.4664 -151.3743 493.4069)" width="0.3" height="5.2" />
                </g>
                <g id="path4396_00000157991818484332631580000008945946967833691280_">
                    <path d="M342.6,364.2l-0.1-0.3c1.7-0.6,3.9-1.2,6.7-1.8l0.1,0.3C346.5,362.9,344.3,363.5,342.6,364.2z" />
                </g>
            </g>
            <g id="d-37-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
                <path d="M335.6,406.4l2-11.4l6.5,1.2l-2,11.4c-0.3,1.5-1.6,2.4-3.1,2.2l-1.3-0.2C336.4,409.2,335.4,407.8,335.6,406.4z" />
                <path d="M348.5,341v12.7h-6.6V341c0-1.5,1.2-2.7,2.7-2.7h1.3C347.3,338.3,348.5,339.5,348.5,341z" />
            </g>
            <circle id="d-37-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="340.6" cy="373.3" r={5} />
            <g id="d-37-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset" style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M351.8,351.3c0.7,0.3,1.4,0.6,2,0.9c2.8,1.2,5.7,2.4,8.3,5.3c3.1,2.5,4.8,6.8,5.2,13.6c0,1,0.1,1.9,0.2,2.9
              c0.3,4.3,0.7,8.7-2.2,13.6l0,0c-1,0.8-1.4,1.4-1.9,2.1c-1,1.3-2,2.7-7.5,5.7c-1.1,0.5-2.1,1.1-3.1,1.6c-1.6,1-3.3,1.9-5.3,2.3
              c4.5,1.4,7.3-0.2,10.2-1.9c1-0.6,2-1.2,3.1-1.7c12.3-4.6,11.6-17.6,11.4-23.2c0-0.3,0-0.5,0-0.8c-0.4-6.7-2-11-5.1-13.4
              c-2.6-2.8-5.5-4-8.2-5.2c-0.7-0.3-1.3-0.6-2-0.9c-2.3-0.6-4.2-1-5.9-1.2C351.2,351.2,351.5,351.2,351.8,351.3L351.8,351.3z"
                />
                <path
                    className="borderNegro"
                    d="M350.9,400.1c-1,0-2.2-0.2-3.4-0.6v-0.3c2-0.4,3.7-1.4,5.2-2.3c1-0.6,2-1.2,3.1-1.7c5.5-2.9,6.5-4.3,7.5-5.6
              c0.5-0.7,0.9-1.3,1.9-2.1l0,0c2.9-4.7,2.5-9.2,2.2-13.4c-0.1-0.9-0.2-1.9-0.2-2.9c-0.4-6.8-2.1-11.1-5.2-13.5
              c-2.6-2.8-5.5-4.1-8.3-5.3c-0.7-0.3-1.4-0.6-2-0.9l0,0c-0.2,0-0.4-0.1-0.5-0.1l-0.3-0.1l0.1-0.3c1.7,0.3,3.7,0.7,5.9,1.3
              c0.7,0.3,1.5,0.6,2,0.9c2.8,1.2,5.6,2.4,8.3,5.3c3.1,2.4,4.7,6.7,5.2,13.5c0,0.2,0,0.4,0,0.7v0.1c0.3,5.6,0.9,18.7-11.5,23.4
              c-1.1,0.5-2.1,1.1-3.1,1.6C355.6,398.9,353.6,400.1,350.9,400.1z M348.2,399.4c4.1,1.1,6.7-0.4,9.4-2c1-0.6,2-1.2,3.1-1.7
              c12.1-4.6,11.5-17.5,11.3-23v-0.1c0-0.2,0-0.5,0-0.7c-0.4-6.7-2-10.9-5-13.3c-2.6-2.8-5.4-4-8.2-5.2c-0.6-0.3-1.3-0.6-2-0.9
              c-1.4-0.4-2.7-0.7-3.9-0.9c0.4,0.2,0.7,0.3,1.1,0.5c2.8,1.2,5.7,2.5,8.4,5.3c3.2,2.5,4.8,6.8,5.3,13.7c0,1,0.1,1.9,0.2,2.9
              c0.3,4.3,0.7,8.8-2.3,13.7l-0.1,0.1c-1,0.8-1.4,1.4-1.9,2.1c-1,1.4-2,2.8-7.6,5.7c-1.1,0.5-2.1,1.1-3.1,1.6
              C351.5,398,349.9,398.9,348.2,399.4z"
                />
            </g>
            <g id="d-37-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M351.8,351.3c0.7,0.3,1.4,0.6,2,0.9c2.8,1.2,5.7,2.4,8.3,5.3c3.1,2.5,4.8,6.8,5.2,13.6c0,1,0.1,1.9,0.2,2.9
              c0.3,4.3,0.7,8.7-2.2,13.6l0,0c-1,0.8-1.4,1.4-1.9,2.1c-1,1.3-2,2.7-7.5,5.7c-1.1,0.5-2.1,1.1-3.1,1.6c-1.6,1-3.3,1.9-5.3,2.3
              c4.5,1.4,7.3-0.2,10.2-1.9c1-0.6,2-1.2,3.1-1.7c12.3-4.6,11.6-17.6,11.4-23.2c0-0.3,0-0.5,0-0.8c-0.4-6.7-2-11-5.1-13.4
              c-2.6-2.8-5.5-4-8.2-5.2c-0.7-0.3-1.3-0.6-2-0.9c-2.3-0.6-4.2-1-5.9-1.2C351.2,351.2,351.5,351.2,351.8,351.3L351.8,351.3z"
                />
                <path
                    className="borderNegro"
                    d="M350.9,400.1c-1,0-2.2-0.2-3.4-0.6v-0.3c2-0.4,3.7-1.4,5.2-2.3c1-0.6,2-1.2,3.1-1.7c5.5-2.9,6.5-4.3,7.5-5.6
              c0.5-0.7,0.9-1.3,1.9-2.1l0,0c2.9-4.7,2.5-9.2,2.2-13.4c-0.1-0.9-0.2-1.9-0.2-2.9c-0.4-6.8-2.1-11.1-5.2-13.5
              c-2.6-2.8-5.5-4.1-8.3-5.3c-0.7-0.3-1.4-0.6-2-0.9l0,0c-0.2,0-0.4-0.1-0.5-0.1l-0.3-0.1l0.1-0.3c1.7,0.3,3.7,0.7,5.9,1.3
              c0.7,0.3,1.5,0.6,2,0.9c2.8,1.2,5.6,2.4,8.3,5.3c3.1,2.4,4.7,6.7,5.2,13.5c0,0.2,0,0.4,0,0.7v0.1c0.3,5.6,0.9,18.7-11.5,23.4
              c-1.1,0.5-2.1,1.1-3.1,1.6C355.6,398.9,353.6,400.1,350.9,400.1z M348.2,399.4c4.1,1.1,6.7-0.4,9.4-2c1-0.6,2-1.2,3.1-1.7
              c12.1-4.6,11.5-17.5,11.3-23v-0.1c0-0.2,0-0.5,0-0.7c-0.4-6.7-2-10.9-5-13.3c-2.6-2.8-5.4-4-8.2-5.2c-0.6-0.3-1.3-0.6-2-0.9
              c-1.4-0.4-2.7-0.7-3.9-0.9c0.4,0.2,0.7,0.3,1.1,0.5c2.8,1.2,5.7,2.5,8.4,5.3c3.2,2.5,4.8,6.8,5.3,13.7c0,1,0.1,1.9,0.2,2.9
              c0.3,4.3,0.7,8.8-2.3,13.7l-0.1,0.1c-1,0.8-1.4,1.4-1.9,2.1c-1,1.4-2,2.8-7.6,5.7c-1.1,0.5-2.1,1.1-3.1,1.6
              C351.5,398,349.9,398.9,348.2,399.4z"
                />
            </g>
            <g id="d-num-usa-37" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path className="colorNumber" d="M392.2,386.1H389v-10.5c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V386.1z" />
                <path
                    className="colorNumber"
                    d="M394.6,381.7c0-1.7,1-2.9,2.4-3.6c-1-0.7-1.7-1.7-1.7-3c0-2.3,2-4,4.9-4c2.9,0,4.9,1.7,4.9,4
              c0,1.3-0.7,2.3-1.8,3c1.5,0.6,2.4,1.9,2.4,3.6c0,2.7-2.4,4.5-5.6,4.5C397,386.2,394.6,384.4,394.6,381.7z M402.7,381.6
              c0-1.2-1-2-2.5-2c-1.6,0-2.6,0.8-2.6,2c0,1.2,1,2,2.6,2C401.8,383.6,402.7,382.8,402.7,381.6z M402.3,375.3c0-1-0.8-1.7-2.1-1.7
              c-1.3,0-2.1,0.7-2.1,1.7s0.8,1.7,2.1,1.7C401.5,377,402.3,376.3,402.3,375.3z"
                />
            </g>
            <g id="d-num-eur-37" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M384.8,382.9h3c0,1.4,1.1,2.1,2.5,2.1c1.4,0,2.4-0.7,2.4-1.9c0-1.1-0.9-1.8-2.4-1.8h-1.4v-2.6h1.3
              c1.2,0,1.9-0.7,1.9-1.8c0-1-0.8-1.7-2.1-1.7c-1.2,0-2.1,0.7-2.1,1.9h-2.9c0-2.8,2.4-4.5,5-4.5c2.9,0,5,1.8,5,4
              c0,1.2-0.7,2.4-1.7,3.1c1.4,0.7,2.4,1.7,2.4,3.4c0,2.9-2.6,4.5-5.5,4.5C387.3,387.7,384.8,386,384.8,382.9z"
                />
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M401.2,380.3l3-4.7h-7.4v-2.7h10.9v2.5l-3.8,5.9c-1.3,2-1.6,3.8-1.6,6.4h-3.2
              C399.2,384.8,399.6,382.8,401.2,380.3z"
                />
            </g>
        </g>
    );
}
