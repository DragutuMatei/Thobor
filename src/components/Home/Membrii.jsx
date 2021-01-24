import React, { useEffect, useState } from "react";
import Axios from "axios";
import port from "../Port";
function Membrii(props) {
  const [membrii, setMembrii] = useState([]);
  const [name, setName] = useState("");
  const [departament, setDepartament] = useState("");
  const [poza, setPoza] = useState();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    Axios.get(port + "/admin/getMembers").then((res) => {
      setMembrii(res.data);
    });
  }, []);

  const remove = (id, poza) => {
    Axios.post(port + "/admin/removeAMember", { id: id, poza: poza }).then(
      (res) => {
        setMembrii((p) => res.data);
      }
    );
  };

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
    <div>
      <div className="fullPage">
        {!props.ok && (
          <div className="title">
            <h1>Echipa THOBOR</h1>
            <h3>Sezonul 2020-2021</h3>
          </div>
        )}
        <div className="more">
          <div className="press" onClick={more}>
            <i className={clasa} style={{ color: color }}></i>
            <span style={{ color: color }}>Vezi Membrii</span>
          </div>
          <div
            className="hide"
            style={{ height: h, transition: "0.5s ease-in-out" }}
          >
            <div className="membrii">
              {membrii.map((membru) => (
                <div key={membru.id} className="membru">
                  <img src={membru.poza} alt="" />
                  <h2>{membru.name}</h2>
                  {membru.departament.split(",").map((dep) => (
                    <h5 key={membru.id + Math.random()}>{dep}</h5>
                  ))}
                  {props.ok && (
                    <>
                      <button
                        onClick={() => {
                          remove(membru.id, membru.poza);
                        }}
                      >
                        Remove
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membrii;
