function UseState() {
  // use state

  const increment = () => {
    //  logic
  };

  const decrement = () => {
    // logic
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <h1>Counter</h1>
        <p>Count: {}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default UseState;
