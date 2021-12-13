import React, { useState, useEffect, useRef, useContext } from 'react';
import { IoSearch, IoMdClose } from 'react-icons/all';
import { useLocation, useNavigate } from 'react-router';
import { MovileList, SearchValue } from '../../App';
import './SearchDropDown.css';

const SearchDropDown = ({ searchType, setSearchType }) => {
    const [allMovie] = useContext(MovileList)
    const { pathname } = useLocation()
    const [searchInputChange, setSearchInputChange] = useContext(SearchValue)
    const ref = useRef();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])

    const onCHnageText = (e) => {
        setSearchInputChange(e.target.value)
        setSearchType(e.target.value)
    }

    const filterData = allMovie.filter(item => {
        if (!searchInputChange) {
            return allMovie
        } else {
            return item.title.toLowerCase().includes(searchInputChange.toLowerCase())
        }
    })

    return (
        <div ref={ref} className='search_with_dropdown'>
            <div className='search_box mr-2'>
                <input onFocus={() => setIsMenuOpen(true)} autoComplete='off' onChange={onCHnageText} placeholder='Search Movies' type="text" name="movie_search" id="movie_search" value={searchInputChange} />
                {
                    !searchType ?
                        <IoSearch /> :
                        <IoMdClose style={{ cursor: 'pointer' }} onClick={() => { setSearchType(''); setSearchInputChange('') }} />
                }
            </div>
            {
                pathname !== '/search-movie' &&
                <div className={`search_result ${isMenuOpen ? 'show' : "hide"} `}>
                    <ul>
                        {
                            filterData.slice(0, 3).map((item) => (
                                <li onClick={() => { setIsMenuOpen(false); navigate(`/movies/${item.id}`); setSearchType(''); setSearchInputChange('') }} className='movie_search_list' key={item.id}>
                                    <span>

                                        <img loading='lazy' className='list_movie_img' src={`http://image.tmdb.org/t/p/w1280/${item.poster_path}`} alt='Movie poster' />
                                    </span>
                                    <div>
                                        <p className='search_title'>
                                            {item.title}
                                        </p>
                                        <p className='search_year'>
                                            {item.release_date}
                                        </p>
                                        <p className='search_des'>
                                            {item.overview}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                        {
                            filterData.length === 0 && <p className='text-center text-white my-5 w-100'>No Movie Found..!</p>
                        }
                        <li onClick={() => {   setIsMenuOpen(false);navigate('/search-movie'); setSearchType('') }} className='more_results'>More results</li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default SearchDropDown;