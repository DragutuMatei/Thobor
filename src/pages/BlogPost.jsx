import axios from "axios";
import React, { useEffect, useState } from "react";
import port from "../components/Port";

function BlogPost({ match }) {
  const [tit, setTit] = useState("");
  const [desc, setDescriere] = useState("");
  const [th, setTh] = useState("");
  const [img, setImg] = useState([]);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [coments, setComments] = useState([
    {
      nume: "dumnezeu",
      data: "Postat pe 17 Ianuarie la 21:43",
      coment:
        "lorem lorem lorem lorem fjdkfbaskjgbf gukdsg sdogusg sduig sidug ius ifgs",
      postare: "test",
    },
    {
      nume: "dumnezeu",
      data: "Postat pe 17 Ianuarie la 21:43",
      coment:
        "lorem lorem lorem lorem fjdkfbaskjgbf gukdsg sdogusg sduig sidug ius ifgs",
      postare: "test",
    },
    {
      nume: "dumnezeu",
      data: "Postat pe 17 Ianuarie la 21:43",
      coment:
        "lorem lorem lorem lorem fjdkfbaskjgbf gukdsg sdogusg sduig sidug ius ifgs",
      postare: "test",
    },
    {
      nume: "dumnezeu",
      data: "Postat pe 17 Ianuarie la 21:43",
      coment:
        "lorem lorem lorem lorem fjdkfbaskjgbf gukdsg sdogusg sduig sidug ius ifgs",
      postare: "test",
    },
    {
      nume: "dumnezeu",
      data: "Postat pe 17 Ianuarie la 21:43",
      coment:
        "lorem lorem lorem lorem fjdkfbaskjgbf gukdsg sdogusg sduig sidug ius ifgs",
      postare: "test",
    },
  ]);
  const [coment, setComment] = useState("");

  const MonthArr = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Noiembrie",
    "Octombrie",
    "Decembrie",
  ];

  const addComent = () => {
    const email = window.localStorage.getItem("email");
    const today = new Date();
    const ora = today.getHours() + ":" + today.getMinutes();
    const month = MonthArr[today.getMonth()];
    const zi = today.getDate();
    const data = "Postat pe " + zi + " " + month + " la " + ora;

    const form = new FormData();
    form.append("email", email);
    form.append("data", data);
    form.append("postare", match.params.titlu);
    form.append("coment", coment);
    axios.post(port + "/addComent", form).then((res) => {
      setComments(res.data);
    });
  };

  const Delete = (id, postare) => {
    axios
      .post(port + "/admin/deleteCom", { id: id, postare: postare })
      .then((res) => {
        setComments(res.data);
      });
  };

  useEffect(() => {
    axios
      .post(port + "/getBlogPost", { titlu: match.params.titlu })
      .then((res) => {
        setTit(res.data[0].titlu.trim());
        setDescriere(res.data[0].descriere.trim());
        setTh(res.data[0].thumbnail.trim());
        setImg(res.data[0].imag.split(";"));
        setDay(res.data[0].day);
        setMonth(res.data[0].month.trim());
        setYear(res.data[0].year);
      });
    axios.post(port + "/getCom", { tit: match.params.titlu }).then((res) => {
      setComments(res.data);
    });
  }, []);

  return (
    <>
      <div
        style={{ width: "100vw", height: "100px", position: "relative" }}
      ></div>
      <div className="fullPage displayFlex">
        <div className="post">
          <div className="upl">
            <h6>{tit}</h6>
            <div className="linie"></div>
          </div>
          <h1>
            <span>
              {day < 10 ? "0" + day : day} {month}
            </span>{" "}
            {tit}
          </h1>
          <div className="descr">{desc}</div>
          <div className="fle">
            {img.map((i) => (
              <img key={Math.random()} src={i} />
            ))}
          </div>
          <div className="coment">
            <div className="add">
              {window.localStorage.getItem("email") ? (
                <>
                  <input
                    type="text"
                    placeholder="Scrie un comentariu"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                  <button onClick={addComent}>Adaugă</button>
                </>
              ) : (
                <>
                  <h1>Loghează-te ca să scri un comentariu!</h1>
                </>
              )}
            </div>
            <div className="coments">
              {coments.map((com) => (
                <div className="comen">
                  <div className="up">
                    <h3>{com.nume}</h3>
                    <h6> {com.data}</h6>
                  </div>
                  <div className="c">
                    <p>{com.coment}</p>
                  </div>
                  {window.localStorage.getItem("email") ===
                    "thoborcnch@gmail.com" && (
                    <button
                      onClick={() => {
                        Delete(com.id, com.postare);
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
