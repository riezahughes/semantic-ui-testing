import React from "react";
import { Button } from "semantic-ui-react";
import { useCounterContext } from "../context/CounterContext";


export default function CounterButtons() {
  // Step 4: Consume the context to access the shared actions
  const { increment, decrement } = useCounterContext();
  return (
    <div>
        <Button onClick={increment}>Add</Button>
        <Button onClick={decrement}>Remove</Button>
    </div>
  );
}