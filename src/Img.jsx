import React, { useState } from "react";

function Img({ src }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        style={{ cursor: "pointer" }}
        onClick={() => {
          setOpen(true);
        }}
        alt=""
      />

      {open && (
        <div
          className="full"
          style={{ width: open ? "100vw" : "0", transition: "0.5s ease-in" }}
        >
          <i
            class="fas fa-times"
            onClick={() => {
              setOpen(false);
            }}
          ></i>
          <img src={src} alt="Sssssss" />
        </div>
      )}
    </>
  );
}

export default Img;
