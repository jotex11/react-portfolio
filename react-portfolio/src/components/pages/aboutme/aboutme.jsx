import React from 'react';
import { Card, Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import './aboutme.css';
import '../../../style.css';
import mypic from '../../../assets/images/mypic.jpeg';


function aboutMe() {
    return (
        <Container fluid>
            <Row className="justify-content-center overflow-x-hidden my-3">
                <Col className="image-container order-2 order-md-1 d-flex justify-content-center my-2" lg={2} md={4} sm={12}>
                    <img src={mypic} alt="Profile" className="profile-pic drop-image" />
                </Col>
                <Col className='order-1 order-md-2' lg={7} md={7} sm={12}>
                    <Tabs defaultActiveKey="ab-me" id="">

                        <Tab eventKey="ab-me" title="ab me">
                            <p className='ab-me-text'>I am a 19-year-old web developer who recently graduated from a web development bootcamp. Passionate about crafting beautiful and functional web experiences, 
                            I am currently seeking opportunities in front-end development. </p>
                        </Tab>

                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default aboutMe;