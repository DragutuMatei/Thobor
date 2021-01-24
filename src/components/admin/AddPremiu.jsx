import axios from "axios";
import React, { useState } from "react";
import port from "../Port";

function AddPremiu() {
  const [titlu, setTitlu] = useState("");
  const [subtitlu, setsubTitlu] = useState("");
  const [desc, setDesc] = useState("");
  const [poze, setPoze] = useState("");
  const [pozeNume, setPozeNume] = useState("");
  const [ok, setOk] = useState(false);

  const editFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPoze(reader.result);
    };
  };

  const submit = () => {
    if (poze === "" || pozeNume === "" || titlu === "" || desc === "") {
      alert("Toate campurile trebuie completate!");
    } else {
      const data = new FormData();
      data.append("poze", poze);
      data.append("titlu", titlu);
      data.append("subtitlu", subtitlu);
      data.append("desc", desc);
      data.append("pozeNume", pozeNume);
      axios.post(port + "/admin/addPremiu", data).then((res) => {
        if (res.data.ok === ok) {
          setOk(true);
        }
      });
    }
  };

  return (
    <div style={{ padding: "0 50px" }}>
      <div class="form-group">
        <h1>Adauga Premiu</h1>
        <label for="exampleInputEmail1">Adauga Titlu</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setTitlu(e.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Adauga subtitlu</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setsubTitlu(e.target.value);
          }}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Adauga descriere</label>
        <textarea
          className="form-control"
          type="text"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
      </div>
      <div class="custom-file">
        <input
          class="custom-file-input"
          id="validatedCustomFile"
          type="file"
          onChange={(e) => {
            setPozeNume(e.target.files[0].name);
            editFile(e.target.files[0]);
          }}
        />
        <label class="custom-file-label" for="validatedCustomFile">
          {pozeNume}
        </label>
        <small id="emailHelp" class="form-text text-muted">
          O poza
        </small>
        <div class="invalid-feedback">Idk</div>
      </div>
      <button type="submit" class="btn btn-primary m-2" onClick={submit}>
        Submit
      </button>
      {ok && <h1>Gata</h1>}
    </div>
  );
}

export default AddPremiu;
