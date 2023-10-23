import { useState, useEffect } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const [sideEffect, setSideEffect] = useState();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setSideEffect(count * 2);
    // ref code here

    // Update the text content of the ref
  }, [count]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>Counter</h1>
        {/* use ref */}
        <div>
          <h2>useRef</h2>
          <p>
            Count: <span>ref</span>
          </p>
        </div>
        {/* use effect */}
        <div>
          <h2>useEffect</h2>
          <p>counter * 2 : {sideEffect}</p>
        </div>
        {/* use state */}
        <div>
          <h2>useState</h2>
          <p>counter : {count}</p>
        </div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default UseRef;
