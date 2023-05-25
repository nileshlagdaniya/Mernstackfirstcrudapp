import React from "react";
import { Pagination } from "react-bootstrap";

const Paginations = ({ page, setPage, pageCount, nextPage, prevPage }) => {
  return (
    <>
      <div className="d-flex justify-content-end mx-5">
        <Pagination>
          <Pagination.Prev onClick={prevPage} />
          {Array(pageCount)
            .fill(null)
            .map((element, index) => {
              return (
                <Pagination.Item
                  active={page === index + 1 ? true : false}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              );
            })}
          <Pagination.Next onClick={nextPage} />
        </Pagination>
      </div>
    </>
  );
};

export default Paginations;
