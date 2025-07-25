import React, { useEffect, useState } from "react";

export default function UseEffectHookEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);
  useEffect(() => {
    setText(text + 3);
  }, [count]);
  return (
    <div style={{ height: "100vh" }}>
      <h1 className="title">useEffectHook</h1>
      <h2 className="subtitle">{`You clicked ${text} times`}</h2>
      <p className="card card-warning bg-danger text-light p-1 fadeIn">
        your clicked {count}
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click
        </button>
      </p>
    </div>
  );
}
