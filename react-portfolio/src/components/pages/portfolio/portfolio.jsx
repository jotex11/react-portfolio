import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from '../../project/Project';
import { projectInfo } from '../../../assets/data/data';
import './portfolio.css';
import '../../../style.css';


function Portfolio() {
    return (
        <Row className="row justify-content-center p-5">
            {projectInfo.map((project, index) => (
                <Col className='project' md={4} key={index}>
                    <Project project={project} />
                </Col>
            ))}
        </Row>
    )
}

export default Portfolio;