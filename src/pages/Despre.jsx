import React from "react";
import Header from "../components/Alumni/Header";
import Fl from "../components/Despre/Fl";
import Visu from "../components/Despre/Visu";
import Up from "../components/Home/Up";

function Despre() {
  return (
    <>
      <div
        id="updespre"
        style={{ width: "100vw", height: "120px", position: "relative" }}
      ></div>
      <Header
        title="Despre"
        img={require("../assets/despre/despre.png").default}
      />
      <Visu />
      <Fl />
      <Up />
    </>
  );
}

export default Despre;
