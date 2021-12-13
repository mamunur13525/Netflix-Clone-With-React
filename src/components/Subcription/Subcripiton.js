import React from 'react';
import './Subcription.css';
import { IoIosArrowForward } from 'react-icons/all';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Subcripiton = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate("/signup", { state: data.email })
    }
    return (
        <form className='form_subcription' onSubmit={handleSubmit(onSubmit)}>
            <p className='mt-4 nested_sub_title text-center'>
                Ready to watch? Enter your email to create or restart your membership
            </p>
            <div className='d-flex subcription_input_button'>
                <input  {...register("email", { required: true })} className='subcription_input' placeholder='Email Address' type="email" name="email" id="email" required />
                <button className='red_button subcription_btn' type="submit">
                    <span style={{ marginTop: "0.2rem" }}> Get Started </span><IoIosArrowForward />
                </button>
            </div>
        </form>
    );
};

export default Subcripiton;