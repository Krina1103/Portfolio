import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import logo from '../assets/img/logo.svg';
import html from '../assets/img/html.png';
import react from '../assets/img/react.png';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const skills_arr = ['C++', 'Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'PostgreSQL', 'MongoDB', 'ReactJS', 'Redux', 'NodeJS', 'ReactNative', 'WordPress', 'Spring', 'scikit-learn', 'CodeIgniter', 'AWS', 'Docker', 'MicrosoftAzure', 'Git', 'AzureDevOps', 'Eclipse', 'JupyterNotebook', 'AndroidStudio', 'SPSS', 'JSON', 'REST', 'Bootstrap', 'Maven', 'JPA']
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                            Here are few skills that I aquire!
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className='item'>
                            <img src={html} alt="skill" />
                            <h5>HTML/CSS</h5>
                        </div>
                        <div className='item'>
                            <img src={react} alt="skill" />
                            <h5>React</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>Python</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>C++</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>Node.js</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>MYSQL</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>PostgreSQL</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>AWS</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>Version Control</h5>
                        </div>
                        <div className='item'>
                            <img src={logo} alt="skill" />
                            <h5>Data Science</h5>
                        </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        
      </section>
    )}