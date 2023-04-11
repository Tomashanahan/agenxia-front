/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './Contáctanos.css';

import {_Navbar} from '../Navbar/Navbar';
import ContactanosImg from '../../../assets/contactanos.png';
import {Row, Col, Image} from 'react-bootstrap';
import Aos from 'aos';
import {Footer} from '../Footer/Footer';
import {Contactanos} from '../LandingPage/Contactanos';
import hero7 from '../../../assets/hero-7.png';

function Contáctanos() {
  Aos.init({
    delay: 300,
    duration: 1000,
    offset: 100,
  });
  return (
    <div>
      <_Navbar />
      <img src={ContactanosImg} alt="Contactanos" width={'100%'} height={'372px'} />
      <div className="Row-grid-container-Contactanos">
        <Row className="Row-grid-2">
          <Col className="R1-C1-2-Contactanos box-Contactanos" data-aos="fade-up-right" md={3} />
          <Col className="R1-C2-2-Contactanos box-Contactanos" data-aos="fade-down-left" md={3} />
          <Col className="R1-C3-2-Contactanos box-Contactanos" data-aos="fade-up-right" md={3} />
          <Col className="R1-C4-2-Contactanos box-Contactanos" data-aos="fade-up-right" md={3} />
        </Row>
        <Row className="Row-grid-2">
          <Col className="R2-C1-2-Contactanos box-Contactanos" data-aos="fade-down-left" md={3} />
          <Col className="R2-C2-2-Contactanos box-Contactanos" data-aos="fade-up-right" md={3} />
          <Col className="R2-C3-2-Contactanos box-Contactanos" data-aos="fade-down-left" md={3} />
        </Row>
        <Row className="Row-grid-3">
          <Col className="R3-C1-2-Contactanos box-Contactanos" data-aos="fade-down-left" md={3} />
          <Col className="R3-C2-2-Contactanos box-Contactanos" data-aos="fade-up-right" md={3} />
          <Col className="R3-C3-2-Contactanos box-Contactanos" data-aos="fade-down-left" md={3} />
          <Col className="R3-C4-2-Contactanos box-Contactanos" data-aos="fade-down-left" md={3} />
        </Row>
      </div>

      <div className="contactanos">
        <div className="form">
          <p className="form-title">Contáctanos</p>
          <p className="form-text">
            We love to hear from you, so if there’s anything you’d like to ask us, we’re right here and ready to help in
            every way we can.
          </p>

          <form>
            <div className="group-input">
              <div>
                <label>Your name</label>
                <input type="text" placeholder="ex: Julie Sample" />
              </div>

              <div>
                <label>Your email</label>
                <input type="text" placeholder="ex: julie@gmail.com" />
              </div>
            </div>
            <div className="group-input">
              <div>
                <label>Your phone</label>
                <input type="text" placeholder="ex: +1 234 455 5564" />
              </div>

              <div>
                <label>Subject</label>
                <input type="text" placeholder="ex: return" />
              </div>
            </div>

            <div className="form-textarea">
              <label>Message</label>
              <textarea placeholder="Write your message here." name="" id="" cols="30" rows="10"></textarea>
            </div>

            <button>Submit</button>
          </form>
        </div>
        <div className="datos">
          <p className="datos-title">Información de contacto</p>
          <p className="datos-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod turpis eget interdum interdum.
          </p>
          <div className="datos-group">
            <div className="datos-group-item">
              <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 0C9.00713 0 0.90625 8.10084 0.90625 18.0938C0.90625 21.4356 1.56037 24.8872 3.43749 27.375L19 48L34.5625 27.375C36.2675 25.1154 37.0937 21.1208 37.0937 18.0938C37.0938 8.10084 28.9929 0 19 0ZM19 10.4795C23.2046 10.4795 26.6142 13.8891 26.6142 18.0937C26.6142 22.2984 23.2046 25.708 19 25.708C14.7954 25.708 11.3858 22.2984 11.3858 18.0938C11.3858 13.8891 14.7954 10.4795 19 10.4795Z"
                  fill="white"
                />
              </svg>
              <div>
                <p className="title">Address</p>
                <p className='text'>Callle 2 nume 2 colornia algo mexico v:</p>
                <p className='text'>Callle 2 nume 2 colornia algo mexico v:</p>
              </div>
            </div>
            <div className="datos-group-item">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M37.5125 6.79062L32.5203 1.80313C32.1682 1.44942 31.7496 1.16878 31.2887 0.97733C30.8277 0.785876 30.3335 0.68738 29.8344 0.6875C28.8172 0.6875 27.8609 1.08594 27.1438 1.80313L21.7719 7.175C21.4182 7.52715 21.1375 7.94572 20.9461 8.40666C20.7546 8.8676 20.6561 9.36182 20.6563 9.86094C20.6563 10.8781 21.0547 11.8344 21.7719 12.5516L25.7 16.4797C24.7805 18.5064 23.5021 20.3501 21.9266 21.9219C20.3549 23.5013 18.5114 24.7843 16.4844 25.7094L12.5563 21.7812C12.2041 21.4275 11.7855 21.1469 11.3246 20.9555C10.8637 20.764 10.3694 20.6655 9.87032 20.6656C8.85313 20.6656 7.89688 21.0641 7.17969 21.7812L1.80313 27.1484C1.44899 27.5012 1.16811 27.9206 0.976648 28.3824C0.785186 28.8441 0.686919 29.3392 0.687503 29.8391C0.687503 30.8563 1.08594 31.8125 1.80313 32.5297L6.78594 37.5125C7.92969 38.6609 9.50938 39.3125 11.1313 39.3125C11.4734 39.3125 11.8016 39.2844 12.125 39.2281C18.4438 38.1875 24.7109 34.8266 29.7688 29.7734C34.8219 24.725 38.1781 18.4625 39.2328 12.125C39.5516 10.1891 38.9094 8.19687 37.5125 6.79062Z"
                  fill="white"
                />
              </svg>

              <div>
                <p className="title">Phone</p>
                <p className='text'>+52 1234567890</p>
                <p className='text'>+52 1234567890</p>
              </div>
            </div>
            <div className="datos-group-item">
              <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6V6.603L18 16.296L36 6.606V6C36 4.4087 35.3679 2.88258 34.2426 1.75736C33.1174 0.632141 31.5913 0 30 0H6ZM36 10.011L18.711 19.32C18.4925 19.4376 18.2482 19.4992 18 19.4992C17.7518 19.4992 17.5075 19.4376 17.289 19.32L0 10.011V24C0 25.5913 0.632141 27.1174 1.75736 28.2426C2.88258 29.3679 4.4087 30 6 30H30C31.5913 30 33.1174 29.3679 34.2426 28.2426C35.3679 27.1174 36 25.5913 36 24V10.011Z"
                  fill="white"
                />
              </svg>

              <div>
                <p className="title">Email</p>
                <p className='text'>example@mail.com</p>
                <p className='text'>example@mail.com</p>
              </div>
            </div>
            <div className="datos-group-item">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM29.2734 27.4547L27.9328 29.2828C27.9037 29.3226 27.8669 29.3563 27.8247 29.3818C27.7825 29.4074 27.7357 29.4244 27.6869 29.4318C27.6381 29.4392 27.5883 29.4369 27.5404 29.425C27.4925 29.4131 27.4475 29.3919 27.4078 29.3625L19.6547 23.7094C19.6064 23.6747 19.5671 23.6289 19.5402 23.5759C19.5133 23.5229 19.4995 23.4641 19.5 23.4047V10.5C19.5 10.2937 19.6688 10.125 19.875 10.125H22.1297C22.3359 10.125 22.5047 10.2937 22.5047 10.5V22.1016L29.1891 26.9344C29.3578 27.0516 29.3953 27.2859 29.2734 27.4547Z"
                  fill="white"
                />
              </svg>

              <div>
                <p className="title">Business hours</p>
                <p className='text'>lunes - viernes 08:00 a 18:00</p>
                <p className='text'>lunes - viernes 08:00 a 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Contactanos />
        <Image className="img-hero-down" src={hero7} />
      </div>
      <Footer />
    </div>
  );
}

export default Contáctanos;
