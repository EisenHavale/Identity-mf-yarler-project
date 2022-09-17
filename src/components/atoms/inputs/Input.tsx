import React from 'react'
import {TextField} from '@mui/material';
import { IInputProps } from '../../../interfaces/atoms-interfaces';

export const Input = ({label, type, onChange, name, id, value}: IInputProps) => {
  return (
    <TextField label={label} type={type} onChange={onChange} name={name} id={id} />
  )
}
