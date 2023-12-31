export default function Teeth23({ onClick, teeths, number }) {
    return (
        <g id="d-23" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={23} data-classreset="diente reset" data-nearbyteeth="24-22" onClick={onClick}>
            <path
                id="pontic-23"
                className="pontic reset"
                d="M266.4,115.5c-0.9,0-1.8,0.3-2.5,0.7c-0.2,0.1-0.5,0.3-0.7,0.5c-1.1,0.9-1.8,2.3-1.8,3.8c0,2.7,2.2,5,5,5
      c0.8,0,1.6-0.2,2.3-0.6c0.2-0.1,0.5-0.3,0.7-0.4c1.2-0.9,2-2.3,2-4C271.3,117.7,269.1,115.5,266.4,115.5z"
                data-classreset="pontic reset"
            />
            <path
                id="d-23-background"
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
                d="M304.6,110.2c5.9-2,8.6-5.5,9.2-10.2c0.7-4.6-0.1-9-2.8-13.3c-2.4-6.7-4.8-6.3-7.2-6.8
          c-2.1,0.3-4.1,0.1-6-0.1c-5.7-0.3-7.9,2.3-9.2,4c-4.8,6.5-4.3,10.2-5.5,14.9c-0.6,5.1-0.3,9.5,2.3,11.9c7.9,5.9,9.3,3,12.6,2.8
          C304.2,110.7,302.6,111.1,304.6,110.2L304.6,110.2z"
            />
            <g id="d-23-raices" className="raices reset" data-classreset="raices reset">
                <g id="path4350_00000074403920636604446120000017227816318397531062_">
                    <path
                        d="M308.2,103.7c-0.1,0-0.2-0.1-0.2-0.2c-0.3-6.1-0.8-12.2-3.7-15.1c-3.2-3.3-7-5.3-11.8-6.1
                  c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1c4.8,0.8,8.7,2.8,12,6.2c3,3,3.6,9.2,3.8,15.3
                  C308.4,103.6,308.3,103.7,308.2,103.7C308.3,103.7,308.3,103.7,308.2,103.7z"
                    />
                </g>
                <g id="path4352_00000096766426088589952810000003868787559690845624_">
                    <path
                        d="M288.1,101c-0.1,0-0.3,0-0.4-0.1c-1-0.6-0.2-3.7,1.4-9.8c0.3-1,0.6-2.2,0.9-3.4c0-0.1,0.1-0.1,0.2-0.1
                  s0.1,0.1,0.1,0.2c-0.3,1.2-0.6,2.3-0.9,3.4c-1.4,5.4-2.3,8.9-1.6,9.4c0.7,0.4,3.5-1.9,6.3-4.6c0.1-0.1,0.2-0.1,0.2,0
                  c0.1,0.1,0.1,0.2,0,0.2C290.8,99.7,289,101,288.1,101z"
                    />
                </g>
                <g id="path4354_00000070796900306283632510000005093426125889952699_">
                    <path
                        d="M295.6,108.1c-0.5,0-0.9-0.1-1.1-0.4c-0.4-0.5-0.5-1.9,3.6-6.9c0.1-0.1,0.2-0.1,0.2,0c0.1,0.1,0.1,0.2,0,0.2
                  c-3.7,4.5-4,6-3.6,6.5c0.9,1.2,7.1-1.8,9.1-2.8c0.1,0,0.2,0,0.2,0.1s0,0.2-0.1,0.2C299.8,107.1,297.1,108.1,295.6,108.1z"
                    />
                </g>
            </g>
            <g id="d-23-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
                <path d="M306.3,119.3l-5.2-10.4l5.9-3l5.2,10.4c0.7,1.3,0.1,2.9-1.2,3.6l-1.1,0.6C308.5,121.1,306.9,120.6,306.3,119.3z" />
                <path d="M282.2,76.2l9.5,8.5l-4.4,4.9l-9.5-8.5c-1.1-1-1.2-2.7-0.2-3.8l0.9-1C279.4,75.3,281.1,75.2,282.2,76.2z" />
            </g>
            <circle id="d-23-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="295.4" cy="99.5" r={5} />
            <g id="d-23-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M297.8,79.6c1.7,0.2,3.7,0.4,5.9,0.1l0,0l0,0c0.2,0,0.5,0.1,0.7,0.1c2.2,0.3,4.4,0.7,6.6,6.8
              c2.6,4.1,3.6,8.6,2.8,13.4c-0.2,1.9-0.8,3.5-1.7,4.9c2.6-1.9,4.1-4.5,4.5-7.8c0.4-2.4,0.4-9.8-3.8-14.9c-2.8-3.3-6.8-5-12-5.1
              c-0.3,0-0.5,0-0.8,0c-4.5,0-6.6,1.9-7.9,3.4C293.7,79.9,295.4,79.5,297.8,79.6z"
                />
                <path
                    className="borderNegro"
                    d="M312.4,105l-0.2-0.2c0.9-1.4,1.4-3,1.7-4.8c0.8-4.7-0.2-9.2-2.8-13.3c-2.2-6.1-4.4-6.4-6.5-6.7h-0.1
              c-0.2,0-0.5-0.1-0.7-0.1c-2.3,0.3-4.3,0.1-6-0.1c-2.1-0.1-3.9,0.2-5.4,0.9l-0.2-0.3c1.5-1.8,3.8-3.7,8.8-3.5
              c5.3,0.1,9.4,1.8,12.2,5.2c4.3,5.1,4.2,12.6,3.9,15C316.5,100.5,315,103.1,312.4,105z M303.8,79.5L303.8,79.5
              c0.3,0,0.5,0.1,0.7,0.1h0.1c2.2,0.3,4.5,0.7,6.7,6.9c2.7,4.1,3.6,8.7,2.9,13.5c-0.2,1.6-0.6,3-1.3,4.2c2.1-1.8,3.4-4.2,3.8-7.2
              c0.4-2.4,0.4-9.8-3.8-14.8c-2.7-3.3-6.8-5-11.9-5.1c-0.3,0-0.5,0-0.8,0c-3.9,0-5.9,1.4-7.3,2.9c1.4-0.5,3.1-0.7,4.9-0.7l0,0
              C299.5,79.6,301.5,79.8,303.8,79.5L303.8,79.5z"
                />
            </g>
            <g id="d-23-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M297.8,79.6c1.7,0.2,3.7,0.4,5.9,0.1l0,0l0,0c0.2,0,0.5,0.1,0.7,0.1c2.2,0.3,4.4,0.7,6.6,6.8
              c2.6,4.1,3.6,8.6,2.8,13.4c-0.2,1.9-0.8,3.5-1.7,4.9c2.6-1.9,4.1-4.5,4.5-7.8c0.4-2.4,0.4-9.8-3.8-14.9c-2.8-3.3-6.8-5-12-5.1
              c-0.3,0-0.5,0-0.8,0c-4.5,0-6.6,1.9-7.9,3.4C293.7,79.9,295.4,79.5,297.8,79.6z"
                />
                <path
                    className="borderNegro"
                    d="M312.4,105l-0.2-0.2c0.9-1.4,1.4-3,1.7-4.8c0.8-4.7-0.2-9.2-2.8-13.3c-2.2-6.1-4.4-6.4-6.5-6.7h-0.1
              c-0.2,0-0.5-0.1-0.7-0.1c-2.3,0.3-4.3,0.1-6-0.1c-2.1-0.1-3.9,0.2-5.4,0.9l-0.2-0.3c1.5-1.8,3.8-3.7,8.8-3.5
              c5.3,0.1,9.4,1.8,12.2,5.2c4.3,5.1,4.2,12.6,3.9,15C316.5,100.5,315,103.1,312.4,105z M303.8,79.5L303.8,79.5
              c0.3,0,0.5,0.1,0.7,0.1h0.1c2.2,0.3,4.5,0.7,6.7,6.9c2.7,4.1,3.6,8.7,2.9,13.5c-0.2,1.6-0.6,3-1.3,4.2c2.1-1.8,3.4-4.2,3.8-7.2
              c0.4-2.4,0.4-9.8-3.8-14.8c-2.7-3.3-6.8-5-11.9-5.1c-0.3,0-0.5,0-0.8,0c-3.9,0-5.9,1.4-7.3,2.9c1.4-0.5,3.1-0.7,4.9-0.7l0,0
              C299.5,79.6,301.5,79.8,303.8,79.5L303.8,79.5z"
                />
            </g>
            <g id="d-num-usa-23" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path className="colorNumber" d="M323.4,78.2h-3.2V67.7c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V78.2z" />
                <path className="colorNumber" d="M331.7,78.2h-3.2V67.7c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V78.2z" />
            </g>
            <g id="d-num-eur-23" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M322.7,63.3c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7h-10.5
              l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
              C317.4,65.4,319.5,63.3,322.7,63.3z"
                />
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M329.4,73.5h3c0,1.4,1.1,2.1,2.5,2.1c1.4,0,2.4-0.7,2.4-1.9c0-1.1-0.9-1.8-2.4-1.8h-1.4v-2.6h1.3
              c1.2,0,1.9-0.7,1.9-1.8c0-1-0.8-1.7-2.1-1.7c-1.2,0-2.1,0.7-2.1,1.9h-2.9c0-2.8,2.4-4.5,5-4.5c2.9,0,5,1.8,5,4
              c0,1.2-0.7,2.4-1.7,3.1c1.4,0.7,2.4,1.7,2.4,3.4c0,2.9-2.6,4.5-5.5,4.5C331.9,78.4,329.4,76.6,329.4,73.5z"
                />
            </g>
        </g>
    );
}
