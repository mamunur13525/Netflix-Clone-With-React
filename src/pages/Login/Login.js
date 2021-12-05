import React, { useState } from 'react';
import { useLocation, useNavigate, navigate } from 'react-router';
import Footer from '../../components/Footer/Footer';
import LoginSingup from '../../components/LoginSingup/LoginSingup';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';

const Login = () => {
    const [login, setlogin] = useState(true)
    const navigate = useNavigate();
    const { state } = useLocation();


    return (
        <section className='background_image h-100vh'>
            <div className="landing_main_overlay">
                <Navbar signBtn={false}/>
                <div className='login_box'>
                    <LoginSingup />
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Login;