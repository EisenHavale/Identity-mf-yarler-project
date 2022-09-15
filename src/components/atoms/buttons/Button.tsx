import React from 'react';
import { IButtonProps } from '../../../interfaces/atoms-interfaces'
import { Button as MButton } from '@mui/material';

export const Button = ({label, disabled=false, color='primary', type='contained', onClick, icon}:IButtonProps) => {
  return (
    <MButton
      variant={type}
      color={color}
      disabled={disabled}
      onClick={onClick}
      startIcon={icon}
    >
      {label}
    </MButton>
  )
}
