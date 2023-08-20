import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
            registration.unregister();
        }
    });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
