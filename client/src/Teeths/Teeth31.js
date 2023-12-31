export default function Teeth31({ onClick, teeths, number }) {
    return (
        <g id="d-31" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={31} data-classreset="diente reset" data-nearbyteeth="41-32" onClick={onClick}>
            <path
                id="pontic-31"
                className="pontic reset"
                d="M236.8,501.6c-0.2-0.3-0.3-0.6-0.6-0.9c-0.7-0.8-1.8-1.4-3-1.4c-2,0-3.6,1.4-4,3.3c0,0.2-0.1,0.5-0.1,0.8
      c0,0.1,0,0.2,0,0.3c0.1,2.1,1.9,3.8,4,3.8c2.2,0,4.1-1.8,4.1-4.1C237.2,502.7,237.1,502.1,236.8,501.6z"
                data-classreset="pontic reset"
            />
            <path
                id="d-31-background"
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
                d="M239.9,518.5c1.4,3.1,2.4,6.5,5,8.7c1.2,1.2,2.1,2.6,0.9,8.7c-1.3,2.5-3.6,4-7.2,4
          c-2.9-0.5-5.4-1.3-9.9-0.9c-2.2-0.5-4.2,0.2-6.8-3.3c-0.9-1.7-2.2-2.7,0-8.2l6.8-9.1c1.8-1.4,2-3.5,6.3-3.8
          C238.3,514.7,238.9,516.8,239.9,518.5L239.9,518.5z"
            />
            <g id="d-31-raices" className="raices reset" data-classreset="raices reset">
                <path
                    d="M232.9,536c-0.9,0-1.9-0.1-2.7-0.1c-0.5,0-1-0.1-1.5-0.1h-0.2c-2.5-0.1-4.9-0.3-5.6-1.3
              c-0.2-0.4-0.2-0.8,0-1.3l0.3,0.1c-0.2,0.4-0.2,0.7,0,1c0.6,0.9,3,1,5.3,1.2h0.2c0.5,0,1,0.1,1.5,0.1c1.6,0.1,3.2,0.2,5,0l3.4-0.3
              l0,0c1.6,0.5,3.1,0.2,4.6-0.1c0.4-0.1,0.7-0.1,1.1-0.2l0.1,0.3c-0.4,0.1-0.7,0.1-1.1,0.2c-1.5,0.3-3,0.6-4.7,0.1l-3.3,0.3
              C234.4,535.9,233.7,536,232.9,536z"
                />
            </g>
            <circle id="d-31-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="233.6" cy="527.8" r={5} />
            <g id="d-31-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M245.8,536c-1.4,2.7-3.9,4.1-7.3,4.1c-0.5-0.1-1-0.2-1.4-0.3c-2.3-0.5-4.7-1-8.5-0.6l0,0l0,0
              c-0.5-0.1-1-0.2-1.4-0.2c-1.7-0.2-3.4-0.4-5.5-3.2c-0.1-0.1-0.1-0.2-0.2-0.3c-0.2,1.8,0.3,2.6,0.8,3.5l0.1,0.2
              c0.2,0.3,0.3,0.5,0.5,0.8c1.9,2.3,3.3,2.4,4.9,2.6c0.3,0,0.6,0.1,0.9,0.1c0.4,0.1,0.9,0.1,1.3,0.1c0.6,0,1.2-0.1,1.8-0.1
              c2.5,0,4.3,0.4,6.1,0.7l0.7,0.1c0.5,0.1,0.9,0.1,1.4,0.1c2.4-0.2,4.1-1,5.4-2.6c0.5-0.7,0.9-1.5,1.1-2.3c0.6-3.4,0.4-5.1-0.1-6.2
              C246.3,533.5,246.1,534.6,245.8,536L245.8,536z"
                />
                <path
                    className="borderNegro"
                    d="M239.6,543.9c-0.4,0-0.7,0-1.1-0.1l-0.7-0.1c-1.8-0.4-3.6-0.7-6.1-0.7c-0.6,0-1.2,0-1.7,0.1
              c-0.4,0-0.9,0-1.3-0.1c-0.3,0-0.6-0.1-0.8-0.1c-1.6-0.2-3.1-0.4-5-2.7c-0.2-0.2-0.4-0.5-0.5-0.8l-0.1-0.2
              c-0.5-0.9-1.1-1.8-0.8-3.6l0.1-0.5l0.3,0.5c0,0.1,0.1,0.2,0.1,0.3c2,2.7,3.7,2.9,5.4,3.1c0.5,0.1,1,0.1,1.5,0.2
              c3.8-0.3,6.2,0.2,8.5,0.6c0.5,0.1,0.9,0.2,1.4,0.3c3.3,0,5.8-1.4,7.1-4l0,0c0.3-1.2,0.4-2.3,0.5-3.3l0.1-0.6l0.3,0.6
              c0.6,1.3,0.6,3.3,0.1,6.2c-0.2,0.9-0.5,1.7-1.1,2.4c-1.3,1.6-3.1,2.5-5.5,2.7C239.9,543.9,239.7,543.9,239.6,543.9z M231.7,542.5
              c2.5,0,4.3,0.4,6.1,0.7l0.7,0.2c0.5,0.1,0.9,0.1,1.3,0.1c2.3-0.2,4-1,5.3-2.5c0.5-0.6,0.9-1.4,1-2.3c0.4-2.4,0.5-4.2,0.2-5.4
              c-0.1,0.8-0.2,1.7-0.5,2.6v0.1c-1.5,2.8-4,4.2-7.5,4.2c-0.5-0.1-1-0.2-1.5-0.3c-2.3-0.5-4.7-1-8.4-0.6l0,0h-0.1
              c-0.5-0.1-1-0.2-1.4-0.2c-1.7-0.2-3.4-0.4-5.5-3.2c-0.1,1.4,0.4,2.1,0.8,2.9l0.1,0.2c0.2,0.3,0.3,0.5,0.5,0.7
              c1.8,2.2,3.3,2.4,4.8,2.5c0.3,0,0.6,0.1,0.9,0.1c0.4,0.1,0.8,0.1,1.2,0.1C230.6,542.6,231.2,542.5,231.7,542.5z"
                />
            </g>
            <g id="d-31-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M245.8,536c-1.4,2.7-3.9,4.1-7.3,4.1c-0.5-0.1-1-0.2-1.4-0.3c-2.3-0.5-4.7-1-8.5-0.6l0,0l0,0
              c-0.5-0.1-1-0.2-1.4-0.2c-1.7-0.2-3.4-0.4-5.5-3.2c-0.1-0.1-0.1-0.2-0.2-0.3c-0.2,1.8,0.3,2.6,0.8,3.5l0.1,0.2
              c0.2,0.3,0.3,0.5,0.5,0.8c1.9,2.3,3.3,2.4,4.9,2.6c0.3,0,0.6,0.1,0.9,0.1c0.4,0.1,0.9,0.1,1.3,0.1c0.6,0,1.2-0.1,1.8-0.1
              c2.5,0,4.3,0.4,6.1,0.7l0.7,0.1c0.5,0.1,0.9,0.1,1.4,0.1c2.4-0.2,4.1-1,5.4-2.6c0.5-0.7,0.9-1.5,1.1-2.3c0.6-3.4,0.4-5.1-0.1-6.2
              C246.3,533.5,246.1,534.6,245.8,536L245.8,536z"
                />
                <path
                    className="borderNegro"
                    d="M239.6,543.9c-0.4,0-0.7,0-1.1-0.1l-0.7-0.1c-1.8-0.4-3.6-0.7-6.1-0.7c-0.6,0-1.2,0-1.7,0.1
              c-0.4,0-0.9,0-1.3-0.1c-0.3,0-0.6-0.1-0.8-0.1c-1.6-0.2-3.1-0.4-5-2.7c-0.2-0.2-0.4-0.5-0.5-0.8l-0.1-0.2
              c-0.5-0.9-1.1-1.8-0.8-3.6l0.1-0.5l0.3,0.5c0,0.1,0.1,0.2,0.1,0.3c2,2.7,3.7,2.9,5.4,3.1c0.5,0.1,1,0.1,1.5,0.2
              c3.8-0.3,6.2,0.2,8.5,0.6c0.5,0.1,0.9,0.2,1.4,0.3c3.3,0,5.8-1.4,7.1-4l0,0c0.3-1.2,0.4-2.3,0.5-3.3l0.1-0.6l0.3,0.6
              c0.6,1.3,0.6,3.3,0.1,6.2c-0.2,0.9-0.5,1.7-1.1,2.4c-1.3,1.6-3.1,2.5-5.5,2.7C239.9,543.9,239.7,543.9,239.6,543.9z M231.7,542.5
              c2.5,0,4.3,0.4,6.1,0.7l0.7,0.2c0.5,0.1,0.9,0.1,1.3,0.1c2.3-0.2,4-1,5.3-2.5c0.5-0.6,0.9-1.4,1-2.3c0.4-2.4,0.5-4.2,0.2-5.4
              c-0.1,0.8-0.2,1.7-0.5,2.6v0.1c-1.5,2.8-4,4.2-7.5,4.2c-0.5-0.1-1-0.2-1.5-0.3c-2.3-0.5-4.7-1-8.4-0.6l0,0h-0.1
              c-0.5-0.1-1-0.2-1.4-0.2c-1.7-0.2-3.4-0.4-5.5-3.2c-0.1,1.4,0.4,2.1,0.8,2.9l0.1,0.2c0.2,0.3,0.3,0.5,0.5,0.7
              c1.8,2.2,3.3,2.4,4.8,2.5c0.3,0,0.6,0.1,0.9,0.1c0.4,0.1,0.8,0.1,1.2,0.1C230.6,542.6,231.2,542.5,231.7,542.5z"
                />
            </g>
            <g id="d-num-usa-31" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path
                    className="colorNumber"
                    d="M232.6,559.2c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7h-10.5
              l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
              C227.2,561.2,229.3,559.2,232.6,559.2z"
                />
                <path className="colorNumber" d="M245.5,571.2h-7.4v-2.7l7.2-9.1h3.4v9.1h1.7v2.7h-1.7v2.9h-3.2V571.2z M245.5,568.5v-5.2l-4.3,5.2H245.5z" />
            </g>
            <g id="d-num-eur-31" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M225.9,570.9h3c0,1.4,1.1,2.1,2.5,2.1c1.4,0,2.4-0.7,2.4-1.9c0-1.1-0.9-1.8-2.4-1.8h-1.4v-2.6h1.3
              c1.2,0,1.9-0.7,1.9-1.8c0-1-0.8-1.7-2.1-1.7c-1.2,0-2.1,0.7-2.1,1.9h-2.9c0-2.8,2.4-4.5,5-4.5c2.9,0,5,1.8,5,4
              c0,1.2-0.7,2.4-1.7,3.1c1.4,0.7,2.4,1.7,2.4,3.4c0,2.9-2.6,4.5-5.5,4.5C228.4,575.7,225.9,574,225.9,570.9z"
                />
                <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M244.1,575.6h-3.2v-10.5c-0.3,0.4-1.3,0.6-1.9,0.6h-1V563h1c1.2,0,2-0.5,2.2-2.1h3V575.6z" />
            </g>
        </g>
    );
}
