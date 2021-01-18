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
    };
  };

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
      <div className="addMembru"style={{ padding: "0 50px" }}>
        <div class="form-group">
          <label for="exampleInputEmail1">Nume Complet</label>
          <input
            type="text"
            className="form-control"
            name="Asdas"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Departament</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setDepartament(e.target.value);
            }}
          />
        </div>
        <div class="custom-file">
          <input
            class="custom-file-input"
            type="file"
            onChange={(e) => {
              setPozaName(e.target.files[0].name);
              editFile(e.target.files[0]);
            }}
          />
          <label class="custom-file-label" for="validatedCustomFile">
            {pozaName}
          </label>
          <small id="emailHelp" class="form-text text-muted">
            Doar o poza
          </small>
          <div class="invalid-feedback">Idk</div>
        </div>
        <button type="submit" class="btn btn-primary" onClick={submit}>
          Submit
        </button>

        {/* <div className="row">
          <h1 className="sadasd">name</h1>
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
        <button onClick={submit}>Submit</button> */}
        {ok && <h1>Gata</h1>}
      </div>
    </>
  );
}

export default AddMembru;
