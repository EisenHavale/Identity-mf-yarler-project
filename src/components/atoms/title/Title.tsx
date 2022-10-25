import { Typography } from '@mui/material';
import React from 'react'
import { ITitleProps } from '../../../interfaces/atoms-interfaces';


export const Title = ({text, color}:ITitleProps) => {
  return (
    <Typography variant="h3" component="h2" color='#4073FF' sx={{margin:'10px'}}>
      {text}
    </Typography>
    // <h1 color=''>{text}</h1>
  )
}
