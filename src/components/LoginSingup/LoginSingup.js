import React, { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import SingupForm from './SingupForm';
import './LoginSingup.css';
import { useLocation } from 'react-router-dom';

const LoginSingup = ({ state,isLoginTrue }) => {
    const [logInBox, setLogInBox] = useState(isLoginTrue);
    const location  = useLocation();
    console.log("🚀 ~ file: LoginSingup.js ~ line 10 ~ LoginSingup ~ location", location)
    useEffect(()=>{
        setLogInBox(isLoginTrue)
    },[isLoginTrue])
    return (

        <div>
            {
                logInBox ?
                    <LoginForm  state={state} />
                    :
                    <SingupForm  state={state} />
            }
        </div>
    );
};

export default LoginSingup;