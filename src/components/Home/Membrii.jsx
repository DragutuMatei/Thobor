import React, { useEffect, useState } from "react";
import Axios from "axios";
import port from "../Port";
function Membrii(props) {
  const [membrii, setMembrii] = useState([]);
  const [name, setName] = useState("");
  const [departament, setDepartament] = useState("");
  const [poza, setPoza] = useState();
  const [ok, setOk] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Axios.get(port + "/admin/getMembers").then((res) => {
      setMembrii(res.data);
      setReady(true);
    });
  }, []);

  const remove = (id, poza) => {
    Axios.post(port + "/admin/removeAMember", { id: id, poza: poza }).then(
      (res) => {
        setMembrii((p) => res.data);
      }
    );
  };

  return (
    <div>
      <div
        className="fullPage"
        style={{
          display: ready && "flex",
          justifyContent: ready && "center",
          alignItems: ready && "center",
        }}
      >
        {ready ? (
          <>
            {!props.ok && (
              <div className="title">
                <h1>Echipa THOBOR</h1>
                <h3>Sezonul 2020-2021</h3>
              </div>
            )}

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
          </>
        ) : (
          <i
            style={{ fontSize: 100, color: "#75c60b", marginTop: 30 }}
            className="fa fa-refresh fa-spin"
          ></i>
        )}
      </div>
    </div>
  );
}

export default Membrii;
