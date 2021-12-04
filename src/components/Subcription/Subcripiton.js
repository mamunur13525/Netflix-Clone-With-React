import React from 'react';
import './Subcription.css';
import { IoIosArrowForward } from 'react-icons/all';

const Subcripiton = () => {
    return (
        <>
            <p className='mt-4 nested_sub_title text-center'>
                Ready to watch? Enter your email to create or restart your membership
            </p>
            <div className='d-flex subcription_input_button'>
                <input className='subcription_input' placeholder='Email Address' type="text" name="email" id="email" />
                <button className='red_button subcription_btn' type="submit">
                    <span style={{marginTop: "0.2rem"}}> Get Started </span><IoIosArrowForward />
            </button>
        </div>
        </>
    );
};

export default Subcripiton;