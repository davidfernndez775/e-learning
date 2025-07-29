import React, { useState, useEffect, useRef } from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "./FormGroup";

export default function LoginForm({ handleCancel, loggedIn, showRegister }) {
  // * States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // * Refs
  const emailRef = useRef();
  const passwordRef = useRef();

  // * Handlers
  const changeInputs = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      email,
      password,
      id: Math.floor(Math.random() * 1000),
    };
    console.log(event);
    validateLoginForm();
  };

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  function validateLoginForm() {
    email === "" && window.alert("Please enter your email");
    password === "" || password.length <= 4
      ? window.alert("Please enter your password")
      : loggedIn();
  }

  // * Effects
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <div className="form fadeIn" style={{ maxWidth: 500 }}>
      <Title text="Login" classes="text-center mb-4" />
      <h4 className="subtitle">Enter your credentials</h4>
      <form onSubmit={handleSubmit}>
        <FormGroup
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          name="email"
          onChange={changeInputs}
          reference={emailRef}
        />
        <FormGroup
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          name="password"
          onChange={changeInputs}
          reference={passwordRef}
        />
        <div className="d-flex space-between">
          <Button
            classes={"btn-primary"}
            type={"submit"}
            text={"Login"}
            onClick={() => window.alert("Form submission")}
          />
          <Button
            classes={"btn-secondary"}
            type={"button"}
            text={"Register"}
            onClick={showRegister}
          />
          {/* <Button
            classes={"btn-secondary"}
            type={"button"}
            text={"Cancel"}
            onClick={handleCancel}
          /> */}
        </div>
      </form>
    </div>
  );
}
