import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Arrow from "../common/Arrow.jsx";
import Dots from "../common/Dots.jsx";
import Slide from "./Slide.jsx";

const Carousel = ({ slides }) => {
  const [curSlide, setCurSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [lastTouchPos, setLastTouchPos] = useState(0);
  const [lastMousePos, setLastMousePos] = useState(0);
  const [move, setMove] = useState(0);

  //Setting a ref to grab the slides' width so translateX moves the correct distance no matter the size
  const slideRef = useRef(null);
  useLayoutEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.getBoundingClientRect().width);
    }
  }, [slideRef.current]);

  useEffect(() => {
    moveTo(curSlide);
  }, [curSlide]);

  const moveTo = (slide) => {
    setCurSlide(slide);
    setMove(slide * slideWidth);
  };

  const prevSlide = () => {
    setCurSlide(curSlide <= 0 ? slides.length - 1 : curSlide - 1);
  };

  const nextSlide = () => {
    setCurSlide(curSlide === slides.length - 1 ? 0 : curSlide + 1);
  };

  //Event Handlers
  const handleTouchStart = (e) => {
    setLastTouchPos(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const distance = lastTouchPos - e.targetTouches[0].clientX;
    setLastTouchPos(e.targetTouches[0].clientX);
    handleSwipe(distance);
  };

  const handleTouchEnd = () => {
    handleMovement();
    setLastTouchPos(0);
  };

  const handleMouseStart = (e) => {
    e.preventDefault();
    setLastMousePos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (lastMousePos !== 0) {
      const distance = lastMousePos - e.clientX;
      setLastMousePos(e.clientX);
      handleSwipe(distance);
    }
  };

  const handleMouseEnd = () => {
    handleMovement();
    setLastMousePos(0);
  };

  //Movement handlers
  const handleSwipe = (distance) => {
    const maxDistance = slides.length - 1;
    let newMove = move + distance;
    if (newMove < 0) newMove = 0;
    if (newMove > maxDistance * slideWidth) newMove = maxDistance * slideWidth;
    setMove(newMove);
  };

  const handleMovement = () => {
    const endPosition = move / slideWidth;
    const endPartial = endPosition % 1;
    const endingSlide = endPosition - endPartial;
    const deltaDistance = endingSlide - curSlide;
    let nextSlide = endingSlide;

    if (deltaDistance >= 0) {
      if (endPartial >= 0.1) nextSlide += 1;
    } else {
      nextSlide = curSlide - Math.abs(deltaDistance);
      if (endPartial > 0.9) nextSlide += 1;
    }

    moveTo(nextSlide);
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseStart}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseEnd}
    >
      <h1 className="carousel__title">Responsive Carousel</h1>
      <Arrow direction="left" onClick={prevSlide} />
      <div className="carousel__container" ref={slideRef}>
        <div
          className="carousel__slidesContainer"
          style={{ transform: `translateX(${move * -1}px)` }}
        >
          {slides.map((s) => (
            <Slide slideWidth={slideWidth - 1} key={s.index}>
              {s.slide}
            </Slide>
          ))}
        </div>
      </div>
      <Arrow direction="right" onClick={nextSlide} />
      <Dots slides={slides} curSlide={curSlide} onDotClick={setCurSlide} />
    </div>
  );
};

export default Carousel;
