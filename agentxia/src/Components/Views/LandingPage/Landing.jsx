import React from 'react';
import { Button, Image } from 'react-bootstrap'
import hero1 from '../../../assets/hero-1.png';
import hero2 from '../../../assets/hero-2.png';
import hero3 from '../../../assets/hero-3.png';
import hero4 from '../../../assets/hero-4.png';
import hero7 from '../../../assets/hero-7.png';
import { Footer } from '../Footer/Footer';
import { _Navbar } from '../Navbar';
import { Contactanos } from './Contactanos';
import { Grid } from './Grid'
import { Grid2 } from './Grid2';
import { Grid3 } from './Grid3';
import { Grid4 } from './Grid4';
import { Grid5 } from './Grid5';
import { Reviwes } from './Reviwes';


const Landing = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Grid />
        <_Navbar />
        <Image src={hero1} style={{ width: "100%", height: "100vh" }} />
      </div>
      <div>
        <Grid2 />
        <Image src={hero2} style={{ width: "100%", height: "100vh" }} />
      </div>
      <div>
        <Grid3 />
        <Image src={hero3} style={{ width: "100%", height: "100vh" }} />
      </div>
      <div>
        <Grid4 />
        <Image src={hero4} style={{ width: "100%", height: "100vh" }} />
      </div>
      <div>
        <Grid5 />
      </div>
      <div>
        <Reviwes />
      </div>
      <div>
        <Contactanos />
        <Image src={hero7} style={{ width: "100%", height: "85vh" }} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export { Landing }