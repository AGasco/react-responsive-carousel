import React from "react";

// Stateless functional component
const Arrow = ({ direction, onClick }) => {
  return (
    <div className={`arrow ${direction}`} onClick={onClick}>
      <div className={`arrow__top-${direction}`}></div>
      <div className={`arrow__bot-${direction}`}></div>
    </div>
  );
};

export default Arrow;
