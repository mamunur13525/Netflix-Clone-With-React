import React, { useContext, useEffect, useState } from 'react';
import './MovieList.css';
import Movie from './Movie';
import { MovileList } from '../../App';

const CategoryBtn = [
    {
        name: 'All',
        id: 1
    }, {
        name: 'Popular',
        id: 2
    }, {
        name: 'Top Rated',
        id: 3
    }, {
        name: 'Highest Grossing',
        id: 4
    }, {
        name: 'New Releases',
        id: 5
    }, {
        name: 'Most Liked',
        id: 6
    }, {
        name: 'Trending Now',
        id: 7
    },
]

const MovieList = () => {
    const [allMovie, setAllMovie] = useContext(MovileList)
    const [categorySearch, setCategorySearch] = useState('All')
    return (
        <section>
            <h4 className='category_search'>Search by Category</h4>
            <ul className='movie_list_filter'>
                {
                    CategoryBtn.map(item => (
                        <li key={item.id} className={categorySearch === item.name ? 'activeCategory' : ''} onClick={() => setCategorySearch(item.name)}>{item.name}</li>
                    ))
                }
            </ul>
            <div className='d-flex div_movie_list'>
                {
                    allMovie.map(movie => (
                        <Movie favoriteBtn={true} key={movie.id} movie={movie} />
                    ))
                }

            </div>
        </section>
    );
};

export default MovieList;