import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LANDING } from '../ConstPath';
import { Landing } from '../Components/Views/LandingPage'

const LandingRoutes = () => {
    return (
        <Routes>
            <Route path={LANDING} element={<Landing />} />
        </Routes>
    )
}

export {LandingRoutes}