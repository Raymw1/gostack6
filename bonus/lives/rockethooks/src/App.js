import React, { useState, useReducer, useEffect } from "react";

function counter(state, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [counter, setCounter] = useState(0);
  // const [state, dispatch] = useReducer(counter, { counter: 0 });
  // ==== VALUE || CHANGE VALUE FUNCTION ====

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  useEffect(() => {
    return () => {
      // componentWillUnmount
    };
  });

  /// useEffect (1 param): componentDidMount, compontDidUpdate
  // useEffect (2 params): componentDidMount, compontDidUpdate (shouldUpdate)
  // useEffect (1 params, return function): componentWillUnmount

  function increment() {
    setCounter(counter + 1);
    // dispatch({ type: "increment" });
  }

  function decrement() {
    setCounter(counter - 1);
    // dispatch({ type: "decrement" });
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  );
}
