
import React from "react";
import { Segment } from "semantic-ui-react";

import CounterDisplay from "../components/CounterDisplay";
import CounterButtons from "../components/CounterButtons";
import { CounterProvider } from "../context/CounterContext";

export default function Counter() {
  return (
    <Segment>
        <CounterProvider>
            <CounterDisplay/>
            <CounterButtons/>
        </CounterProvider>
    </Segment>

  );
}