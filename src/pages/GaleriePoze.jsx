import axios from "axios";
import React, { useEffect, useState } from "react";
import port from "../components/Port";

function GaleriePoze({ match }) {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .post(port + "/admin/getGalerieImg", { sezon: match.params.sezon })
      .then((res) => {
        setImg(res.data);
      });
  }, []);

  return (
    <>
      <div
        id="up"
        style={{ width: "100vw", height: "100px", position: "relative" }}
      ></div>
      <div className="fullPage displayFlex">
        <div className="gal">
          {img.map((im) =>
            im.img
              .split(";")
              .map((i) => (
                <img style={{ width: 300 }} src={i} key={Math.random()} />
              ))
          )}
        </div>
      </div>
    </>
  );
}

export default GaleriePoze;
