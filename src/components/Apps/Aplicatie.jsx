import React from "react";

function Aplicatie({}) {
  return (
    <>
      <div className="apl">
        <img src={require("../../assets/Apps/exemplu.jpg").default} alt="" />
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
    </>
  );
}

export default Aplicatie;
