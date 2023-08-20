import "./Contact.css";
import React from "react";
import { UserContext } from "./Contexts";

export default function Contact() {
  const { user } = React.useContext(UserContext);
  const [email, setEmail] = React.useState(user ? user.email : "");
  return (
    <div className="center dialog" id="contact">
      <div style={{ fontSize: 26, color: "white", fontWeight: 600 }}>Contact</div>
      <div id="contact-ways">
        <div className="contact-way">
          <svg className="contact-way-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <div className="contact-way-text">+972 50 866 9692</div>
        </div>
        <div className="contact-way">
          <svg className="contact-way-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          <div className="contact-way-text">9:00 - 19:00</div>
        </div>
        <div className="contact-way">
          <svg className="contact-way-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <div className="contact-way-text">
            Abba Eban 1, Herzliya <br></br>4672519, Israel
          </div>
        </div>
      </div>
      <div>You can contact us through our phone or if you prefer you can write to us from the contact form</div>

      <select>
        <option selected="">Please Select Department</option>
        <option value="Management">Management</option>
        <option value="Clinical Support">Clinical Support</option>
        <option value="Production Support">Production Support</option>
        <option value="Web Support">Web Support</option>
      </select>

      <div className="input-container">
        <input
          type="text"
          placeholder="example@gmail.com"
          className="input-text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div
        id="contact-message"
        contentEditable
        style={{ textAlign: "left", wordBreak: "break-word", wordWrap: "break-word" }}
        type="text"
        placeholder="Message"
        className="input-text"
        //   onChange={(e) => {
        //     setEmail(e.target.value);
        //   }}
        //   value={email}
      />
      <div className="btn" style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12 }}>
        Send
      </div>
    </div>
  );
}
