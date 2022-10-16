import React from 'react'
import {TextField} from '@mui/material';
import { IInputProps } from '../../../interfaces/atoms-interfaces';
import './Input.css';

export const Input = ({label, type, onChange, name, id, error, errorText, color}: IInputProps) => {
  //TODO avoid textFields get bigger when showing error messages 
  return (
    <TextField 
      label={label} 
      type={type} 
      onChange={onChange}
      name={name} 
      id={id} 
      error={error} 
      helperText={errorText} 
      fullWidth={true} 
      sx={{margin:'10px'}}
      color={color}
      />

  )
}
