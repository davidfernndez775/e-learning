import React, { useState } from "react";

export default function UseStateHookEx() {
  // *useState establece el valor inicial de la variable

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>UseStateHook</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      <span>Your number is {count}</span>
      <button className="btn" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
