import { Paper, Divider, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { LoginForm } from '../../components/organismos/form/LoginForm'
import { Title } from '../../components/atoms/title/Title';

export const Login = () => {
  return (
    <Grid container direction='column' xs={12} alignItems="center">
      <Title text='Moly My new App' />
      <Divider />
        <LoginForm />
    </Grid >    
  )
}
