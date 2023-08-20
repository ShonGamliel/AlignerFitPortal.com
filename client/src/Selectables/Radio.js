import React from "react";
import Text from "../Text";
export default function Radio({ title, options, getter, setter, titlestyle, optionsstyle, error, seterror, containerstyle, column = true }) {
    React.useEffect(() => {
        if (error) {
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }
    }, [error]);
    return (
        <div>
            {error && !column ? (
                <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                    <Text>Required</Text>
                </div>
            ) : (
                <></>
            )}
            <div style={{ display: "flex", flexDirection: column ? "column" : "row", gap: column ? 0 : 10, ...containerstyle }}>
                <div style={{ fontWeight: 600, fontSize: 16, ...titlestyle }}>
                    <Text>{title}</Text>:
                </div>
                {error && column ? (
                    <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                        <Text>Required</Text>
                    </div>
                ) : (
                    <></>
                )}
                {options.map((o, idx) => (
                    <div key={idx} style={{ display: "flex", gap: column ? 10 : 3, ...optionsstyle }}>
                        <input
                            type="radio"
                            id={o}
                            name={title}
                            value={o}
                            checked={getter == o}
                            onChange={() => {}}
                            onClick={() => {
                                setter(o);
                            }}
                        />
                        <label htmlFor={o}>
                            <Text>{o}</Text>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
