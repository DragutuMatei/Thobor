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
      {img.map((im) =>
        im.img
          .split(";")
          .map((i) => (
            <img
              style={{ width: 300 }}
              src={i}
              key={Math.random()}
            />
          ))
      )}
    </>
  );
}

export default GaleriePoze;
