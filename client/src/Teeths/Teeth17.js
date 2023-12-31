export default function Teeth17({ onClick, teeths, number }) {
    return (
        <g id="d-17" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={17} data-classreset="diente reset" data-nearbyteeth="18-16" style={{ cursor: "pointer" }} onClick={onClick}>
            <path
                id="pontic-17"
                className="pontic reset"
                d="M133.8,236.2c-0.3-0.1-0.7-0.1-1-0.1c-0.2,0-0.4,0-0.5,0c-4,0-7.2,3.2-7.2,7.2c0,3.5,2.4,6.4,5.7,7.1
      c0.3,0.1,0.7,0.1,1,0.1c0.2,0,0.4,0,0.5,0c4,0,7.2-3.2,7.2-7.2C139.5,239.8,137.1,236.9,133.8,236.2z"
                data-classreset="pontic reset"
            />
            <path
                id="inlay-onlay-17"
                className="inlay-onlay reset"
                style={{ display: teeths[number]?.RT == "Onlay" || teeths[number]?.RT == "Inlay" ? "block" : "none" }}
                d="M76,219.5c0,0,2.1-0.4,3-1.7s3.2-7.4,9.1-5c5.8,2.4,15.5,12.5,15.5,12.5s2.3,2.7,2.3,4.6
          c0,0,2.2,4.7-2.2,9.3l-4.1,4.7l-0.9,1.2c0,0-3.3,6.7-10.4,4.8s-10.4-6.3-10.4-6.3s-3.5-2.7-1.6-11.2c0,0-2.8-5.5-1.6-9.5
          C76,218.7,76,219.5,76,219.5z"
                data-classreset="inlay-onlay reset"
            />
            <path
                id="d-17-background"
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
                d="M71.3,232.5c-2.2-3-1.9-7.3-0.4-12.4c5.6-12.9,15.7-15.6,31.4-5.7
          c4.9,2,8.8,5.8,11.4,9.6c2.5,3.8,4.9,5.6,3.6,12.2c-2.9,11.2-7.9,20-22,18.3c-5.6-0.7-10.6,0.8-17.7-4.8
          C74.9,245.2,69.6,245.5,71.3,232.5L71.3,232.5z"
            />
            <g id="d-17-raices" className="raices reset" data-classreset="raices reset">
                <g id="path5173_00000139258400822114858850000012240689761062490532_">
                    <path
                        d="M91.1,252.7c-1.2,0-2.5-0.2-3.9-0.7c-14.8-5.4-14.9-12.6-12.7-19.6c-3.6-8.6-2.3-10.8-1.1-12.8
                  c0.3-0.5,0.6-1,0.8-1.6v-0.1h0.1c0.3-0.1,0.5-0.3,0.8-0.4c0.9-0.4,1.7-0.8,2.5-1.8c1.6-3.5,3.6-5.5,6.1-6
                  c5.1-1,11.2,4.6,17.2,10.1c0.6,0.6,1.3,1.2,1.9,1.8c0.5,0.6,1,1.1,1.5,1.6c1.5,1.6,3.2,3.2,3.8,6.5c2.2,5.5-1.2,9.3-4.5,12.9
                  c-1.2,1.3-2.3,2.5-3.2,3.8C97.8,250.2,95.1,252.7,91.1,252.7z M74.5,218.3c-0.2,0.6-0.5,1.1-0.8,1.6c-1.2,2-2.5,4.1,1.1,12.6v0.1
                  v0.1c-2.1,6.8-2,13.9,12.5,19.2c6.2,2,9.6-0.8,12.8-5.5c0.9-1.3,2.1-2.6,3.2-3.9c3.2-3.6,6.6-7.2,4.5-12.6
                  c-0.6-3.2-2.1-4.7-3.7-6.3c-0.5-0.5-1-1-1.5-1.6c-0.6-0.6-1.3-1.2-1.9-1.7c-5.9-5.4-12-11-16.9-10c-2.4,0.5-4.3,2.4-5.9,5.8l0,0
                  c-0.9,1.1-1.8,1.5-2.6,1.9C75,218,74.7,218.1,74.5,218.3z"
                    />
                </g>
                <g id="path5175_00000011009371884295003240000017110061542026511262_">
                    <path
                        d="M94.6,249.7L94.6,249.7l-1.4-1.2l0.1-0.1c0.4-0.9-0.1-1.4-0.7-2c-0.1-0.1-0.1-0.1-0.2-0.2l0,0
                  c-0.3-0.6-0.6-1-0.9-1.4c-0.9-1.1-1.9-2.3-1.8-6.9c0.1-1.1,0.1-2.3,0.2-3.8c0-0.2-0.1-0.4-0.2-0.6c-0.3-0.8-0.7-1.8,1-3.3h0.1
                  c1.9-0.6,1.9-1.8,1.9-3.2c0-0.2,0-0.4,0-0.6c0.2-1.5,0.7-2.5,1.5-3.1c0.7-0.5,1.7-0.7,3-0.5c1,0,2,0,3.4-0.7c0.1,0,0.2,0,0.2,0.1
                  s0,0.2-0.1,0.2c-1.5,0.8-2.5,0.8-3.6,0.8c-1.2-0.2-2.1,0-2.8,0.5c-0.7,0.5-1.2,1.5-1.4,2.9c0,0.2,0,0.4,0,0.6
                  c0,1.3,0,2.8-2.1,3.5c-1.5,1.4-1.2,2.2-0.9,3c0.1,0.2,0.2,0.4,0.2,0.7l0,0l0,0c0,1.5-0.1,2.7-0.2,3.8c0,4.5,0.8,5.6,1.7,6.7
                  c0.3,0.4,0.7,0.8,1,1.4c0.1,0.1,0.1,0.1,0.2,0.2c0.6,0.6,1.2,1.3,0.8,2.3L94.6,249.7c0.2,0.2,0.2,0.3,0.1,0.3
                  C94.7,249.6,94.6,249.7,94.6,249.7z"
                    />
                </g>
                <g id="path5177_00000052818589669799572920000018357158289252669833_">
                    <path
                        d="M94.9,223.1c-0.1,0-0.1-0.1-0.2-0.1c-0.2-1.6-0.6-3.6-1.8-4.5l0,0c-1-1.2-1.5-2.5-2.1-3.7l0.1-0.2
                  c0-0.1,0-0.2,0.1-0.2s0.2,0,0.2,0.1l0.1,0.1c0.5,1.2,1.1,2.4,2,3.6c1.2,0.9,1.6,3,1.9,4.7C95.1,223,95.1,223.1,94.9,223.1
                  C95,223.1,95,223.1,94.9,223.1z"
                    />
                </g>
                <g id="path5179_00000170986353521234184100000011235737842514880152_">
                    <path
                        d="M92.8,225.1C92.8,225.1,92.7,225.1,92.8,225.1l-8.2-6V219c-0.4-1.6-2.4-1.6-4.4-1.7v-0.2v-0.2
                  c2.1,0.1,4.2,0.2,4.7,1.9l8,5.9c0.1,0.1,0.1,0.2,0,0.2C92.9,225.1,92.9,225.1,92.8,225.1z M80.2,217.1v-0.2V217.1z"
                    />
                </g>
                <g id="path5181_00000093162547656762314830000008382099191448461499_">
                    <path
                        d="M86.4,232.9c-1.6,0-2.9-0.5-4.1-1l-5.9-0.8c-0.1,0-0.2-0.1-0.1-0.2c0-0.1,0.1-0.2,0.2-0.1l6,0.8
                  c2,0.9,4.4,1.7,7.5,0.2c0.1,0,0.2,0,0.2,0.1s0,0.2-0.1,0.2C88.6,232.7,87.5,232.9,86.4,232.9z"
                    />
                </g>
                <g id="path5183_00000050621812994222678660000007986537755702424721_">
                    <path
                        d="M88,249.8c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.2,0-0.2l1.5-1.3c-0.2-2.3-0.1-3.6,0.5-4.1
                  c0.3-0.2,0.7-0.2,1.3,0c0.1,0,0.1,0.1,0.1,0.2s-0.1,0.1-0.2,0.1c-0.4-0.2-0.7-0.2-0.9-0.1c-0.5,0.4-0.6,1.7-0.4,3.9v0.1l-1.6,1.4
                  C88.1,249.8,88.1,249.8,88,249.8z"
                    />
                </g>
                <g id="path5185_00000127007571377211872440000013905584121211232432_">
                    <path
                        d="M97.4,236.5C97.3,236.5,97.3,236.5,97.4,236.5c-1.5-0.6-2.9-1.2-4.3-2.1l-3.1,0.3c-0.1,0-0.2-0.1-0.2-0.1
                  c0-0.1,0.1-0.2,0.1-0.2l3.3-0.3l0,0c1.4,1,2.8,1.6,4.2,2.1c0.1,0,0.1,0.1,0.1,0.2C97.5,236.5,97.4,236.5,97.4,236.5z"
                    />
                </g>
            </g>
            <g id="d-17-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
                <path className="st8" d="M104.5,203.3l-4.8,11.7l-6.1-2.5l4.8-11.7c0.6-1.4,2.1-2,3.5-1.5l1.2,0.5C104.4,200.4,105,202,104.5,203.3z" />
                <path className="st8" d="M84,263.8l0.5-12.7l6.6,0.3l-0.5,12.7c-0.1,1.5-1.3,2.6-2.8,2.6l-1.3-0.1C85.1,266.5,84,265.3,84,263.8z" />
            </g>
            <circle id="d-17-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="90.4" cy="233.1" r={5} />
            <g id="d-17-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M77.5,249.8c-0.7-1.2-1.6-2.1-2.5-2.9c-2.5-2.4-5.1-4.8-3.9-14.4c-2-2.7-2.1-6.7-0.4-12.4
              c2.6-6,6.3-9.8,10.8-11.2c2-0.6,4.3-0.8,6.8-0.4c-4.1-1.7-7.5-2.1-10.3-1.2c-3.8,1.2-6.8,4.7-9.7,11.3c-4.2,16.6,0,22.1,3,26.1
              c0.6,0.7,1.1,1.4,1.5,2.2c1.9,1.5,3.5,2.5,5.1,3.2C77.7,250,77.6,249.9,77.5,249.8L77.5,249.8z"
                />
                <path
                    className="borderNegro"
                    d="M77.7,250.2c-1.6-0.8-3.3-1.9-5.1-3.3l0,0c-0.4-0.7-1-1.4-1.5-2.1c-3-4-7.2-9.6-3-26.3
              c2.9-6.7,6-10.2,9.9-11.4c2.8-0.9,6.2-0.5,10.4,1.2l-0.1,0.3c-2.4-0.3-4.7-0.2-6.7,0.4c-4.5,1.4-8.1,5.1-10.7,11.1
              c-1.7,5.7-1.5,9.6,0.4,12.3v0.1v0.1c-1.2,9.5,1.3,11.9,3.8,14.2c0.9,0.9,1.8,1.7,2.6,2.9l0,0c0,0,0.1,0,0.1,0.1l0.1,0.1
              L77.7,250.2z M72.9,246.7c1.5,1.2,2.9,2.1,4.2,2.8c-0.7-1-1.5-1.8-2.3-2.5c-2.5-2.4-5.1-4.9-3.9-14.5c-2-2.8-2.1-6.8-0.4-12.5
              c2.7-6.1,6.3-9.9,10.9-11.3c1.7-0.5,3.6-0.7,5.6-0.6c-3.6-1.3-6.5-1.5-9-0.8c-3.8,1.2-6.8,4.6-9.6,11.2c-4.2,16.5,0,22,3,26
              C71.9,245.3,72.4,246,72.9,246.7z"
                />
            </g>
            <g id="d-17-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M77.5,249.8c-0.7-1.2-1.6-2.1-2.5-2.9c-2.5-2.4-5.1-4.8-3.9-14.4c-2-2.7-2.1-6.7-0.4-12.4
              c2.6-6,6.3-9.8,10.8-11.2c2-0.6,4.3-0.8,6.8-0.4c-4.1-1.7-7.5-2.1-10.3-1.2c-3.8,1.2-6.8,4.7-9.7,11.3c-4.2,16.6,0,22.1,3,26.1
              c0.6,0.7,1.1,1.4,1.5,2.2c1.9,1.5,3.5,2.5,5.1,3.2C77.7,250,77.6,249.9,77.5,249.8L77.5,249.8z"
                />
                <path
                    className="borderNegro"
                    d="M77.7,250.2c-1.6-0.8-3.3-1.9-5.1-3.3l0,0c-0.4-0.7-1-1.4-1.5-2.1c-3-4-7.2-9.6-3-26.3
              c2.9-6.7,6-10.2,9.9-11.4c2.8-0.9,6.2-0.5,10.4,1.2l-0.1,0.3c-2.4-0.3-4.7-0.2-6.7,0.4c-4.5,1.4-8.1,5.1-10.7,11.1
              c-1.7,5.7-1.5,9.6,0.4,12.3v0.1v0.1c-1.2,9.5,1.3,11.9,3.8,14.2c0.9,0.9,1.8,1.7,2.6,2.9l0,0c0,0,0.1,0,0.1,0.1l0.1,0.1
              L77.7,250.2z M72.9,246.7c1.5,1.2,2.9,2.1,4.2,2.8c-0.7-1-1.5-1.8-2.3-2.5c-2.5-2.4-5.1-4.9-3.9-14.5c-2-2.8-2.1-6.8-0.4-12.5
              c2.7-6.1,6.3-9.9,10.9-11.3c1.7-0.5,3.6-0.7,5.6-0.6c-3.6-1.3-6.5-1.5-9-0.8c-3.8,1.2-6.8,4.6-9.6,11.2c-4.2,16.5,0,22,3,26
              C71.9,245.3,72.4,246,72.9,246.7z"
                />
            </g>
            <g id="d-num-usa-17" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path
                    className="colorNumber"
                    d="M48.4,216.3c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7H43.1
              l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
              C43,218.4,45.1,216.3,48.4,216.3z"
                />
            </g>
            <g id="d-num-eur-17" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M43.1,231.2h-3.2v-10.5c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V231.2z" />
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M49.6,223.9l3-4.7h-7.4v-2.7h10.9v2.5l-3.8,5.9c-1.3,2-1.6,3.8-1.6,6.4h-3.1C47.6,228.5,48,226.4,49.6,223.9z
              "
                />
            </g>
        </g>
    );
}
