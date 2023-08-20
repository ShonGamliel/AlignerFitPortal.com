export default function Teeth27({ onClick, teeths, number }) {
    return (
        <g id="d-27" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={27} data-classreset="diente reset" data-nearbyteeth="28-26" onClick={onClick}>
            <path
                id="pontic-27"
                className="pontic reset"
                d="M307.1,236.7c-0.2,0-0.4,0-0.6,0c-0.3,0-0.7,0.1-1,0.1c-3.2,0.7-5.7,3.6-5.7,7.1c0,4,3.2,7.2,7.2,7.2
      c0.2,0,0.3,0,0.5,0c0.3,0,0.7-0.1,1-0.1c3.3-0.7,5.7-3.6,5.7-7.1C314.3,239.9,311.1,236.7,307.1,236.7z"
                data-classreset="pontic reset"
            />
            <path
                id="inlay-onlay-27"
                className="inlay-onlay reset"
                style={{ display: teeths[number]?.RT == "Onlay" || teeths[number]?.RT == "Inlay" ? "block" : "none" }}
                d="M360,220.8c0,0-2.1-0.4-3-1.7c-0.9-1.4-3.2-7.4-9.1-5c-5.8,2.4-15.5,12.5-15.5,12.5
          s-2.3,2.7-2.3,4.6c0,0-2.2,4.7,2.2,9.3l4.1,4.7l0.9,1.2c0,0,3.3,6.7,10.4,4.8s10.4-6.3,10.4-6.3s3.5-2.7,1.6-11.2
          c0,0,2.8-5.5,1.6-9.5C360,220,360,220.8,360,220.8z"
                data-classreset="inlay-onlay reset"
            />
            <path
                id="d-27-background"
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
                d="M365.2,233.5c2.2-3,1.9-7.3,0.4-12.4c-5.6-12.9-15.7-15.6-31.4-5.7
          c-4.9,2-8.8,5.8-11.4,9.6c-2.5,3.8-4.9,5.6-3.6,12.2c2.9,11.2,7.9,20,22,18.3c5.6-0.7,10.6,0.8,17.7-4.8
          C361.5,246.3,366.8,246.6,365.2,233.5z"
            />
            <g id="d-27-raices" className="raices reset" data-classreset="raices reset">
                <g id="path4292_00000057827005645875168710000011760875573935700102_">
                    <path
                        d="M345.4,253.8c-4.1,0-6.7-2.6-9.3-6.3c-0.9-1.3-2-2.5-3.2-3.8c-3.3-3.6-6.7-7.4-4.5-12.9
                  c0.6-3.2,2.2-4.8,3.8-6.4c0.5-0.5,1-1,1.4-1.6c0.7-0.6,1.3-1.2,1.9-1.8c6-5.5,12.2-11.1,17.2-10.1c2.5,0.5,4.4,2.5,6.1,6
                  c0.8,1,1.6,1.4,2.5,1.8c0.3,0.1,0.5,0.3,0.8,0.4h0.1v0.1c0.2,0.6,0.5,1.1,0.8,1.6c1.2,2.1,2.5,4.2-1.1,12.8
                  c2.1,6.9,2,14.1-12.7,19.6C347.8,253.6,346.5,253.8,345.4,253.8z M351.5,211c-4.7,0-10.3,5.1-15.8,10.1c-0.6,0.6-1.3,1.2-1.9,1.8
                  c-0.4,0.5-1,1.1-1.4,1.6c-1.6,1.6-3.1,3.2-3.7,6.3c-2.1,5.4,1.2,9.1,4.5,12.6c1.1,1.2,2.3,2.5,3.2,3.9c3.2,4.8,6.6,7.5,12.8,5.5
                  c14.5-5.4,14.6-12.4,12.5-19.2v-0.1v-0.1c3.6-8.5,2.3-10.6,1.1-12.6c-0.3-0.5-0.6-1-0.8-1.6c-0.2-0.1-0.5-0.2-0.7-0.4
                  c-0.9-0.4-1.8-0.8-2.6-1.9l0,0c-1.6-3.5-3.5-5.4-5.9-5.8C352.3,211.1,351.9,211,351.5,211z"
                    />
                </g>
                <g id="path4294_00000170971605807059128950000001218795862539730877_">
                    <path
                        d="M341.9,250.7c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.2,0-0.2l1.1-1c-0.4-1,0.2-1.7,0.8-2.3
                  c0.1-0.1,0.1-0.1,0.2-0.2c0.3-0.6,0.6-1,1-1.4c0.9-1.2,1.8-2.2,1.7-6.7c-0.1-1.1-0.1-2.3-0.2-3.8l0,0l0,0
                  c0.1-0.2,0.1-0.5,0.2-0.7c0.3-0.8,0.6-1.6-0.9-3c-2.1-0.7-2.1-2.2-2.1-3.5c0-0.2,0-0.4,0-0.6c-0.2-1.4-0.6-2.3-1.4-2.9
                  c-0.7-0.5-1.6-0.7-2.7-0.5c-1.1,0-2.1,0-3.6-0.8c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c1.4,0.8,2.4,0.7,3.4,0.7
                  c1.2-0.2,2.2,0,3,0.5c0.8,0.6,1.3,1.6,1.5,3.1c0,0.2,0,0.5,0,0.7c0,1.3,0,2.6,1.9,3.2h0.1c1.7,1.6,1.3,2.5,1,3.3
                  c-0.1,0.2-0.2,0.4-0.2,0.6c0,1.5,0.1,2.7,0.2,3.8c0,4.6-0.9,5.8-1.8,7c-0.3,0.4-0.6,0.8-0.9,1.4l0,0c-0.1,0.1-0.1,0.1-0.2,0.2
                  c-0.6,0.6-1.1,1.2-0.7,2l0.1,0.1l-1.3,1.2C341.9,250.7,341.9,250.7,341.9,250.7z"
                    />
                </g>
                <g id="path4296_00000115483317585665057560000009378641328716814485_">
                    <path
                        d="M341.5,224.2L341.5,224.2c-0.1,0-0.2-0.1-0.2-0.2c0.2-1.7,0.6-3.7,1.9-4.7c0.9-1.2,1.5-2.4,2-3.6l0.1-0.1
                  c0-0.1,0.1-0.1,0.2-0.1s0.1,0.1,0.1,0.2l-0.1,0.1c-0.6,1.2-1.1,2.5-2.1,3.7l0,0c-1.1,0.8-1.5,2.8-1.8,4.5
                  C341.6,224.1,341.6,224.2,341.5,224.2z"
                    />
                </g>
                <g id="path4298_00000168087731460157987260000013101900550988978355_">
                    <path
                        d="M343.6,226.1c0,0-0.1,0-0.1-0.1c-0.1-0.1,0-0.2,0-0.2l8-5.9c0.5-1.7,2.6-1.8,4.7-1.9c0.1,0,0.2,0.1,0.2,0.2
                  c0,0.1-0.1,0.2-0.1,0.2l0,0c-2,0.1-4,0.2-4.4,1.7v0.1L343.6,226.1C343.7,226.1,343.7,226.1,343.6,226.1z"
                    />
                </g>
                <g id="path4300_00000107577826464110600220000013836136094819178925_">
                    <path
                        d="M350.1,234c-1.1,0-2.3-0.2-3.6-0.9c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c3.1,1.5,5.5,0.7,7.5-0.2
                  l0,0l5.9-0.8c0.1,0,0.2,0.1,0.2,0.1c0,0.1-0.1,0.2-0.1,0.2l-5.9,0.8C353,233.5,351.6,234,350.1,234z"
                    />
                </g>
                <g id="path4302_00000069380769039924955570000000926948342975210674_">
                    <path
                        d="M348.4,250.8h-0.1l-1.6-1.4v-0.1c0.2-2.2,0.1-3.5-0.4-3.9c-0.2-0.2-0.5-0.1-0.9,0.1c-0.1,0-0.2,0-0.2-0.1
                  s0-0.2,0.1-0.2c0.5-0.2,0.9-0.2,1.3,0c0.6,0.4,0.8,1.7,0.5,4.1l1.5,1.3c0.1,0.1,0.1,0.2,0,0.2
                  C348.5,250.8,348.5,250.8,348.4,250.8z"
                    />
                </g>
                <g id="path4304_00000174576793115949117060000003260258175649338775_">
                    <path
                        d="M339.1,237.6c-0.1,0-0.1,0-0.2-0.1c0-0.1,0-0.2,0.1-0.2c1.4-0.6,2.8-1.2,4.2-2.1l0,0l3.3,0.3
                  c0.1,0,0.2,0.1,0.1,0.2c0,0.1-0.1,0.2-0.2,0.1l-3.1-0.3C342,236.4,340.5,237,339.1,237.6L339.1,237.6z"
                    />
                </g>
            </g>
            <g id="d-27-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
                <path d="M348.3,264.2l-2.8-11.3l6.4-1.6l2.8,11.3c0.4,1.4-0.5,2.9-2,3.2l-1.2,0.3C350.1,266.5,348.7,265.7,348.3,264.2z" />
                <path d="M338.2,202l4.9,11.7l-6.1,2.6l-4.9-11.7c-0.6-1.4,0.1-2.9,1.4-3.5l1.2-0.5C336,200,337.6,200.6,338.2,202z" />
            </g>
            <circle id="d-27-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="347.1" cy="232.9" r={5} />
            <g id="d-27-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M355,209.9c4.5,1.4,8.1,5.1,10.8,11.2c1.7,5.8,1.6,9.7-0.4,12.5c1.2,9.6-1.4,12-3.9,14.4
              c-0.9,0.8-1.8,1.7-2.5,2.9c3.3-1.4,5.9-3.4,7.8-5.8c3.9-4.9,5.1-12,3.7-21.7c-0.5-3.6-2-7-4.2-9.8c-3-3.6-6.7-5.4-11.2-5.4
              c-2.2,0-4.6,0.5-7.2,1.3C350.5,209.2,352.8,209.3,355,209.9z"
                />
                <path
                    className="borderNegro"
                    d="M358.6,251.2l0.3-0.4c0.7-1.2,1.7-2.1,2.5-2.9c2.5-2.3,5-4.8,3.8-14.2v-0.1v-0.1c1.9-2.7,2.1-6.6,0.4-12.3
              c-2.6-6-6.2-9.7-10.7-11.1l0,0c-2.1-0.6-4.4-0.8-7-0.4l-0.1-0.3c2.6-0.9,5-1.3,7.2-1.3c4.5,0,8.3,1.9,11.3,5.5
              c2.3,2.8,3.7,6.2,4.3,9.9c1.4,9.7,0.1,16.9-3.7,21.8c-1.9,2.4-4.5,4.4-7.9,5.8L358.6,251.2z M365.5,233.6
              c1.2,9.6-1.4,12.1-3.9,14.5c-0.8,0.7-1.5,1.5-2.2,2.4c3-1.4,5.5-3.2,7.2-5.5c3.8-4.8,5-11.9,3.7-21.5c-0.5-3.6-2-7-4.2-9.7
              c-2.9-3.6-6.6-5.4-11.1-5.4c-1.7,0-3.6,0.3-5.5,0.8c2-0.1,3.8,0.1,5.5,0.6l0,0c4.6,1.4,8.2,5.2,10.9,11.3
              C367.6,226.9,367.5,230.8,365.5,233.6z"
                />
            </g>
            <g id="d-27-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M355,209.9c4.5,1.4,8.1,5.1,10.8,11.2c1.7,5.8,1.6,9.7-0.4,12.5c1.2,9.6-1.4,12-3.9,14.4
              c-0.9,0.8-1.8,1.7-2.5,2.9c3.3-1.4,5.9-3.4,7.8-5.8c3.9-4.9,5.1-12,3.7-21.7c-0.5-3.6-2-7-4.2-9.8c-3-3.6-6.7-5.4-11.2-5.4
              c-2.2,0-4.6,0.5-7.2,1.3C350.5,209.2,352.8,209.3,355,209.9z"
                />
                <path
                    className="borderNegro"
                    d="M358.6,251.2l0.3-0.4c0.7-1.2,1.7-2.1,2.5-2.9c2.5-2.3,5-4.8,3.8-14.2v-0.1v-0.1c1.9-2.7,2.1-6.6,0.4-12.3
              c-2.6-6-6.2-9.7-10.7-11.1l0,0c-2.1-0.6-4.4-0.8-7-0.4l-0.1-0.3c2.6-0.9,5-1.3,7.2-1.3c4.5,0,8.3,1.9,11.3,5.5
              c2.3,2.8,3.7,6.2,4.3,9.9c1.4,9.7,0.1,16.9-3.7,21.8c-1.9,2.4-4.5,4.4-7.9,5.8L358.6,251.2z M365.5,233.6
              c1.2,9.6-1.4,12.1-3.9,14.5c-0.8,0.7-1.5,1.5-2.2,2.4c3-1.4,5.5-3.2,7.2-5.5c3.8-4.8,5-11.9,3.7-21.5c-0.5-3.6-2-7-4.2-9.7
              c-2.9-3.6-6.6-5.4-11.1-5.4c-1.7,0-3.6,0.3-5.5,0.8c2-0.1,3.8,0.1,5.5,0.6l0,0c4.6,1.4,8.2,5.2,10.9,11.3
              C367.6,226.9,367.5,230.8,365.5,233.6z"
                />
            </g>
            <g id="d-num-usa-27" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path className="colorNumber" d="M387.8,231.2h-3.2v-10.5c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V231.2z" />
                <path
                    className="colorNumber"
                    d="M390.2,226.8h2.7c0.2,1.2,1.2,1.9,2.5,1.9c1.5,0,2.5-1,2.5-2.4c0-1.5-1-2.5-2.6-2.5c-1.1,0-1.8,0.4-2.2,1.1
              h-2.7l1.2-8.5h8.2v2.7H394l-0.4,2.9c0.6-0.4,1.3-0.6,2.2-0.6c3,0,5.1,2,5.1,4.9c0,3-2.3,5-5.5,5
              C392.7,231.4,390.4,229.2,390.2,226.8z"
                />
            </g>
            <g id="d-num-eur-27" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M387.1,216.3c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7h-10.5
              l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
              C381.7,218.4,383.8,216.3,387.1,216.3z"
                />
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M396.8,223.9l3-4.7h-7.4v-2.7h10.9v2.5l-3.8,5.9c-1.3,2-1.6,3.8-1.6,6.4h-3.1
              C394.8,228.5,395.3,226.4,396.8,223.9z"
                />
            </g>
        </g>
    );
}
