import React, { useEffect, useState } from "react";
import AddPost from "../components/admin/AddPost";
import user from "../components/admin/adminUser";
import AddMembru from "../components/admin/AddMembru";
import Membrii from "../components/Home/Membrii";
import Posts from "../components/blog/Posts";
import axios from "axios";
import port from "../components/Port";
import AddPozaGalerie from "../components/galarie/AddPozaGalerie";

function Admin() {
  const [post, setPost] = useState([]);

  useEffect(
    () => {
      axios.get(port + "/getBlogPosts").then((res) => {
        setPost(res.data);
      });
    },
    [
      // axios.get(port + "/getBlogPosts").then((res) => {
      //   return res.data;
      // }),
    ]
  );

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
      <h1>Adauga Postare</h1>
      <AddPost />
      <hr />
      <div className="posts">
        <Posts posts={post} ok={true} />
      </div>
      <hr />
      <h1>Adauga Membru</h1>
      <AddMembru />
      <Membrii ok={true} />
      <hr />
      <AddPozaGalerie />
    </>
  );
}

export default Admin;
