import ChatPreview from "./right-panel-chats/ChatPreview";
import "./RightPanel.css";

import StatusFilter from "../../StatusFilter";

import React from "react";
import { ChatContext, NavContext, UserContext, CasesContext } from "../../Contexts";

import { progresses } from "../../env";
import colors from "../../colors";
import Text from "../../Text";

export default function RightPanel() {
    const { chatsHistory, chat } = React.useContext(ChatContext);
    const [filters, setFilters] = React.useState([]);
    const [sort, setSort] = React.useState("date");
    const { user } = React.useContext(UserContext);
    const { portal } = React.useContext(NavContext);
    const { cases } = React.useContext(CasesContext);

    const [search, setSearch] = React.useState("");

    const [chatView, setChatView] = React.useState("Chats");

    const [pendingsCount, setPendingsCount] = React.useState(0);
    const [archivedCount, setArchivedCount] = React.useState(0);

    const [chatsCount, setChatsCount] = React.useState(0);

    React.useEffect(() => {
        setPendingsCount(Object.values(chatsHistory).filter((c) => c.type == portal && cases[c.caseid].progress == "Pending" && !user.archivedChats?.includes(c.caseid)).length);
        setArchivedCount(Object.values(chatsHistory).filter((c) => c.type == portal && user.archivedChats?.includes(c.caseid)).length);
        setChatsCount(Object.values(chatsHistory).filter((c) => c.type == portal).length);
    }, [chatsHistory, user, portal]);

    return (
        <div id="right-panel" style={{ borderRadius: 15, width: chat ? "50%" : "70%", backgroundColor: colors.containerBackground }}>
            <div style={{ overflowX: "auto", height: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: 5, gap: 10 }}>
                <StatusFilter setFilters={setFilters} filters={filters} />
                <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
                    <Text>Sort By</Text>:
                    <div style={{ display: "flex", gap: 10 }}>
                        <div style={{ display: "flex", gap: 10 }}>
                            <input
                                type="radio"
                                id="bydate"
                                name="sort"
                                value="bydate"
                                checked={sort == "date"}
                                onChange={() => {}}
                                onClick={() => {
                                    setSort("date");
                                }}
                            />
                            <label htmlFor="bydate">
                                <Text>Date</Text>
                            </label>
                        </div>
                        <div style={{ display: "flex", gap: 10 }}>
                            <input
                                type="radio"
                                id="byprogress"
                                name="sort"
                                value="byprogress"
                                checked={sort == "progress"}
                                onChange={() => {}}
                                onClick={() => {
                                    setSort("progress");
                                }}
                            />
                            <label htmlFor="byprogress">
                                <Text>Progress</Text>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div id="right-panel-search">
                <div id="right-panel-search-input">
                    <div
                        id="right-panel-search-input-text"
                        contentEditable="true"
                        placeholder={Text({ children: "Search" })}
                        onInput={(e) => {
                            setSearch(e.target.innerText);
                        }}
                    />
                    <svg viewBox="0 0 24 24" height="24" width="24" x="0px" y="0px">
                        <path
                            fill="#54656f"
                            d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "5px 20px 5px 20px", borderBottom: "grey 0.5px solid" }}>
                <div
                    style={{ fontWeight: chatView == "Archive" ? 700 : 600, cursor: "pointer", backgroundColor: chatView == "Archive" ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.15)", padding: 2, borderRadius: 5, width: "100%", textAlign: "center" }}
                    onClick={() => setChatView("Archive")}
                >
                    <Text>Archive</Text> ({archivedCount})
                </div>
                <div style={{ fontWeight: chatView == "Chats" ? 700 : 600, cursor: "pointer", backgroundColor: chatView == "Chats" ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.15)", padding: 2, borderRadius: 5, width: "100%", textAlign: "center" }} onClick={() => setChatView("Chats")}>
                    <Text>Chats</Text> ({chatsCount - archivedCount - pendingsCount})
                </div>
                <div style={{ fontWeight: chatView == "Pending" ? 700 : 600, cursor: "pointer", backgroundColor: chatView == "New" ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.15)", padding: 2, borderRadius: 5, width: "100%", textAlign: "center" }} onClick={() => setChatView("Pending")}>
                    <Text>Pending</Text> ({pendingsCount})
                </div>
            </div>

            <div id="chats">
                {sort == "date" ? (
                    <>
                        {Object.values(chatsHistory)
                            .filter((c) => user.pinChats?.includes(c.caseid))
                            .map((c, idx) => (
                                <ChatPreview c={c} key={idx} />
                            ))}
                        {Object.values(chatsHistory)
                            .filter((c) => !user.pinChats?.includes(c.caseid))
                            .filter((c) => c.type == portal)
                            .filter((c) => (search.length ? cases[c.caseid].patient_name.toLowerCase().includes(search.toLowerCase()) || c.caseid.toLowerCase().includes(search.toLowerCase()) : true))
                            .filter((c) =>
                                chatView == "Pending"
                                    ? cases[c.caseid].progress == "Pending" && !user.archivedChats?.includes(c.caseid)
                                    : chatView == "Archive"
                                    ? user.archivedChats?.includes(c.caseid)
                                    : chatView == "Chats"
                                    ? !user.archivedChats?.includes(c.caseid) && cases[c.caseid].progress != "Pending"
                                    : true
                            )
                            .sort((a, b) => b.date - a.date)
                            .map((c, idx) => (
                                <ChatPreview c={c} key={idx} />
                            ))}
                    </>
                ) : (
                    <>
                        {Object.values(chatsHistory)
                            .filter((c) => user.pinChats?.includes(c.caseid))
                            .map((c, idx) => (
                                <ChatPreview c={c} key={idx} />
                            ))}
                        {Object.values(chatsHistory)
                            .sort((a, b) => {
                                const aProgress = Object.keys(progresses).indexOf(cases[a.caseid].progress);
                                const bProgress = Object.keys(progresses).indexOf(cases[b.caseid].progress);
                                return aProgress - bProgress;
                            })
                            .filter((c) => !user.pinChats?.includes(c.caseid))
                            .filter((c) => c.type == portal)
                            .filter((c) => (search.length ? cases[c.caseid].patient_name.toLowerCase().includes(search.toLowerCase()) || c.caseid.toLowerCase().includes(search.toLowerCase()) : true))
                            .filter((c) =>
                                chatView == "Pending"
                                    ? cases[c.caseid].progress == "Pending" && !user.archivedChats?.includes(c.caseid)
                                    : chatView == "Archive"
                                    ? user.archivedChats?.includes(c.caseid)
                                    : chatView == "Chats"
                                    ? !user.archivedChats?.includes(c.caseid) && cases[c.caseid].progress != "Pending"
                                    : true
                            )
                            .map((c, idx) => (
                                <ChatPreview c={c} key={idx} filters={filters} />
                            ))}
                    </>
                )}
            </div>
        </div>
    );
}
