export default function Veener() {
  return (
    <svg
      version="1.1"
      className="bg-light col-4 d-block mx-auto rounded rt-icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 49.6 63.8"
      style={{ enableBackground: "new 0 0 49.6 63.8" }}
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id="bg-pmma" x1="-100%" y1={0} x2="200%" y2={0} gradientTransform="rotate(90)">
          <stop offset="0.3" stopColor="#f59618" />
          <stop offset={1} stopColor="#ffecd4" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="bg-disilicato" x1="-100%" y1={0} x2="200%" y2={0} gradientTransform="rotate(90)">
          <stop offset="0.3" stopColor="#4763AC" />
          <stop offset={1} stopColor="#d3dcf2" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="bg-bridge" x1="-100%" y1={0} x2="200%" y2={0} gradientTransform="rotate(90)">
          <stop offset="0.3" stopColor="#00ccb4" />
          <stop offset={1} stopColor="#daf5f2" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="bg-metalceramico" x1="-100%" y1={0} x2="200%" y2={0} gradientTransform="rotate(90)">
          <stop offset="0.3" stopColor="#656469" />
          <stop offset={1} stopColor="#ecebf0" />
        </linearGradient>
      </defs>
      <defs>
        <radialGradient id="bg-direct">
          <stop offset="5%" stopColor="#f7b7b7" />
          <stop offset="95%" stopColor="#cc2f2f" />
        </radialGradient>
      </defs>
      <g className="diente piezaSeleccionada coronaDiente">
        <path
          className="pontic"
          d="M27.7,53.6c-0.1-0.2-0.1-0.5-0.3-0.7c-0.7-1.5-2.2-2.5-3.9-2.5c-2.4,0-4.3,1.9-4.3,4.3
  c0,0.4,0,0.7,0.1,1c0.1,0.2,0.1,0.5,0.2,0.7c0.7,1.5,2.2,2.5,3.9,2.5c2.4,0,4.3-1.9,4.3-4.3C27.9,54.3,27.8,53.9,27.7,53.6z"
        />
        <path
          className="background ondoto-transition"
          d="M7.9,25.4c0.1,0.7,3.9,7.4,4.8,10.4c1.3,3.3,3.4,6.2,8.9,7.8c4.5-0.6,9-0.7,12.8-6
  l9.3-14.1l1.7-4.5c1.2-3.2-1.4-6.2-3.9-7.5l-6.7-1.8c-3.9-0.3-6.5-1.4-14.2,0.9l-7.2,1.6c-2.6,1.2-6.1,0.7-6.2,6.5
  C7.4,20.9,6.5,22.9,7.9,25.4L7.9,25.4z"
        />
        <g>
          <path
            className="raices"
            d="M14.8,34.2c-0.1,0-0.2-0.1-0.2-0.1l-1.6-14h0.2l0,0h0.1c0.1-0.1,0-0.3,0-0.6c-0.1-0.9-0.1-2.5,2.2-3.4
  c5.7-2.2,14.1-4.1,21.4-0.2c2,1,3.8,4,3.4,7.1c-0.3,2.2-0.8,3.1-1.3,4.1c-0.2,0.4-0.4,0.7-0.5,1.2c0,0.1-0.1,0.1-0.2,0.1
  c-0.1,0-0.1-0.1-0.1-0.2c0.2-0.4,0.4-0.8,0.6-1.2c0.5-0.9,1-1.9,1.2-4c0.4-3-1.4-5.8-3.3-6.8c-7.2-3.8-15.5-2-21.2,0.2
  c-2.1,0.8-2,2.2-2,3.1c0,0.4,0,0.7-0.1,0.8l-0.1,0.1L14.9,34C15,34.1,14.9,34.1,14.8,34.2L14.8,34.2z"
          />
        </g>
        <circle className="corona-implante ondoto-transition" cx="24.6" cy="24.8" r={5} />
        <g className="carilla-ff">
          <path
            className="bgDisilicato"
            d="M7,20.6c0-0.6,0.1-1.3,0.1-2c0.1-4.8,2.4-5.5,4.6-6.1c0.6-0.2,1.1-0.3,1.7-0.6l7.2-1.6
  c6.1-1.8,9.1-1.5,11.9-1.1c0.7,0.1,1.5,0.2,2.3,0.2l6.8,1.8c1.1,0.5,2.2,1.5,3.1,2.6l0.6-2.1c0.2-0.8,0-1.6-0.7-2.4
  C42.8,7.1,38,5.1,31.3,5.1c-1.2,0-2.4,0.1-3.6,0.2c-0.2,0-19.2,2-23.1,9.6c-1.1,2.2-0.8,4.7,0.8,7.4v0.1c0,0.2,0.9,1.6,1.9,3
  c0.5,0.8,1.1,1.7,1.7,2.7c-0.8-1.5-1.2-2.4-1.2-2.6C6.8,23.7,6.9,22.1,7,20.6z"
          />
          <path
            className="borderNegro"
            d="M8.9,28.2c-0.6-0.9-1.2-1.8-1.7-2.7c-1.2-1.8-1.9-2.8-1.9-3.1l0,0c-1.6-2.7-1.9-5.3-0.8-7.5
  c3.9-7.7,22.4-9.6,23.2-9.7C28.9,5.1,30.1,5,31.3,5c7.3,0,11.8,2.3,13.4,4.3c0.7,0.9,1,1.8,0.7,2.6l-0.7,2.4L44.5,14
  c-0.8-1-1.9-2-3-2.6l-6.7-1.8c-0.8,0-1.5-0.1-2.2-0.2l0,0c-2.8-0.3-5.8-0.7-11.9,1.1l-7.2,1.6c-0.5,0.2-1.1,0.4-1.6,0.6
  c-2.2,0.7-4.5,1.3-4.5,6c0,0.7,0,1.3-0.1,2l0,0c-0.1,1.5-0.2,3,0.8,4.7l0,0c0.1,0.3,0.5,1.3,1.2,2.6L8.9,28.2z M31.3,5.3
  c-1.2,0-2.4,0.1-3.6,0.2c-0.2,0-19.2,2-22.9,9.5c-1.1,2.1-0.8,4.6,0.8,7.2v0.1c0.1,0.2,1.1,1.8,1.9,3c0.1,0.1,0.2,0.3,0.3,0.4
  c0-0.1-0.1-0.2-0.1-0.3c-1-1.8-0.9-3.4-0.8-4.9l0,0c0-0.6,0.1-1.3,0.1-1.9c0.1-4.9,2.4-5.6,4.7-6.3c0.6-0.2,1.1-0.3,1.6-0.6
  l7.3-1.6c6.1-1.8,9.1-1.5,12-1.1l0,0c0.7,0.1,1.5,0.2,2.3,0.2l6.7,1.9c1.1,0.6,2.2,1.5,3,2.4l0.5-1.8c0.2-0.7,0-1.5-0.7-2.3
  C42.9,7.5,38.5,5.3,31.3,5.3z"
          />
        </g>
        <g className="direct-ff">
          <path
            className="bgDirect"
            d="M7,20.6c0-0.6,0.1-1.3,0.1-2c0.1-4.8,2.4-5.5,4.6-6.1c0.6-0.2,1.1-0.3,1.7-0.6l7.2-1.6
  c6.1-1.8,9.1-1.5,11.9-1.1c0.7,0.1,1.5,0.2,2.3,0.2l6.8,1.8c1.1,0.5,2.2,1.5,3.1,2.6l0.6-2.1c0.2-0.8,0-1.6-0.7-2.4
  C42.8,7.1,38,5.1,31.3,5.1c-1.2,0-2.4,0.1-3.6,0.2c-0.2,0-19.2,2-23.1,9.6c-1.1,2.2-0.8,4.7,0.8,7.4v0.1c0,0.2,0.9,1.6,1.9,3
  c0.5,0.8,1.1,1.7,1.7,2.7c-0.8-1.5-1.2-2.4-1.2-2.6C6.8,23.7,6.9,22.1,7,20.6z"
          />
          <path
            className="borderNegro"
            d="M8.9,28.2c-0.6-0.9-1.2-1.8-1.7-2.7c-1.2-1.8-1.9-2.8-1.9-3.1l0,0c-1.6-2.7-1.9-5.3-0.8-7.5
  c3.9-7.7,22.4-9.6,23.2-9.7C28.9,5.1,30.1,5,31.3,5c7.3,0,11.8,2.3,13.4,4.3c0.7,0.9,1,1.8,0.7,2.6l-0.7,2.4L44.5,14
  c-0.8-1-1.9-2-3-2.6l-6.7-1.8c-0.8,0-1.5-0.1-2.2-0.2l0,0c-2.8-0.3-5.8-0.7-11.9,1.1l-7.2,1.6c-0.5,0.2-1.1,0.4-1.6,0.6
  c-2.2,0.7-4.5,1.3-4.5,6c0,0.7,0,1.3-0.1,2l0,0c-0.1,1.5-0.2,3,0.8,4.7l0,0c0.1,0.3,0.5,1.3,1.2,2.6L8.9,28.2z M31.3,5.3
  c-1.2,0-2.4,0.1-3.6,0.2c-0.2,0-19.2,2-22.9,9.5c-1.1,2.1-0.8,4.6,0.8,7.2v0.1c0.1,0.2,1.1,1.8,1.9,3c0.1,0.1,0.2,0.3,0.3,0.4
  c0-0.1-0.1-0.2-0.1-0.3c-1-1.8-0.9-3.4-0.8-4.9l0,0c0-0.6,0.1-1.3,0.1-1.9c0.1-4.9,2.4-5.6,4.7-6.3c0.6-0.2,1.1-0.3,1.6-0.6
  l7.3-1.6c6.1-1.8,9.1-1.5,12-1.1l0,0c0.7,0.1,1.5,0.2,2.3,0.2l6.7,1.9c1.1,0.6,2.2,1.5,3,2.4l0.5-1.8c0.2-0.7,0-1.5-0.7-2.3
  C42.9,7.5,38.5,5.3,31.3,5.3z"
          />
        </g>
      </g>
    </svg>
  );
}
