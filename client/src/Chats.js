import React from "react";
import axios from "axios";

import WhatsApp from "./Chat/WhatsApp";

export default function Chats() {
  return (
    <div className="center" style={{ width: "95%", height: "87%" }}>
      <WhatsApp />
    </div>
  );
}
