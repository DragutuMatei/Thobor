import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "./admin/adminUser";

export default function Navabar() {
  const [home, setHome] = useState("#383a3d");
  const [blog, setBlog] = useState("#383a3d");
  const [galerie, setGalerie] = useState("#383a3d");
  const [alumni, setAlumni] = useState("#383a3d");
  const [apps, setApps] = useState("#383a3d");
  const [despre, setDespre] = useState("#383a3d");
  const [contact, setContact] = useState("#383a3d");
  const [login, setLogin] = useState("#383a3d");
  const [log, setLog] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email") !== null) {
      setLog(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setLog(false);
  };

  const col = (color) => {
    switch (color) {
      case "home":
        setAll("#383a3d");
        setHome("#17aa4b");
        break;
      case "blog":
        setAll("#383a3d");
        setBlog("#17aa4b");
        break;
      case "galerie":
        setAll("#383a3d");
        setGalerie("#17aa4b");
        break;
      case "alumni":
        setAll("#383a3d");
        setAlumni("#17aa4b");
        break;
      case "apps":
        setAll("#383a3d");
        setApps("#17aa4b");
        break;
      case "despre":
        setAll("#383a3d");
        setDespre("#17aa4b");
        break;
      case "contact":
        setAll("#383a3d");
        setContact("#17aa4b");
        break;
      case "login":
        setAll("#383a3d");
        setLogin("#17aa4b");
        break;
    }
  };

  let k = true;
  const downUp = () => {
    const links = document.querySelector(".links");
    const link = document.querySelectorAll(".link");
    const height = link.length * 50 + 20;
    if (k === true) {
      links.style.height = height + "px";
      k = false;
    } else {
      links.style.height = 0;
      k = true;
    }
  };

  const setAll = (color) => {
    setHome(color);
    setBlog(color);
    setGalerie(color);
    setAlumni(color);
    setApps(color);
    setDespre(color);
    setContact(color);
    setLogin(color);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={require("../assets/logo.png").default} alt="" />
          </Link>
          <i onClick={downUp} className="fa fa-bars"></i>
        </div>
        <div className="links">
          <div className="over">
            <div className="link">
              <Link
                to="/"
                style={{ color: home }}
                onClick={() => {
                  col("home");
                }}
              >
                Home
              </Link>
            </div>
            <div className="link">
              <Link
                to="/blog"
                style={{ color: blog }}
                onClick={() => {
                  col("blog");
                }}
              >
                blog
              </Link>
            </div>
            <div className="link">
              <Link
                to="/galerie"
                style={{ color: galerie }}
                onClick={() => {
                  col("galerie");
                }}
              >
                galerie
              </Link>
            </div>
            <div className="link">
              <Link
                to="/alumni"
                style={{ color: alumni }}
                onClick={() => {
                  col("alumni");
                }}
              >
                alumni
              </Link>
            </div>
            <div className="link">
              <Link
                to="/apps"
                style={{ color: apps }}
                onClick={() => {
                  col("apps");
                }}
              >
                apps
              </Link>
            </div>
            <div className="link">
              <Link
                to="/despre"
                style={{ color: despre }}
                onClick={() => {
                  col("despre");
                }}
              >
                despre
              </Link>
            </div>
            <div className="link">
              <a
                href="#contacte"
                style={{ color: contact }}
                onClick={() => {
                  col("contact");
                }}
              >
                contact
              </a>
            </div>
            {log ? (
              <>
                <div className="link">
                  <a onClick={logout}>logOut</a>
                </div>
                {
                  localStorage.getItem("email") === user.email && 
                (
                  <div className="link">
                    <Link to="/fbk/adb/fkajdfbfkjb/adskfbakdfbkdbasf/sakdhvkasdjvsav">Admin</Link>
                  </div>)
                }
              </>
            ) : (
              <div className="link">
                <Link
                  to="/login"
                  style={{ color: login }}
                  onClick={() => {
                    col("login");
                  }}
                >
                  login
                </Link>
              </div>
            )}
            <div className="link">
              <a to="https://www.facebook.com/ThoborCNCH" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                to="https://www.youtube.com/channel/UCoUzT42Ce6f_11ICDef3svA"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a to="https://www.instagram.com/thoborcnch/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
