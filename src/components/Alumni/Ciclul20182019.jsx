import React, { useState } from "react";
import data from "./Ciclul20182019JSON";

function Ciclul20182019() {
  const [m, setM] = useState(data);

  return (
    <>
      <div className="alumni">
        <h1>Membri ce au terminat ciclul liceal 2018-2019</h1>
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

export default Ciclul20182019;
