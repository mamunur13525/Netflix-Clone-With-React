import React, { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import SingupForm from './SingupForm';
import './LoginSingup.css';

const LoginSingup = ({ state,isLoginTrue }) => {
    const [logInBox, setLogInBox] = useState(isLoginTrue);
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