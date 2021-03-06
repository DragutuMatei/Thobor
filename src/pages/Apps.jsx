import React from "react";
import Aplicatie from "../components/Apps/Aplicatie";
import Up from "../components/Home/Up";
import Img from "../Img";

function Apps() {
  return (
    <>
      <div
        id="upapps"
        style={{ width: "100vw", height: "120px", position: "relative" }}
      ></div>
      <Aplicatie />
      <div className="qr">
        <a
          href="https://play.google.com/store/apps/details?id=ro.thobor.ar"
          target="_blank"
        >
          Download - Android
        </a>
        <Img src={require("../assets/Apps/qr.jpg").default} />
      </div>
      <div className="apl">
        <img src={require("../assets/Apps/scavanger.png").default} alt="" />
        <div className="sc">
          <h1>Aplicatia noastră - Realitate Augmentata -</h1>
          <p>
            Poti avea robotul Thor la tine acasa! Descarca aplicatia, printeaza
            codul QR si ai micul tau robot in buzunar.
          </p>
          <p>
            Robotica uneste lumea, iar noi, va prezentam robotul nostru din cel
            mai recent sezon FIRST Tech Challenge.
          </p>
          <h4>
            Ne poti sustine echipa pe facebook, <b> instagram</b> sau
            <b> youtube!</b>
          </h4>
        </div>
      </div>
      <div className="qr">
        <a href="https://thobornights.netlify.app/" target="_blank">
          Thobor Nigths
        </a>
      </div>
      <Up />
    </>
  );
}

export default Apps;
