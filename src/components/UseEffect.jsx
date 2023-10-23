import { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  // useEffect to update the sideEffect to be equal to count * 2


  // useEffect code up
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>Counter</h1>
        <div>
          <h1>useEffect</h1>
          <p>counter * 2 : {}</p>
        </div>
        <div>
          <h1>useState</h1>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default UseEffect;
