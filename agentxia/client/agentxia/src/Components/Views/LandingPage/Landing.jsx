import React from 'react';
import './Landign.css'
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
import { GridResponsiv } from './GridsResponsiv/GridResponsiv';
import { GridResponsiv2 } from './GridsResponsiv/GridResponsiv2';
import { GridResponsiv3 } from './GridsResponsiv/GridResponsiv3';
import { GridResponsiv4 } from './GridsResponsiv/GridResponsiv4';


const Landing = () => {
  return (
    <>
      <div>
        <Grid />
        <_Navbar />
        <GridResponsiv />
        <Image className='img-hero' src={hero1} />
      </div>
      <div>
        <Grid2 />
        <GridResponsiv2 />
        <Image className='img-hero' src={hero2} />
      </div>
      <div>
        <Grid3 />
        <GridResponsiv3 />
        <Image className='img-hero' src={hero3} />
      </div>
      <div>
        <Grid4 />
        <GridResponsiv4 />
        <Image className='img-hero' src={hero4} />
      </div>
      <div>
        <Grid5 />
      </div>
      <div>
        <Reviwes />
      </div>
      <div>
        <Contactanos />
        <Image className='img-hero-down' src={hero7} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export { Landing }