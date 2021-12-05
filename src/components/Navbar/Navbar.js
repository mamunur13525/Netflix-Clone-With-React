import React from 'react';
import './Navbar.css';
import netflixLogo from '../../images/Netflix-Logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchDropDown from '../SearchableDropdown/SearchDropDown';

const Navbar = ({ signBtn }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const logoClick = () => {
        navigate('/')
    }
    const singIn = () => {
        navigate('/login')
    }
    return (
        <nav className='d-flex justify-content-between align-items-center px-4 py-3'>
            <div className='logo-div'>
                <img onClick={logoClick} className='w-100' src={netflixLogo} alt="logo" />
                <div>
                    <ul>
                        <li className={pathname === '/movies' ? 'active' : ''}><Link to='/movies'>Movies</Link></li>
                        <li className={pathname === '/tvshows' ? 'active' : ''}><Link to='/tvshows'>Tv Shows</Link></li>
                        <li className={pathname === '/favorites' ? 'active favoriteNav' : ' favoriteNav'}><Link to='/favorites'>My Favorites <span className='red_badge favorite'>3</span></Link></li>
                    </ul>
                </div>
            </div>
            <div className='d-flex'>
                <SearchDropDown />
                {
                    signBtn &&
                    <div>
                        <button onClick={singIn} className='red_button h-100 sign_up_button'>
                            Sign In
                        </button>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;