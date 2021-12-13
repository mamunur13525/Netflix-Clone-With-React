import React, { useState } from 'react';
import './LoginSingup.css';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from '../../contexts/AuthContext';
import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import ReactLoading from 'react-loading';
import { FcGoogle } from 'react-icons/all';


const SingupForm = () => {
    const provider = new GoogleAuthProvider();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    const auth = getAuth();
    const { signUp, setCurrentUsers } = useAuth();
    const [error, setError] = useState({ status: false, message: '' })

    const onSubmit = data => {
        setLoading(true)
        const auth = getAuth()
        if (data.password !== data.confirmpassword) {
            return setError({ status: true, message: 'Password Not Matched!' })
        }
        signUp(data.email, data.password)
            .then((user) => {
                setLoading(false)
                updateProfile(auth.currentUser, {
                    displayName: data.name
                }).then(() => {
                    setLoading(false)
                    console.log({ user })
                    if (user) {
                        setCurrentUsers({ name: user?.user.displayName, email: user?.user.email })
                    }

                }).catch(() => {
                });
                navigate('/movies')
            })
            .catch((error) => {
                setLoading(false)
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    setError({ status: true, message: 'Email Already in use' })
                } else if (errorMessage === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setError({ status: true, message: 'Password atleast 6 letter!' })
                } else {
                    setError({ status: true, message: errorMessage })
                }
            })
    }
    const clickToSignIn = () => {
        navigate('/login')
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
                setError({ status: true, message: errorMessage })
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-white font-weight-bold mb-4'>Sign Up</h1>

                <input autoFocus type="text" placeholder='Enter your Name' name='name' className='emailForm form-control mb-3 border-0 py-3' {...register("name", { required: true })} />
                {errors.name && <span className='text-warning warning_font '>This field is required</span>}

                <input defaultValue={location.state} type="text" placeholder='Email or Phone Number' name='email' className='emailForm form-control mb-3 border-0 py-3' {...register("email", { required: true })} />
                {errors.email && <span className='text-warning warning_font '>This field is required</span>}

                <input type="password" placeholder='Enter your password' name='password' className='emailForm form-control mb-3  border-0 py-3' {...register("password", { required: true })} />
                {errors.password && <span className='text-warning warning_font '>This field is required</span>}

                <input type="password" placeholder='Enter your password' name='confirmpassword' className='emailForm form-control mb-3  border-0 py-3' {...register("confirmpassword", { required: true })} />
                {errors.confirmpassword && <span className='text-warning warning_font '>This field is required</span>}
                <p className='text-danger'>

                    {
                        error.status && error.message
                    }
                </p>
                <button disabled={loading} type='submit' className='red_button font-weight-bold w-100 mt-4 py-2'>
                    {
                        loading ?
                            <ReactLoading type='bubbles' color={'#ffffff'} width={50} height={40} />
                            :
                            'Sign Up'
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
                Old to Netflix? <span onClick={clickToSignIn} className='text-light hovertoCursor'>Sign In now.</span>
            </p>
        </>
    );

};

export default SingupForm;