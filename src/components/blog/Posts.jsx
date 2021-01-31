import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import port from "../Port";

function Posts({ posts, ok, ready }) {
  const delet = (id, th, img) => {
    axios.post(port + "/deleteBlogPost", { id: id, th: th, img: img });
  };

  return (
    <>
      {ready ? (
        <>
          {posts.map((b) => {
            const link = "/blog/" + b.titlu;
            return (
              <>
                {ok ? (
                  <div className="a" key={Math.random()}>
                    <Link to={link}>
                      <img src={b.thumbnail} alt="" />
                      <h1>{b.titlu}</h1>
                    </Link>
                    <button
                      key={Math.random() * Math.random()}
                      onClick={() => {
                        delet(b.id, b.thumbnail, b.imag);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <Link to={link} className="a" key={Math.random()}>
                    <img src={b.thumbnail} alt="" />
                    <h1>{b.titlu}</h1>
                  </Link>
                )}
              </>
            );
          })}
        </>
      ) : (
        <i
          style={{ fontSize: 100, color: "#75c60b", marginTop: 30 }}
          className="fa fa-refresh fa-spin"
        ></i>
      )}
    </>
  );
}

export default Posts;
