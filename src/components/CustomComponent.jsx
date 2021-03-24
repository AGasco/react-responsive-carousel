import React from "react";

function CustomComponent({ id, className }) {
  return (
    <div id={id} className={className}>
      <h1>Hi, I'm a custom component</h1>
      <h3>and I'm being rendered dinamically :-)</h3>
    </div>
  );
}

export default CustomComponent;
