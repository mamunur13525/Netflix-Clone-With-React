import React, { useState, useEffect, useRef, useContext } from 'react';
import { IoSearch, IoMdClose } from 'react-icons/all';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { MovileList, SearchValue } from '../../App';
import './SearchDropDown.css';





const SearchDropDown = ({ searchType, setSearchType }) => {
    const [allMovie] = useContext(MovileList)
    const [search, setSearch] = useState('All')
    const ref = useRef();
    const { pathname } = useLocation()
    const [searchInputChange, setSearchInputChange] = useContext(SearchValue)
    const [searchData, setSearchData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setSearchType('')
                setSearchInputChange('')
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [ref]);

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


    console.log(searchData)
    return (
        <div ref={ref} className='search_with_dropdown'>
            <div className='search_box mr-2'>
                <input autoComplete='off' onChange={onCHnageText} placeholder='Search Movie/Tv Shows' type="text" name="movie_search" id="movie_search" value={searchInputChange} />
                {
                    !searchType ?
                        <IoSearch /> :
                        <IoMdClose style={{ cursor: 'pointer' }} onClick={() => { setSearchType(''); setSearchInputChange('') }} />
                }
            </div>
            {
                pathname !== '/search-movie' &&
                <div className={`search_result ${searchType ? 'show' : "hide"} `}>
                    <ul>

                        <li className='search_type'>
                            <span onClick={() => setSearch('All')} className={search === 'All' ? 'active' : ''} >All</span>
                            <span onClick={() => setSearch('Movies')} className={search === 'Movies' ? 'active' : ''}>Movies</span>
                            <span onClick={() => setSearch('Tv/Shows')} className={search === 'Tv/Shows' ? 'active' : ''}>Tv/Shows</span>
                        </li>
                        {
                            filterData.slice(0, 3).map((item) => (
                                <li onClick={() => { navigate(`/movies/${item.id}`); setSearchType(''); setSearchInputChange('') }} className='movie_search_list' key={item.id}>
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
                        <li onClick={() => { navigate('/search-movie'); setSearchType('') }} className='more_results'>More results</li>
                    </ul>
                </div>
            }
        </div>
    );
};

export default SearchDropDown;