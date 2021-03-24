import React from "react";
import Dot from "./Dot.jsx";

// Stateless functional component
const Dots = ({ slides, curSlide, onDotClick }) => {
  return (
    <div className="dots">
      {slides.map((__, i) => (
        <Dot
          key={i}
          classes={`dot ${curSlide === i ? "active" : ""}`}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  );
};

export default Dots;
