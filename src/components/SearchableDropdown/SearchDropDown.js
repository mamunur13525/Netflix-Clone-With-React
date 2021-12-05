import React, { useState, useEffect, useRef } from 'react';
import { IoSearch, IoMdClose } from 'react-icons/all';
import './SearchDropDown.css';


const searchData = [
    {
        name: 'Stranget things,',
        year: 'serie (2019)',
        img: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/144420796/original/a6f8ea9c2b6381d61eadaf017a714a1392777a55/photoshop-your-face-into-your-favourite-movie-poster.jpeg',
        des: 'lorem ipsomm dolor sit amet, consectetuer adipicsing elit, sed diam nonummy nivb eimod tincidunt ut laoireet dolere amanga aliqam..'
    }, {
        name: 'game,',
        year: 'serie (2019)',
        img: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/144420796/original/a6f8ea9c2b6381d61eadaf017a714a1392777a55/photoshop-your-face-into-your-favourite-movie-poster.jpeg',
        des: 'lorem ipsomm dolor sit amet, consectetuer adipicsing elit, sed diam nonummy nivb eimod tincidunt ut laoireet dolere amanga aliqam..'
    }
]


const SearchDropDown = () => {
    const [searchType, setSearchType] = useState('');
    const [search, setSearch] = useState('All')
    const ref = useRef();
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setSearchType('')
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    
    return (
        <div ref={ref} className='search_with_dropdown'>
            <div className='search_box mr-2'>
                <input onChange={(e) => setSearchType(e.target.value)} placeholder='Search Movie/Tv Shows' type="search" name="movie_search" id="movie_search" value={searchType} />
                {
                    !searchType ?
                        <IoSearch /> :
                        <IoMdClose style={{ cursor: 'pointer' }} onClick={() => setSearchType('')} />
                }
            </div>
            <div className={`search_result ${searchType ? 'show' : "hide"} `}>
                <ul>
                    <li className='search_type'>
                        <span onClick={() => setSearch('All')} className={search === 'All' ? 'active' : ''} >All</span>
                        <span onClick={() => setSearch('Movies')} className={search === 'Movies' ? 'active' : ''}>Movies</span>
                        <span onClick={() => setSearch('Tv/Shows')} className={search === 'Tv/Shows' ? 'active' : ''}>Tv/Shows</span>
                    </li>
                    {
                        searchData.map((item, index) => (
                            <li className='movie_search_list' key={index}>
                                <span>
                                    <img src={item.img} alt="" />
                                </span>
                                <div>
                                    <p className='search_title'>
                                        {item.name}
                                    </p>
                                    <p className='search_year'>
                                        {item.year}
                                    </p>
                                    <p className='search_des'>
                                        {item.des}
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                    <li className='more_results'>More results</li>
                </ul>
            </div>
        </div>
    );
};

export default SearchDropDown;