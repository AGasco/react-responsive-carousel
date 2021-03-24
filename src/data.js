import React from "react";
import CustomComponent from "./components/CustomComponent.jsx";
import Pic from "./slideContent/pic.jpg";
import Video from "./slideContent/video.mp4";

const people = [
  { id: "p00", name: "Kristīne", age: "41", address: "Riga - Latvia" },
  { id: "p01", name: "Antonio", age: "33", address: "Canary Islands - Spain" },
  { id: "p02", name: "Marie", age: "21", address: "Paris - France" },
  { id: "p03", name: "John", age: "57", address: "London - UK" },
];

// id is added in case a slide needs to be targeted to modify its style in _Slide.scss
export default [
  {
    index: 0,
    slide: <img id={"slide0"} className="slide__img" src={Pic} />,
  },
  {
    index: 1,
    slide: (
      <div id={"slide1"} className="slide__div">
        <h1>I'm a {"<div>"} tag</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          condimentum tortor, posuere pulvinar felis. Duis quis accumsan lorem.
          Suspendisse dapibus dui sem, eget rhoncus odio scelerisque a. Praesent
          vel.
        </p>
      </div>
    ),
  },
  {
    index: 2,
    slide: (
      <video
        id={"slide2"}
        className="slide__video"
        muted
        loop
        autoPlay
        src={Video}
      />
    ),
  },
  {
    index: 3,
    slide: (
      <table id={"slide3"} className="slide__table">
        <caption>I'm a {"<table>"} tag</caption>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    index: 4,
    slide: <CustomComponent id={"slide4"} className="slide__customComponent" />,
  },
  {
    index: 5,
    slide: (
      <iframe
        id={"slide5"}
        className="slide__iframe"
        src="https://www.youtube.com/embed/rhxQoDlt2AU"
      />
    ),
  },
];
