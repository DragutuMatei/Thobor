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
  const [i, setI] = useState([]);

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
    axios.get(port + "/admin/getI").then((res) => {
      setI(res.data);
      console.log(res.data[0].img.split(";").pop());
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
    console.log(poze, pozeNume, sezonP);
    if (poze === [] || pozeNume === "" || sezonP === "any") {
      alert("Toate campurile trebuie completate!");
    } else {
      const data = new FormData();
      console.log(poze);
      for (let i = 0; i < poze.length; i++) {
        data.append("poze", poze[i]);
      }
      data.append("pozeNume", pozeNume);
      data.append("sezonP", sezonP);
      axios
        .post(port + "/admin/addPozeG", data, {
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

  const del = (id) => {
    axios.post(port + "/admin/delImg", { id: id }).then((r) => {
      setI(r.data);
    });
  };

  return (
    <>
      <div style={{ padding: "0 50px" }}>
        <h1>Adauga poze galerie</h1>
        <div class="form-group mb-2">
          <label for="exampleInputEmail1">Sezon</label>
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
          <small id="emailHelp" class="form-text text-muted">
            Alege sezonul in care adaugi poze
          </small>
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
            Mai multe poze
          </small>
          <div class="invalid-feedback">Idk</div>
        </div>
        <button type="submit" class="btn btn-primary m-2" onClick={addPozeG}>
          Submit
        </button>
        {ok && <h1>Gata</h1>}

        <div className="poze">
          {/* {
            i.map(a => (
              a.img.split(";").pop().map((s) => (
                <>
                <div className="pa">
                    <img src={s} alt="" />
                    <h1>{a.sezon}</h1>
                    <button  onClick={del(a.id)} >delete</button>
              </div>
              </>
             ))
            ))
            } */}
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Adauga sezon</label>
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
      </div>
    </>
  );
}

export default AddPozaGalerie;
