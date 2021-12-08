import React, { useContext, useState } from 'react';
import './Navbar.css';
import netflixLogo from '../../images/Netflix-Logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchDropDown from '../SearchableDropdown/SearchDropDown';
import { FavoriteList } from '../../App';

const Navbar = ({ signBtn }) => {
    const [favorite] = useContext(FavoriteList)
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const [searchType, setSearchType] = useState('')

    const logoClick = () => {
        navigate('/')
    }
    const singIn = () => {
        navigate('/login')
    }
    return (
        <nav className='d-flex justify-content-between align-items-center  py-3'>
            <div className='logo-div'>
                <img onClick={logoClick} className='w-100' src={netflixLogo} alt="logo" />
                <div>
                    <ul>
                        <li className={pathname === '/movies' ? 'active' : ''}><Link to='/movies'>Movies</Link></li>
                        <li className={pathname === '/tvshows' ? 'active' : ''}><Link to='/tvshows'>Tv Shows</Link></li>
                        <li className={pathname === '/favorites' ? 'active favoriteNav' : ' favoriteNav'}><Link to='/favorites'>My Favorites
                            {
                                favorite.length !== 0 &&
                                <span className='red_badge favorite'>{favorite.length}</span>
                            }
                        </Link></li>
                    </ul>
                </div>
            </div>
            <div className='d-flex'>
                <SearchDropDown searchType={searchType} setSearchType={setSearchType} dropDown={false} />
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