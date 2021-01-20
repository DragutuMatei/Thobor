import React from "react";
import Ciclul20172018 from "../components/Alumni/Ciclul20172018";
import Ciclul20182019 from "../components/Alumni/Ciclul20182019";
import Header from "../components/Alumni/Header";
import Up from "../components/Home/Up";

function Alumni() {
  return (
    <>
      <div
        id="up"
        style={{ width: "100vw", height: "100px", position: "relative" }}
      ></div>
      <Header
        title="Alumni"
        img={require("../assets/alumni/alumni.png").default}
      />
      <Ciclul20182019 />
      <Ciclul20172018 />
      <Up />
    </>
  );
}

export default Alumni;
