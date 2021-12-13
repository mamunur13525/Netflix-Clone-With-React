import React, { useState } from 'react';
import './FqQuestionAccordion.css';
import { Accordion } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/all';

const FqQuestionAccordion = ({ title, des, index }) => {
    const [open, setOpen] = useState({ status: false, ind: null })


    const clickItem = () => {
        setOpen({ status: !open.status, ind: index })
    }

    return (
        <Accordion.Item  eventKey={index}>
            <Accordion.Header onClick={clickItem}>
                {
                    <div className="flex">
                        <span>
                            {title}
                        </span>
                        <span>
                            <AiOutlinePlus className={!open.status ? 'showPlus' : 'hidePlus'} style={{ color: 'white' }} />
                        </span>
                    </div>
                }
            </Accordion.Header>
            <Accordion.Body>
                {des}
            </Accordion.Body>
        </Accordion.Item>

    );
};

export default FqQuestionAccordion;