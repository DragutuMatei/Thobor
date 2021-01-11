import React from "react";
import Aplicatie from "../components/Apps/Aplicatie";
import Up from "../components/Home/Up";

function Apps() {
  return (
    <>
      <div
        style={{ width: "100vw", height: "120px", position: "relative" }}
      ></div>
      <Aplicatie />
      <div className="qr">
        <a href="https://play.google.com/store/apps/details?id=ro.thobor.ar">
          Download - Android
        </a>
        <img src={require("../assets/Apps/qr.jpg").default} alt="" />
      </div>
      <Up/>
    </>
  );
}

export default Apps;
