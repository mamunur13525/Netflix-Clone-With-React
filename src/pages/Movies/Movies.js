import React from 'react';

import MovieFrontSlider from '../../components/MovieFrontSlider/MovieFrontSlider';
import MovieList from '../../components/MovieList/MovieList';
import Navbar from '../../components/Navbar/Navbar';
import './Movies.css';

const Movies = () => {
    return (
        <section className='landing_main_section'> 
            <Navbar signBtn={true} />
            <MovieFrontSlider />
            <br/>
            <MovieList/>
        </section>
    );
};

export default Movies;