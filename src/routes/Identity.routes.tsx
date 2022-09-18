import React, { Suspense } from 'react'
import { Routes, Route} from 'react-router-dom';
import { ForgotPassword } from '../pages/forgot-password/ForgotPassword';
import { Login } from '../pages/Login/Login';


const IdentityRoutes = ()=>{
    return (
        <Suspense fallback='Loading'>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
            </Routes>
        </Suspense>
    )
}

export default IdentityRoutes;