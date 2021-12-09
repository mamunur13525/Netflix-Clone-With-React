import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import LoginSingup from '../../components/LoginSingup/LoginSingup';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';

const Login = ({ isLoginTrue }) => {

    const { state } = useLocation();


    return (
        <section className='background_image h-100vh'>
            <div className="landing_main_overlay">
                <div className='login_box'>
                    <LoginSingup isLoginTrue={isLoginTrue} state={state} />
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Login;