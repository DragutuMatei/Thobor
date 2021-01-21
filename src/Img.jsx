import React, { useState } from "react";

function Img({ src }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        style={{ cursor: "pointer" }}
        onClick={() => {
          document.querySelector(".full").classList.toggle("width");
          // setOpen(true);
        }}
        alt=""
      />

      {/* {open && ( */}
        <div
          className="full"
          // style={{ width: open ? "100vw" : "0"  }}
        >
          <i
            class="fas fa-times"
            onClick={() => {
          document.querySelector("full").classList.toggle("width");
          // setOpen(false);
            }}
          ></i>
          <img
            src={src}
            alt="Sssssss"
            style={{ maxWidth: "95vw", height: "auto", maxHeight: "95vh" }}
          />
        </div>
      {/* )} */}
    </>
  );
}

export default Img;
