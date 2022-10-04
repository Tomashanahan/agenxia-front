import React from 'react';
import hero8 from '../../../assets/hero-8.png';
import './Login.css'
import { FormularioLogin } from './FormularioLogin';

const Login = () => {
  return (
    <>
    <div className='container-login'>
        <img src={hero8} alt="" className='img-combi' />
        <FormularioLogin />
    </div>
   
    </>
  )
}

export {Login}