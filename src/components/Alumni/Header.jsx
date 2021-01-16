import React from "react";

function Header({ title, img }) {
  return (
    <div className="header" style={{ width: "100vw",
      height: "42vh",      position: "relative",
      marginBottom: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      
      <img
        src={img}
        alt=""
        style={{
          width: "90vw",
          height: "100%",
          objectFit: "cover",
          objectPosition: "right",
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
