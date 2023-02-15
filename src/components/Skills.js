import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Container, Row } from 'react-bootstrap';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>These are my skills and I am always looking for new ways to improve them.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} alt="" />
                                    <h5>React JS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt="" />
        </section>
    );
}

export default Skills;
