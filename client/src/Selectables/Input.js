import React from "react";
import Text from "../Text";
export default function Input({ setter, getter, placeholder, style, containerstyle, error, seterror, inputtype = "text", icon, errorText }) {
    React.useEffect(() => {
        if (error) {
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }
    }, [error]);

    return (
        <div style={{ ...containerstyle }}>
            {error ? <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>{errorText ? <Text>{error}</Text> : <Text>Required</Text>}</div> : <></>}
            <div className="input-container">
                {icon ? icon : <></>}
                <input style={{ ...style }} type={inputtype} placeholder={Text({ children: placeholder })} className="input-text" onChange={(e) => (setter ? setter(e.target.value) : undefined)} value={getter} />
            </div>
        </div>
    );
}
