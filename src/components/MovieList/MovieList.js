import React, { useContext, useEffect, useState } from 'react';
import './MovieList.css';
import Movie from './Movie';
import { MovileList } from '../../App';
import SearchDropDown from '../SearchableDropdown/SearchDropDown';

const CategoryBtn = [
    {
        name: 'All',
        id: 1,

    }, {
        name: 'Popular',
        id: 2,
        fetchLink: 'https://api.themoviedb.org/3/movie/popular?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=1'
    }, {
        name: 'Top Rated',
        id: 3,
        fetchLink: 'https://api.themoviedb.org/3/movie/top_rated?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=1'
    }, {
        name: 'Upcoming',
        id: 4,
        fetchLink: 'https://api.themoviedb.org/3/movie/upcoming?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=1'
    }
]

const MovieList = () => {
    const [allMovie] = useContext(MovileList);
    const [categorySearch, setCategorySearch] = useState('All');
    const [loadData, setLoadData] = useState([])
    const [searchType, setSearchType] = useState('')
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        if (allMovie.length) {
            setLoadData(allMovie.reverse())
        }
    }, [allMovie])
    const categoryBtnClick = (item) => {
        setCategorySearch(item.name)
        if (item.name === 'All') {
            setLoadData(allMovie)
        } else {

            fetch(item.fetchLink)
                .then(res => res.json())
                .then(data => setLoadData(data.results))
                .catch(err => console.log(err))
        }
    }
    useEffect(() => {
        const filterDatas = loadData.filter((item) => {
            if (!searchType) {
                return loadData
            } else {
                return item.title.toLowerCase().includes(searchType.toLowerCase());
            }
        });

        setFilterData(filterDatas)
    }, [searchType, loadData])

    return (
        <section>
            <h4 className='category_search'>Search by: <span style={{ textDecoration: 'underline' }}>
                {categorySearch}
            </span></h4>
            <div className='d-flex justify-content-between align-items-center px-5'>

                <ul className='movie_list_filter'>
                    {
                        CategoryBtn.map(item => (
                            <li onClick={() => categoryBtnClick(item)} key={item.id} className={categorySearch === item.name ? 'activeCategory' : ''} >{item.name}</li>
                        ))
                    }
                </ul>
                <SearchDropDown searchType={searchType} setSearchType={setSearchType} dropDown={false} />
            </div>
            <div className='d-flex div_movie_list'>
                {
                    filterData.map(movie => (
                        <Movie favoriteBtn={true} key={movie.id} movie={movie} />
                    ))
                }
                {
                    filterData.length === 0 && <h3 className='text-white text-center my-5'>No Movie Found..!</h3>
                }

            </div>
        </section>
    );
};

export default MovieList;