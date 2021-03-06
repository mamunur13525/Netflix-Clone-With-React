import React from 'react';
import MovieFrontSlider from '../../components/MovieFrontSlider/MovieFrontSlider';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
    return (
        <section className='landing_main_section'>
            <MovieFrontSlider />
            <br />
            <MovieList />
        </section>
    );
};

export default Movies;