import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

export const PasswordInput = ({
  text,
  name,
  value,
  handleChange,
  required = true,
  error = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {" "}
      <InputLabel
        htmlFor="outlined-adornment-password"
        required={required}
        error={error}>
        {text}
      </InputLabel>
      <OutlinedInput
        error={error}
        required={required}
        id="outlined-adornment-password"
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              sx={{ color: "#fff" }}
              aria-label="toggle password visibility"
              onClick={() => handleVisibility()}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={text}
      />
    </>
  );
};
