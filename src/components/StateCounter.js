import { useState } from "react";

// Make a Main Component
const StateCounter = () => {
    // Set the initial state
  let initialState = {
    count: 0,
  };
  const [state, setState] = useState(initialState);

//   Create methods for altering state properties
  const increment = () => {
    setState({ count: (state.count += 1) });
  };

  const decrement = () => {
    setState({ count: (state.count -= 1) });
  };

//  return those variables 

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default StateCounter;
