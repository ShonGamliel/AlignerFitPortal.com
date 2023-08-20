import React from "react";
import { progresses, statuses } from "./env";
import Text from "./Text";

export default function StatusFilter({ setFilters, filters, style }) {
    const [menu, setMenu] = React.useState();
    const menuRef = React.useRef();

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className="select-multiple" style={{ zIndex: 9999, alignSelf: "flex-start", position: "relative", ...style }} onClick={() => setMenu(true)}>
            <Text>Choose Filters</Text>...
            {menu ? (
                <div className="select-multiple-list" style={{ zIndex: 9999, position: "fixed", display: "flex", flexDirection: "column", backgroundColor: "white", padding: "5px 10px 5px 10px", width: "300px" }}>
                    <div className="select-multiple-list-seperator">
                        <Text>Status</Text>
                    </div>
                    {Object.keys(statuses).map((s, idx) => (
                        <div className="select-multiple-list-item" key={idx} style={{ display: "flex", gap: 5 }}>
                            <input type="checkbox" id={"s_" + s} name={"s_" + s} value={s} onChange={(e) => (filters.includes(`status_${s}`) ? setFilters(filters.filter((i) => i != `status_${s}`)) : setFilters([...filters, `status_${s}`]))} />
                            <label htmlFor={"s_" + s}>
                                <Text>{s}</Text>
                            </label>
                        </div>
                    ))}
                    <div className="select-multiple-list-seperator">
                        <Text>Progress</Text>
                    </div>
                    {Object.keys(progresses).map((s, idx) => (
                        <div className="select-multiple-list-item" key={idx} style={{ display: "flex", gap: 5 }}>
                            <input type="checkbox" id={"p_" + s} name={"p_" + s} value={s} onChange={(e) => (filters.includes(`progress_${s}`) ? setFilters(filters.filter((i) => i != `progress_${s}`)) : setFilters([...filters, `progress_${s}`]))} />
                            <label htmlFor={"p_" + s}>
                                <Text>{s}</Text>
                            </label>
                        </div>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
