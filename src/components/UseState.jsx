import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="decrement" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default UseState;
