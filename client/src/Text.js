import React from "react";
import { LanguageContext } from "./Contexts";

import languages from "./languages";

export default function Text({ children }) {
    const { lang } = React.useContext(LanguageContext);
    if (!children) return "";

    if (lang === "en") return children;

    const translatedText = languages[children.toLowerCase()]?.[lang] || languages[children]?.[lang];
    if (translatedText) {
        return translatedText;
    } else {
        console.log("Not translated: " + children);
        return children;
    }
}
