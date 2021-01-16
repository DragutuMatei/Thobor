import React from "react";
import Landing from "../components/Home/Landing";
import Stem from "../components/Home/Stem";
import Contact from "../components/Home/Contact";
import Membrii from "../components/Home/Membrii";
import Premii from "../components/Home/Premii";
import Up from "../components/Home/Up";
import Sponsori from "../components/Home/Sponsori";

function Home() {
  return (
    <>
      <div
        style={{ width: "100vw", height: "70px", position: "relative" }}
      ></div>
      <Landing />
      <Stem />
      <Contact />
      <Membrii ok={false} />
      <Premii />
      <Sponsori />
      <Up />
    </>
  );
}

export default Home;
