import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="pagination">
          {pageNumbers.map((number) => (
            <div
              className="pag"
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
            </div>
          ))}
      </div>
    </>
  );
}

export default Pagination;
