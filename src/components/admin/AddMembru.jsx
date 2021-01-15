import axios from "axios";
import React, { useState } from "react";
import port from "../Port";

function AddMembru() {
  const [name, setName] = useState("");
  const [departament, setDepartament] = useState("");
  const [poza, setPoza] = useState();
  const [pozaName, setPozaName] = useState("");
  const [ok, setOk] = useState(false);

  const editFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPoza(reader.result);
    }
  }

  const submit = () => {
    if (name === "" || departament === "" || poza === []) {
      alert("Toate campurile sunt obligatorii");
    } else {
      const data = new FormData();
      data.append("name", name);
      data.append("departament", departament);
      data.append("poza", poza);
      data.append("pozaName", pozaName);
        
      axios
        .post(port + "/admin/InsertMember", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.ok) {
            setOk(true);
          }
        });
    }
  };

  return (
    <>
      <div className="addMembru">
        <div className="row">
          <h1>name</h1>
          <input
            type="text"
            name="Asdas"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="row">
          <h1>departament</h1>
          <input
            type="text"
            onChange={(e) => {
              setDepartament(e.target.value);
            }}
          />
        </div>

        <div className="row">
          <h1>Poza</h1>
          <input
            type="file"
            onChange={(e) => {
              setPozaName(e.target.files[0].name);
              editFile(e.target.files[0]);
            }}
          />
        </div>
        <button onClick={submit}>Submit</button>
        {ok && <h1>Gata</h1>}
      </div>
    </>
  );
}

export default AddMembru;
