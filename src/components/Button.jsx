import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import React from "react";

export default function Button({
  type,
  classes,
  style,
  onClick,
  icon,
  text = "button",
}) {
  const alertMissingHandler = () =>
    window.alert("Add event handler to the button");
  return (
    <button
      type={type}
      className={`btn ${classes}`}
      style={style}
      onClick={onClick ? onClick : alertMissingHandler}
    >
      <div className="d-lex">
        {icon}
        {text}
      </div>
    </button>
  );
}
