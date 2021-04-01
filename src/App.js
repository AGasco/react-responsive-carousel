import React, { useState, useLayoutEffect, useRef } from "react";
import Carousel from "./components/Carousel";
import Slide from "./components/Slide";
import slides from "./data";

function App() {
  const [slideWidth, setSlideWidth] = useState(0);

  //Setting a ref to grab the slides' width so translateX moves the correct distance no matter the size
  const slideRef = useRef(null);
  useLayoutEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.getBoundingClientRect().width);
    }
  }, [slideRef.current]);

  return (
    <div className="app">
      <Carousel id="mainCarousel" slideRef={slideRef} slideWidth={slideWidth}>
        {slides.map((s) => (
          <Slide slideWidth={slideWidth - 1} key={s.index}>
            {s.slide}
          </Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
