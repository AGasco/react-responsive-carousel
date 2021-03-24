import React from "react";

// Stateless functional component
const Slide = ({ children, slideWidth }) => {
  return (
    <div style={{ width: slideWidth }} className="slide">
      {children}
    </div>
  );
};

export default Slide;
