import React, { useState } from "react";
import data from "./Ciclul20172018JSON";

function Ciclul20172018() {
  const [m] = useState(data);

  return (
    <>
      <div className="alumni">
        <h1>Membri ce au terminat ciclul liceal 2017-2018</h1>
        <div className="mem">
          {m.map((m) => (
            <div key={m.name} className="m">
              <img
                src={require("../../assets/alumni/" + m.imag).default}
                alt=""
              />
              <p>{m.experienta}</p>
              <div className="inf">
                <h5>{m.name}</h5>
                {m.nush.split(",").map((n) => (
                  <h6 key={n}>{n}</h6>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ciclul20172018;
