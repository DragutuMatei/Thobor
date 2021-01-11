import React, { useState } from "react";

function Header({ title, img }) {
  return (
    <div
      className="header"
      style={{
        width: "100vw",
        height: "500px",
        position: "relative",
        marginBottom: 100,
      }}
    >
      <img
        src={img}
        alt=""
        style={{
          width: "100%",
          height: "500px",
          objectFit: "contain",
        }}
      />
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "80px",
          fontFamily: '"Work Sans", sans-serif',
          fontWeight: "600",
        }}
      >
        {title}
      </h1>
    </div>
  );
}

export default Header;
