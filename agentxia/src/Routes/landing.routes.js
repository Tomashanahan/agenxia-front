import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LANDING } from '../ConstPath';
import { Landing } from '../Components/Views/LandingPage'
import Pruebas from '../Components/Views/Prueba_Component/Pruebas';

const LandingRoutes = () => {
    return (
        <Routes>
            <Route path={LANDING} element={<Landing />} />
            <Route path='/pruebas' element={<Pruebas />} />
        </Routes>
    )
}

export {LandingRoutes}