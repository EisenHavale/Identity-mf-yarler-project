import { Link as MLink} from '@mui/material';
import React from 'react';
import { ILinkProps } from '../../../interfaces/atoms-interfaces';

export const Link = (props: ILinkProps) => {
    return (
      <MLink href={props.path} sx={{margin:'10px', color:'#fff'}} > {props.label} </MLink>
    )

}
