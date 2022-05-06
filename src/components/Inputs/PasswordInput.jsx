import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

export const PasswordInput = ({
  text,
  name,
  value,
  handleChange,
  placeholder = "",
  helperText = "Invalid input",
  required = false,
  error = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              sx={{ color: "#fff" }}
              aria-label="toggle password visibility"
              onClick={() => handleVisibility()}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
