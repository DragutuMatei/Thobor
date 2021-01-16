import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import port from "../Port";

function Posts({ posts, ok }) {
  const delet = (id, th, img) => {
    axios.post(port + "/deleteBlogPost", { id: id, th: th, img: img });
  };

  return (
    <>
      {posts.map((b) => {
        const link = "/blog/" + b.titlu;
        return (
          <>
            {ok ? (
              <div className="a" key={Math.random()}>
                <Link to={link}>
                  <img
                    src={b.thumbnail}
                    // src={require("../../assets/blog/" + b.thumbnail).default}
                    alt=""
                  />
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
  );
}

export default Posts;
