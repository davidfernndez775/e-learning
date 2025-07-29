import React, { useState } from "react";
import Button from "../components/Button";

export default function ThrowError() {
  const [error, setError] = useState(null);
  try {
    throw Error("Error from React Component");
  } catch (error) {
    setError(error);
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger">Caught an {error.message}</div>
      </div>
    );
  }

  // const handleError = () => {
  //   try {
  //     throw new Error("Error");
  //   } catch (event) {
  //     console.log(`${event.name}: ${event.message}`);
  //   }
  // };
  return (
    <div style={{ height: "100vh" }} className="container">
      <h1 className="title">Tgh</h1>
      {/* <Button onClick={handleError} /> */}
    </div>
  );
}
