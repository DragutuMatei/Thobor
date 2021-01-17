import axios from "axios";
import React, { useEffect, useState } from "react";
import port from "./Port";

function Footer() {
  const [postari, setPostari] = useState([
    "România prin lentila roboticii💙💛❤️!!",
    "La mulți ani, România!",
    "⚠️REZULTATE RECRUTARE MEMBRII ȘI VOLUNTARI⚠️",
    "Ziua educației",
    "Fereastră către Știință",
  ]);

  useEffect(() => {
    axios.get(port + "/footer").then((r) => {
      setPostari(r.data);
    });
  }, []);

  return (
    <>
      <div className="footer">
        <div className="left">
          <img src={require("../assets/logo.png").default} alt="" />
          <p>
            Suntem echipa Thobor și am pus Tecuciul pe harta roboticii
            românești.
          </p>
          <div className="linkuri">
            <a href="https://www.facebook.com/ThoborCNCH" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCoUzT42Ce6f_11ICDef3svA"
              target="_blank"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/thoborcnch/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="center">
          <h1>Postari Recenter</h1>
          {postari.map((p) => (
            <a href={p}>{p}</a>
          ))}
        </div>
      </div>
      <h4 className="bottom">
        THOBOR | Echipa de robotică a Colegiului Național “Calistrat Hogaș”
        Tecuci
      </h4>
    </>
  );
}

export default Footer;
