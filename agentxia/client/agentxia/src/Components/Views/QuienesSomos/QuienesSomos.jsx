/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './QuienesSomos.css';
import {_Navbar} from '../Navbar/Navbar';
import QuienesSomosImg from '../../../assets/QuienesSomos.png';
import QuienesSomosSubImg from '../../../assets/quienes-somos.png';

import EquipoUno from '../../../assets/equipo-1.png';
import EquipoDos from '../../../assets/equipo-2.png';
import EquipoTres from '../../../assets/equipo-3.png';
import {Row, Col} from 'react-bootstrap';
import Aos from 'aos';
import {Footer} from '../Footer/Footer';

function QuienesSomos() {
  Aos.init({
    delay: 300,
    duration: 1000,
    offset: 100,
  });
  return (
    <div>
      <_Navbar />
      <img src={QuienesSomosImg} alt="QuienesSomosImg" width={'100%'} height={'372px'} />
      <div className="Row-grid-container">
        <Row className="Row-grid-2">
          <Col className="R1-C1-2 box" data-aos="fade-up-right" md={3}></Col>
          <Col className="R1-C2-2 box" data-aos="fade-down-left" md={3}></Col>
          <Col className="R1-C3-2 box" data-aos="fade-up-right" md={3}></Col>
          <Col className="R1-C4-2 box" data-aos="fade-up-right" md={3}></Col>
        </Row>
        <Row className="Row-grid-2">
          <Col className="R2-C1-2 box" data-aos="fade-down-left" md={3}></Col>
          <Col className="R2-C2-2 box" data-aos="fade-up-right" md={3}></Col>
          <Col className="R2-C3-2 box" data-aos="fade-down-left" md={3}></Col>
        </Row>
        <Row className="Row-grid-3">
          <Col className="R3-C1-2 box" data-aos="fade-down-left" md={3}></Col>
          <Col className="R3-C2-2 box" data-aos="fade-up-right" md={3}></Col>
          <Col className="R3-C3-2 box" data-aos="fade-down-left" md={3}></Col>
          <Col className="R3-C4-2 box" data-aos="fade-down-left" md={3}></Col>
        </Row>
      </div>

      <div className="quienes-somos-container">
        <div className="quienes-somos-text-container">
          <p className="title">¿Quiénes somos?</p>
          <p className="sub-title">Agentxia, formada por un grupo de emprendedores y emprenderás mexicanos</p>
          <p className="text">
            Nace con el objetivo de ayudar a todas las personas que tengan la iniciativa de aperturar su propia agencia
            de viajes, así como también, a los miembros que desean ser expertos y aprovechar los beneficios que otorga
            el organizar sus propias vacaciones.
            <br />
            <br />
            Somos una agencia comprometida en brindar todas las herramientas tecnológicas y asistencia personalizada con
            el objetivo de ofertar los mejores servicios de turismo y de entretenimiento, contando como los mejores
            profesionistas y proveedores turísticos para asegurar una excelente oferta e innovación de servicios y
            productos.
          </p>
        </div>
        <div className="">
          <img src={QuienesSomosSubImg} alt="QuienesSomosSubImg" width={'100%'} height={'372px'} />
        </div>
      </div>

      <div className="misión-visión-container">
        <div className="misión-container">
          <p className="misión-visión-title">Misión</p>
          <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
              fill="#FF5375"
            />
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M25.3334 52H26.6667V34.6666H25.3334C24.6262 34.6666 23.9479 34.9476 23.4478 35.4477C22.9477 35.9478 22.6667 36.626 22.6667 37.3333V49.3333C22.6667 50.0405 22.9477 50.7188 23.4478 51.2189C23.9479 51.719 24.6262 52 25.3334 52ZM46.6667 34.6666H37.3334L38.8294 30.176C38.9629 29.7752 38.9993 29.3484 38.9355 28.9308C38.8718 28.5132 38.7097 28.1168 38.4627 27.7741C38.2157 27.4314 37.8909 27.1523 37.5149 26.9597C37.1389 26.7672 36.7225 26.6667 36.3001 26.6666H36.0001L29.3334 33.9173V52H44.0001L49.2161 40.5386L49.3334 40V37.3333C49.3334 36.626 49.0525 35.9478 48.5524 35.4477C48.0523 34.9476 47.374 34.6666 46.6667 34.6666Z"
                fill="white"
              />
            </svg>
          </svg>

          <p className="misión-visión-text">
            Formar agentes de viajes independientes y miembros expertos en la organización de experiencias turísticas,
            por medio de la capacitación constante, brindar acceso a los mejores proveedores, productos y herramientas
            de reservas a nivel nacional e internacional.
          </p>
        </div>
        <div className="visión-container">
          <p className="misión-visión-title">Visión</p>
          <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
              fill="#FF5375"
            />
            <path
              d="M20 40C20 40 26 29 36 29C46 29 52 40 52 40C52 40 46 51 36 51C26 51 20 40 20 40ZM36 47C37.8565 47 39.637 46.2625 40.9497 44.9497C42.2625 43.637 43 41.8565 43 40C43 38.1435 42.2625 36.363 40.9497 35.0503C39.637 33.7375 37.8565 33 36 33C34.1435 33 32.363 33.7375 31.0503 35.0503C29.7375 36.363 29 38.1435 29 40C29 41.8565 29.7375 43.637 31.0503 44.9497C32.363 46.2625 34.1435 47 36 47V47Z"
              fill="white"
            />
          </svg>

          <p className="misión-visión-text">
            Ser una empresa líder que proporcione las herramientas más innovadoras y seguras para los agentes de viajes
            independientes y miembros, que busquen desarrollar un negocio propio al igual que obtener recompensas y
            beneficios por la organización de viajes y experiencias, por medio de capacitaciones, plataformas
            tecnológicas únicas e innovadoras para ofrecer y obtener servicios turísticos atractivos
          </p>
        </div>
      </div>

      <div className="valores">
        <p>Valores</p>
        <div className="valores-grid">
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.4977 54.6752C32.7601 55.4912 34.2193 56.0432 36.0001 56C37.7777 56.0432 39.2401 55.4912 40.5025 54.6752L40.4753 51.2H31.5249L31.4977 54.6752ZM40.3153 49.6C40.3153 42.6288 47.7233 40.2432 47.1681 33.2992C46.8193 28.9184 43.8513 24.0032 36.0001 24.0032C28.1489 24.0032 25.1809 28.9184 24.8305 33.3008C24.2753 40.2432 31.6849 42.6288 31.6849 49.6H40.3153ZM28.0001 33.6C28.3313 29.4432 31.3809 27.2 36.0001 27.2C40.6177 27.2 43.4465 29.3936 43.7777 33.5504C43.9585 35.8288 42.6497 37.3472 40.8833 39.832C39.5809 41.6656 38.3185 43.5808 37.6001 46.4H34.4001C33.6817 43.5808 32.4193 41.6656 31.1153 39.8304C29.3505 37.3472 27.8177 35.8784 28.0001 33.6Z"
                fill="white"
              />
              <path
                d="M28.0001 33.6C28.3313 29.4432 31.3809 27.2 36.0001 27.2C40.6177 27.2 43.4465 29.3936 43.7777 33.5504C43.9585 35.8288 42.6497 37.3472 40.8833 39.832C39.5809 41.6656 38.3185 43.5808 37.6001 46.4H34.4001C33.6817 43.5808 32.4193 41.6656 31.1153 39.8304C29.3505 37.3472 27.8177 35.8784 28.0001 33.6Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Innovación</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M32.4399 39.3333H35.3333C36.9246 39.3333 38.4507 39.9655 39.5759 41.0907C40.7011 42.2159 41.3333 43.742 41.3333 45.3333H31.9986L31.9999 46.6666H42.6666V45.3333C42.6624 43.9146 42.2525 42.5267 41.4853 41.3333H45.3333C46.5936 41.333 47.8282 41.6899 48.894 42.3627C49.9597 43.0355 50.8129 43.9967 51.3546 45.1346C48.2013 49.296 43.0959 52 37.3333 52C33.6519 52 30.5333 51.2133 27.9999 49.8333V37.428C29.6221 37.6604 31.1539 38.3177 32.4399 39.3333ZM25.3333 36C25.6598 36 25.975 36.1199 26.2191 36.3369C26.4631 36.5539 26.619 36.853 26.6573 37.1773L26.6666 37.3333V49.3333C26.6666 49.6869 26.5261 50.0261 26.2761 50.2761C26.026 50.5262 25.6869 50.6666 25.3333 50.6666H22.6666C22.313 50.6666 21.9738 50.5262 21.7238 50.2761C21.4737 50.0261 21.3333 49.6869 21.3333 49.3333V37.3333C21.3333 36.9797 21.4737 36.6406 21.7238 36.3905C21.9738 36.1405 22.313 36 22.6666 36H25.3333ZM38.1946 28.7666L38.6666 29.24L39.1386 28.768C39.4477 28.4563 39.8153 28.2087 40.2203 28.0394C40.6253 27.8702 41.0598 27.7826 41.4987 27.7817C41.9377 27.7808 42.3725 27.8666 42.7782 28.0342C43.184 28.2018 43.5526 28.4479 43.8629 28.7583C44.1733 29.0688 44.4193 29.4374 44.5867 29.8432C44.7542 30.249 44.8399 30.6838 44.8389 31.1228C44.8379 31.5617 44.7502 31.9962 44.5808 32.4011C44.4114 32.8061 44.1637 33.1737 43.8519 33.4826L38.6666 38.6666L33.4799 33.48C33.1682 33.1709 32.9206 32.8033 32.7514 32.3983C32.5821 31.9933 32.4945 31.5588 32.4936 31.1198C32.4927 30.6809 32.5785 30.246 32.7461 29.8403C32.9137 29.4346 33.1598 29.066 33.4702 28.7556C33.7807 28.4453 34.1494 28.1993 34.5551 28.0318C34.9609 27.8643 35.3957 27.7786 35.8347 27.7797C36.2737 27.7807 36.7081 27.8684 37.1131 28.0378C37.5181 28.2072 37.8856 28.4549 38.1946 28.7666Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Honestidad</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M46.5 36H37V39.5C37 41.9812 34.9812 44 32.5 44C30.0187 44 28 41.9812 28 39.5V31.9L23.9437 34.3375C22.7375 35.0562 22 36.3625 22 37.7625V40.7187L17 43.6062C16.0437 44.1562 15.7125 45.3812 16.2687 46.3375L21.2687 55C21.8187 55.9562 23.0437 56.2812 24 55.7312L30.4625 52H39C41.2062 52 43 50.2062 43 48H44C45.1062 48 46 47.1062 46 46V42H46.5C47.3312 42 48 41.3312 48 40.5V37.5C48 36.6687 47.3312 36 46.5 36ZM55.7312 33.6625L50.7312 25C50.1812 24.0437 48.9562 23.7187 48 24.2687L41.5375 28H35.15C34.4 28 33.6687 28.2125 33.0312 28.6062L30.9375 29.9125C30.35 30.275 30 30.9187 30 31.6062V39.5C30 40.8812 31.1187 42 32.5 42C33.8812 42 35 40.8812 35 39.5V34H46.5C48.4312 34 50 35.5687 50 37.5V39.2812L55 36.3937C55.9562 35.8375 56.2812 34.6187 55.7312 33.6625Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Compromiso</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M28.8 38.4C28.1375 37.5188 26.8813 37.3375 26 38C25.1188 38.6625 24.9375 39.9187 25.6 40.8L27.9812 43.975C28.2812 44.375 28.2375 44.9313 27.8875 45.2812L27.0875 46.0813C26.6688 46.5 25.9875 46.4688 25.6125 46.0125L20 39.275V30C20 28.8938 19.1063 28 18 28C16.8937 28 16 28.8938 16 30V43.65C16 44.3313 16.2312 44.9938 16.6562 45.525L23.1625 53.9188C23.475 54.325 23.6875 54.7875 23.8125 55.275C23.925 55.7063 24.3188 56 24.7688 56H33C33.55 56 34 55.55 34 55V48C34 46.2688 33.4375 44.5875 32.4 43.2L28.8 38.4ZM54 28C52.8937 28 52 28.8938 52 30V39.275L46.3875 46.0125C46.0125 46.4625 45.325 46.4938 44.9125 46.0813L44.1125 45.2812C43.7625 44.9313 43.7188 44.375 44.0187 43.975L46.4 40.8C47.0625 39.9187 46.8813 38.6625 46 38C45.1188 37.3375 43.8625 37.5188 43.2 38.4L39.6 43.2C38.5625 44.5875 38 46.2688 38 48V55C38 55.55 38.45 56 39 56H47.2313C47.675 56 48.075 55.7063 48.1875 55.275C48.3125 54.7875 48.525 54.325 48.8375 53.9188L55.3438 45.525C55.7687 44.9938 56 44.3313 56 43.65V30C56 28.8938 55.1063 28 54 28Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Lealtad</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M30 40C25.5813 40 22 36.4187 22 32C22 27.5813 25.5813 24 30 24C34.4188 24 38 27.5813 38 32C38 36.4187 34.4188 40 30 40ZM27.1438 43H32.8563C34.1438 43 35.3813 43.2188 36.5312 43.6187C36.1875 44.6875 36 45.8188 36 47C36 50.7188 37.8438 54.0063 40.675 56H17.8563C16.8313 56 16 55.1687 16 54.1437C16 47.9875 20.9875 43 27.1438 43ZM56 47C56 51.9688 51.9688 56 47 56C42.0312 56 38 51.9688 38 47C38 42.0312 42.0312 38 47 38C51.9688 38 56 42.0312 56 47ZM47 42C46.45 42 46 42.45 46 43V47C46 47.55 46.45 48 47 48H50C50.55 48 51 47.55 51 47C51 46.45 50.55 46 50 46H48V43C48 42.45 47.55 42 47 42Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Disciplina</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M44.4854 38.64C45.4853 39.6401 46.047 40.9965 46.047 42.4107C46.047 43.8249 45.4853 45.1812 44.4854 46.1813L36.9428 53.724C36.6927 53.974 36.3537 54.1144 36.0001 54.1144C35.6466 54.1144 35.3075 53.974 35.0574 53.724L27.5148 46.1813C26.5146 45.1811 25.9526 43.8245 25.9526 42.41C25.9526 40.9955 26.5146 39.6389 27.5148 38.6387C28.515 37.6384 29.8716 37.0765 31.2861 37.0765C32.7006 37.0765 34.0572 37.6384 35.0574 38.6387L35.9988 39.5813L36.9428 38.6387C37.438 38.1434 38.026 37.7505 38.6731 37.4825C39.3202 37.2144 40.0137 37.0765 40.7141 37.0765C41.4145 37.0765 42.1081 37.2144 42.7551 37.4825C43.4022 37.7505 43.9902 38.1434 44.4854 38.6387V38.64ZM36.0001 25.3333C38.9468 25.3333 41.3334 27.72 41.3334 30.6667C41.3334 33.6133 38.9468 36 36.0001 36C33.0534 36 30.6668 33.6133 30.6668 30.6667C30.6668 27.72 33.0534 25.3333 36.0001 25.3333Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Empatía</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M40.2902 36.5714C41.3942 36.5714 42.2902 37.4674 42.2902 38.5714V46.2846C42.2902 47.952 41.6279 49.551 40.4488 50.7301C39.2698 51.9091 37.6707 52.5714 36.0034 52.5714C34.336 52.5714 32.7369 51.9091 31.5579 50.7301C30.3789 49.551 29.7165 47.952 29.7165 46.2846V38.5714C29.7165 37.4674 30.6114 36.5714 31.7165 36.5714H40.2902ZM24.2856 36.5714L29.2936 36.5691C28.8818 37.0654 28.6339 37.6771 28.5839 38.32L28.5725 38.5714V46.2846C28.5725 47.5794 28.9051 48.7977 29.4868 49.8583C28.7038 50.1999 27.8481 50.3412 26.9969 50.2693C26.1457 50.1974 25.3258 49.9147 24.6112 49.4467C23.8966 48.9786 23.3098 48.34 22.9038 47.5884C22.4978 46.8368 22.2853 45.996 22.2856 45.1417V38.5714C22.2859 38.0409 22.4969 37.5322 22.8722 37.1571C23.2474 36.7821 23.7562 36.5714 24.2868 36.5714H24.2856ZM42.7131 36.5691L47.7142 36.5714C48.8182 36.5714 49.7142 37.4674 49.7142 38.5714V45.1429C49.7146 45.9968 49.5023 46.8373 49.0965 47.5887C48.6908 48.34 48.1043 48.9785 47.3901 49.4465C46.6759 49.9145 45.8564 50.1973 45.0055 50.2694C44.1547 50.3415 43.2993 50.2006 42.5165 49.8594L42.5805 49.7429C43.0708 48.8137 43.3691 47.7669 43.4239 46.6571L43.4331 46.2846V38.5714C43.4331 37.8103 43.1622 37.1131 42.7131 36.5691ZM35.9999 27.4286C36.5252 27.4286 37.0454 27.532 37.5307 27.7331C38.016 27.9341 38.4569 28.2287 38.8284 28.6001C39.1998 28.9716 39.4944 29.4125 39.6954 29.8978C39.8965 30.3831 39.9999 30.9033 39.9999 31.4286C39.9999 31.9539 39.8965 32.474 39.6954 32.9593C39.4944 33.4446 39.1998 33.8856 38.8284 34.257C38.4569 34.6284 38.016 34.9231 37.5307 35.1241C37.0454 35.3251 36.5252 35.4286 35.9999 35.4286C34.9391 35.4286 33.9216 35.0071 33.1715 34.257C32.4214 33.5069 31.9999 32.4894 31.9999 31.4286C31.9999 30.3677 32.4214 29.3503 33.1715 28.6001C33.9216 27.85 34.9391 27.4286 35.9999 27.4286ZM45.1462 28.5714C45.5965 28.5714 46.0423 28.6601 46.4583 28.8324C46.8742 29.0047 47.2522 29.2573 47.5706 29.5756C47.889 29.894 48.1415 30.272 48.3138 30.6879C48.4861 31.1039 48.5748 31.5498 48.5748 32C48.5748 32.4502 48.4861 32.8961 48.3138 33.3121C48.1415 33.728 47.889 34.106 47.5706 34.4244C47.2522 34.7427 46.8742 34.9953 46.4583 35.1676C46.0423 35.3399 45.5965 35.4286 45.1462 35.4286C44.2369 35.4286 43.3648 35.0674 42.7218 34.4244C42.0789 33.7814 41.7176 32.9093 41.7176 32C41.7176 31.0907 42.0789 30.2186 42.7218 29.5756C43.3648 28.9327 44.2369 28.5714 45.1462 28.5714ZM26.8536 28.5714C27.3039 28.5714 27.7497 28.6601 28.1657 28.8324C28.5817 29.0047 28.9596 29.2573 29.278 29.5756C29.5964 29.894 29.8489 30.272 30.0212 30.6879C30.1935 31.1039 30.2822 31.5498 30.2822 32C30.2822 32.4502 30.1935 32.8961 30.0212 33.3121C29.8489 33.728 29.5964 34.106 29.278 34.4244C28.9596 34.7427 28.5817 34.9953 28.1657 35.1676C27.7497 35.3399 27.3039 35.4286 26.8536 35.4286C25.9443 35.4286 25.0723 35.0674 24.4293 34.4244C23.7863 33.7814 23.4251 32.9093 23.4251 32C23.4251 31.0907 23.7863 30.2186 24.4293 29.5756C25.0723 28.9327 25.9443 28.5714 26.8536 28.5714Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Responsabilidad</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M40.2902 36.5714C41.3942 36.5714 42.2902 37.4674 42.2902 38.5714V46.2846C42.2902 47.952 41.6279 49.551 40.4488 50.7301C39.2698 51.9091 37.6707 52.5714 36.0034 52.5714C34.336 52.5714 32.7369 51.9091 31.5579 50.7301C30.3789 49.551 29.7165 47.952 29.7165 46.2846V38.5714C29.7165 37.4674 30.6114 36.5714 31.7165 36.5714H40.2902ZM24.2856 36.5714L29.2936 36.5691C28.8818 37.0654 28.6339 37.6771 28.5839 38.32L28.5725 38.5714V46.2846C28.5725 47.5794 28.9051 48.7977 29.4868 49.8583C28.7038 50.1999 27.8481 50.3412 26.9969 50.2693C26.1457 50.1974 25.3258 49.9147 24.6112 49.4467C23.8966 48.9786 23.3098 48.34 22.9038 47.5884C22.4978 46.8368 22.2853 45.996 22.2856 45.1417V38.5714C22.2859 38.0409 22.4969 37.5322 22.8722 37.1571C23.2474 36.7821 23.7562 36.5714 24.2868 36.5714H24.2856ZM42.7131 36.5691L47.7142 36.5714C48.8182 36.5714 49.7142 37.4674 49.7142 38.5714V45.1429C49.7146 45.9968 49.5023 46.8373 49.0965 47.5887C48.6908 48.34 48.1043 48.9785 47.3901 49.4465C46.6759 49.9145 45.8564 50.1973 45.0055 50.2694C44.1547 50.3415 43.2993 50.2006 42.5165 49.8594L42.5805 49.7429C43.0708 48.8137 43.3691 47.7669 43.4239 46.6571L43.4331 46.2846V38.5714C43.4331 37.8103 43.1622 37.1131 42.7131 36.5691ZM35.9999 27.4286C36.5252 27.4286 37.0454 27.532 37.5307 27.7331C38.016 27.9341 38.4569 28.2287 38.8284 28.6001C39.1998 28.9716 39.4944 29.4125 39.6954 29.8978C39.8965 30.3831 39.9999 30.9033 39.9999 31.4286C39.9999 31.9539 39.8965 32.474 39.6954 32.9593C39.4944 33.4446 39.1998 33.8856 38.8284 34.257C38.4569 34.6284 38.016 34.9231 37.5307 35.1241C37.0454 35.3251 36.5252 35.4286 35.9999 35.4286C34.9391 35.4286 33.9216 35.0071 33.1715 34.257C32.4214 33.5069 31.9999 32.4894 31.9999 31.4286C31.9999 30.3677 32.4214 29.3503 33.1715 28.6001C33.9216 27.85 34.9391 27.4286 35.9999 27.4286ZM45.1462 28.5714C45.5965 28.5714 46.0423 28.6601 46.4583 28.8324C46.8742 29.0047 47.2522 29.2573 47.5706 29.5756C47.889 29.894 48.1415 30.272 48.3138 30.6879C48.4861 31.1039 48.5748 31.5498 48.5748 32C48.5748 32.4502 48.4861 32.8961 48.3138 33.3121C48.1415 33.728 47.889 34.106 47.5706 34.4244C47.2522 34.7427 46.8742 34.9953 46.4583 35.1676C46.0423 35.3399 45.5965 35.4286 45.1462 35.4286C44.2369 35.4286 43.3648 35.0674 42.7218 34.4244C42.0789 33.7814 41.7176 32.9093 41.7176 32C41.7176 31.0907 42.0789 30.2186 42.7218 29.5756C43.3648 28.9327 44.2369 28.5714 45.1462 28.5714ZM26.8536 28.5714C27.3039 28.5714 27.7497 28.6601 28.1657 28.8324C28.5817 29.0047 28.9596 29.2573 29.278 29.5756C29.5964 29.894 29.8489 30.272 30.0212 30.6879C30.1935 31.1039 30.2822 31.5498 30.2822 32C30.2822 32.4502 30.1935 32.8961 30.0212 33.3121C29.8489 33.728 29.5964 34.106 29.278 34.4244C28.9596 34.7427 28.5817 34.9953 28.1657 35.1676C27.7497 35.3399 27.3039 35.4286 26.8536 35.4286C25.9443 35.4286 25.0723 35.0674 24.4293 34.4244C23.7863 33.7814 23.4251 32.9093 23.4251 32C23.4251 31.0907 23.7863 30.2186 24.4293 29.5756C25.0723 28.9327 25.9443 28.5714 26.8536 28.5714Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Respeto</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
          <div className="valor">
            <svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.0718 4C32.151 -1.33333 39.849 -1.33333 42.9282 4L70.641 52C73.7202 57.3333 69.8712 64 63.7128 64H8.28719C2.12879 64 -1.72022 57.3333 1.35899 52L29.0718 4Z"
                fill="#FF5375"
              />
              <path
                d="M35.2812 32.4562C35.7249 32.0625 35.8999 31.4437 35.6687 30.8937C35.5249 30.5625 35.3687 30.2375 35.1937 29.925L34.9999 29.5875C34.8124 29.275 34.6062 28.9688 34.3874 28.675C34.0312 28.2 33.4062 28.0437 32.8437 28.2312L31.0812 28.8125C30.4124 28.2625 29.6437 27.8125 28.8187 27.5062L28.4374 25.6937C28.3187 25.1125 27.8687 24.65 27.2812 24.5813C26.8562 24.525 26.4312 24.5 25.9999 24.5C25.5687 24.5 25.1437 24.525 24.7249 24.575C24.1374 24.6437 23.6874 25.1125 23.5687 25.6875L23.1874 27.5062C22.3562 27.8187 21.5937 28.2625 20.9249 28.8125L19.1562 28.2375C18.5937 28.05 17.9687 28.2062 17.6124 28.6812C17.3937 28.975 17.1874 29.2812 16.9937 29.5937L16.8062 29.925C16.6312 30.2375 16.4749 30.5625 16.3312 30.9C16.0999 31.4437 16.2749 32.0625 16.7187 32.4625L18.1062 33.7C18.0374 34.1187 17.9999 34.5562 17.9999 35C17.9999 35.4437 18.0374 35.8812 18.1062 36.3062L16.7187 37.5437C16.2749 37.9375 16.0999 38.5562 16.3312 39.1062C16.4749 39.4375 16.6312 39.7625 16.8062 40.0812L16.9937 40.4062C17.1812 40.725 17.3874 41.025 17.6124 41.3187C17.9687 41.7937 18.5937 41.95 19.1562 41.7625L20.9187 41.1812C21.5874 41.7312 22.3562 42.1812 23.1812 42.4875L23.5624 44.3062C23.6812 44.8875 24.1312 45.35 24.7187 45.4187C25.1374 45.4688 25.5624 45.4937 25.9937 45.4937C26.4249 45.4937 26.8499 45.4688 27.2687 45.4187C27.8562 45.35 28.3062 44.8812 28.4249 44.3062L28.8062 42.4875C29.6374 42.175 30.3999 41.7312 31.0687 41.1812L32.8312 41.7625C33.3937 41.95 34.0187 41.7937 34.3749 41.3187C34.5937 41.025 34.7999 40.725 34.9874 40.4062L35.1812 40.0687C35.3562 39.7562 35.5124 39.4312 35.6562 39.1C35.8874 38.5562 35.7124 37.9375 35.2687 37.5375L33.8812 36.3C33.9499 35.875 33.9874 35.4375 33.9874 34.9937C33.9874 34.55 33.9499 34.1125 33.8812 33.6875L35.2687 32.45L35.2812 32.4562ZM28.9999 35C28.9999 36.6562 27.6562 38 25.9999 38C24.3437 38 22.9999 36.6562 22.9999 35C22.9999 33.3437 24.3437 32 25.9999 32C27.6562 32 28.9999 33.3437 28.9999 35ZM47.5437 55.2812C47.9374 55.725 48.5562 55.9 49.1062 55.6687C49.4374 55.525 49.7624 55.3687 50.0749 55.1937L50.4124 55C50.7249 54.8125 51.0312 54.6062 51.3249 54.3875C51.7999 54.0312 51.9562 53.4062 51.7687 52.8437L51.1874 51.0812C51.7374 50.4125 52.1874 49.6437 52.4937 48.8187L54.3124 48.4375C54.8937 48.3187 55.3561 47.8687 55.4249 47.2812C55.4749 46.8625 55.4999 46.4375 55.4999 46.0062C55.4999 45.575 55.4749 45.15 55.4249 44.7312C55.3561 44.1437 54.8874 43.6938 54.3124 43.575L52.4937 43.1875C52.1812 42.3562 51.7374 41.5937 51.1874 40.925L51.7687 39.1625C51.9562 38.6 51.7999 37.975 51.3249 37.6187C51.0312 37.4 50.7249 37.1937 50.4124 37L50.0812 36.8125C49.7687 36.6375 49.4437 36.4812 49.1062 36.3375C48.5624 36.1062 47.9437 36.2812 47.5437 36.725L46.3062 38.1125C45.8812 38.0437 45.4437 38.0062 44.9999 38.0062C44.5562 38.0062 44.1187 38.0437 43.6937 38.1125L42.4562 36.725C42.0624 36.2812 41.4437 36.1062 40.8937 36.3375C40.5624 36.4812 40.2374 36.6375 39.9187 36.8125L39.5937 37C39.2749 37.1875 38.9749 37.3937 38.6812 37.6187C38.2062 37.975 38.0499 38.6 38.2374 39.1625L38.8187 40.925C38.2687 41.5937 37.8187 42.3625 37.5124 43.1875L35.6937 43.5625C35.1124 43.6812 34.6499 44.1312 34.5812 44.7187C34.5312 45.1375 34.5062 45.5625 34.5062 45.9937C34.5062 46.425 34.5312 46.85 34.5812 47.2687C34.6499 47.8562 35.1187 48.3062 35.6937 48.425L37.5124 48.8062C37.8249 49.6375 38.2687 50.4 38.8187 51.0687L38.2374 52.8312C38.0499 53.3937 38.2062 54.0187 38.6812 54.375C38.9749 54.5937 39.2749 54.8 39.5937 54.9875L39.9312 55.1812C40.2437 55.3562 40.5687 55.5125 40.8999 55.6562C41.4437 55.8875 42.0624 55.7125 42.4624 55.2687L43.6999 53.8812C44.1249 53.95 44.5624 53.9875 45.0062 53.9875C45.4499 53.9875 45.8874 53.95 46.3124 53.8812L47.5499 55.2687L47.5437 55.2812ZM44.9999 49C43.3437 49 41.9999 47.6562 41.9999 46C41.9999 44.3437 43.3437 43 44.9999 43C46.6562 43 47.9999 44.3437 47.9999 46C47.9999 47.6562 46.6562 49 44.9999 49Z"
                fill="white"
              />
            </svg>
            <p className="valor-title">Eficiencia</p>
            <p className="valor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ipsum, imperdiet non rutrum ac,
              sollicitudin porttitor orci. Vestibulum arcu ipsum, vehicula eget vehicula ac,
            </p>
          </div>
        </div>
      </div>

      <div className="conoce-el-equipo">
        <div className="equipo">
          <p className="equipo-title">Conoce a nuestro equipo</p>
          <p className="equipo-text">
            Vestibulum in accumsan magna mac tincidunt turpisligula semper namc orci magec dia commodo viverra eget et
            leo curabitur dia consequat
          </p>
        </div>

        <div className="imagenes">
          <img src={EquipoUno} alt="equipo-img" width={'100%'} height={'372px'} />
          <img src={EquipoDos} alt="equipo-img" width={'100%'} height={'372px'} />
          <img src={EquipoTres} alt="equipo-img" width={'100%'} height={'372px'} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default QuienesSomos;