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
              <img
                key={Math.random()}
                src={i}
                // src={require("../assets/blog/" + i).default}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
