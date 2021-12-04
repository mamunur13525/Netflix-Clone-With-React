import React from 'react';
import './FqQuestionAccordion.css';
import { Accordion } from 'react-bootstrap';

const FqQuestionAccordion = ({ title, des, index }) => {

    return (
                <Accordion.Item eventKey={index}>
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        {des}
                    </Accordion.Body>
                </Accordion.Item>
            
    );
};

export default FqQuestionAccordion;