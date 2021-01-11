import React from "react";
import { Link } from "react-router-dom";

function GalerieSezoane({ sez }) {
  return (
    <>
      {sez.map((s) => {
        const link = "/galerie/" + s.sezoane;
        return (
          <Link className="sez" key={Math.random()} to={link}>
            <h1>{s.sezoane}</h1>
          </Link>
        );
      })}
    </>
  );
}

export default GalerieSezoane;
