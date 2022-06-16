import { TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";

type RegularTextProps = {
  text: string;
  name: string;
  value: string;
  handleChange: ChangeEventHandler;
  placeholder: string;
  helperText: string;
  required: boolean;
  error: boolean;
};

export const RegularTextInput = ({
  text,
  name,
  value,
  handleChange,
  placeholder = "",
  helperText = "",
  required = false,
  error = false,
}: RegularTextProps) => {
  return (
    <TextField
      required={required}
      error={error}
      id={`outlined-required-${name}`}
      name={name}
      label={text}
      value={value}
      placeholder={placeholder}
      helperText={error && helperText}
      onChange={handleChange}
      autoComplete="off"
    />
  );
};
