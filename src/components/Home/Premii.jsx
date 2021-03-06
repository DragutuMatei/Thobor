import Axios from "axios";
import React, { useEffect, useState } from "react";
import port from "../Port";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Premii({ ok }) {
  const [premii, setPremii] = useState([]);
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    Axios.get(port + "/admin/getPremii").then((res) => {
      setPremii(res.data);
    });
  }, []);

  const res = () => {
    if (window.innerWidth > 1300) {
      setWidth(1200);
      setHeight(700);
    } else if (window.innerWidth <= 1300) {
      setHeight(900);
      setWidth(600);
    }
    if (window.innerWidth <= 600) {
      setWidth(360);
      setHeight(700);
    }
  };

  window.onresize = res;
  window.onload = res;

  const del = (id) => {
    Axios.post(port + "/admin/deletePremiu", { id: id }).then((res) => {
      setPremii(res.data);
    });
  };

  return (
    <>
      <div className="premii">
        <div className="tit">
          <h1>Premiile Noastre</h1>
        </div>
        <div className="premi">
          <CarouselProvider
            style={{ width: width, position: "relative" }}
            naturalSlideWidth={width}
            naturalSlideHeight={height}
            totalSlides={premii.length}
          >
            <Slider>
              {premii.map((p) => (
                <Slide key={p.id} index={p.id}>
                  <div className="premiu">
                    <img src={p.poza} alt="" />
                    <div className="scris">
                      <h1>{p.titlu}</h1>
                      <h4>{p.subtitlu}</h4>
                      <p>{p.descriere}</p>
                      {ok && (
                        <button
                          onClick={() => {
                            del(p.id);
                          }}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <div className="dots">
              {premii.map((d) => (
                <Dot
                  className="dot"
                  slide={Math.floor(d.id * 0.1)-2}
                  key={d.id}
                />
              ))}
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}

export default Premii;
