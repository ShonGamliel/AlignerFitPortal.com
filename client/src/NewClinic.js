import React from "react";
import axios from "axios";
import { CasesContext, LanguageContext, UserContext } from "./Contexts";
import { server } from "./env";
import Text from "./Text";

export default function NewClinic({ setAdding }) {
    const { user } = React.useContext(UserContext);
    const [name, setName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [postcode, setPostcode] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const { lang } = React.useContext(LanguageContext);
    const { updateClinics } = React.useContext(CasesContext);

    const [emailError, setEmailError] = React.useState(false);

    const [nameError, setNameError] = React.useState(false);
    const [addressError, setAddressError] = React.useState(false);
    const [cityError, setCityError] = React.useState(false);
    const [countryError, setCountryError] = React.useState(false);
    const [postcodeError, setPostcodeError] = React.useState(false);
    const [phoneError, setPhoneError] = React.useState(false);

    const isEmail = (emailadd) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(emailadd);
    };

    const submit = () => {
        if (!email.length || !isEmail(email)) {
            setEmailError(true);
            setTimeout(() => setEmailError(false), 2000);
            return;
        }
        if (!name.length) {
            setNameError(true);
            setTimeout(() => setNameError(false), 2000);
            return;
        }
        if (!address.length) {
            setAddressError(true);
            setTimeout(() => setAddressError(false), 2000);
            return;
        }
        if (!city.length) {
            setCityError(true);
            setTimeout(() => setCityError(false), 2000);
            return;
        }
        if (!country.length) {
            setCountryError(true);
            setTimeout(() => setCountryError(false), 2000);
            return;
        }
        if (!postcode.length) {
            setPostcode(true);
            setTimeout(() => setPostcode(false), 2000);
            return;
        }
        if (!phone.length) {
            setPhoneError(true);
            setTimeout(() => setPhoneError(false), 2000);
            return;
        }

        axios
            .post(`${server}/clinic`, { userid: user._id, name: name, address: address, city: city, country: country, postcode: postcode, phone: phone, email: email })
            .then((res) => {
                if (res.data.error) {
                } else {
                    updateClinics(res.data);
                    setAdding(false);
                }
            })
            .catch();
    };
    return (
        <>
            <div style={{ fontSize: 26, color: "#daa520", fontWeight: 600 }}>
                <Text>Add Clinic</Text>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div className="input-container" style={{ border: nameError ? "red 2px solid" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="#daa520">
                        <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                    </svg>
                    <input type="text" placeholder={Text({ children: "Name" })} className="input-text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="input-container" style={{ border: addressError ? "red 2px solid" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill="#daa520">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <input type="text" placeholder={Text({ children: "Address" })} className="input-text" onChange={(e) => setAddress(e.target.value)} value={address} />
                </div>
                <div className="input-container" style={{ border: cityError ? "red 2px solid" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="#daa520">
                        <path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
                    </svg>
                    <input type="text" placeholder={Text({ children: "City" })} className="input-text" onChange={(e) => setCity(e.target.value)} value={city} />
                </div>
                <div className="input-container" style={{ border: countryError ? "red 2px solid" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#daa520">
                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                    </svg>
                    <input type="text" placeholder={Text({ children: "Country" })} className="input-text" onChange={(e) => setCountry(e.target.value)} value={country} />
                </div>
                <div className="input-container" style={{ border: postcodeError ? "red 2px solid" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="#daa520">
                        <path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z" />
                    </svg>
                    <input type="text" placeholder={Text({ children: "Postcode" })} className="input-text" onChange={(e) => setPostcode(e.target.value)} value={postcode} />
                </div>
                <div className="input-container" style={{ border: phoneError ? "red 2px solid" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#daa520">
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                    <input type="text" placeholder={Text({ children: "Phone" })} className="input-text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div className="input-container" style={{ border: emailError ? "red 2px solid" : "none" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#daa520">
                        <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                    </svg>
                    <input type="text" placeholder={Text({ children: "Email" })} className="input-text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
            </div>
            <div style={{ display: "flex", gap: 15 }}>
                <div className="btn" style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12 }} onClick={() => submit()}>
                    <Text>Submit</Text>
                </div>
                <div className="btn" style={{ backgroundColor: "#ff5252", alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12 }} onClick={() => setAdding(false)}>
                    <Text>Abort</Text>
                </div>
            </div>
        </>
    );
}
