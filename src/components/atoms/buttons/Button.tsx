import React from 'react';
import { IButtonProps } from '../../../interfaces/atoms-interfaces'
import { Button as MButton } from '@mui/material';

export const Button = ({label, disabled=false, color='primary', shape='contained', onClick, icon, type}:IButtonProps) => {

  return (
    <MButton
      variant={shape}
      color={color}
      disabled={disabled}
      onClick={onClick}
      startIcon={icon}
      type={type}
    >
      {label}
    </MButton>
  )
}
