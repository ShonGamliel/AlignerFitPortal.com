export default function Teeth35({ onClick, teeths, number }) {
    return (
        <g id="d-35" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={35} data-classreset="diente reset" data-nearbyteeth="36-34" onClick={onClick}>
            {/* black dot */}
            <path
                id="pontic-35"
                className="pontic reset"
                d="M287.1,438.9c-0.3-0.1-0.6-0.2-1-0.3c-0.4-0.1-0.8-0.1-1.3-0.1c-3.7,0-6.7,3-6.7,6.7
      c0,2.2,1.1,4.2,2.8,5.4c0.3,0.2,0.6,0.4,0.9,0.5c0.9,0.5,1.9,0.7,3,0.7c3.7,0,6.7-3,6.7-6.7C291.6,442.3,289.7,439.8,287.1,438.9z"
                data-classreset="pontic reset"
            />
            {/* half color */}
            <path
                id="inlay-onlay-35"
                className="inlay-onlay reset"
                style={{ display: teeths[number]?.RT == "Onlay" || teeths[number]?.RT == "Inlay" ? "block" : "none" }}
                d="M317.5,450.9c0,0,0,4.8-3.8,5c0,0,0.8,3.6,0.1,4.5c0,0-0.1,1.6,0.3,2.4c0,0,1.1,0.1,1.6,1.9
          c0.5,1.8,1.3,2.7,2,2.8c0.7,0.1,1.3,0.1,2-0.4c0.7-0.5,1.3-0.4,1.3-0.4s1.1,0.6,3.8-4c2.7-4.6,1.4-6.8,1.4-6.8s-1-1.8-0.8-3.5
          c0,0-0.2-3.4-3.9-3.8C321.5,448.7,319.9,450.4,317.5,450.9z"
                data-classreset="inlay-onlay reset"
            />
            {/* full color */}
            <path
                id="d-35-background"
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
                d="M312.9,446.3c-9.2,4.6-9,7-9.3,10.5c0.7,4.2,0.5,5.7,0.5,7.8c-0.1,4.3,2.5,5.4,4.2,7.6
          c5.4,5.4,8.3,3.6,12.1,4.5c3.5-0.5,5.6-1.1,7.7-1.6c5.7-1.4,5.2-3.5,7.4-5.3c2.8-3.7,3-8.5,1.6-13.9c-1.2-3.2-3.6-5.7-6.2-8
          l-6.3-3.2C319.6,442.7,314.1,445.4,312.9,446.3L312.9,446.3z"
            />
            {/* inner lines */}
            <g id="d-35-raices" className="raices reset" data-classreset="raices reset">
                <g id="path4418_00000075874315761922226860000011454316058162124951_">
                    <path
                        d="M317.5,471c-0.3,0-0.6,0-0.8-0.1c-0.9-0.3-1.7-1.1-2.3-2.5c-0.2-0.4-0.3-0.8-0.5-1.2
                  c-0.4-1.1-0.7-2.2-1.8-2.3H312v-0.1c-0.7-1.3-0.8-2.4-0.8-3.4v-0.1c0.7-1.3,0.4-2.9,0.1-4.6c-0.1-0.5-0.2-0.9-0.2-1.4v-0.2h0.2
                  c3.3-0.2,4.3-2.6,4.8-6.3v-0.1h0.1c0.3-0.1,0.6-0.2,0.9-0.3c1.4-0.5,2.7-0.9,4.2-2.5l0.1-0.1l0.3,0.1c1.9,0.4,4.3,0.9,5.1,5.2
                  c0,1.8,0.5,3.2,1.3,4.8l0,0c0.8,4.3-1.1,7.4-3,10.3c-0.1,0.2-0.3,0.5-0.4,0.7c-1.4,2.3-3.1,2.9-4.7,3.4c-0.3,0.1-0.5,0.2-0.8,0.2
                  C318.6,470.8,318,471,317.5,471z M312.3,464.5c1.2,0.2,1.6,1.4,1.9,2.5c0.1,0.4,0.3,0.8,0.4,1.2c0.6,1.3,1.3,2,2.1,2.3
                  c0.7,0.2,1.5,0.1,2.4-0.4c0.3-0.1,0.5-0.2,0.8-0.3c1.7-0.5,3.2-1,4.5-3.2c0.1-0.2,0.3-0.5,0.4-0.7c1.8-2.9,3.8-5.8,3-10
                  c-0.8-1.6-1.3-3.1-1.3-4.9c-0.8-4.1-2.9-4.5-4.9-4.9h-0.2c-1.6,1.6-3,2.1-4.3,2.6c-0.3,0.1-0.6,0.2-0.8,0.3
                  c-0.4,3.2-1.3,6.2-4.9,6.5c0.1,0.4,0.1,0.8,0.2,1.2c0.3,1.7,0.6,3.4-0.1,4.8C311.6,462.3,311.6,463.3,312.3,464.5z"
                    />
                </g>
                <g id="path4420_00000003792951702147960000000010482902485440334015_">
                    <path
                        d="M317,466.4c-2.2-2-2.2-5.5-2.1-8.9v-0.1c0.9-3.8,2.2-6.1,3.9-7.1c1.1-0.6,2.4-0.7,3.8-0.2l-0.1,0.3
                  c-1.4-0.4-2.6-0.4-3.6,0.2c-1.7,0.9-2.9,3.3-3.8,6.9c0,3.3-0.1,6.7,2,8.6L317,466.4z"
                    />
                </g>
                <g id="path4422_00000150089793800064078320000004503712277658380967_">
                    <path d="M313.2,462.7h-0.3c0.1-2.6,0.9-4.2,2.3-5.1l0.2,0.3C314.5,458.4,313.4,459.4,313.2,462.7z" />
                </g>
                <g id="path4424_00000065787938088887784310000009410872491030990741_">
                    <rect x="316.9" y="449.8" transform="matrix(0.104 -0.9946 0.9946 0.104 -162.4603 719.6503)" width="2.6" height="0.3" />
                </g>
            </g>

            {/* bridge */}
            <g id="d-35-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
                <path d="M302.5,477.7l7.3-9l5.2,4.2l-7.3,9c-0.9,1.1-2.6,1.3-3.8,0.4l-1-0.8C301.8,480.6,301.6,478.9,302.5,477.7z" />
                <path d="M332.3,436.2l-4.5,11.9l-6.2-2.3l4.5-11.9c0.5-1.4,2.1-2.1,3.4-1.6l1.2,0.5C332.1,433.3,332.8,434.8,332.3,436.2z" />
            </g>
            <circle id="d-35-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="320.1" cy={459} r={5} />

            {/* edge color */}
            <g id="d-35-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset" style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M337.1,455.8c1.6,5.9,1.1,10.5-1.6,14.1c-0.7,0.6-1.1,1.1-1.5,1.7c-1,1.3-1.9,2.7-6,3.7
              c-2.1,0.5-4.2,1.1-7.7,1.6l0,0l0,0c-1-0.2-2-0.3-2.9-0.3c-1-0.1-2.1-0.1-3.2-0.4c2.6,1.9,4.6,2,6.7,2.1c0.9,0,1.9,0.1,3,0.3
              c6.2-0.3,10.8-2.4,13.7-6.3c3.8-5.1,3.4-11.6,2.7-14.3c-1.2-3.2-3.6-5.6-6.1-7.9l-1.8-0.9C334.3,451,336.1,453.1,337.1,455.8z"
                />
                <path
                    className="borderNegro"
                    d="M323.8,478.7L323.8,478.7c-1-0.2-2-0.3-2.9-0.3c-2-0.1-4.1-0.2-6.8-2.2l0.1-0.3c1.1,0.3,2.2,0.4,3.2,0.4
              c0.9,0,1.9,0.1,2.9,0.3c3.5-0.5,5.6-1.1,7.7-1.6c4-1,5-2.3,5.9-3.6c0.4-0.6,0.8-1.1,1.5-1.7c2.6-3.5,3.1-8,1.5-13.9
              c-1-2.8-3-4.9-4.7-6.6l0.2-0.3l1.8,0.9c2.6,2.4,5,4.8,6.2,8c0.7,2.8,1.1,9.3-2.7,14.5C334.8,476.3,330.1,478.5,323.8,478.7
              L323.8,478.7z M315,476.4c2.3,1.4,4,1.5,5.9,1.6c0.9,0,1.9,0.1,3,0.3c6.2-0.3,10.7-2.4,13.6-6.3c3.7-5.1,3.4-11.5,2.6-14.2
              c-1.2-3.1-3.5-5.5-6.1-7.8l-0.8-0.4c1.6,1.6,3.1,3.5,4.1,6l0,0c1.6,6,1.1,10.6-1.6,14.2c-0.7,0.6-1.1,1.1-1.5,1.7
              c-1,1.4-2,2.8-6.1,3.8c-2.1,0.5-4.2,1.1-7.7,1.6l0,0h-0.1c-1-0.2-2-0.3-2.9-0.3C316.6,476.6,315.8,476.6,315,476.4z"
                />
            </g>

            {/* red edge */}
            <g id="d-35-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M337.1,455.8c1.6,5.9,1.1,10.5-1.6,14.1c-0.7,0.6-1.1,1.1-1.5,1.7c-1,1.3-1.9,2.7-6,3.7
              c-2.1,0.5-4.2,1.1-7.7,1.6l0,0l0,0c-1-0.2-2-0.3-2.9-0.3c-1-0.1-2.1-0.1-3.2-0.4c2.6,1.9,4.6,2,6.7,2.1c0.9,0,1.9,0.1,3,0.3
              c6.2-0.3,10.8-2.4,13.7-6.3c3.8-5.1,3.4-11.6,2.7-14.3c-1.2-3.2-3.6-5.6-6.1-7.9l-1.8-0.9C334.3,451,336.1,453.1,337.1,455.8z"
                />
                <path
                    className="borderNegro"
                    d="M323.8,478.7L323.8,478.7c-1-0.2-2-0.3-2.9-0.3c-2-0.1-4.1-0.2-6.8-2.2l0.1-0.3c1.1,0.3,2.2,0.4,3.2,0.4
              c0.9,0,1.9,0.1,2.9,0.3c3.5-0.5,5.6-1.1,7.7-1.6c4-1,5-2.3,5.9-3.6c0.4-0.6,0.8-1.1,1.5-1.7c2.6-3.5,3.1-8,1.5-13.9
              c-1-2.8-3-4.9-4.7-6.6l0.2-0.3l1.8,0.9c2.6,2.4,5,4.8,6.2,8c0.7,2.8,1.1,9.3-2.7,14.5C334.8,476.3,330.1,478.5,323.8,478.7
              L323.8,478.7z M315,476.4c2.3,1.4,4,1.5,5.9,1.6c0.9,0,1.9,0.1,3,0.3c6.2-0.3,10.7-2.4,13.6-6.3c3.7-5.1,3.4-11.5,2.6-14.2
              c-1.2-3.1-3.5-5.5-6.1-7.8l-0.8-0.4c1.6,1.6,3.1,3.5,4.1,6l0,0c1.6,6,1.1,10.6-1.6,14.2c-0.7,0.6-1.1,1.1-1.5,1.7
              c-1,1.4-2,2.8-6.1,3.8c-2.1,0.5-4.2,1.1-7.7,1.6l0,0h-0.1c-1-0.2-2-0.3-2.9-0.3C316.6,476.6,315.8,476.6,315,476.4z"
                />
            </g>

            {/* numbers */}
            <g id="d-num-usa-35" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path
                    className="colorNumber"
                    d="M356.5,471.2c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7h-10.5
              l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
              C351.1,473.2,353.2,471.2,356.5,471.2z"
                />
                <path
                    className="colorNumber"
                    d="M363.2,479.2v-0.9c0-4.5,1.8-7,5.5-7h0.9c3.7,0,5.5,2.5,5.5,7v0.9c0,4.5-1.8,7.1-5.5,7.1h-0.9
              C365,486.2,363.2,483.7,363.2,479.2z M369.5,483.5c1.4,0,2.5-1.1,2.5-3.4v-2.8c0-2.3-1-3.4-2.5-3.4h-0.6c-1.4,0-2.5,1.1-2.5,3.4
              v2.8c0,2.3,1,3.4,2.5,3.4H369.5z"
                />
            </g>
            <g id="d-num-eur-35" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M349.8,482.9h3c0,1.4,1.1,2.1,2.5,2.1c1.4,0,2.4-0.7,2.4-1.9c0-1.1-0.9-1.8-2.4-1.8h-1.4v-2.6h1.3
              c1.2,0,1.9-0.7,1.9-1.8c0-1-0.8-1.7-2.1-1.7c-1.2,0-2.1,0.7-2.1,1.9h-2.9c0-2.8,2.4-4.5,5-4.5c2.9,0,5,1.8,5,4
              c0,1.2-0.7,2.4-1.7,3.1c1.4,0.7,2.4,1.7,2.4,3.4c0,2.9-2.6,4.5-5.5,4.5C352.3,487.7,349.8,486,349.8,482.9z"
                />
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M362.8,483.2h2.7c0.2,1.2,1.2,1.9,2.5,1.9c1.5,0,2.5-1,2.5-2.4c0-1.5-1-2.5-2.6-2.5c-1.1,0-1.8,0.4-2.2,1.1
              h-2.7l1.2-8.5h8.2v2.7h-5.9l-0.4,2.9c0.6-0.4,1.3-0.6,2.2-0.6c3,0,5.1,2,5.1,4.9c0,3-2.3,5-5.5,5
              C365.3,487.7,363,485.6,362.8,483.2z"
                />
            </g>
        </g>
    );
}
