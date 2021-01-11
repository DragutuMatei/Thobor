import React, { useState } from "react";

function Press({ perioada, txt }) {
  const [clasa, setClasa] = useState("fas fa-caret-right");
  const [color, setColor] = useState("#3d3c3c");
  const [h, setH] = useState("0");

  function more() {
    if (clasa === "fas fa-caret-up") {
      setClasa("fas fa-caret-right");
      setColor("#3d3c3c");
      setH("0");
    } else {
      setClasa("fas fa-caret-up");
      setColor("#17aa4b");
      setH("auto");
    }
  }

  return (
    <>
      <div className="more">
        <div className="press" onClick={more}>
          <i className={clasa} style={{ color: color }}></i>
          <span style={{color: color}}>{perioada}</span>
        </div>
        <div
          className="hide"
          style={{ height: h, transition: "0.5s ease-in-out" }}
        >
          <p style={{ margin: 30 }}>{txt}</p>
        </div>
      </div>
    </>
  );
}

export default Press;
