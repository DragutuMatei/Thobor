import React, { useState } from "react";
import Axios from "axios";
import port from "../Port";

function AddPost() {
  const [titlu, setTitlu] = useState("");
  const [descriere, setDescriere] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailName, setThumbnailName] = useState([]);
  const [poze, setPoze] = useState([]);
  const [numePoze, setNumePoze] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [ok, setOk] = useState(false);

  const editThumbnail = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setThumbnail(reader.result);
    };
  };

  const Nume = (a) => {
    let n = "";
    for (let i = 0; i < a.length; i++) {
      n += a[i].name + ";";
    }
    n.slice(0, -1);
    setNumePoze(n.trim());
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
    if (
      titlu === "" ||
      descriere === "" ||
      thumbnail === [] ||
      poze === [] ||
      numePoze === []
    ) {
      alert("Toate campurile sunt obligatorii!");
    } else {
      const data = new FormData();
      data.append("titlu", titlu);
      data.append("descriere", descriere);
      data.append("thumbnail", thumbnail);
      data.append("thumbnailName", thumbnailName);
      for (let i = 0; i < poze.length; i++) {
        data.append("poze", poze[i]);
      }
      data.append("numePoze", numePoze);
      data.append("day", day);
      data.append("year", year);
      data.append("month", month);

      console.log(numePoze.slice(0, -1).split(";"));
      console.log(poze);
      Axios.post(port + "/admin/addPost", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        if (res.data.ok) {
          setOk(true);
        }
      });
    }
  };

  return (
    <div className="addPost" style={{ padding: "0 50px" }}>
      <div class="form-group">
        <label for="exampleInputEmail1">Titlu</label>
        <textarea
          className="form-control"
          onChange={(e) => {
            setTitlu(e.target.value);
          }}
        ></textarea>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Descriere</label>
        <textarea
          className="form-control"
          onChange={(e) => {
            setDescriere(e.target.value);
          }}
        ></textarea>
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
      <h1>Thumbnail</h1>
      <div class="custom-file">
        <input
          type="file"
          class="custom-file-input"
          id="validatedCustomFile"
          onChange={(e) => {
            setThumbnail(e.target.files[0].name);
            editThumbnail(e.target.files[0]);
          }}
        />
        <label class="custom-file-label" for="validatedCustomFile">
          {thumbnail}
        </label>
        <small id="emailHelp" class="form-text text-muted">
          O singura poza
        </small>
        <div class="invalid-feedback">Idk</div>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Ziua</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Luna</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
        <small id="emailHelp" class="form-text text-muted">
          Se scrie luna complet in romana si cu litera mare
        </small>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">An</label>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <small id="emailHelp" class="form-text text-muted">
          Se scrie luna complet
        </small>
      </div>

      <h1>Poze</h1>
      <div class="custom-file">
        <input
          type="file"
          class="custom-file-input"
          id="validatedCustomFile"
          multiple
          onChange={(e) => {
            file(e.target.files);
            Nume(e.target.files);
          }}
        />
        <label class="custom-file-label" for="validatedCustomFile">
          {numePoze}
        </label>
        <small id="emailHelp" class="form-text text-muted">
          Mai multe poze
        </small>
        <div class="invalid-feedback">Idk</div>
      </div>

      <button type="submit" class="btn btn-primary m-2" onClick={submit}>
        Submit
      </button>
      <h1>Dupa ce e pusa o postare asteapta un minut pana sa pui alta</h1>
      {ok && <h1>Gata</h1>}

      {/* <div className="row">
        <h2>c</h2>
        <textarea
          type="text"
          className="nush"
          onChange={(e) => {
            setTitlu(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="row">
        <h2>Descriere</h2>
        <textarea
          onChange={(e) => {
            setDescriere(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="row">
        <h2>Thumbnail</h2>
        <input
          type="file"
          onChange={(e) => {
            setThumbnail(e.target.files[0].name);
            editThumbnail(e.target.files[0]);
          }}
        />
      </div>
      <div className="row">
        <h2>day</h2>
        <input
          type="text"
          onChange={(e) => {
            setDay(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <h2>month</h2>
        <input
          type="text"
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <h2>year</h2>
        <input
          type="text"
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <h2>Poze</h2>
        <input
          type="file"
          multiple
          onChange={(e) => {
            file(e.target.files);
            Nume(e.target.files);
          }}
        />
      </div>
      <button onClick={submit}>Submit</button> */}
    </div>
  );
}

export default AddPost;
