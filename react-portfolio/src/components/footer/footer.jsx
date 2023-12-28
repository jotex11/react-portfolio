import React from 'react';
import './footer.css';
import '../../style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons

function Footer() {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <a href='https://github.com/jotex11' target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} /> {/* GitHub icon */}
                        </a>
                        <a href='https://www.linkedin.com/in/joseph-teixeira-234a90288/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} /> {/* LinkedIn icon */}
                        </a>
                    </Col>    
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h4>Made by Joseph Teixeira</h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
