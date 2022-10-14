import { Grid } from '@mui/material'
import React from 'react'
import { Title } from '../../components/atoms/title/Title'
import { ForgotPasswordForm } from '../../components/organismos/form/Forgot_password/ForgotPasswordForm'

export const ForgotPassword = () => {
  return (
    //TODO Set at the middle on vertical orientation 
    <Grid container item direction='column' xs={12} alignItems="center" justifyContent="center" sx={{heigh:'100%'}}>
      <Title text='Moly My new App' />
        <ForgotPasswordForm />
    </Grid > 
  )
}
