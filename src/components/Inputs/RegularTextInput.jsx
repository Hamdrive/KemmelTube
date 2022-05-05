import { InputLabel, OutlinedInput } from '@mui/material';
import React from 'react'

export const RegularTextInput = ({text, name, value, handleChange, required = false, error=false}) => {
  return (
    <>
      <InputLabel htmlFor={`outlined-adornment-${name}`} required={required} error={error}>
        {text}
      </InputLabel>
      <OutlinedInput
      error={error}
        required={required}
        id={`outlined-adornment-${name}`}
        name={name}
        value={value}
        onChange={handleChange}
        label={text}        
      />
    </>
  );
}
