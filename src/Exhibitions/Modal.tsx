import axios from "axios";
import React, { useEffect, useState } from "react";

interface ModalProps {
  closeModal: () => void;
  exhibitionIdx: number; // exhibitionIdx 추가
  style?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({ closeModal, exhibitionIdx }) => {
  const [exhibitItem, setExhibitItem] = useState<any>(null); // Initialize with null

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const [heartClicked, setHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setHeartClicked((prevHeartClicked) => !prevHeartClicked);
  };

  useEffect(() => {
    let currentUrl = `http://exhibition-place.site:8080/exhibitions/:${exhibitionIdx}`; 
  
    try {
      axios.get(currentUrl, {
        headers: {
          Authorization: "accessToken",
        },
      })
        .then((response) => response.data)  
        .then((data) => {
          if (data.isSuccess) {
            console.log(data.result);
            setExhibitItem(data.result);
          } else {
            console.error("Request was successful, but the data contained an error:", data.message);
          }
        })
        .catch((error) => {
          // 오류 처리
          console.error("Error fetching exhibitions:", error);
        });
  } catch (error) {
    console.error("An error occurred during the fetch:", error);
  }
}, [exhibitionIdx]);

  if (!exhibitItem) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="modal-container"
        style={{ width: "1145px", height: "776px", borderRadius: "10px", background: "#FFF" }}
      >
        <div className="modal-content" style={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src={exhibitItem.exhibitionImg}
            alt={exhibitItem.exhibitionName}
            style={{
              left: "94px",
              top: "105px",
              width: "457px",
              height: "565px",
              position: "absolute",
              flexShrink: 0,
              borderRadius: "12px",
              background: "url(<path-to-image>), lightgray 50% / cover no-repeat, #E0E2E6",
            }}
          />
          <div className="content" style={{ width: "406px", height: "565px", display: "flex" }}>
            <div
              className="modal-title"
              style={{
                left: "655px",
                top: "105px",
                width: "336px",
                height: "76px",
                position: "absolute",
                flexShrink: "0",
                color: "#484848",
                textAlign: "left",
                fontFamily: "Montserrat",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              {exhibitItem.result.exhibitionName}
              <div className="period" style={{ width: "369.999px", height: "26px", flexShrink: "0", gap: "48.25px" }}>
                <div style={{ marginTop: "45px", gap: "48.25px", display: "flex", flex: "absolute" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "26px",
                    }}
                  >
                    기간
                  </div>
                  <div
                    style={{
                      width: "291.749px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#484848",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      display: "flex",
                      flex: "relative",
                    }}
                  >
                    {exhibitItem.result.startDate} ~ {exhibitItem.result.endDate}
                  </div>
                </div>
                <div style={{ marginTop: "9px", gap: "48.25px", display: "flex", flex: "absolute" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "26px",
                    }}
                  >
                    시간
                  </div>
                  <div
                    style={{
                      width: "291.749px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#484848",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      display: "flex",
                      flex: "relative",
                    }}
                  >
                    {exhibitItem.result.operatingTime}
                  </div>
                </div>
                <div style={{ marginTop: "9px", gap: "48.25px", display: "flex", flex: "absolute" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "26px",
                    }}
                  >
                    장소
                  </div>
                  <div
                    style={{
                      width: "291.749px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#484848",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      display: "flex",
                      flex: "relative",
                    }}
                  >
                    {exhibitItem.result.location}
                  </div>
                </div>
                <div style={{ marginTop: "9px", gap: "48.25px", display: "flex", flex: "absolute" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "26px",
                    }}
                  >
                    요금
                  </div>
                  <div
                    style={{
                      width: "291.749px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#484848",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      display: "flex",
                      flex: "relative",
                    }}
                  >
                    {exhibitItem.result.fee}
                  </div>
                </div>
                <div style={{ marginTop: "9px", gap: "48.25px", display: "flex", flex: "absolute" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "26px",
                    }}
                  >
                    작가
                  </div>
                  <div
                    style={{
                      width: "291.749px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#484848",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      display: "flex",
                      flex: "relative",
                    }}
                  >
                    {exhibitItem.result.artist}
                  </div>
                </div>
                <div style={{ marginTop: "9px", gap: "48.25px", display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "26px",
                    }}
                  >
                    별점
                  </div>
                  <div style={{ display: "flex", gap: "7.29px", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      style={{
                        width: "13.607px",
                        height: "13.607px",
                        flexShrink: "0",
                        fill: "var(--point-color, #E52A2A)",
                      }}
                    >
                      <path
                        d="M13.6765 5.15403C13.6337 5.02809 13.555 4.91743 13.4501 4.83571C13.3451 4.75399 13.2185 4.70479 13.0859 4.69418L9.20724 4.38602L7.52881 0.67113C7.47536 0.551481 7.38842 0.449857 7.27847 0.378522C7.16853 0.307187 7.04029 0.269191 6.90923 0.269119C6.77817 0.269047 6.64989 0.306903 6.53987 0.378117C6.42985 0.44933 6.34279 0.550859 6.28921 0.67045L4.61078 4.38602L0.732091 4.69418C0.601773 4.7045 0.477189 4.75214 0.373243 4.83141C0.269296 4.91067 0.19039 5.0182 0.145963 5.14113C0.101536 5.26406 0.0934701 5.39718 0.12273 5.52457C0.15199 5.65196 0.217337 5.76823 0.310953 5.85946L3.17728 8.65328L2.16355 13.0423C2.13277 13.1752 2.14264 13.3142 2.19187 13.4414C2.2411 13.5686 2.32743 13.678 2.43964 13.7555C2.55186 13.833 2.68478 13.875 2.82117 13.8761C2.95756 13.8771 3.09111 13.8371 3.20449 13.7613L6.90901 11.292L10.6135 13.7613C10.7294 13.8383 10.8661 13.8779 11.0052 13.8748C11.1442 13.8718 11.279 13.8262 11.3914 13.7443C11.5038 13.6623 11.5885 13.548 11.6339 13.4165C11.6793 13.285 11.6834 13.1428 11.6456 13.009L10.4013 8.65532L13.4873 5.87851C13.6894 5.6962 13.7636 5.41185 13.6765 5.15403Z"
                        fill="#E62A2A"
                      />
                    </svg>
                    <div
                      style={{
                        width: "291.749px",
                        height: "26px",
                        flexShrink: "0",
                        color: "#484848",
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      3.2
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "25px", display: "flex", flex: "absolute", flexDirection: "column" }}>
                  <div
                    style={{
                      width: "80.67px",
                      height: "26px",
                      flexShrink: "0",
                      color: "#C4C4C4",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "26px",
                    }}
                  >
                    관련스토리
                  </div>
                  <div
                    style={{
                      marginTop: "12.58px",
                      width: "318.08px",
                      height: "218px",
                      flexShrink: 0,
                      background: "url(<path-to-image>), lightgray 50% / cover no-repeat, #E0E2E6",
                      display: "flex",
                      flexDirection: "row",
                      gap: "16.43px",
                    }}
                  >
                    <img
                      src={exhibitItem.result.stories[0].storyImg} // Accessing storyImg property of the first story
                      alt="Story 1"
                      width="147.83"
                      height="180.151"
                      style={{ width: "147.83px", height: "180.151px", flexShrink: 0, borderRadius: "8px" }}
                    />
                    <img
                      src={exhibitItem.result.stories[1].storyImg} // Accessing storyImg property of the second story
                      alt="Story 2"
                      width="147.83"
                      height="180.151"
                      style={{ width: "147.83px", height: "180.151px", flexShrink: 0, borderRadius: "8px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={handleHeartClick}
              style={{
                marginLeft: "1018px",
                marginTop: "108px",
                width: "32px",
                height: "28px",
                flexShrink: 0,
                strokeWidth: "2.5px",
                stroke: "#C4C4C4",
              }}
            >
              {heartClicked ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path
                    d="M31.5325 4.4754C30.7506 3.69063 29.8222 3.06809 28.8004 2.64335C27.7786 2.21861 26.6834 2 25.5774 2C24.4714 2 23.3762 2.21861 22.3544 2.64335C21.3326 3.06809 20.4042 3.69063 19.6223 4.4754L17.9996 6.10333L16.3769 4.4754C14.7975 2.89096 12.6554 2.00082 10.4218 2.00082C8.18818 2.00082 6.04607 2.89096 4.46668 4.4754C2.88729 6.05985 2 8.20882 2 10.4496C2 12.6903 2.88729 14.8393 4.46668 16.4237L6.0894 18.0517L17.9996 30L29.9098 18.0517L31.5325 16.4237C32.3148 15.6393 32.9353 14.708 33.3587 13.6829C33.7821 12.6579 34 11.5592 34 10.4496C34 9.33999 33.7821 8.24129 33.3587 7.21622C32.9353 6.19115 32.3148 5.25981 31.5325 4.4754Z"
                    fill="#E62A2A"
                    stroke="#E62A2A"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                  <path
                    d="M31.5325 4.4754C30.7506 3.69063 29.8222 3.06809 28.8004 2.64335C27.7786 2.21861 26.6834 2 25.5774 2C24.4714 2 23.3762 2.21861 22.3544 2.64335C21.3326 3.06809 20.4042 3.69063 19.6223 4.4754L17.9996 6.10333L16.3769 4.4754C14.7975 2.89096 12.6554 2.00082 10.4218 2.00082C8.18818 2.00082 6.04607 2.89096 4.46668 4.4754C2.88729 6.05985 2 8.20882 2 10.4496C2 12.6903 2.88729 14.8393 4.46668 16.4237L6.0894 18.0517L17.9996 30L29.9098 18.0517L31.5325 16.4237C32.3148 15.6393 32.9353 14.708 33.3587 13.6829C33.7821 12.6579 34 11.5592 34 10.4496C34 9.33999 33.7821 8.24129 33.3587 7.21622C32.9353 6.19115 32.3148 5.25981 31.5325 4.4754Z"
                    stroke="#C4C4C4"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
