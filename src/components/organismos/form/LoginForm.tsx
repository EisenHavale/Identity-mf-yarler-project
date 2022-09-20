import React from "react";
import { Form, useFormik } from "formik";
import LoginIcon from '@mui/icons-material/Login';
import { Grid, Stack, Divider, Box, Chip } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Input } from "../../atoms/inputs/Input";
import { Button } from "../../atoms/buttons/Button";
import './login-form.css'




export const LoginForm = ()=>{

    const formik = useFormik(
        {
            initialValues:{
                username:'',
                password:'',
            },
            onSubmit(values, formikHelpers) {
                console.log('Click onSubmit', values)
            },
        }
    )

    return (

        <form onSubmit={formik.handleSubmit} className='login-form'>
            <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Input label="Name" onChange={formik.handleChange} value={formik.values.username} name='username' id="username"/>
                <Input label="Password" onChange={formik.handleChange} value={formik.values.password}  type='password' name='password' id="password"/>
            </Box>
            <Divider variant="fullWidth" sx={{color:'#000', margin:'10px'}} color='#000' light={false}>  <Chip label="Quick Access" /> </Divider>
            <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}} >
                <Button shape="outlined" color='success' label="Login" icon={<LoginIcon />} type='submit' />
                <Button shape="outlined" color='error' label="Google" icon={<GoogleIcon />} type='submit' />
                <Button shape="outlined" color='primary' label="Facebook" icon={<FacebookIcon />} type='submit' />
            </Box>
        </form>
    )
}

