import axios from "axios";
import React, { useEffect, useState } from "react";
import port from "../Port";

function AddPozaGalerie() {
  const [options, setOption] = useState([]);
  const [poze, setPoze] = useState([]);
  const [pozeNume, setPozeNume] = useState("");
  const [sezon, setSezon] = useState("");
  const [sezonP, setSezonP] = useState("");
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

  useEffect(() => {
    axios.get(port + "/admin/getSezon").then((res) => {
      setOption(res.data);
    });
  }, []);

  const addSezon = () => {
    if (sezon === "") {
      alert("Toate campurile trebuie completate!");
    } else {
      axios.post(port + "/admin/addSezon", { sezon: sezon }).then((res) => {
        setOption(res.data);
      });
    }
  };

  const addPozeG = () => {
    if (
      poze === [] ||
      pozeNume === "" ||
      document.querySelector("#sezon").value === "any"
    ) {
      alert("Toate campurile trebuie completate!");
    } else {
      const data = new FormData();
      console.log(poze);
      for (let i = 0; i < poze.length; i++) {
        data.append("poze", poze[i]);
      }
      data.append("pozeNume", pozeNume);
      data.append("sezonP", document.querySelector("#sezon").value);
      axios.post(port + "/admin/addPozeG", data, {
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
    <>
      <div style={{ padding: "0 50px" }}>
        <select
          class="form-control form-control-lg"
          id="sezon"
          onChange={(e) => {
            setSezonP(e.target.value);
          }}
        >
          <option value="any">Any</option>
          {options.map((r) => (
            <option value={r.sezoane}>{r.sezoane}</option>
          ))}
        </select>
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
          Choose file...
        </label>
        <small id="emailHelp" class="form-text text-muted">
          Mai multe poze
        </small>
        <div class="invalid-feedback">Idk</div>
        </div>
        <button type="submit" class="btn btn-primary m-2" onClick={addPozeG}>
        Submit
      </button>
      {ok && <h1>Gata</h1>}
        
        <div class="form-group">
          <label for="exampleInputEmail1">Titlu</label>
          <input
            className="form-control"
            type="text"
            onChange={(e) => {
              setSezon(e.target.value);
            }}
          />
          <button type="submit" class="btn btn-primary m-2" onClick={addSezon}>
            Add sezon
          </button>
        </div>

        
        {/* <select
          id="sezon"
          onChange={(e) => {
            setSezonP(e.target.value);
          }}
        >
          <option value="any">Any</option>
          {options.map((r) => (
            <option value={r.sezoane}>{r.sezoane}</option>
          ))}
        </select>

        <div className="row">
          <input
            type="text"
            onChange={(e) => {
              setSezon(e.target.value);
            }}
          />
          <button onClick={addSezon}>Add sezon</button>
        </div>

        <div className="row">
          <input
            type="file"
            multiple
            onChange={(e) => {
              file(e.target.files);
              Nume(e.target.files);
            }}
          />
          <button onClick={addPozeG}>Add Poze Galerie</button> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default AddPozaGalerie;
