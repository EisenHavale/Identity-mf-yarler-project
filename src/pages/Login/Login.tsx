import { Paper, Divider, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { LoginForm } from '../../components/organismos/form/login/LoginForm'
import { Title } from '../../components/atoms/title/Title';
import './login.css'

export const Login = () => {
  //TODO:Locate better Login from. It's located at the top
  return (
    <Grid container item direction='column' xs={12} alignItems="center" sx={{margin:'50px auto'}} >
      {/* <Title text='Moly My new App' color='primary' /> */}
        <LoginForm />
    </Grid >    
  )
}
