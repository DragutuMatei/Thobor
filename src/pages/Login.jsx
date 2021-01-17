import React, { useState } from "react";
import Axios from "axios";
import port from "../components/Port";

function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailReg, setEmailReg] = useState([]);
  const [passwordReg, setPasswordReg] = useState("");

  const log = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  const submitLogin = () => {
    if (
      document.querySelector("#email").value === "" ||
      document.querySelector("#email").value === ""
    ) {
      alert("Toate campurile sunt obligatorii");
    } else {
      Axios.post(port + "/login", {
        email: document.querySelector("#email").value,
        passwordLogin: document.querySelector("#pas").value,
      }).then((resp) => {
        if (resp.data.ok === true) {
          window.localStorage.setItem(
            "email",
            document.querySelector("#email").value
          );
          window.location.pathname = "/";
        } else {
          alert(resp.data.msg);
        }
      });
    }
  };

  const submitRegister = () => {
    if (emailReg === "" || passwordReg === "" || name === "") {
      alert("Toate campurile sunt obligatorii");
    } else {
      const data = new FormData();
      data.append("name", name);
      data.append("email", emailReg);
      data.append("password", passwordReg);
      Axios.post(port + "/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((resp) => {
        alert(resp.data.msg);
        setLogin(true);
      });
    }
  };

  return (
    <>
      <div
        style={{ width: "100vw", height: "80px", position: "relative" }}
      ></div>
      <div className="log">
        <div className="svg-top">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            height="1337"
            width="100vw"
          >
            <defs>
              <path
                id="path-1"
                opacity="1"
                fillRule="evenodd"
                d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"
              />
              <linearGradient
                id="linearGradient-2"
                x1="0.79"
                y1="0.62"
                x2="0.21"
                y2="0.86"
              >
                <stop offset="0" stopColor="#17aa4b" stopOpacity="1" />
                <stop offset="1" stopColor="#17aa4b" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g opacity="1">
              <use
                href="#path-1"
                fill="url(#linearGradient-2)"
                fillOpacity="1"
              />
            </g>
          </svg>
        </div>
        <div className="svg-bottom">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            height="896"
            width="100vw"
          >
            <defs>
              <path
                id="path-2"
                opacity="1"
                fillRule="evenodd"
                d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"
              />
              <linearGradient
                id="linearGradient-3"
                x1="0.5"
                y1="0"
                x2="0.5"
                y2="1"
              >
                <stop offset="0" stopColor="#17aa4b" stopOpacity="1" />
                <stop offset="1" stopColor="#17aa4b" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g opacity="1">
              <use
                href="#path-2"
                fill="url(#linearGradient-3)"
                fillOpacity="1"
              />
            </g>
          </svg>
        </div>

        <section className="container">
          {login ? (
            <section className="wrapper">
              <header>
                <div className="logo">
                  <span>THOBOR</span>
                </div>
                <h1>Welcome back!</h1>
                <p>User Login</p>
              </header>
              <section className="main-content">
                <div className="form">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    onInput={(e) => {
                      setEmailLogin(e.target.value);
                    }}
                  />
                  <div className="line"></div>
                  <input
                    type="password"
                    id="pas"
                    placeholder="Password"
                    onInput={(e) => {
                      setPasswordLogin(e.target.value);
                    }}
                  />
                  <button onClick={submitLogin}>Login</button>
                </div>
              </section>
              <footer>
                <p onClick={log}>Register</p>
              </footer>
            </section>
          ) : (
            <section className="wrapper">
              <header>
                <div className="logo">
                  <span>THOBOR</span>
                </div>
                <h1>Registration</h1>
                <p>User register</p>
              </header>
              <section className="main-content">
                <div className="form">
                  <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <div className="line"></div>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                  />
                  <div className="line"></div>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                  />
                  <button onClick={submitRegister}>Register</button>
                </div>
              </section>
              <footer>
                <p onClick={log}>Login</p>
              </footer>
            </section>
          )}
        </section>
      </div>
    </>
  );
}

export default Login;
