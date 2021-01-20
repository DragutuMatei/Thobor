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
          style={{ width: open ? "100vw" : "0", height: open ? "100vh" : "0" }}
        >
          <i
            class="fas fa-times"
            onClick={() => {
              setOpen(false);
            }}
          ></i>
          <img src={src} alt="" />
        </div>
      )}
    </>
  );
}

export default Img;
