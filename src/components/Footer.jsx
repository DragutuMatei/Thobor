import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ads from "./Ads";
import port from "./Port";

function Footer() {
  const [postari, setPostari] = useState([]);

  useEffect(() => {
    axios.get(port + "/footer").then((r) => {
      setPostari(r.data);
    });
  }, []);

  return (
    <>
      <script
        data-ad-client="ca-pub-7900802648960033"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <div className="footer">
        <div className="left">
          <img src={require("../assets/logo.png").default} alt="" />
          <p>
            Suntem echipa Thobor și am pus Tecuciul pe harta roboticii
            românești.
          </p>
          <div className="linkuri">
            <a
              href="https://www.facebook.com/ThoborCNCH"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCoUzT42Ce6f_11ICDef3svA"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/thoborcnch/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="center">
          <h1>Postari Recente</h1>
          {postari.map((p) => (
            <Link to={"/blog/" + p.titlu}>{p.titlu}</Link>
          ))}
        </div>
        <Ads />
      </div>
      <h4 className="bottom">
        THOBOR | Echipa de robotică a Colegiului Național “Calistrat Hogaș”
        Tecuci
      </h4>
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </>
  );
}

export default Footer;
