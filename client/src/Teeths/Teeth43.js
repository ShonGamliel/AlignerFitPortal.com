export default function Teeth43({ onClick, teeths, number }) {
    return (
        <g id="d-43" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={43} data-classreset="diente reset" data-nearbyteeth="44-42" onClick={onClick}>
            <path
                id="pontic-43"
                className="pontic reset"
                d="M176.1,474.4c-1.1,0-2.2,0.4-3,0.9c-0.3,0.2-0.5,0.4-0.8,0.6c-0.9,1-1.5,2.3-1.5,3.7
          c0,2.9,2.4,5.3,5.3,5.3c1,0,2-0.3,2.8-0.8c0.3-0.2,0.5-0.4,0.8-0.6c1-1,1.7-2.3,1.7-3.9C181.4,476.7,179,474.4,176.1,474.4z"
                data-classreset="pontic reset"
            />
            <path
                id="d-43-background"
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
                d="M155.5,496.1c6.2-0.9,11.7-0.9,12.8,3.9l3.2,9.3c2.3,7.1-0.1,5.7-0.5,7.9l-4.7,5.5
          c-1.8,1.8-3.7,3.5-7.9,3.6c-6.2-0.2-12.5-0.3-13.8-9.3l-0.5-10.5C145.2,501.6,146.6,496.7,155.5,496.1L155.5,496.1z"
            />
            <g id="d-43-raices" className="raices reset" data-classreset="raices reset">
                <g id="path3883_00000131366290003899760440000015129880455329547393_">
                    <path
                        d="M163.7,520.8c-1.9,0-3.9-1-5.8-1.9c-0.5-0.2-1-0.5-1.5-0.7c-5-0.9-6.5-6.2-8-11.3c-0.2-0.8-0.5-1.6-0.7-2.3
                  l0.3-0.1c0.2,0.8,0.5,1.6,0.7,2.3c1.5,5,3,10.2,7.8,11.1c0.5,0.2,1,0.5,1.5,0.7c4,1.9,7.7,3.7,10.9-2l0.3,0.2
                  C167.5,519.8,165.6,520.8,163.7,520.8z"
                    />
                </g>
                <g id="path3885_00000084488127575770129080000010734060052699926957_">
                    <path
                        d="M163.7,515.1c-0.2,0-0.5,0-0.7-0.2c-0.6-0.3-0.9-1.1-1-2.3c-0.3-2.7,0.4-4.4,1.1-6.1
                  c0.3-0.8,0.6-1.6,0.9-2.5l0.3,0.1c-0.2,0.9-0.6,1.7-0.9,2.5c-0.7,1.7-1.4,3.3-1.1,5.9c0.1,1.1,0.4,1.8,0.9,2.1
                  c0.8,0.4,2.2-0.4,3.5-1.2l0.3-0.2l0.2,0.3l-0.3,0.2C165.7,514.5,164.6,515.1,163.7,515.1z"
                    />
                </g>
                <g id="path3887_00000052098169826968539350000010287121395563217829_">
                    <path d="M151.9,504.4l-0.3-0.1c0.6-2.6,2.6-4.3,6.1-5.1l0.1,0.3C154.3,500.3,152.4,501.9,151.9,504.4z" />
                </g>
                <g id="path3889_00000158740021107639539370000008506272986876002995_">
                    <path
                        d="M154.7,510.3c-0.4,0-0.8-0.2-1.1-0.5l0.2-0.2c0.4,0.4,0.8,0.5,1.1,0.4c0.8-0.2,1.6-1.5,2.5-3.9
                  c0.6-2.7,1.7-3.6,2.8-4.4l0.2-0.2l0.2,0.3l-0.2,0.2c-1.1,0.9-2.1,1.7-2.7,4.3c-0.9,2.5-1.7,3.9-2.7,4.1
                  C154.9,510.2,154.8,510.3,154.7,510.3z"
                    />
                </g>
            </g>
            <g id="d-43-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
                <path d="M173.3,525.7l-9-7.3l4.2-5.2l9,7.3c1.1,0.9,1.3,2.6,0.4,3.8l-0.8,1C176.2,526.5,174.5,526.6,173.3,525.7z" />
                <path d="M144.3,490.2l9,9l-4.7,4.7l-9-9c-1-1-1-2.7,0-3.8l0.9-0.9C141.5,489.2,143.2,489.2,144.3,490.2z" />
            </g>
            <circle id="d-43-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="157.4" cy="508.4" r={5} />
            <g id="d-43-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
                <path
                    className="bgDisilicato"
                    d="M158,526.5c-6.1-0.2-12.4-0.5-13.7-9.4l-0.5-10.5l0,0c0.3-1.3,0.7-2.7,1.2-4c-2.1,2-2.9,4.8-3.6,7.5l0.5,10.4
              c1.3,8.7,7.2,8.9,13.4,9.1h0.3c4.1-0.1,5.9-1.7,7.8-3.6l2.2-2.6c-1.7,1.6-3.7,2.9-7.4,3L158,526.5z"
                />
                <path
                    className="borderNegro"
                    d="M155.7,529.8h-0.3c-6.3-0.2-12.2-0.4-13.5-9.3l-0.5-10.5l0,0c0.7-2.7,1.4-5.6,3.6-7.6l0.3,0.2
              c-0.6,1.3-0.9,2.8-1.2,4l0.5,10.5c1.3,8.8,7.5,9,13.5,9.3h0.3c3.5-0.1,5.4-1.2,7.2-2.9l0.2,0.2l-2.2,2.6
              C161.7,528.1,159.8,529.7,155.7,529.8z M141.6,510.1l0.5,10.4c1.3,8.5,7.1,8.7,13.2,9h0.3c4-0.1,5.9-1.7,7.7-3.5l0.9-1.1
              c-1.5,1.1-3.3,1.7-6,1.8h-0.3c-6.1-0.2-12.5-0.5-13.8-9.5l-0.5-10.5l0,0c0.3-1,0.6-2.2,1-3.3C142.9,505.1,142.3,507.6,141.6,510.1
              z"
                />
            </g>
            <g id="d-43-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
                <path
                    className="bgDirect"
                    d="M158,526.5c-6.1-0.2-12.4-0.5-13.7-9.4l-0.5-10.5l0,0c0.3-1.3,0.7-2.7,1.2-4c-2.1,2-2.9,4.8-3.6,7.5l0.5,10.4
              c1.3,8.7,7.2,8.9,13.4,9.1h0.3c4.1-0.1,5.9-1.7,7.8-3.6l2.2-2.6c-1.7,1.6-3.7,2.9-7.4,3L158,526.5z"
                />
                <path
                    className="borderNegro"
                    d="M155.7,529.8h-0.3c-6.3-0.2-12.2-0.4-13.5-9.3l-0.5-10.5l0,0c0.7-2.7,1.4-5.6,3.6-7.6l0.3,0.2
              c-0.6,1.3-0.9,2.8-1.2,4l0.5,10.5c1.3,8.8,7.5,9,13.5,9.3h0.3c3.5-0.1,5.4-1.2,7.2-2.9l0.2,0.2l-2.2,2.6
              C161.7,528.1,159.8,529.7,155.7,529.8z M141.6,510.1l0.5,10.4c1.3,8.5,7.1,8.7,13.2,9h0.3c4-0.1,5.9-1.7,7.7-3.5l0.9-1.1
              c-1.5,1.1-3.3,1.7-6,1.8h-0.3c-6.1-0.2-12.5-0.5-13.8-9.5l-0.5-10.5l0,0c0.3-1,0.6-2.2,1-3.3C142.9,505.1,142.3,507.6,141.6,510.1
              z"
                />
            </g>
            <g id="d-num-usa-43" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
                <path
                    className="colorNumber"
                    d="M119.7,536.2c3.1,0,5.3,1.8,5.3,4.6c0,2-1.2,3.5-3.5,4.7l-2.3,1.2c-0.7,0.4-1.6,0.9-1.6,1.6h7.4v2.7h-10.5
              l0-2.3c0-2.3,2-3.8,3.3-4.5l2.4-1.2c1.1-0.5,1.7-1.3,1.7-2.2c0-1.2-0.8-2.1-2.1-2.1c-1.4,0-2.2,1.2-2.2,2.8h-3.2
              C114.3,538.2,116.4,536.2,119.7,536.2z"
                />
                <path
                    className="colorNumber"
                    d="M129.4,543.8l3-4.7H125v-2.7h10.9v2.5l-3.8,5.9c-1.3,2-1.6,3.8-1.6,6.4h-3.1
              C127.3,548.3,127.8,546.3,129.4,543.8z"
                />
            </g>
            <g id="d-num-eur-43" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
                <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M119.9,549.7h-7.4V547l7.2-9.1h3.4v9.1h1.7v2.7h-1.7v2.9h-3.2V549.7z M119.9,547v-5.3l-4.3,5.3H119.9z" />
                <path
                    style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                    className="colorNumber"
                    d="M126.8,547.9h3c0,1.4,1.1,2.1,2.5,2.1c1.4,0,2.4-0.7,2.4-1.9c0-1.1-0.9-1.8-2.4-1.8h-1.4v-2.6h1.3
              c1.2,0,1.9-0.7,1.9-1.8c0-1-0.8-1.7-2.1-1.7c-1.2,0-2.1,0.7-2.1,1.9h-2.9c0-2.8,2.4-4.5,5-4.5c2.9,0,5,1.8,5,4
              c0,1.2-0.7,2.4-1.7,3.1c1.4,0.7,2.4,1.7,2.4,3.4c0,2.9-2.6,4.5-5.5,4.5C129.3,552.7,126.8,551,126.8,547.9z"
                />
            </g>
        </g>
    );
}
