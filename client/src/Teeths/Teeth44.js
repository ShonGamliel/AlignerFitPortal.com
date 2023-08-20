export default function Teeth44({ onClick, teeths, number }) {
    return (
        <g id="d-44" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={44} data-classreset="diente reset" data-nearbyteeth="46-43" onClick={onClick}>
            <path
                id="pontic-44"
                className="pontic reset"
                d="M165.2,458.1c-0.9,0-1.7,0.2-2.4,0.5c-0.3,0.1-0.6,0.3-0.9,0.5c-1.6,1.1-2.7,2.9-2.7,5c0,3.3,2.7,6,6,6
      c1,0,1.8-0.2,2.6-0.6c0.3-0.1,0.6-0.3,0.9-0.5c1.5-1.1,2.5-2.8,2.5-4.8C171.2,460.8,168.5,458.1,165.2,458.1z"
                data-classreset="pontic reset"
            />
            <path
                id="inlay-onlay-44"
                className="inlay-onlay reset"
                style={{ display: teeths[number]?.RT == "Onlay" || teeths[number]?.RT == "Inlay" ? "block" : "none" }}
                d="M131,482l2.1,3.4l-0.3,2.3c0,0-0.1,2.1,1.8,2.4c1.9,0.3,1.9,2.6,1.9,2.6s5.4,1.5,6.6,1.1
          c1.2-0.4,2.2-0.4,2.2-1.1c0-0.7,1.7-7.8,0.6-9.1c-1.1-1.2,0.2-1.3-2.4-2.8c-2.6-1.5-1-1.8-3-1.7c-2,0.1-3.4-1.2-4.9,0
          s-6.5,0.7-5.1,2.2"
                data-classreset="inlay-onlay reset"
            />
            <path
                id="d-44-background"
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
                d="M125,478.6c-3.6,5-4.5,8.6-4.1,11.6c1.1,5.1,1.7,10.7,7.1,12.7c8.6,2.9,10.5,0.5,14-0.6
          c4-2,7.2-4.4,9.5-7.4c1.8-1.2,1.6-2.4,1.7-3.6c-0.3-2.3,0.2-3.8,0.4-5.6c0.3-3.5-1.3-6-2.1-8.9c-2.5-2.1-4.4-4.9-8.6-5.2l-7.2-0.2
          C131.1,471.2,128.1,475.1,125,478.6z"
            />
            <g id="d-44-raices" className="raices reset" data-classreset="raices reset">
                <g id="path3872_00000029748009400164179060000002124750974662218649_">
                    <path
                        d="M144.1,497.2c-0.6,0-1.2-0.1-2.1-0.4l-4.3-0.8c-0.3-0.1-0.5-0.1-0.7-0.2c-0.9-0.1-1.7-0.2-2.4-2.2
                  c-0.6-1-1.4-1.7-2.3-2.4l-0.2-0.2c-0.2-0.1-0.3-0.2-0.5-0.3c-0.8-0.4-1.4-0.8-1-3.6c0-0.5,0-0.9,0-1.2c0-0.5,0.1-0.9-0.2-1.3
                  c-1.5-2-2.8-3.7-3.7-5l0.3-0.2c0.9,1.3,2.2,3,3.7,5c0.3,0.5,0.3,1,0.2,1.5c0,0.3-0.1,0.7,0,1.2l0,0l0,0c-0.4,2.6,0.1,2.9,0.8,3.3
                  c0.2,0.1,0.3,0.2,0.5,0.3l0.2,0.2c0.9,0.7,1.8,1.3,2.4,2.5c0.6,1.8,1.3,1.9,2.1,2c0.3,0,0.5,0.1,0.8,0.2l4.3,0.8
                  c2.2,0.7,3.1,0.2,4.1-0.2c0.5-0.2,1-0.4,1.7-0.5v0.3c-0.6,0-1.1,0.2-1.6,0.4C145.7,496.9,145,497.2,144.1,497.2z"
                    />
                </g>
                <g id="path3874_00000118380056206684182460000016015345471604664451_">
                    <path
                        d="M147.9,494.4c-1.4-0.8-1.3-1.8-1.3-2.7c0-0.4,0-0.7,0-1l0.3-0.1c0.1,0.4,0,0.8,0,1.1c0,0.9-0.1,1.7,1.1,2.4
                  L147.9,494.4z"
                    />
                </g>
                <g id="path3877_00000174590107542165900100000010222003073816631998_">
                    <path
                        d="M137.7,492.1l-0.2-0.2l8-9.5c1-1.2,1.8-1.7,2.4-1.5c0.6,0.2,0.9,1.2,1,3.1h-0.3c-0.1-2.2-0.5-2.7-0.8-2.8
                  c-0.4-0.1-1.1,0.3-2,1.4L137.7,492.1z"
                    />
                </g>
                <g id="path3879_00000063613116068573632070000015142745420659340729_">
                    <path
                        d="M136.4,483.5l-0.3-0.1c0.7-2.2,2.7-4.4,5.8-6.6c-1.1,0.3-2.4,0.4-3.8-0.3c-1.8-0.9-2.8-0.2-3.9,0.5
                  c-0.2,0.2-0.5,0.3-0.7,0.5l-0.2-0.3c0.2-0.1,0.5-0.3,0.7-0.4c1.1-0.7,2.2-1.4,4.2-0.5c1.9,0.9,3.2,0.4,4.7-0.1l0.2,0.3
                  C139.4,478.8,137.2,481.2,136.4,483.5z"
                    />
                </g>
            </g>
            <g id="d-44-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
                <path d="M151.5,508l-8.2-8.2l4.7-4.7l8.2,8.2c1,1,1,2.7,0,3.8l-0.9,0.9C154.3,509,152.6,509,151.5,508z" />
                <path d="M126.8,466.3l7.7,10.1l-5.3,4l-7.7-10.1c-0.9-1.2-0.7-2.8,0.5-3.7l1-0.8C124.3,464.9,125.9,465.1,126.8,466.3z" />
            </g>
            <circle id="d-44-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="137.1" cy="487.1" r={5} />
            <g id="d-44-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M140,503.2c-1.4,0.6-2.9,1.2-5.2,1.2c-1.7,0-4-0.4-7-1.4c-5-1.9-5.9-6.7-6.9-11.3c-0.1-0.5-0.2-1-0.3-1.5
              c-0.4-3.5,0.9-7.2,4.1-11.6c-0.6,0.6-1.1,1.2-1.7,1.9l-0.6,0.7c-3.2,4.4-4.5,8.1-4.1,11.4c0.1,0.5,0.2,1,0.3,1.5
              c1,4.8,1.9,9.3,6.7,11.1c6.9,2.3,9.5,1.2,12,0.1c0.6-0.3,1.3-0.5,1.9-0.8c2.6-1.3,4.9-2.8,6.7-4.5c-1.2,0.8-2.6,1.6-4,2.3
              C141.3,502.7,140.6,502.9,140,503.2z"
                />
                <path
                    className="borderNegro"
                    d="M132.2,506.7c-1.7,0-3.9-0.4-6.9-1.4c-4.9-1.8-5.8-6.4-6.8-11.2V494c-0.1-0.5-0.2-0.9-0.3-1.4
              c-0.4-3.4,0.9-7.1,4.1-11.6l0.6-0.7c0.6-0.7,1.1-1.3,1.7-1.9l0.3,0.2c-3.2,4.5-4.5,8.1-4.1,11.5c0.1,0.5,0.2,1,0.3,1.5
              c0.9,4.6,1.9,9.4,6.8,11.2c2.7,0.9,5,1.4,6.9,1.4c2.3,0,3.7-0.6,5.1-1.2l0,0c0.6-0.3,1.2-0.5,2-0.8c1.4-0.7,2.8-1.5,4-2.3l0.2,0.3
              c-1.9,1.7-4.2,3.2-6.8,4.5c-0.7,0.2-1.4,0.5-2,0.8C136,506.1,134.5,506.7,132.2,506.7z M123.3,480.5L123.3,480.5l-0.7,0.8
              c-3.2,4.4-4.5,8-4.1,11.3c0.1,0.4,0.2,0.9,0.3,1.4v0.1c0.9,4.7,1.8,9.2,6.6,11c6.8,2.3,9.4,1.2,11.8,0.1c0.6-0.3,1.3-0.5,2-0.8
              c1.7-0.8,3.3-1.8,4.7-2.8c-0.6,0.3-1.2,0.7-1.9,1c-0.7,0.2-1.3,0.5-2,0.8c-1.5,0.6-3,1.3-5.3,1.3c-1.9,0-4.2-0.5-7-1.4
              c-5.1-1.9-6-6.8-7-11.4c-0.1-0.5-0.2-1-0.3-1.5C120.1,487.3,121,484.1,123.3,480.5z"
                />
            </g>
            <g id="d-44-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M140,503.2c-1.4,0.6-2.9,1.2-5.2,1.2c-1.7,0-4-0.4-7-1.4c-5-1.9-5.9-6.7-6.9-11.3c-0.1-0.5-0.2-1-0.3-1.5
              c-0.4-3.5,0.9-7.2,4.1-11.6c-0.6,0.6-1.1,1.2-1.7,1.9l-0.6,0.7c-3.2,4.4-4.5,8.1-4.1,11.4c0.1,0.5,0.2,1,0.3,1.5
              c1,4.8,1.9,9.3,6.7,11.1c6.9,2.3,9.5,1.2,12,0.1c0.6-0.3,1.3-0.5,1.9-0.8c2.6-1.3,4.9-2.8,6.7-4.5c-1.2,0.8-2.6,1.6-4,2.3
              C141.3,502.7,140.6,502.9,140,503.2z"
                />
                <path
                    className="borderNegro"
                    d="M132.2,506.7c-1.7,0-3.9-0.4-6.9-1.4c-4.9-1.8-5.8-6.4-6.8-11.2V494c-0.1-0.5-0.2-0.9-0.3-1.4
              c-0.4-3.4,0.9-7.1,4.1-11.6l0.6-0.7c0.6-0.7,1.1-1.3,1.7-1.9l0.3,0.2c-3.2,4.5-4.5,8.1-4.1,11.5c0.1,0.5,0.2,1,0.3,1.5
              c0.9,4.6,1.9,9.4,6.8,11.2c2.7,0.9,5,1.4,6.9,1.4c2.3,0,3.7-0.6,5.1-1.2l0,0c0.6-0.3,1.2-0.5,2-0.8c1.4-0.7,2.8-1.5,4-2.3l0.2,0.3
              c-1.9,1.7-4.2,3.2-6.8,4.5c-0.7,0.2-1.4,0.5-2,0.8C136,506.1,134.5,506.7,132.2,506.7z M123.3,480.5L123.3,480.5l-0.7,0.8
              c-3.2,4.4-4.5,8-4.1,11.3c0.1,0.4,0.2,0.9,0.3,1.4v0.1c0.9,4.7,1.8,9.2,6.6,11c6.8,2.3,9.4,1.2,11.8,0.1c0.6-0.3,1.3-0.5,2-0.8
              c1.7-0.8,3.3-1.8,4.7-2.8c-0.6,0.3-1.2,0.7-1.9,1c-0.7,0.2-1.3,0.5-2,0.8c-1.5,0.6-3,1.3-5.3,1.3c-1.9,0-4.2-0.5-7-1.4
              c-5.1-1.9-6-6.8-7-11.4c-0.1-0.5-0.2-1-0.3-1.5C120.1,487.3,121,484.1,123.3,480.5z"
                />
            </g>
            <g id="d-num-usa-44" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path
                    className="colorNumber"
                    d="M91.7,505.2c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7H86.4
              l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
              C86.3,507.2,88.4,505.2,91.7,505.2z"
                />
                <path
                    className="colorNumber"
                    d="M98.1,515.7c0-1.7,1-2.9,2.4-3.6c-1-0.7-1.7-1.7-1.7-3c0-2.3,2-4,4.9-4c2.9,0,4.9,1.7,4.9,4
              c0,1.3-0.7,2.3-1.8,3c1.5,0.6,2.4,1.9,2.4,3.6c0,2.7-2.4,4.5-5.6,4.5C100.5,520.2,98.1,518.4,98.1,515.7z M106.2,515.6
              c0-1.2-1-2-2.5-2c-1.6,0-2.6,0.8-2.6,2c0,1.2,1,2,2.6,2C105.3,517.6,106.2,516.8,106.2,515.6z M105.8,509.3c0-1-0.8-1.7-2.1-1.7
              c-1.3,0-2.1,0.7-2.1,1.7s0.8,1.7,2.1,1.7C105,511,105.8,510.3,105.8,509.3z"
                />
            </g>
            <g id="d-num-eur-44" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M93.4,517.2H86v-2.7l7.2-9.1h3.4v9.1h1.7v2.7h-1.7v2.9h-3.2V517.2z M93.4,514.5v-5.2l-4.3,5.2H93.4z" />
                <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M107.3,517.2h-7.4v-2.7l7.2-9.1h3.4v9.1h1.7v2.7h-1.7v2.9h-3.2V517.2z M107.3,514.5v-5.2l-4.3,5.2H107.3z" />
            </g>
        </g>
    );
}