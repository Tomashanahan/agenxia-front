import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../Components/Views/Login/Login';
import { LOGIN } from '../ConstPath';


const LoginRoutes = () => {
    return (
        <Routes>
            <Route path={LOGIN} element={<Login />} />
        </Routes>
    )
}

export {LoginRoutes}