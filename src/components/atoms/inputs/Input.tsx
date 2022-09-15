import React from 'react'
import {TextField} from '@mui/material';
import { IInputProps } from '../../../interfaces/atoms-interfaces';

export const Input = ({label}: IInputProps) => {
  return (
    <TextField label={label} />
  )
}
