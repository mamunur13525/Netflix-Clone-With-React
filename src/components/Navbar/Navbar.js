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
    const singIn = () => {
        navigate('/login')
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUsers({ name: user.displayName, email: user.email })
            }
        });
    }, [])

    const logoutClick = () => {
        signOut(auth).then((data) => {
            // Sign-out successful.
            console.log(data)
            setCurrentUsers({})
        }).catch((error) => {
            console.log(error)
            // An error happened.
        });
    }

    return (
        <nav style={{ background: '#1f1f1f' }} className='d-flex justify-content-between align-items-center  py-3'>
            <div className='logo-div'>
                <img onClick={logoClick} className='w-100 cursor-pointer' src={netflixLogo} alt="logo" />
                <div>
                    <ul>
                        <li className={pathname === '/movies' ? 'active' : ''}><Link to='/movies'>Movies</Link></li>
                        <li className={pathname === '/favorites' ? 'active favoriteNav' : ' favoriteNav'}><Link to='/favorites'>My Favorites
                            {
                                favorite.length !== 0 &&
                                <span className='red_badge favorite'>{favorite.length}</span>
                            }
                        </Link></li>
                    </ul>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <SearchDropDown searchType={searchType} setSearchType={setSearchType} />
                {
                    (pathname === '/' && !currentUsers?.name) &&
                    <div>
                        <button onClick={singIn} className='red_button h-100 sign_up_button'>
                            Sign In
                        </button>
                    </div>
                }
                {
                    currentUsers.name &&
                    <div className="dropdown ml-3">
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
                }
            </div>
        </nav>
    );
};

export default Navbar;