import React, { useState } from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState();
  const [subiect, setSubiect] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [send, setsend] = useState(false);

  init("user_F1FXOrwoiGSWERQpZLjlR");

  const submit = () => {
    const serviceID = "service_0mpw36j";
    const templateID = "template_61na02c";
    const templateParams = {
      name: name,
      email: email,
      telefon: telefon,
      subiect: subiect,
      mesaj: mesaj,
    };

    if (name === "" || email === "" || telefon === "" || mesaj === "") {
      alert("Toate campurile sunt obligatorii!");
    } else {
      setsend(true);
      emailjs
        .send(
          serviceID,
          templateID,
          templateParams,
          "user_F1FXOrwoiGSWERQpZLjlR"
        )
        .then(() => {
            alert("Trimis!");
            setsend(false);
        });
    }
  };

  return (
    <>
      <div className="contact backgroundContact" id="contacte">
        <div className="contactForm">
          <h2>Susține echipa!</h2>
          <h5>Vrei să intri în legătură cu noi?</h5>
          <div className="row">
            <input
              type="text"
              placeholder="Nume*"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email*"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <input
              type="tel"
              placeholder="Telefon*"
              onChange={(e) => {
                setTelefon(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Subiect*"
              onChange={(e) => {
                setSubiect(e.target.value);
              }}
            />
          </div>
          <textarea
            placeholder="Mesaj*"
            onChange={(e) => {
              setMesaj(e.target.value);
            }}
          ></textarea>
          {send && (
            <i
              style={{ fontSize: 40, color: "#75c60b", marginTop: 30 }}
              className="fa fa-refresh fa-spin"
            ></i>
          )}
          <button onClick={submit}>Trimite</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
