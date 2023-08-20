import React from "react";

export default function Menu({ options, setter, getter, style }) {
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

    return <div ref={menuRef} style={{ ...style }}></div>;
}
