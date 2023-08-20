import React from "react";
import Text from "../Text";
export default function Select({ id, placeholder, updater, updaterkey, mapInfo, optionkey, secondoptionkey, options, error, setter, getter, seterror, style, title, titlestyle }) {
    const tryJSONStringify = (str) => {
        try {
            let result = JSON.parse(str);
            return result;
        } catch (e) {
            return str;
        }
    };

    React.useEffect(() => {
        if (error) {
            setTimeout(() => {
                seterror(false);
            }, 2000);
        }
    }, [error]);

    return (
        <div id={id}>
            {title ? (
                <div style={{ fontSize: 17, color: "#d4ad44", fontWeight: 600, ...titlestyle }}>
                    <Text>{title}</Text>
                </div>
            ) : (
                <></>
            )}
            {error ? (
                <div style={{ fontSize: 13, color: "red", fontWeight: 700, marginLeft: 5 }}>
                    <Text>Required</Text>
                </div>
            ) : (
                <></>
            )}
            <select
                style={{ ...style }}
                defaultValue={setter ? (getter?.length ? getter : "default") : mapInfo.has(updaterkey) ? tryJSONStringify(mapInfo.get(updaterkey)) : "default"}
                onChange={(e) => {
                    if (e.target.value != "default") {
                        if (setter) {
                            if (typeof tryJSONStringify(e.target.value) == "object") {
                                setter(tryJSONStringify(e.target.value)[optionkey]);
                            } else {
                                setter(e.target.value);
                            }
                        } else {
                            updater(updaterkey, JSON.parse(e.target.value));
                        }
                    }
                }}
            >
                <option value="default" disabled>
                    {Text({ children: placeholder })}
                </option>
                {options.map((c, idx) => (
                    <option value={typeof c == "object" ? JSON.stringify(c) : c} key={idx}>
                        {typeof c == "object" ? `${c[optionkey]}${secondoptionkey ? ` - ${c[secondoptionkey]}` : ""}` : c}
                    </option>
                ))}
            </select>
        </div>
    );
}
