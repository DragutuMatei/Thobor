import React, { useEffect, useState } from "react";
import AddPost from "../components/admin/AddPost";
import user from "../components/admin/adminUser";
import AddMembru from "../components/admin/AddMembru";
import Membrii from "../components/Home/Membrii";
import Posts from "../components/blog/Posts";
import axios from "axios";
import port from "../components/Port";
import AddPozaGalerie from "../components/galarie/AddPozaGalerie";
import AddPremiu from "../components/admin/AddPremiu";
import Premii from "../components/Home/Premii";

function Admin() {
  const [post, setPost] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(
    () => {
      axios.get(port + "/getBlogPosts").then((res) => {
        setPost(res.data);
        setReady(true);
      });
    },
    [
      // axios.get(port + "/getBlogPosts").then((res) => {
      //   return res.data;
      // }),
    ]
  );

  const [clasa, setClasa] = useState("fas fa-caret-right");
  const [color, setColor] = useState("#3d3c3c");
  const [h, setH] = useState("0");

  function more() {
    if (clasa === "fas fa-caret-up") {
      setClasa("fas fa-caret-right");
      setColor("#3d3c3c");
      setH("0");
    } else {
      setClasa("fas fa-caret-up");
      setColor("#17aa4b");
      setH("auto");
    }
  }

  if (localStorage.getItem("email") !== user.email) {
    return <h1>Ce cauti aici?</h1>;
  }

  return (
    <>
      <div
        style={{ width: "100vw", height: "100px", position: "relative" }}
      ></div>
      {window.location.pathname ===
        "/fbk/adb/fkajdfbfkjb/adskfbakdfbkdbasf/sakdhvkasdjvsav" && (
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        />
      )}
      <h1>Adauga Postare - fara semne sau emoticoane-</h1>
      <AddPost />
      <hr />
      <div className="posts">
        <div className="more" width="100%">
          <div className="press" onClick={more}>
            <i className={clasa} style={{ color: color }}></i>
            <span style={{ color: color }}>Vezi Postari</span>
          </div>
          <div
            className="hide"
            style={{ height: h, transition: "0.5s ease-in-out" }}
          >
            <Posts posts={post} ok={true} ready={ready} />
          </div>
        </div>
      </div>
      <hr />
      <h1>Adauga Membru</h1>
      <AddMembru />
      <Membrii ok={true} />
      <hr />
      <AddPozaGalerie />
      <hr />
      <AddPremiu />
      <Premii ok={true} />
      <hr />
    </>
  );
}

export default Admin;
