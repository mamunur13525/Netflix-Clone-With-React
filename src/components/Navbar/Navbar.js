import React, { useEffect, useContext, useState } from 'react';
import './Navbar.css';
import netflixLogo from '../../images/Netflix-Logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchDropDown from '../SearchableDropdown/SearchDropDown';
import { FavoriteList } from '../../App';
import { useAuth } from '../../contexts/AuthContext';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
    const [favorite] = useContext(FavoriteList)
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const [searchType, setSearchType] = useState('')
    const { currentUsers } = useAuth();
    const { setCurrentUsers } = useAuth();
    const auth = getAuth();
    const logoClick = () => {
        navigate('/')
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUsers({ name: user.displayName, email: user.email })
            }
        });
        // eslint-disable-next-line
    }, [])

    const logoutClick = () => {
        signOut(auth).then((data) => {
            setCurrentUsers({})
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <nav style={{ background: '#1f1f1f' }} className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className='logo-div'>
                <img onClick={logoClick} className='w-100 cursor-pointer' src={netflixLogo} alt="logo" />
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">

                <ul className='ul_movie_favorite'>
                    <li className={pathname === '/movies' ? 'active' : ''}><Link to='/movies'>Movies</Link></li>
                    <li className={pathname === '/favorites' ? 'active favoriteNav' : ' favoriteNav'}><Link to='/favorites'>My Favorites
                        {
                            favorite.length !== 0 &&
                            <span className='red_badge favorite'>{favorite.length}</span>
                        }
                    </Link></li>
                    <li className='searchbar'>

                        <SearchDropDown searchType={searchType} setSearchType={setSearchType} />
                    </li>
                    <li className='profile'>

                        <div className="dropdown ml-3 profile_icon">
                            <div id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className='text-danger d-flex align-items-center justify-content-start mb-0'>
                                <span className='user_name '>
                                    {currentUsers.name}
                                </span>
                                <div className='name_logo'>
                                    {currentUsers && currentUsers.name?.slice(0, 2)}
                                </div>

                            </div>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <span onClick={logoutClick} className="dropdown-item" href="#">Log out</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;