import React from 'react';
import './footer.css';
import '../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <a href='https://github.com/jotex11' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='my-icons' /></a>
                        <a href='https://www.linkedin.com/in/joseph-teixeira-234a90288' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className='my-icons' /></a>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h4> Made by Joseph Teixeira</h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;