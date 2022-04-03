import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function Page1() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="App">
      <h1>Page 1</h1>
      <h2>Hopefully this shows how routing works</h2>
      <Button
        onClick={() => {
          setState((prevState) => prevState + 1);
        }}
      >
        Counts: {state}
      </Button>
    </div>
  );
}
