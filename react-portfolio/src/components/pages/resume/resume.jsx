import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './resume.css';
import '../../../style.css';
import JosephResume from'../../../assets/JosephResume .pdf'

function Resume() {
    return (
        <Container fluid>
            <Row className="justify-content-center px-2 resume">
                <Col className='' lg={10}>
                <a href={JosephResume} download="Joseph resume"><h2>resume</h2></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Resume;