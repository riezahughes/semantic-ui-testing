import { useState } from "react";
import constate from "constate";

// Step 1: Create a custom hook that contains your state and actions
function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  return { count, increment, decrement };
}

export const [CounterProvider, useCounterContext] = constate(useCounter);