import React from "react";

function Header({ title, img }) {
  return (
    <div className="header">
      <img src={img} alt="" />

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
