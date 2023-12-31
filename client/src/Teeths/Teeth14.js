export default function Teeth14({ onClick, teeths, number }) {
    return (
        <g id="d-14" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={14} data-classreset="diente reset" data-nearbyteeth="15-13" style={{ cursor: "pointer" }} onClick={onClick}>
            <path
                id="pontic-14"
                className="pontic reset"
                d="M165.1,133.8c-0.3-0.1-0.6-0.3-0.9-0.4c-0.6-0.2-1.3-0.3-2-0.3c-3.5,0-6.3,2.8-6.3,6.3
      c0,2.2,1.2,4.2,3,5.3c0.3,0.2,0.5,0.3,0.8,0.4c0.8,0.3,1.6,0.5,2.5,0.5c3.5,0,6.3-2.8,6.3-6.3C168.5,137,167.1,134.9,165.1,133.8z"
                data-classreset="pontic reset"
            />
            <path
                id="inlay-onlay-14"
                className="inlay-onlay reset"
                style={{ display: teeths[number]?.RT == "Onlay" || teeths[number]?.RT == "Inlay" ? "block" : "none" }}
                d="M119.7,133.7c0,0,5.4,2.7,9.7,1.5c0,0,3.3,0.2,7.1-1.6s3.9-5.8,3.9-5.8s0.1-2-0.1-2.6
          c-0.2-0.6,0.7-4.4,0.7-4.4s-0.1-3-1-3.5c-0.8-0.5-5.7-0.2-7.5-2.5c-1.9-2.2-3.3-3.1-3.3-2.9c0,0-0.3,1.5-1.1,2
          c-0.8,0.4-2.8,1-3.1,3.4c-0.4,2.4,1.2,5.4,1.2,5.4s0.7,2.8-0.7,3.5s-2.7,2.2-3.6,3.4C120.8,130.7,119.5,133.2,119.7,133.7z"
                data-classreset="inlay-onlay reset"
            />
            <path
                id="d-14-background"
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
                d="M118.9,109.2c-8.8,3.1-9.4,7.3-9.5,11.6c-0.4,19,15.7,18.7,18.8,17.2
          c4.9,0.6,8.3,0,11-1.1c5-0.4,7.4-3.4,8.2-8c0.7-2.5,1-5.2-0.3-8.7c-0.9-1.9-0.3-3.8-5.9-6c-5.9-0.6-7.7-2.1-10.2-3.8
          C127.8,106.8,123.4,107.6,118.9,109.2z"
            />
            <g id="d-14-raices" className="raices reset" data-classreset="raices reset">
                <g id="path3878_00000180325757306203274570000011083160416429593738_">
                    <path
                        d="M116.3,135.8C116.2,135.8,116.2,135.8,116.3,135.8c-0.2-0.1-0.2-0.2-0.1-0.2c0.4-0.8,0.6-1.5,0.8-2.2
                  c0.5-1.7,1-3.5,5.2-7.5h0.1c0.8-0.3,1.3-0.8,1.5-1.4c0.4-1,0-2.4-0.9-4.3c-1.1-2.6-1-5,2.9-8.1l0,0c1.8-0.7,1.7-1.4,1.6-2.1
                  c0-0.2-0.1-0.3-0.1-0.5c0-0.1,0.1-0.2,0.2-0.2s0.2,0.1,0.2,0.2c0,0.2,0,0.3,0.1,0.5c0.1,0.8,0.3,1.7-1.7,2.5
                  c-4.1,3.3-3.6,5.7-2.8,7.7c1,2,1.3,3.5,1,4.5c-0.3,0.7-0.8,1.3-1.7,1.6c-4.1,4-4.6,5.7-5.1,7.4c-0.2,0.7-0.4,1.4-0.9,2.3
                  C116.4,135.8,116.3,135.8,116.3,135.8z"
                    />
                </g>
                <g id="path3880_00000081619744165515106440000015582230390804924321_">
                    <path
                        d="M120.2,132.9c-0.1,0-0.1-0.1-0.2-0.1c0-0.1,0-0.2,0.1-0.2c6.5-0.9,9.8-3.7,10.8-9c0.7-3.8-1.8-5.7-4.2-7.1
                  c-0.1,0-0.1-0.1-0.1-0.2s0.1-0.1,0.2-0.1c2.4,1.4,5.1,3.5,4.4,7.5C130.2,129.1,126.8,132,120.2,132.9L120.2,132.9z"
                    />
                </g>
                <g id="path3882_00000109030902019099687140000005724383788282957460_">
                    <path
                        d="M134.5,129.4c-0.1,0-0.1,0-0.1-0.1c-0.4-0.5-0.8-0.8-1.2-1.1c-1-0.6-2-1.2-2-5.4c-0.3-0.7-0.2-1.4,0.1-2
                  c0.9-1.5,3.7-2.5,8.5-2.9c0.1,0,0.2,0.1,0.2,0.1c0,0.1-0.1,0.2-0.1,0.2c-4.5,0.5-7.4,1.4-8.2,2.8c-0.3,0.5-0.3,1.1-0.1,1.7v0.1
                  c0,4,0.8,4.5,1.8,5.1c0.4,0.3,0.9,0.5,1.3,1.1C134.7,129.2,134.6,129.3,134.5,129.4L134.5,129.4z"
                    />
                </g>
                <g id="path3884_00000072261880592690347900000013490907104329650859_">
                    <path
                        d="M128,133.3L128,133.3c-0.2-0.1-0.2-0.2-0.1-0.3c1-1.2,0.6-2.5,0.2-3.8c0-0.1,0-0.2,0.1-0.2
                  c0.1,0,0.2,0,0.2,0.1c0.5,1.3,0.8,2.7-0.2,4.1C128.1,133.3,128.1,133.3,128,133.3z"
                    />
                </g>
                <g id="path3886_00000114072466292940259580000010743393700466541496_">
                    <path
                        d="M131.1,121.1L131.1,121.1c-0.1,0-0.2-0.1-0.2-0.2c0-1,0.2-2.3,2.8-4.6c0.1-0.1,0.2-0.1,0.2,0
                  c0.1,0.1,0.1,0.2,0,0.2c-2.4,2.3-2.7,3.4-2.7,4.4C131.3,121,131.2,121.1,131.1,121.1z"
                    />
                </g>
                <g id="path3888_00000150809281440168640400000004745216294118440082_">
                    <path
                        d="M129,137.2c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0.1-0.2,0.1-0.2c3-0.2,5.9-0.5,8.3-1.9c3.7-1.9,5.3-4.8,4.9-9.2
                  c-0.1-1,0-2.1,0.2-3.2c0.3-1.9,0.6-4.1-0.5-6.5c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0.1c1.1,2.5,0.8,4.7,0.5,6.7
                  c-0.2,1.1-0.3,2.2-0.2,3.1c0.4,4.4-1.3,7.5-5.1,9.5C135,136.6,132,136.9,129,137.2L129,137.2z"
                    />
                </g>
            </g>
            <g id="d-14-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
                <path d="M140.1,104.5l-4.8,10.6l-6-2.7l4.8-10.6c0.6-1.3,2.2-1.9,3.5-1.3l1.2,0.5C140.1,101.6,140.7,103.2,140.1,104.5z" />
                <path d="M116,145.9l3.5-12.2l6.4,1.8l-3.5,12.2c-0.4,1.4-1.9,2.2-3.3,1.8l-1.2-0.4C116.4,148.8,115.6,147.3,116,145.9z" />
            </g>
            <circle id="d-14-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="129.4" cy="125.5" r={5} />
            <g id="d-14-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M109.3,120.9c0-4.5,0.8-8.7,9.6-11.8c1.6-0.6,3.2-1.1,4.8-1.3l0,0c-2.3-1.6-4.9-1.6-9.5,0.1
              c-5.6,2.1-7.6,7.8-7.7,12.1c-0.2,7.5,1.5,12.4,5,14.7c1.2,0.8,2.5,1.2,3.8,1.3C111.2,132.9,109.1,127.7,109.3,120.9z"
                />
                <path
                    className="borderNegro"
                    d="M115.7,136.1l-0.6-0.1c-1.4-0.1-2.7-0.6-3.8-1.3c-3.5-2.3-5.2-7.3-5.1-14.8c0-4.3,2.1-10.1,7.8-12.2
              c4.7-1.7,7.3-1.7,9.7-0.1l0,0l0.3,0.2l-0.3,0.1c-1.4,0.2-2.9,0.6-4.8,1.3c-8.7,3-9.4,7.2-9.5,11.6l0,0c-0.2,6.7,1.8,11.9,5.8,14.9
              L115.7,136.1z M119.8,106.7c-1.5,0-3.3,0.4-5.7,1.3c-5.5,2-7.5,7.7-7.6,11.9c-0.2,7.4,1.5,12.3,4.9,14.6c0.9,0.6,2,1,3.1,1.2
              c-3.7-3.1-5.6-8.2-5.4-14.8c0-4.5,0.8-8.9,9.7-11.9c1.7-0.6,3.1-1,4.4-1.2C122.2,107.1,121.1,106.7,119.8,106.7z"
                />
            </g>
            <g id="d-14-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M109.3,120.9c0-4.5,0.8-8.7,9.6-11.8c1.6-0.6,3.2-1.1,4.8-1.3l0,0c-2.3-1.6-4.9-1.6-9.5,0.1
              c-5.6,2.1-7.6,7.8-7.7,12.1c-0.2,7.5,1.5,12.4,5,14.7c1.2,0.8,2.5,1.2,3.8,1.3C111.2,132.9,109.1,127.7,109.3,120.9z"
                />
                <path
                    className="borderNegro"
                    d="M115.7,136.1l-0.6-0.1c-1.4-0.1-2.7-0.6-3.8-1.3c-3.5-2.3-5.2-7.3-5.1-14.8c0-4.3,2.1-10.1,7.8-12.2
              c4.7-1.7,7.3-1.7,9.7-0.1l0,0l0.3,0.2l-0.3,0.1c-1.4,0.2-2.9,0.6-4.8,1.3c-8.7,3-9.4,7.2-9.5,11.6l0,0c-0.2,6.7,1.8,11.9,5.8,14.9
              L115.7,136.1z M119.8,106.7c-1.5,0-3.3,0.4-5.7,1.3c-5.5,2-7.5,7.7-7.6,11.9c-0.2,7.4,1.5,12.3,4.9,14.6c0.9,0.6,2,1,3.1,1.2
              c-3.7-3.1-5.6-8.2-5.4-14.8c0-4.5,0.8-8.9,9.7-11.9c1.7-0.6,3.1-1,4.4-1.2C122.2,107.1,121.1,106.7,119.8,106.7z"
                />
            </g>
            <g id="d-num-usa-14" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path
                    className="colorNumber"
                    d="M84.2,107.8H87c0.2,1.2,1.2,1.9,2.5,1.9c1.5,0,2.5-1,2.5-2.4c0-1.5-1-2.5-2.6-2.5c-1.1,0-1.8,0.4-2.2,1.1
              h-2.7l1.2-8.5h8.2v2.7H88l-0.4,2.9c0.6-0.4,1.3-0.6,2.2-0.6c3,0,5.1,2,5.1,4.9c0,3-2.3,5-5.5,5C86.7,112.4,84.4,110.2,84.2,107.8z
              "
                />
            </g>
            <g id="d-num-eur-14" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M86.1,112.2h-3.2v-10.5c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V112.2z" />
                <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M95.5,109.3h-7.4v-2.7l7.2-9.1h3.4v9.1h1.7v2.7h-1.7v2.9h-3.2V109.3z M95.5,106.6v-5.2l-4.3,5.2H95.5z" />
            </g>
        </g>
    );
}
