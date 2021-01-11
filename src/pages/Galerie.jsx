import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Alumni/Header";
import GalerieSezoane from "../components/galarie/GalerieSezoane";
import port from "../components/Port";

function Galerie() {
  const [sezoane, setSezoane] = useState([]);

  useEffect(() => {
    axios.get(port + "/admin/getGalerieSezoane").then((res) => {
      setSezoane(res.data);
    })
  }, []);



  return (
    <>
      <Header
        title="Galerie"
        img={require("../assets/despre/despre.png").default}
      />
      <GalerieSezoane sez={sezoane} /> 
    </>
  );
}

export default Galerie;
