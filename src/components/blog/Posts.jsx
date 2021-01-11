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
            <Link to={link} key={Math.random()}>
              <img
                src={require("../../assets/blog/" + b.thumbnail).default}
                alt=""
              />
              <h1>{b.titlu}</h1>
            </Link>

            {ok && (
              <button
                key={Math.random() * Math.random()}
                onClick={() => {
                  delet(b.id, b.thumbnail, b.imag);
                }}
              >
                Delete
              </button>
            )}
          </>
        );
      })}
    </>
  );
}

export default Posts;
