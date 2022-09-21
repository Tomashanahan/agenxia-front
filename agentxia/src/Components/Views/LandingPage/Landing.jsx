import React from 'react';
import {Button, Image} from 'react-bootstrap'
import portada from '../../../assets/portada.png';
import { Navbar } from '../Navbar';


const Landing = () => {
  return (
    <div>
        <Image src={portada} style={{width:"100%", height:"100vh"}} />
        <Navbar />
    </div>
  )
}

export { Landing}