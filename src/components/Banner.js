import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
    const scrollToElement = () => {
        const element = document.getElementById('connect');
        element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Maor,`} <span className='wrap'>a Front-End Developer</span></h1>
                        <p>As a Front-End Developer, I am driven to create visually stunning and user-friendly websites and web applications. With a strong foundation in HTML, CSS, JavaScript and React, I am skilled in creating responsive designs that optimize the user experience across all devices. I'm invinting you to take a look in my projects below.</p>
                        <button onClick={scrollToElement}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
