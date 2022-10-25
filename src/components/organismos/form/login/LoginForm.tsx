import React from "react";
import { useFormik } from "formik";
import LoginIcon from '@mui/icons-material/Login';
import { Divider, Box, Chip } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Input } from "../../../atoms/inputs/Input";
import { Button } from "../../../atoms/buttons/Button";
import './login-form.css'
import { Link } from "../../../atoms/link/Link";
import { ILoginFormValues } from '../../../../interfaces/atoms-interfaces';
import { validate } from '../helpers/loginValidation';


export const LoginForm = ()=>{
    //TODO avoid textFields get bigger when showing error messages
    const initialValues:ILoginFormValues={
        username:'',
        password:'',
    }

    const formik = useFormik(
        {
            initialValues,
            validate,
            onSubmit(values, formikHelpers) {
                console.log('Click onSubmit', values)
                // ? Missing request to a backend server
            },
        }
    )

    return (

        <form onSubmit={formik.handleSubmit} className='login-form'>
            <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Input 
                    label="Name" 
                    onChange={formik.handleChange} 
                    value={formik.values.username} 
                    name='username' 
                    id="username"
                    onBlur={formik.handleBlur} //? Is it useful
                    error={formik.touched.username && formik.errors.username != '' ? true : false}
                    errorText={formik.errors.username}
                    color='info'
                />
                <Input 
                    label="Password" 
                    onChange={formik.handleChange} 
                    value={formik.values.password} 
                    type='password' 
                    name='password' 
                    onBlur={formik.handleBlur} //? Is it useful
                    id="password"
                    error={formik.touched.password && formik.errors.password != '' ? true : false}
                    errorText={formik.errors.password}
                    color='info'
                />
                <Button shape="contained" color='info' label="Login" icon={<LoginIcon />} type='submit' />
                <Link color="info" label="Forgot password?" path="identity/forgot-password"/>
            </Box>
            <Divider variant="fullWidth" sx={{color:'#000', margin:'10px'}} color='#000' light={false}>  <Chip color="info" label="Quick Access" /> </Divider>
            <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}} >
                <Button shape="contained" color='error' label="Google" icon={<GoogleIcon />} type='submit' />
                <Button shape="contained" color='primary' label="Facebook" icon={<FacebookIcon />} type='submit' />
            </Box>
        </form>
    )
}

