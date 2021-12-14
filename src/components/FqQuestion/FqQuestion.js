import React from 'react';
import FqQuestionAccordion from '../FqQuestionAccordion/FqQuestionAccordion';
import './FqQuestion.css';
import { Accordion } from 'react-bootstrap';
import Subcripiton from '../Subcription/Subcripiton';

const question = [
    {
        title: 'What is Netflix',
        des: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There always something new to discover and new TV shows and movies are added every week!'
    }, {
        title: 'What is Netflix',
        des: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There always something new to discover and new TV shows and movies are added every week!'
    }, {
        title: 'What is Netflix',
        des: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There always something new to discover and new TV shows and movies are added every week!'
    }, {
        title: 'What is Netflix',
        des: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There always something new to discover and new TV shows and movies are added every week!'
    }, {
        title: 'What is Netflix',
        des: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There always something new to discover and new TV shows and movies are added every week!'
    },
]


const FqQuestion = () => {
    return (
        <section className='landing_section flex-column'>
            <div className='fq_div'>
                <h1 className='title text-center mb-5'>Frequently Asked Questions</h1>
                <Accordion className='fq_accourdion'>
                    {
                        question.map((item, ind) => (
                            <FqQuestionAccordion
                                key={ind}
                                title={item.title}
                                des={item.des}
                                index={ind}
                            />
                        ))
                    }
                </Accordion>
            </div>
            <div className='m-auto py-5 mb-2'>
                <Subcripiton />
            </div>
        </section>
    );
};

export default FqQuestion;