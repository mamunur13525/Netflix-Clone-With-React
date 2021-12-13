import React, { useState } from 'react';
import './LoginSingup.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import ReactLoading from 'react-loading';
import { GoogleAuthProvider } from "firebase/auth";
import { useAuth } from '../../contexts/AuthContext';
import { FcGoogle } from 'react-icons/all';

const LoginForm = () => {
    const provider = new GoogleAuthProvider();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [learnMore, setLearnMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState({ status: false, message: '' })
    const auth = getAuth();
    const { setCurrentUsers } = useAuth();
    const onSubmit = data => {
        setLoading(true)
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                setLoading(true)
                navigate('/movies')
            })
            .catch((error) => {
                setLoading(false)
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
                    setErr({ status: true, message: 'Password not mathed.!' })
                } else if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
                    setErr({ status: true, message: 'Email not found..!' })
                }
                console.log({ error })
            });
    };

    const clickToSingUp = () => {
        navigate('/signup')
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setLoading(false)
                const user = result.user;
                setCurrentUsers({ name: user.displayName, email: user.email })
                navigate('/movies')
            }).catch((error) => {
                setLoading(false)
                const errorMessage = error.message;
                setErr({ status: true, message: errorMessage })
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-white font-weight-bold mb-4'>Sign In</h1>
                <input autoFocus type="text" placeholder='Email or Phone Number' name='email' className='emailForm form-control mb-3 border-0 py-3' {...register("email", { required: true })} />
                {errors.email && <span className='text-warning warning_font '>This field is required</span>}
                <input type="password" placeholder='Enter your password' name='password' className='emailForm form-control mb-3  border-0 py-3' {...register("password", { required: true })} />
                {errors.password && <span className='text-warning warning_font '>This field is required</span>}

                {
                    err.status && <p className='text-danger'>{err.message}</p>
                }
                <button disabled={loading} type='submit' className='red_button font-weight-bold w-100 mt-4 py-2'>
                    {
                        loading ?
                            <ReactLoading type='bubbles' color={'#ffffff'} width={50} height={43} />
                            :
                            'Sign In'
                    }
                </button>
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
            <div style={{ cursor: 'pointer', }} onClick={googleLogin} className='form_text mt-4 '>
                <FcGoogle style={{ marginRight: '.3rem', fontSize: '1.8rem' }} className='mr-4' />
                <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>Login with Google</span>
            </div>
            <p className='form_text font-16 mt-2'>
                New to Netflix? <span onClick={clickToSingUp} className='text-light hovertoCursor'>Sign up now.</span>
            </p>
            <p className='form_text small_text'>
                This page is protected by Google reCAPTCHA to ensure your'e not a bot.
                {
                    !learnMore &&
                    <span onClick={() => setLearnMore(true)} className='hovertoCursor text-primary'>Learn more.</span>
                }
            </p>
            {
                learnMore &&
                <p className='form_text small_text'>
                    The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                </p>
            }
        </>
    );
};

export default LoginForm;