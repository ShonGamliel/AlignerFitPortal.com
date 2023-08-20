export default function Teeth12({ onClick, teeths, number }) {
    return (
        <g id="d-12" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={12} data-classreset="diente reset" data-nearbyteeth="13-11" onClick={onClick}>
            <path
                id="pontic-12"
                className="pontic reset"
                d="M190.5,102.6c-0.2-0.2-0.4-0.4-0.6-0.6c-0.8-0.7-1.9-1.1-3-1.1c-2.6,0-4.7,2.1-4.7,4.7
    c0,1,0.3,1.8,0.8,2.6c0.2,0.2,0.3,0.4,0.5,0.6c0.9,0.9,2.1,1.5,3.4,1.5c2.6,0,4.7-2.1,4.7-4.7C191.6,104.4,191.2,103.4,190.5,102.6
    z"
                data-classreset="pontic reset"
            />
            <path
                id="d-12-background"
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
                d="M153,71.7c14.4-9.5,11.5-6.7,17.7-8.8c2.2-0.8,3.9-0.9,4.9,0.6l3.4,3.4c2.3,2.9,2.1,3.5,2.4,4.5
        c1.1,8.9-0.2,8.7-0.4,12.5c-1.7,3.2-3.6,6.1-7,7.5c-2.1,1.5-5,1.3-8,0.8l-5-1.2c-2,0.3-3.7-1-5.4-2.2c-3.7-2.6-4.6-6.2-5.9-9.7
        c-0.3-2.3,0.4-4.3,1.9-6.1L153,71.7z"
            />
            <g id="d-12-raices" className="raices reset" data-classreset="raices reset">
                <g id="path3902_00000085223582103373780970000016667005499142360203_">
                    <path
                        d="M157.1,87.9c-0.1,0-0.1,0-0.1-0.1c-0.3-0.4-0.6-0.9-0.9-1.3c-1.8-2.5-3.7-5.1-0.4-10.2l0,0
                c2.5-1.9,4.6-2.9,6.7-3.9c0.8-0.4,1.7-0.8,2.5-1.2c2.4-1.2,5.1-2.6,7.1-2.4c5.3-0.5,5.6,0.2,5.8,1c0.1,0.3,0.2,0.6,0.8,0.7
                c0.1,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.1-0.2,0.1c-0.8-0.2-0.9-0.6-1-0.9c-0.2-0.6-0.5-1.2-5.5-0.7c-1.9-0.2-4.6,1.2-7,2.4
                c-0.9,0.5-1.7,0.9-2.5,1.2c-2,1-4.1,1.9-6.6,3.8c-3.1,4.9-1.4,7.3,0.4,9.8c0.3,0.4,0.6,0.9,0.9,1.3
                C157.3,87.8,157.3,87.9,157.1,87.9C157.2,87.9,157.1,87.9,157.1,87.9z"
                    />
                </g>
                <g id="path3904_00000168825970101220483740000002404567437022350239_">
                    <path
                        d="M176.4,82.4L176.4,82.4c-2-1.1-2.6-4.5-3.2-7.8l-0.1-0.4c0-0.1,0-0.2,0.1-0.2s0.2,0,0.2,0.1l0.1,0.4
                c0.6,3.2,1.3,6.6,3,7.6c0.1,0,0.1,0.1,0.1,0.2C176.6,82.3,176.5,82.4,176.4,82.4z"
                    />
                </g>
                <g id="path3906_00000020381450281181193210000013722144251277161100_">
                    <path
                        d="M168.9,88.7L168.9,88.7c-0.1,0-0.2-0.1-0.2-0.2c0.2-2.4-2.9-3.7-5.9-4.9c-0.5-0.2-1-0.4-1.5-0.6
                c-0.1,0-0.1-0.1-0.1-0.2s0.1-0.1,0.2-0.1c0.5,0.2,1,0.4,1.5,0.6c3.1,1.3,6.4,2.6,6.1,5.2C169,88.6,168.9,88.7,168.9,88.7z"
                    />
                </g>
            </g>
            <circle id="d-12-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="166.5" cy="78.1" r={5} />
            <g id="d-12-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M151,83.6c0.1,0.1,0.2,0.2,0.3,0.4c0,0,0,0,0.1,0c-0.6-1.2-1.1-2.5-1.5-3.8c-0.1-0.4-0.3-0.7-0.4-1.1
            c-0.3-2.3,0.4-4.4,1.9-6.2l1.5-1.3c10.8-7.1,11.9-7.4,14.4-7.9c0.8-0.2,1.8-0.4,3.3-0.9c1.6-0.6,3.9-1.2,5,0.6l2.5,2.5
            c0-0.5-0.1-1-0.2-1.5c0,0-0.1-0.1-0.1-0.2c-0.1-0.1-0.2-0.3-0.3-0.5c-1.6-3.7-4.7-4.8-9.7-3.3c-16.1,4.8-20.1,10.8-20.7,14.9
            c-0.3,2.4,0.4,4.5,1.5,6.2C149.7,82.1,150.4,83,151,83.6z"
                />
                <path
                    className="borderNegro"
                    d="M151.7,84.4l-0.6-0.3l-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c-0.5-0.6-1.2-1.5-2.2-2.2l0,0c-0.9-1.4-1.9-3.6-1.5-6.3
            c0.6-4.2,4.7-10.1,20.8-15c5-1.5,8.3-0.4,9.9,3.4c0.1,0.2,0.2,0.3,0.3,0.4s0.1,0.2,0.1,0.2c0.1,0.6,0.1,1.1,0.2,1.6v0.5l-2.9-2.9
            c-1.1-1.7-3.3-1.2-4.9-0.6c-1.6,0.5-2.5,0.7-3.4,0.9c-2.4,0.5-3.5,0.8-14.3,7.9l-1.6,1.3c-1.5,1.8-2.1,3.8-1.9,6.1
            c0.1,0.3,0.2,0.6,0.3,0.9l0.1,0.2c0.5,1.3,0.9,2.6,1.5,3.8L151.7,84.4z M148.8,81.2c0.8,0.6,1.3,1.2,1.8,1.7
            c-0.4-0.9-0.7-1.8-1-2.7l-0.1-0.2c-0.1-0.3-0.2-0.6-0.3-0.9c-0.3-2.4,0.4-4.5,1.9-6.4l1.6-1.4c10.9-7.1,12-7.4,14.4-7.9
            c0.8-0.2,1.8-0.4,3.3-0.9c1.7-0.6,4.1-1.2,5.2,0.7l2.2,2.2c0-0.3-0.1-0.7-0.1-1.1l-0.1-0.1c-0.1-0.1-0.2-0.3-0.3-0.5
            c-1.5-3.7-4.6-4.7-9.5-3.3c-16,4.8-20,10.7-20.6,14.7C147,77.8,148,79.9,148.8,81.2z"
                />
            </g>
            <g id="d-12-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M151,83.6c0.1,0.1,0.2,0.2,0.3,0.4c0,0,0,0,0.1,0c-0.6-1.2-1.1-2.5-1.5-3.8c-0.1-0.4-0.3-0.7-0.4-1.1
            c-0.3-2.3,0.4-4.4,1.9-6.2l1.5-1.3c10.8-7.1,11.9-7.4,14.4-7.9c0.8-0.2,1.8-0.4,3.3-0.9c1.6-0.6,3.9-1.2,5,0.6l2.5,2.5
            c0-0.5-0.1-1-0.2-1.5c0,0-0.1-0.1-0.1-0.2c-0.1-0.1-0.2-0.3-0.3-0.5c-1.6-3.7-4.7-4.8-9.7-3.3c-16.1,4.8-20.1,10.8-20.7,14.9
            c-0.3,2.4,0.4,4.5,1.5,6.2C149.7,82.1,150.4,83,151,83.6z"
                />
                <path
                    className="borderNegro"
                    d="M151.7,84.4l-0.6-0.3l-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c-0.5-0.6-1.2-1.5-2.2-2.2l0,0c-0.9-1.4-1.9-3.6-1.5-6.3
            c0.6-4.2,4.7-10.1,20.8-15c5-1.5,8.3-0.4,9.9,3.4c0.1,0.2,0.2,0.3,0.3,0.4s0.1,0.2,0.1,0.2c0.1,0.6,0.1,1.1,0.2,1.6v0.5l-2.9-2.9
            c-1.1-1.7-3.3-1.2-4.9-0.6c-1.6,0.5-2.5,0.7-3.4,0.9c-2.4,0.5-3.5,0.8-14.3,7.9l-1.6,1.3c-1.5,1.8-2.1,3.8-1.9,6.1
            c0.1,0.3,0.2,0.6,0.3,0.9l0.1,0.2c0.5,1.3,0.9,2.6,1.5,3.8L151.7,84.4z M148.8,81.2c0.8,0.6,1.3,1.2,1.8,1.7
            c-0.4-0.9-0.7-1.8-1-2.7l-0.1-0.2c-0.1-0.3-0.2-0.6-0.3-0.9c-0.3-2.4,0.4-4.5,1.9-6.4l1.6-1.4c10.9-7.1,12-7.4,14.4-7.9
            c0.8-0.2,1.8-0.4,3.3-0.9c1.7-0.6,4.1-1.2,5.2,0.7l2.2,2.2c0-0.3-0.1-0.7-0.1-1.1l-0.1-0.1c-0.1-0.1-0.2-0.3-0.3-0.5
            c-1.5-3.7-4.6-4.7-9.5-3.3c-16,4.8-20,10.7-20.6,14.7C147,77.8,148,79.9,148.8,81.2z"
                />
            </g>
            <g id="d-num-usa-12" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path
                    className="colorNumber"
                    d="M143.3,43.9l3-4.7h-7.4v-2.7h10.9v2.5l-3.8,5.9c-1.3,2-1.6,3.8-1.6,6.4h-3.1
            C141.3,48.5,141.7,46.4,143.3,43.9z"
                />
            </g>
            <g id="d-num-eur-12" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path className="colorNumber" d="M145.1,51.2h-3.2V40.7c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V51.2z" style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} />
                <path
                    className="colorNumber"
                    d="M152.7,36.3c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7h-10.5
            l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
            C147.3,38.4,149.4,36.3,152.7,36.3z"
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                />
            </g>
        </g>
    );
}
