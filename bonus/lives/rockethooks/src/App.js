import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  // ==== VALUE || CHANGE VALUE FUNCTION ====
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </>
  );
}
