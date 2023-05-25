import React from "react";
import Spinner from "react-bootstrap/spinner";

const LoadingAnimation = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: "100%", height: "50vh" }}
      >
        <Spinner animation="grow" />
        Loading.......
      </div>
    </>
  );
};

export default LoadingAnimation;
