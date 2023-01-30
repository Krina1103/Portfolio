import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-End Developer", "Full-Stack Developer", "Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio!
                        </span>
                        <h1>
                            {`Hi I'm Krina `}
                        <span className="wrap">Software Developer</span>
                        </h1>
                        <p>
                        I completed my masters in Computer Science from California State University - East Bay in December 2022 with 3.9 GPA. I am actively looking for a Software Engineer Position. 
                        Prior to Masters, I've worked as a Front-End Developer for 1+ year. In the USA, I have 6 month of Internship experience as a Software Developer Intern.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}