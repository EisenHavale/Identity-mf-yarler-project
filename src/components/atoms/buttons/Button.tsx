import React from 'react';
import { IButtonProps } from '../../../interfaces/atoms-interfaces'
import { Button as MButton } from '@mui/material';

export const Button = ({label, disabled=false, color='primary', shape='contained', onClick, icon, type, name}:IButtonProps) => {

 return (
    <>
      { (label != '' && label !=null) ?
      <MButton
        name={name}
        variant={shape}
        color={color}
        disabled={disabled}
        onClick={onClick}
        startIcon={icon}
        type={type}
        sx={{width:'100%', margin:'5px'}}
      >
        {label}
      </MButton>
      : <> </>
      }
    </>
 )
}
