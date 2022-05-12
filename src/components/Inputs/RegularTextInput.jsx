import { TextField } from "@mui/material";
import React from "react";

export const RegularTextInput = ({
  text,
  name,
  value,
  handleChange,
  placeholder = "",
  helperText = "",
  required = false,
  error = false,
}) => {
  return (
    <TextField
      required={required}
      error={error}
      id={`outlined-required-${name}`}
      name={name}
      label={text}
      value={value}
      placeholder={placeholder}
      helperText={helperText}
      onChange={handleChange}
      autoComplete="off"
    />
  );
};
