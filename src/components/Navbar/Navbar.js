import React from 'react';
import './Navbar.css';
import netflixLogo from '../../images/Netflix-Logo.png';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ signBtn }) => {
    const navigate = useNavigate();
    const singIn = () => {
        navigate('/login')
    }
    return (
        <nav className='d-flex justify-content-between align-items-center px-4 py-3'>
            <div className='logo-div'>
                <img className='w-100' src={netflixLogo} alt="logo" />
            </div>
            <div>
                {
                    signBtn &&
                    <button onClick={singIn} className='red_button'>
                        Sign In
                    </button>
                }
            </div>
        </nav>
    );
};

export default Navbar;