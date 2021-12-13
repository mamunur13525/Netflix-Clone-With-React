import React from 'react';
import { useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import LoginSingup from '../../components/LoginSingup/LoginSingup';
import './Login.css';

const Login = ({ isLoginTrue }) => {
    const location = useLocation();

    return (
        <section className='background_image h-100vh'>
            <div className="landing_main_overlay">
                <div className='login_box'>
                    <LoginSingup isLoginTrue={isLoginTrue} state={location.state} />
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Login;