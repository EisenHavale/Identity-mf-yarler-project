import React from 'react'

import { useFormik } from "formik";
import LoginIcon from '@mui/icons-material/Login';
import { Box } from '@mui/material';
import { Input } from "../../../atoms/inputs/Input";
import { Button } from "../../../atoms/buttons/Button";
import { ILoginFormValues } from '../../../../interfaces/atoms-interfaces';
import { validate } from '../helpers/loginValidation';


export const ForgotPasswordForm = ()=>{
    //TODO avoid textFields get bigger when showing error messages
    const initialValues:ILoginFormValues={
        username:'',
        password:''
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
            <Box sx={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Input 
                    label="Email Address" 
                    onChange={formik.handleChange} 
                    value={formik.values.username} 
                    name='email' 
                    id="email"
                    onBlur={formik.handleBlur} //? Is it useful
                    error={formik.touched.username && formik.errors.username != '' ? true : false}
                    errorText={formik.errors.username}
                    color='primary'
                />
                <Button shape="contained" color='info' label="Send" icon={<LoginIcon />} type='submit' />
            </Box>
        </form>
    )
}

