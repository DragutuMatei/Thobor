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
      data.append("month", month);
      data.append("year", year);

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
    <div className="addPost">
      <div className="row">
        <h2>Titlu</h2>
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
      <button onClick={submit}>Submit</button>
      {ok && <h1>Gata</h1>}
    </div>
  );
}

export default AddPost;
