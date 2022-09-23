import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container-footer'>
            <div className='footer-cont-p'>
                <p className='footer-p'>© Copyright 2022 InteleTravel.mx. Reservados todos los derechos.</p>
                <p className='footer-p'><a href="http://" target="_blank" rel="noopener noreferrer">Política de privacidad</a></p>
                <p className='footer-p'><a href="http://" target="_blank" rel="noopener noreferrer">Términos y condiciones</a></p>
                
                
            </div>
        </div>
    )
}

export { Footer }