import axios from "axios";
import React, { useEffect, useState } from "react";
import port from "../components/Port";
import Pagination from "../components/blog/Pagination";
import Posts from "../components/blog/Posts";
import Up from "../components/Home/Up";

function Blog() {
  const [blogP, setBlogP] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [ready, setReady] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogP.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    axios.get(port + "/getBlogPosts").then((res) => {
      setBlogP(res.data);
      setReady(true);
    });
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div
        id="upblog"
        style={{ width: "100vw", height: "100px", position: "relative" }}
      ></div>
      <div className="posts">
        <Posts ok={false} posts={currentPosts} ready={ready} />
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blogP.length}
        paginate={paginate}
      />
      <Up />
    </>
  );
}

export default Blog;
