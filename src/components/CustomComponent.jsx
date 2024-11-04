import { useState } from 'react';

function CustomComponent({ id, className }) {
  const [count, setCount] = useState(0);

  return (
    <div id={id} className={className}>
      <h1>Hi, I'm a custom component</h1>
      <h3>and I'm being rendered dinamically :-)</h3>
      <div className="buttonsContainer">
        <button onClick={() => setCount(count - 1)}>{`<`}</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>{`>`}</button>
      </div>
    </div>
  );
}

export default CustomComponent;
