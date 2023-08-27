import { useEffect, useState } from "react";
import Modal from "../Modal";
import exhibitiondata from "../exhibitdata";
import Header from "../../Header";
import Footer from "../../Footer";

interface ExhibitItem {
    exhibitionIdx: number;
    exhibitionImg: string;
    exhibitionName: string;
    location: string;
    startDate : string;
    endDate : string;
    operatingTime: string;
    fee: string;
    artist: string;
    rating: string;
    story: {
    nickname: string;
    storyImg: string;
    userImg: string;
    heart: boolean | string;
    };
    viewed:string;
    popular:string;
    }

function Design() {
    const itemsPerPage = 9;
    const [currentItemSet, setcurrentItemSet] = useState(itemsPerPage);
    const [sortType, setSortType] = useState("recent");
    const [selectedButton, setSelectedButton] = useState("recent");
    const [selectedExhibit, setSelectedExhibit] = useState<ExhibitItem | null>(
    null
    );
    const [modal, setModal] = useState(false);
    const [exhibitsData, setExhibitsData] = useState<ExhibitItem[]>(
    exhibitiondata
    );

const handleLoadMore = () => {
setcurrentItemSet((currentItemSet) => currentItemSet + itemsPerPage);
};

const handleButtonClick = (button: string) => {
setSelectedButton(button);
setSortType(button);
setcurrentItemSet(itemsPerPage);
};

const handleExhibitClick = (exhibit: ExhibitItem) => {
setSelectedExhibit(exhibit);
toggleModal();
};

const handleCloseModal = () => {
setSelectedExhibit(null);
};

const toggleModal = () => {
setModal(!modal);
};

useEffect(() => {
document.body.classList.toggle("active-modal", modal);
}, [modal]);

const sortingFunction = (a: ExhibitItem, b: ExhibitItem) => {
if (sortType === "recent") {
    return b.exhibitionIdx - a.exhibitionIdx;
} else if (sortType === "mostviewed") {
    return parseFloat(b.viewed) - parseFloat(a.viewed);
} else if (sortType === "popular") {
    return parseFloat(b.popular) - parseFloat(a.popular);
}
return 0;
};

const sortedExhibits = [...exhibitsData].sort(sortingFunction);
const visibleExhibits = sortedExhibits.slice(0, currentItemSet);

return (
<div>
    <Header/>
    <div style={{ width: "100%", maxWidth: "1366px", margin: "0 auto", flexDirection: "row", height: "full", display: "flex"}}>
    <div>
    <div style={{ marginTop: "92px", marginLeft: "79px", marginRight: "681px", position: "absolute", width: "604px", height: "98px", flexShrink: "0" }}>
        <div style={{ marginTop: "13px", marginLeft: "1px", marginRight: "2px", width: "605px", height: "95px", flexShrink: 0, color: "#484848", textAlign: "left", fontFamily: "Montserrat", fontSize: "36px", fontStyle: "normal", fontWeight: "700", lineHeight: "48px" }}>
        디자인 전시
        <div style={{ marginTop: "17px", marginBottom: "24px", marginRight: "0px", display: "center", width: "150px", height: "6px", flexShrink: 0, borderRadius: "3px", backgroundColor: "#E52A2A" }}></div>
        </div>
    </div>
    <div>
    <div style={{ marginLeft: "898px", marginTop: "157px", width: "385px", height: "17.2px" }}>
        <button  onClick={() => handleButtonClick("recent")} style={{ width: "75.14px", height: "17.036px", transform: "rotate(-0.139deg)", flexShrink: "0", border: "none", backgroundColor: "white", color: "#484848", textAlign: "center", fontFamily: "Montserrat", fontSize: "20px", fontStyle: "normal", fontWeight: selectedButton === "recent" ? "600" : "500", lineHeight: "normal", cursor: "pointer" }}>Recent</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" style={{ marginLeft: "16.82px", marginBottom :"2px" }}>
            <circle cx="3" cy="3.00024" r="3" fill="#E62A2A" />
        </svg>
        <button onClick={() => handleButtonClick("mostviewed")} style={{ marginLeft: "16.82px", width: "145px", height: "17.036px", transform: "rotate(-0.139deg)", flexShrink: "0", border: "none", backgroundColor: "white", color: "#484848", textAlign: "center", fontFamily: "Montserrat", fontSize: "20px", fontStyle: "normal", fontWeight: selectedButton === "mostviewed" ? "600" : "500", lineHeight: "normal", cursor: "pointer" }}>Most viewed</button>
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" style={{ marginLeft: "16.82px", marginBottom:"2px" }}>
            <circle cx="3" cy="3.00024" r="3" fill="#E62A2A" />
        </svg>
        <button onClick={() => handleButtonClick("popular")} style={{ marginLeft: "16.82px", width: "84.729px", height: "17.036px", transform: "rotate(-0.139deg)", flexShrink: "0", border: "none", backgroundColor: "white", color: "#484848", textAlign: "center", fontFamily: "Montserrat", fontSize: "20px", fontStyle: "normal", fontWeight: selectedButton === "popular" ? "600" : "500", lineHeight: "normal", cursor: "pointer" }}>Popular</button>
        </div>
    </div>
    <div style={{ marginTop: "83px", marginLeft: "80px", marginRight: "95px" }}>
        <div style={{ alignItems: "center", gap: "65px 60px", display: "grid", gridTemplateColumns: "repeat(3, 362px)"}}>
        {visibleExhibits.map((exhibitItem: ExhibitItem) => (
            <div key={exhibitItem.exhibitionIdx} className="exhibit" style={{ flexDirection: "column", width: "362px", height: "296px", borderRadius: "6px" }}>
            <div onClick={() => handleExhibitClick(exhibitItem)} style={{ textDecorationLine: "none", cursor: "pointer" }}>
                <div style={{ display: "flex"}}>
                <img src={exhibitItem.exhibitionImg} alt={exhibitItem.exhibitionName} style={{ width: "362px", height: "219px", position: "absolute", borderRadius: "6px", background: "lightgray 50% / cover no-repeat, #C2C6CC", objectFit: "cover" }} />
                <div style={{ width: "362px", height: "21px", position: "relative", marginTop: "247px", color: "#484848", textAlign: "left", fontFamily: "Montserrat", fontSize: "18px", fontStyle: "normal", fontWeight: "700", lineHeight: "normal" }}>
                    {exhibitItem.exhibitionName}
                </div>
                <div style={{ width: "362px", height: "21px", color: "#9A9A9A", position: "absolute", marginTop: "275px", textAlign: "left", fontFamily: "Montserrat", fontSize: "13px", fontStyle: "normal", fontWeight: "500", lineHeight: "normal" }}>
                    {exhibitItem.location}
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
        <div style={{height:"90px"}}/>
    </div>
    {exhibitsData.length >= currentItemSet && (
        <div style={{ display: "flex", justifyContent: "center", marginTop:"0px", marginBottom:"119px"}}>
        <button onClick={handleLoadMore} style={{ borderRadius: "28px", width: "119px", height: "56px", flexShrink: "0", background: "#c4c4c4", borderStyle: "none" }}>
            <div style={{ color: "#FFF", fontFamily: "Montserrat", fontSize: "15px", fontStyle: "normal", fontWeight: "700", lineHeight: "normal" }}>
            More
            </div>
        </button>
        </div>
    )}
    </div>
    {selectedExhibit && (
    <Modal exhibitItem={selectedExhibit} closeModal={handleCloseModal} style={{ width: "1145px", height: "776px" }} />
    )}
    </div>
    <Footer />
</div>
);
}

export default Design;