export default function Teeth34({ onClick, teeths, number }) {
    return (
        <g id="d-34" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={34} data-classreset="diente reset" data-nearbyteeth="35-33" onClick={onClick}>
            <path
                id="pontic-34"
                className="pontic reset"
                d="M277.5,460c-0.3-0.2-0.5-0.4-0.8-0.6c-0.8-0.5-1.8-0.7-2.8-0.7c-3.3,0-6,2.7-6,6c0,2.1,1.1,4,2.8,5
      c0.3,0.2,0.6,0.3,0.9,0.5c0.7,0.3,1.5,0.5,2.3,0.5c3.3,0,6-2.7,6-6C279.7,462.8,278.8,461.1,277.5,460z"
                data-classreset="pontic reset"
            />
            <path
                id="inlay-onlay-34"
                className="inlay-onlay reset"
                style={{ display: teeths[number]?.RT == "Onlay" || teeths[number]?.RT == "Inlay" ? "block" : "none" }}
                d="M308.7,481.9l-2.1,3.4l0.3,2.3c0,0,0.1,2.1-1.8,2.4c-1.9,0.3-1.9,2.6-1.9,2.6s-5.4,1.5-6.6,1.1
          c-1.2-0.4-2.2-0.4-2.2-1.1s-1.7-7.8-0.6-9.1s-0.2-1.3,2.4-2.8c2.6-1.5,1-1.8,3-1.7c2,0.1,3.4-1.2,4.9,0c1.5,1.2,6.5,0.7,5.1,2.2"
                data-classreset="inlay-onlay reset"
            />
            <path
                id="d-34-background"
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
                d="M314.5,478.7c3.6,5,4.5,8.6,4.1,11.6c-1.1,5.1-1.7,10.7-7.1,12.7
          c-8.6,2.9-10.5,0.5-14-0.6c-4-2-7.2-4.4-9.5-7.4c-1.8-1.2-1.6-2.4-1.7-3.6c0.3-2.3-0.2-3.8-0.4-5.6c-0.3-3.5,1.3-6,2.1-8.9
          c2.5-2.1,4.4-4.9,8.6-5.2l7.2-0.2C308.3,471.3,311.3,475.1,314.5,478.7L314.5,478.7z"
            />
            <g id="d-34-raices" className="raices reset" data-classreset="raices reset">
                <g id="path4428_00000172408422231186033850000015228680992019247234_">
                    <path
                        d="M295.4,497.2c-1,0-1.6-0.3-2.2-0.5c-0.5-0.2-1-0.4-1.6-0.4V496c0.7,0,1.2,0.3,1.7,0.5
                  c0.9,0.4,1.9,0.8,4.1,0.2l4.3-0.8c0.2-0.1,0.5-0.1,0.7-0.2c0.8-0.1,1.5-0.2,2.1-2c0.7-1.2,1.6-1.9,2.4-2.5l0.2-0.2
                  c0.2-0.1,0.4-0.2,0.5-0.3c0.7-0.4,1.2-0.7,0.8-3.3l0,0l0,0c0-0.5,0-0.9,0-1.2c0-0.5-0.1-1,0.2-1.5c1.5-2.1,2.8-3.8,3.7-5.1
                  l0.3,0.2c-0.9,1.3-2.2,3-3.7,5.1c-0.2,0.4-0.2,0.8-0.2,1.3c0,0.3,0.1,0.7,0,1.2c0.5,2.8-0.2,3.1-1,3.6c-0.2,0.1-0.3,0.2-0.5,0.3
                  l-0.2,0.2c-0.9,0.7-1.7,1.3-2.3,2.4c-0.6,1.9-1.5,2.1-2.4,2.2c-0.2,0-0.5,0.1-0.7,0.1l-4.3,0.8
                  C296.6,497.1,295.9,497.2,295.4,497.2z"
                    />
                </g>
                <g id="path4430_00000028316077163415102130000011056750664133181870_">
                    <path
                        d="M291.5,494.5l-0.2-0.3c1.2-0.7,1.1-1.5,1.1-2.4c0-0.4,0-0.7,0-1.1l0.3,0.1c-0.1,0.3,0,0.7,0,1
                  C292.8,492.7,292.9,493.7,291.5,494.5z"
                    />
                </g>
                <g id="path4432_00000083796399633005222850000011105658328797538213_">
                    <path
                        d="M301.8,492.2l-8-9.5c-0.9-1.1-1.6-1.6-2-1.4c-0.3,0.1-0.7,0.7-0.8,2.8h-0.3c0.1-1.9,0.4-2.9,1-3.1
                  s1.3,0.3,2.4,1.5l8,9.5L301.8,492.2z"
                    />
                </g>
                <g id="path4434_00000071545211080121323390000006425790145032977040_">
                    <path
                        d="M303,483.6c-0.8-2.4-3-4.8-6.7-7.1l0.1-0.3c1.5,0.5,2.9,1,4.7,0.1c2-1,3.1-0.2,4.2,0.5
                  c0.2,0.2,0.5,0.3,0.7,0.4l-0.2,0.3c-0.3-0.1-0.5-0.3-0.7-0.5c-1.1-0.7-2.1-1.3-3.9-0.5c-1.5,0.7-2.7,0.6-3.8,0.3
                  c3.1,2.1,5.1,4.4,5.8,6.6L303,483.6z"
                    />
                </g>
            </g>
            <g id="d-34-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff reset">
                <path d="M284.5,504.1l7.3-9l5.2,4.2l-7.3,9c-0.9,1.1-2.6,1.3-3.8,0.4l-1-0.8C283.7,507,283.6,505.3,284.5,504.1z" />
                <path d="M320.1,468.3l-8,9.9l-5.2-4.2l8-9.9c0.9-1.1,2.6-1.3,3.8-0.4l1,0.8C320.8,465.5,321,467.2,320.1,468.3z" />
            </g>
            <circle id="d-34-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx={302} cy="487.9" r={5} />
            <g id="d-34-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M314.6,478.6c3.3,4.5,4.6,8.2,4.2,11.7c-0.1,0.5-0.2,1-0.3,1.5c-0.9,4.6-1.9,9.5-6.9,11.3c-3,1-5.2,1.4-7,1.4
              c-2.3,0-3.8-0.6-5.2-1.2c-0.6-0.3-1.2-0.5-1.9-0.7c-1-0.5-2-1.1-3-1.6c1.9,1.7,4.1,3.2,6.8,4.5c0.7,0.2,1.3,0.5,1.9,0.7
              c2.5,1.1,5.1,2.2,12-0.1c4.8-1.8,5.7-6.3,6.6-11.1c0.1-0.5,0.2-1,0.3-1.5c0.4-3.4-0.9-7-4.1-11.4l-0.6-0.7
              c-1.4-1.6-2.8-3.2-4.4-4.4c0.3,0.3,0.6,0.7,0.9,1L314.6,478.6z"
                />
                <path
                    className="borderNegro"
                    d="M308.3,507.5c-2.3,0-3.7-0.6-5.2-1.2c-0.6-0.3-1.3-0.5-1.9-0.7c-2.6-1.3-4.9-2.8-6.8-4.5l0.2-0.3
              c0.9,0.6,1.9,1.1,2.9,1.6c0.7,0.2,1.3,0.5,1.9,0.7c1.5,0.6,2.9,1.2,5.2,1.2c1.9,0,4.2-0.4,6.9-1.4c4.9-1.8,5.8-6.6,6.8-11.2v-0.1
              c0.1-0.5,0.2-1,0.3-1.5c0.4-3.4-0.9-7.1-4.1-11.5l-0.6-0.7c-0.3-0.3-0.6-0.7-0.9-1l0.2-0.2c1.6,1.2,3,2.9,4.4,4.4l0.6,0.7
              c3.3,4.5,4.6,8.2,4.1,11.6c-0.1,0.5-0.2,0.9-0.3,1.4v0.2c-1,4.8-1.9,9.4-6.7,11.2C312.2,507.1,310,507.5,308.3,507.5z M296,501.9
              c1.6,1.2,3.3,2.3,5.3,3.3c0.7,0.2,1.3,0.5,1.9,0.7c2.5,1.1,5,2.1,11.9-0.1c4.7-1.8,5.6-6.2,6.5-11v-0.2c0.1-0.5,0.2-0.9,0.3-1.4
              c0.4-3.3-0.9-6.9-4.1-11.3l-0.6-0.7c-0.8-0.9-1.6-1.8-2.4-2.7c3.2,4.5,4.5,8.2,4.1,11.6c-0.1,0.5-0.2,1-0.3,1.5v0.1
              c-0.9,4.7-1.9,9.5-7,11.4c-2.8,0.9-5.1,1.4-7,1.4c-2.3,0-3.8-0.6-5.3-1.3c-0.6-0.3-1.2-0.5-1.9-0.7
              C297,502.4,296.5,502.2,296,501.9z"
                />
            </g>
            <g id="d-34-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M314.6,478.6c3.3,4.5,4.6,8.2,4.2,11.7c-0.1,0.5-0.2,1-0.3,1.5c-0.9,4.6-1.9,9.5-6.9,11.3c-3,1-5.2,1.4-7,1.4
              c-2.3,0-3.8-0.6-5.2-1.2c-0.6-0.3-1.2-0.5-1.9-0.7c-1-0.5-2-1.1-3-1.6c1.9,1.7,4.1,3.2,6.8,4.5c0.7,0.2,1.3,0.5,1.9,0.7
              c2.5,1.1,5.1,2.2,12-0.1c4.8-1.8,5.7-6.3,6.6-11.1c0.1-0.5,0.2-1,0.3-1.5c0.4-3.4-0.9-7-4.1-11.4l-0.6-0.7
              c-1.4-1.6-2.8-3.2-4.4-4.4c0.3,0.3,0.6,0.7,0.9,1L314.6,478.6z"
                />
                <path
                    className="borderNegro"
                    d="M308.3,507.5c-2.3,0-3.7-0.6-5.2-1.2c-0.6-0.3-1.3-0.5-1.9-0.7c-2.6-1.3-4.9-2.8-6.8-4.5l0.2-0.3
              c0.9,0.6,1.9,1.1,2.9,1.6c0.7,0.2,1.3,0.5,1.9,0.7c1.5,0.6,2.9,1.2,5.2,1.2c1.9,0,4.2-0.4,6.9-1.4c4.9-1.8,5.8-6.6,6.8-11.2v-0.1
              c0.1-0.5,0.2-1,0.3-1.5c0.4-3.4-0.9-7.1-4.1-11.5l-0.6-0.7c-0.3-0.3-0.6-0.7-0.9-1l0.2-0.2c1.6,1.2,3,2.9,4.4,4.4l0.6,0.7
              c3.3,4.5,4.6,8.2,4.1,11.6c-0.1,0.5-0.2,0.9-0.3,1.4v0.2c-1,4.8-1.9,9.4-6.7,11.2C312.2,507.1,310,507.5,308.3,507.5z M296,501.9
              c1.6,1.2,3.3,2.3,5.3,3.3c0.7,0.2,1.3,0.5,1.9,0.7c2.5,1.1,5,2.1,11.9-0.1c4.7-1.8,5.6-6.2,6.5-11v-0.2c0.1-0.5,0.2-0.9,0.3-1.4
              c0.4-3.3-0.9-6.9-4.1-11.3l-0.6-0.7c-0.8-0.9-1.6-1.8-2.4-2.7c3.2,4.5,4.5,8.2,4.1,11.6c-0.1,0.5-0.2,1-0.3,1.5v0.1
              c-0.9,4.7-1.9,9.5-7,11.4c-2.8,0.9-5.1,1.4-7,1.4c-2.3,0-3.8-0.6-5.3-1.3c-0.6-0.3-1.2-0.5-1.9-0.7
              C297,502.4,296.5,502.2,296,501.9z"
                />
            </g>
            <g id="d-num-usa-34" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path
                    className="colorNumber"
                    d="M329.5,507.2c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7h-10.5
              l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
              C324.1,509.2,326.2,507.2,329.5,507.2z"
                />
                <path className="colorNumber" d="M342.3,522.1h-3.2v-10.5c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V522.1z" />
            </g>
            <g id="d-num-eur-34" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M322.8,518.9h3c0,1.4,1.1,2.1,2.5,2.1c1.4,0,2.4-0.7,2.4-1.9c0-1.1-0.9-1.8-2.4-1.8h-1.4v-2.6h1.3
              c1.2,0,1.9-0.7,1.9-1.8c0-1-0.8-1.7-2.1-1.7c-1.2,0-2.1,0.7-2.1,1.9h-2.9c0-2.8,2.4-4.5,5-4.5c2.9,0,5,1.8,5,4
              c0,1.2-0.7,2.4-1.7,3.1c1.4,0.7,2.4,1.7,2.4,3.4c0,2.9-2.6,4.5-5.5,4.5C325.3,523.7,322.8,522,322.8,518.9z"
                />
                <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M342.8,520.7h-7.4V518l7.2-9.1h3.4v9.1h1.7v2.7H346v2.9h-3.2V520.7z M342.8,518v-5.2l-4.3,5.2H342.8z" />
            </g>
        </g>
    );
}
