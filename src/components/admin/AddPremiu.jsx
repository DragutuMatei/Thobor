import React, { useState } from "react";

function AddPremiu() {
  const [titlu, setTitlu] = useState("");
  const [desc, setDesc] = useState("");
  const [poze, setPoze] = useState([]);
  const [pozeNume, setPozeNume] = useState("");
  const [ok, setOk] = useState(false);

  const Nume = (a) => {
    let n = "";
    for (let i = 0; i < a.length; i++) {
      n += a[i].name + ";";
    }
    n = n.substring(0, n.length - 1);
    setPozeNume(n.trim());
  };

  const file = (a) => {
    let n = [];
    for (let i = 0; i < a.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(a[i]);
      reader.onload = () => {
        n.push(reader.result);
      };
    }
    setPoze(n);
  };

  const submit = () => {
    if (poze === [] || pozeNume === "" || titlu === "" || desc === "") {
      alert("Toate campurile trebuie completate!");
    } else {
      const data = new FormData();
      for (let i = 0; i < poze.length; i++) {
        data.append("poze", poze[i]);
      }
      data.append("titlu", titlu);
      data.append("desc", desc);
      data.append("pozeNume", pozeNume);
    }
  };

  return (
    <div>
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
        <h1>Adauga Premiu</h1>
        <label for="exampleInputEmail1">Adauga Titlu</label>
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
          multiple
          onChange={(e) => {
            file(e.target.files);
            Nume(e.target.files);
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
