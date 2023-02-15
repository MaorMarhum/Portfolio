import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import donate from "../assets/img/donate.jpg";
import greg from "../assets/img/greg.jpg";
import usa from "../assets/img/usa.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
    const projects = [
        {
            title: "Greg Menu",
            description: "Design & Development",
            imgUrl: greg,
            url: 'https://gregmenu.netlify.app'
        },
        {
            title: "Donate",
            description: "Design & Development",
            imgUrl: donate,
            url: 'https://maordonate.netlify.app'
        },
        {
            title: "USA Quiz",
            description: "Design & Development",
            imgUrl: usa,
            url: 'https://usastatesquiz.netlify.app'
        }
    ]

    return (
        <div>
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" alt='' src={colorSharp2}></img>
            </section>
        </div>
    );
}

export default Projects;
