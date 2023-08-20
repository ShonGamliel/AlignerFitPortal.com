import Text from "./Text";

const hosted = false;
export const server = hosted ? "https://alignerfitportal.com" : "http://localhost:3002";

export let statuses = {
    Pending: "#b8b8b8",
    "Contact Pending": "#82baff",
    "Follow Up Required": "#ef75ff",
    "Waiting For Redesign": "#ffa44f",
    Paid: "#e1fa00",
    Done: "#4eff33",
    Cancelled: "#ff4242",
    "Not Interested": "#ff4242",
};

export let shippingstatuses = {
    "On The Way": "#82baff",
    "On Customs Hold": "#ef75ff",
    Recieved: "#4eff33",
};

export let progresses = {
    Pending: "#b8b8b8",
    // Segmentation: "#e1fa00",
    Recieved: "#ffdd1f",
    Planning: "#ffdd1f",
    "Waiting For Approval": "#ffa44f",
    Redesign: "#ffa44f",
    Manufacturing: "#4fffbe",
    Shipped: "#4eff33",
    Cancelled: "#ff4242",
};

export const timestampToHour = (timestamp) => {
    if (!timestamp) return;
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours < 10 ? `${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
};

function timestampToDateWithTime(timestamp) {
    const date = new Date(timestamp);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function parseTimestamp(timestamp, mode = "message") {
    if (mode == "message") return timestampToHour(timestamp);
    if (mode == "casepreview") return timestampToDateWithTime(timestamp);

    if (!timestamp) return;
    const currentTime = new Date();
    const targetTime = new Date(timestamp);

    // Check if the timestamp is in the current day
    if (targetTime.getDate() === currentTime.getDate() && targetTime.getMonth() === currentTime.getMonth() && targetTime.getFullYear() === currentTime.getFullYear()) {
        if (mode == "chatpreview") return timestampToHour(timestamp);
    }

    // Check if the timestamp is in the previous day (yesterday)
    const yesterday = new Date();
    yesterday.setDate(currentTime.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    if (targetTime >= yesterday && targetTime < currentTime) {
        if (mode == "chatpreview") return Text({ children: "Yesterday" });
    }

    // Check if the timestamp is in the past 7 days
    const pastWeek = new Date();
    pastWeek.setDate(currentTime.getDate() - 7);
    pastWeek.setHours(0, 0, 0, 0);

    const options = { year: "numeric", month: "long", day: "numeric" };
    if (targetTime >= pastWeek && targetTime < yesterday) {
        // Return the day's name
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = daysOfWeek[targetTime.getDay()];
        if (mode == "chatpreview") return targetTime.toLocaleDateString(undefined, options);
    }

    // Return the full date for timestamps not falling into the previous conditions

    if (mode == "chatpreview") return targetTime.toLocaleDateString(undefined, options);
}
