import React from "react";
import { useFormik } from "formik";
import { Input } from "../../atoms/inputs/Input";
import { Button } from "../../atoms/buttons/Button";
import LoginIcon from '@mui/icons-material/Login';





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
        <form onSubmit={formik.handleSubmit}>
            <Input label="Name" onChange={formik.handleChange} value={formik.values.username} name='username' id="username"/>
            <Input label="Password" onChange={formik.handleChange} value={formik.values.password}  type='password' name='password' id="password"/>
            <Button color="primary" label="Login" icon={<LoginIcon />} type='submit' />
        </form>
    )
}

