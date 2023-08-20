import Text from "./Text";

export default function NewCaseButtons({ antibuttontext, probuttontext, antibuttonstyle, probuttonstyle, onclickanti, onclickpro, containerstyle, disableanti, disablepro }) {
    return (
        <div style={{ display: "flex", width: "100%", gap: 20, marginTop: 10, ...containerstyle }}>
            {disableanti ? (
                <></>
            ) : (
                <div className="btn" style={{ backgroundColor: "#ff5252", alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12, ...antibuttonstyle }} onClick={onclickanti}>
                    <Text>{antibuttontext}</Text>
                </div>
            )}
            {disablepro ? (
                <></>
            ) : (
                <div className="btn" style={{ alignSelf: "center", fontSize: 20, width: "100%", justifyContent: "center", display: "flex", paddingTop: 12, paddingBottom: 12, ...probuttonstyle }} onClick={onclickpro}>
                    <Text>{probuttontext}</Text>
                </div>
            )}
        </div>
    );
}
