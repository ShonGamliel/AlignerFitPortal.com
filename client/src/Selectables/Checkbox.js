import React from "react";
import Text from "../Text";

export default function Checkbox({ title, options, titlestyle, optionsstyle, setter, getter, error, seterror }) {
    const addToStateArray = (item) => {
        if (!getter.includes(item)) {
            setter([...getter, item]);
        }
    };

    const removeFromStateArray = (item) => {
        const updatedArray = getter.filter((value) => value !== item);
        setter(updatedArray);
    };

    React.useEffect(() => {
        if (error) {
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }
    }, [error]);
    return (
        <div>
            {error ? (
                <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                    <Text>Required</Text>
                </div>
            ) : (
                <></>
            )}
            <div style={{ fontWeight: 600, fontSize: 16, ...titlestyle }}>
                <Text>{title}</Text>:
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {options.map((o, idx) => (
                    <div key={idx} style={{ display: "flex", gap: 5, ...optionsstyle }}>
                        <input
                            type="checkbox"
                            id={o}
                            name={title}
                            value={o}
                            onChange={(e) => {
                                e.target.checked ? addToStateArray(o) : removeFromStateArray(o);
                            }}
                            checked={getter.includes(o) ? true : false}
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
