export default function Teeth13({ onClick, teeths, number }) {
  return (
      <g id="d-13" className={teeths[number] ? "diente reset piezaSeleccionada" : "diente reset"} data-numbering-type={13} data-nearbyteeth="14-12" data-classreset="diente reset" onClick={onClick}>
          <path
              id="pontic-13"
              className="pontic reset"
              d="M176.1,117.2c-0.2-0.2-0.4-0.3-0.7-0.4c-0.7-0.4-1.5-0.6-2.4-0.6c-2.7,0-5,2.2-5,5c0,1.5,0.7,2.9,1.8,3.8
      c0.2,0.2,0.4,0.3,0.7,0.5c0.7,0.4,1.6,0.7,2.5,0.7c2.7,0,5-2.2,5-5C178,119.5,177.3,118.1,176.1,117.2z"
              data-classreset="pontic reset"
          />
          <path
              id="d-13-background"
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
              d="M134.8,110.1c-5.9-2-8.6-5.5-9.2-10.2c-0.7-4.6,0.1-9,2.8-13.3c2.4-6.7,4.8-6.3,7.2-6.8
          c2.1,0.3,4.1,0.1,6-0.1c5.7-0.3,7.9,2.3,9.2,4c4.8,6.5,4.3,10.2,5.5,14.9c0.6,5.1,0.3,9.5-2.3,11.9c-7.9,5.9-9.3,3-12.6,2.8
          C135.2,110.6,136.8,111.1,134.8,110.1z"
          />
          <g id="d-13-raices" className="raices reset" data-classreset="raices reset">
              <g id="path3894_00000091720765337837107110000001299196688462346916_">
                  <path
                      d="M131.2,103.6L131.2,103.6c-0.1,0-0.2-0.1-0.2-0.2c0.3-6.1,0.8-12.4,3.8-15.3c3.2-3.4,7.1-5.4,12-6.2
                  c0.1,0,0.2,0,0.2,0.1s0,0.2-0.1,0.2c-4.8,0.8-8.6,2.8-11.8,6.1c-3,2.9-3.5,9-3.7,15.1C131.3,103.6,131.3,103.6,131.2,103.6z"
                  />
              </g>
              <g id="path3896_00000135688016568099972830000006427105213688958899_">
                  <path
                      d="M151.3,100.9c-0.9,0-2.7-1.3-6.3-4.7c-0.1-0.1-0.1-0.2,0-0.2c0.1-0.1,0.2-0.1,0.2,0c2.8,2.6,5.6,5,6.3,4.6
                  c0.8-0.5-0.2-4-1.6-9.4c-0.3-1-0.6-2.2-0.9-3.4c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0.1c0.3,1.2,0.6,2.3,0.9,3.4
                  c1.6,6.1,2.4,9.2,1.4,9.8C151.6,100.9,151.5,100.9,151.3,100.9z"
                  />
              </g>
              <g id="path3898_00000053510101515480932650000001465579981751682214_">
                  <path
                      d="M143.8,108.1c-1.4,0-4.1-1-8.5-3.1c-0.1,0-0.1-0.1-0.1-0.2s0.1-0.1,0.2-0.1c2,1,8.2,4,9.1,2.8
                  c0.4-0.5,0.1-2-3.6-6.5c-0.1-0.1,0-0.2,0-0.2c0.1-0.1,0.2,0,0.2,0c4.2,5,4.1,6.3,3.6,6.9C144.7,107.9,144.3,108.1,143.8,108.1z"
                  />
              </g>
          </g>
          <g id="d-13-bridge-ff" className="bridge-ff reset" data-classreset="bridge-ff  reset">
              <path d="M162.5,82.9l-9.5,6.7l-3.8-5.4l9.5-6.7c1.2-0.9,2.9-0.6,3.7,0.6l0.7,1C164,80.3,163.7,82,162.5,82.9z" />
              <path d="M127,114.4l5.8-11.3l5.9,3l-5.8,11.3c-0.7,1.3-2.3,1.8-3.6,1.2l-1.1-0.6C126.8,117.3,126.3,115.7,127,114.4z" />
          </g>
          <circle id="d-13-corona-implante" className="corona-implante ondoto-transition reset" data-classreset="corona-implante  ondoto-transition reset" cx="141.6" cy="96.5" r={5} />
          <g id="d-13-carilla-ff" className="carilla-ff reset" data-classreset="carilla-ff reset " style={{ display: teeths[number]?.RT == "Veneer" ? "block" : "none" }}>
              <path
                  className="bgDisilicato"
                  d="M128.3,86.5c2.2-6.1,4.4-6.4,6.6-6.7c0.2,0,0.5-0.1,0.7-0.1l0,0l0,0c2.3,0.3,4.3,0.1,5.9-0.1
              c2.2-0.1,3.9,0.2,5.3,0.8c-0.3-0.4-0.5-0.8-0.8-1.2c-1.4-1.7-3-3.1-8.6-2.9c-4.7,0.5-8.4,2.4-11,5.7c-3.4,4.4-4,10.4-3.5,13.3
              c0.4,3.3,1,6,3.4,7.9c-0.4-1-0.7-2.1-0.9-3.3C124.7,95.2,125.6,90.6,128.3,86.5z"
              />
              <path
                  className="borderNegro"
                  d="M126.2,103.4c-2.5-2-3-4.9-3.4-8c-0.5-2.9,0.1-9,3.6-13.4c2.6-3.4,6.3-5.3,11.1-5.8c5.7-0.3,7.3,1.2,8.7,3
              c0.3,0.4,0.5,0.7,0.8,1.2l0.3,0.4l-0.5-0.2c-1.5-0.6-3.2-0.9-5.2-0.8c-1.7,0.2-3.7,0.4-6,0.1c-0.2,0-0.5,0.1-0.7,0.1
              c-2.1,0.3-4.3,0.7-6.4,6.6l0,0c-2.6,4.1-3.6,8.6-2.8,13.3c0.2,1.2,0.4,2.3,0.9,3.3L126.2,103.4z M138.6,76.4c-0.4,0-0.8,0-1.2,0
              c-4.7,0.5-8.3,2.4-10.9,5.7c-3.4,4.4-3.9,10.3-3.5,13.2s0.9,5.4,2.8,7.4c-0.3-0.9-0.5-1.8-0.6-2.7c-0.8-4.8,0.2-9.4,2.9-13.5
              c2.2-6.2,4.5-6.5,6.7-6.8c0.2,0,0.5-0.1,0.7-0.1h0.1c2.3,0.3,4.3,0.1,5.9-0.1c1.8-0.1,3.5,0.1,4.9,0.6c-0.2-0.3-0.4-0.5-0.5-0.7
              C144.6,77.7,143.2,76.4,138.6,76.4z"
              />
          </g>
          <g id="d-13-direct-ff" className="direct-ff reset" data-classreset="direct-ff reset ">
              <path
                  className="bgDirect"
                  d="M128.3,86.5c2.2-6.1,4.4-6.4,6.6-6.7c0.2,0,0.5-0.1,0.7-0.1l0,0l0,0c2.3,0.3,4.3,0.1,5.9-0.1
              c2.2-0.1,3.9,0.2,5.3,0.8c-0.3-0.4-0.5-0.8-0.8-1.2c-1.4-1.7-3-3.1-8.6-2.9c-4.7,0.5-8.4,2.4-11,5.7c-3.4,4.4-4,10.4-3.5,13.3
              c0.4,3.3,1,6,3.4,7.9c-0.4-1-0.7-2.1-0.9-3.3C124.7,95.2,125.6,90.6,128.3,86.5z"
              />
              <path
                  className="borderNegro"
                  d="M126.2,103.4c-2.5-2-3-4.9-3.4-8c-0.5-2.9,0.1-9,3.6-13.4c2.6-3.4,6.3-5.3,11.1-5.8c5.7-0.3,7.3,1.2,8.7,3
              c0.3,0.4,0.5,0.7,0.8,1.2l0.3,0.4l-0.5-0.2c-1.5-0.6-3.2-0.9-5.2-0.8c-1.7,0.2-3.7,0.4-6,0.1c-0.2,0-0.5,0.1-0.7,0.1
              c-2.1,0.3-4.3,0.7-6.4,6.6l0,0c-2.6,4.1-3.6,8.6-2.8,13.3c0.2,1.2,0.4,2.3,0.9,3.3L126.2,103.4z M138.6,76.4c-0.4,0-0.8,0-1.2,0
              c-4.7,0.5-8.3,2.4-10.9,5.7c-3.4,4.4-3.9,10.3-3.5,13.2s0.9,5.4,2.8,7.4c-0.3-0.9-0.5-1.8-0.6-2.7c-0.8-4.8,0.2-9.4,2.9-13.5
              c2.2-6.2,4.5-6.5,6.7-6.8c0.2,0,0.5-0.1,0.7-0.1h0.1c2.3,0.3,4.3,0.1,5.9-0.1c1.8-0.1,3.5,0.1,4.9,0.6c-0.2-0.3-0.4-0.5-0.5-0.7
              C144.6,77.7,143.2,76.4,138.6,76.4z"
              />
          </g>
          <g id="d-num-usa-13" className="odonto-num odonto-num-usa reset d-none" data-classreset="odonto-num odonto-num-usa reset d-none">
              <path
                  className="colorNumber"
                  d="M117.5,72.3c0,2.8-2.4,5-5.5,5c-3.8,0-5.8-3.1-5.8-7.1c0-5,2.4-8,6-8c3.1,0,5.2,1.9,5.5,4.3h-2.8
              c-0.2-1-1.2-1.7-2.5-1.7c-1.9,0-3.1,1.8-3.2,4.2c0.6-0.9,2-1.6,3.3-1.6C115.4,67.4,117.5,69.5,117.5,72.3z M114.7,72.3
              c0-1.4-1.1-2.5-2.7-2.5c-1.6,0-2.7,1-2.7,2.5c0,1.5,1.1,2.5,2.7,2.5C113.6,74.8,114.7,73.8,114.7,72.3z"
              />
          </g>
          <g id="d-num-eur-13" className="odonto-num odonto-num-eur reset" data-classreset="odonto-num odonto-num-eur reset">
              <path style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }} className="colorNumber" d="M109.1,77.2h-3.2V66.7c-0.3,0.4-1.3,0.6-1.9,0.6h-1v-2.7h1c1.2,0,2-0.5,2.2-2.1h3V77.2z" />
              <path
                  style={{ fill: teeths[number]?.pontic ? "#ff2424" : undefined }}
                  className="colorNumber"
                  d="M111.5,72.5h3c0,1.4,1.1,2.1,2.5,2.1c1.4,0,2.4-0.7,2.4-1.9c0-1.1-0.9-1.8-2.4-1.8h-1.4v-2.6h1.3
              c1.2,0,1.9-0.7,1.9-1.8c0-1-0.8-1.7-2.1-1.7c-1.2,0-2.1,0.7-2.1,1.9h-2.9c0-2.8,2.4-4.5,5-4.5c2.9,0,5,1.8,5,4
              c0,1.2-0.7,2.4-1.7,3.1c1.4,0.7,2.4,1.7,2.4,3.4c0,2.9-2.6,4.5-5.5,4.5C114,77.4,111.5,75.6,111.5,72.5z"
              />
          </g>
      </g>
  );
}
