import React, { useEffect, useState } from "react";
import Axios from "axios";
import port from "../Port";

function Sponsori() {
  const [sponsori, setSponsori] = useState([]);

  useEffect(() => {
    Axios.get(port + "/admin/getSponsori").then((res) => {
//       setSponsori(res.data);
        console.log(res.data);
     });
  }, []);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "37px",
          color: "#131313",
        }}
      >
        Sponsori
      </h1>
      <div className="sponsori">
        {sponsori.map((s) => (
          <img
            key={s.id}
            src={require("../../assets/sponsori/" + s.sponsor).default}
            alt=""
          />
        ))}
      </div>
    </>
  );
}

export default Sponsori;
