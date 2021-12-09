import React, { createContext, useContext, useEffect, useState } from 'react';
import { MovileList, SearchValue } from '../../App';
import Movie from '../../components/MovieList/Movie';
import Navbar from '../../components/Navbar/Navbar';
import './MovieSearch.css';
import { useNavigate } from 'react-router-dom';


const MovieSearch = () => {

    const [allMovie] = useContext(MovileList);
    const [searchInputChange] = useContext(SearchValue)
    const filterData = allMovie.filter(item => {
        if (!searchInputChange) {
            return allMovie
        } else {
            return item.title.toLowerCase().includes(searchInputChange.toLowerCase())
        }
    })
    return (
        <section className='landing_main_section'>
            <h2 className='font-weight-bold pt-3 text-white d-block mb-5 pl-3'>Search Results: {!searchInputChange? 'All': searchInputChange}</h2>
            <div className='d-flex div_movie_list favorite'>
                {
                    filterData.map(movie => (
                        <Movie favoriteBtn={false} key={movie.id} movie={movie} />
                    ))
                }
                {
                    filterData.length === 0 && <h3 className='text-white text-center my-5'>No Movie Found..!</h3>
                }

            </div>
        </section>
    );
};

export default MovieSearch;