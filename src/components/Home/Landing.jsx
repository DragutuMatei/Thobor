import React, { useEffect } from "react";
import AOS from "aos";

function Landing() {
  AOS.init();

  return (
    <>
      <div className="fullPage displayFlex" style={{justifyContent:'flex-start'}}>
        <div className="txt animate" data-aos="fade-up">
          <h1 data-aos="fade-up">NOI SUNTEM THOBOR</h1>
          <p data-aos={"fade-left"}>
            Echipa de robotică, formată din 15 liceeni ai Colegiului Național
            “Calistrat Hogaș” Tecuci, alături de mentori, îndrăznim să visăm.
            Plecată dintr-o zonă fără tradiții în domeniu, echipa și-a propus să
            aducă în comunitate o idee nouă, care să-i inspire pe toți colegii,
            care să deschidă noi direcții de evoluție pentru copii.
          </p>
        </div>
        <div className="imag an">
          <img
            src={require("../../assets/firstBackgroundHome.png").default}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
