import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

export const AuthRouter = () => {
    return (
        <Routes>

            {/* <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} /> */}

            <Route path='/*' element={<Navigate to='/auth/login' />} />

        </Routes>
    )
}
