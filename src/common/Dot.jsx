import React from "react";

// Stateless functional component
const Dot = ({ onClick, classes }) => {
  return <div onClick={onClick} className={classes}></div>;
};

export default Dot;
