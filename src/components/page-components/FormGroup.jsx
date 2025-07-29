import React from "react";

export default function FormGroup({
  label,
  type,
  placeholder,
  disabled = false,
  value,
  onChange,
  name,
  reference,
}) {
  return (
    <div className="form-group">
      <label className="text-primary">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
        ref={reference}
      />
    </div>
  );
}
