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
  const [data, setData] = useState([]);
  // const [state, dispatch] = useReducer(counter, { counter: 0 });
  // ==== VALUE || CHANGE VALUE FUNCTION ====

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/raymw1/repos");
      const responseData = await response.json();
      setData(responseData);
    }
    fetchData();
  }, []);

  // useEffect (1 param): componentDidMount, compontDidUpdate
  // useEffect (1 param, []): componentDidMount
  // useEffect (2 params): componentDidMount, compontDidUpdate (shouldUpdate)
  // useEffect (1 params, return function): componentWillUnmount

  // function increment() {
  //   setCounter(counter + 1);
  //   // dispatch({ type: "increment" });
  // }

  // function decrement() {
  //   setCounter(counter - 1);
  //   // dispatch({ type: "decrement" });
  // }

  return (
    <ul>
      {data.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}
