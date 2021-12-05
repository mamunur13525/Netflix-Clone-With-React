import React from 'react';
import './LoginSingup.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

const SingupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => console.log(data);
    const clickToSignIn = () => {
        navigate('/login')
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-white font-weight-bold mb-4'>Sign Up</h1>

                <input type="text" placeholder='Enter your Name' name='name' className='emailForm form-control mb-3 border-0 py-3' {...register("name", { required: true })} />
                {errors.name && <span className='text-warning warning_font '>This field is required</span>}

                <input type="text" placeholder='Email or Phone Number' name='email' className='emailForm form-control mb-3 border-0 py-3' {...register("email", { required: true })} />
                {errors.email && <span className='text-warning warning_font '>This field is required</span>}

                <input type="password" placeholder='Enter your password' name='password' className='emailForm form-control mb-3  border-0 py-3' {...register("password", { required: true })} />
                {errors.password && <span className='text-warning warning_font '>This field is required</span>}

                <input type="password" placeholder='Enter your password' name='confirmpassword' className='emailForm form-control mb-3  border-0 py-3' {...register("confirmpassword", { required: true })} />
                {errors.confirmpassword && <span className='text-warning warning_font '>This field is required</span>}

                <button type='submit' className='red_button font-weight-bold w-100 mt-4 py-2'>Sign In</button>
            </form>
            <div className='d-flex justify-content-between mt-2'>
                <div>
                    <input type="checkbox" name="remembar" id="remembar" className='mr-2 remembarFont' />
                    <label className='hovertoCursor remembarFont ml-2' htmlFor="remembar">Remembar</label>
                </div>
                <div>
                    <span className='hovertoCursor remembarFont'>
                        Need help?
                    </span>
                </div>
            </div>
            <div className='form_text mt-4'>
                <img className='hovertoCursor' style={{ width: '20px', height: '20px', marginRight: '0.5rem' }} src='https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png' alt='facebook' />
                <span className='ml-2'>Login with Facebook</span>
            </div>
            <p className='form_text font-16 mt-2'>
                Old to Netflix? <span onClick={clickToSignIn} className='text-light hovertoCursor'>Sign In now.</span>
            </p>
        </>
    );

};

export default SingupForm;