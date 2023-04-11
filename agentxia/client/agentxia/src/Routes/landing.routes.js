import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LANDING } from '../ConstPath';
import { Landing } from '../Components/Views/LandingPage'
import Pruebas from '../Components/Views/Prueba_Component/Pruebas';
import QuienesSomos from '../Components/Views/QuienesSomos/QuienesSomos';

const LandingRoutes = () => {
    return (
        <Routes>
            <Route path={LANDING} element={<Landing />} />
            <Route path='/pruebas' element={<Pruebas />} />
            <Route path='/QUIENES_SOMOS' element={<QuienesSomos />} />
        </Routes>
    )
}

export {LandingRoutes}