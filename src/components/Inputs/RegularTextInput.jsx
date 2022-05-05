import { InputLabel, OutlinedInput } from '@mui/material';
import React from 'react'

export const RegularTextInput = ({text, name, value, handleChange}) => {
  return (
    <>
      <InputLabel htmlFor="outlined-adornment-reg">{text}</InputLabel>
      <OutlinedInput
        required
        id="outlined-adornment-reg"
        name={name}
        value={value}
        onChange={handleChange}
        label={text}
      />
    </>
  );
}
