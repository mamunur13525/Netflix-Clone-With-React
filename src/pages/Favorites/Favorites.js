import React, { useContext } from 'react';
import { FavoriteList } from '../../App';
import Movie from '../../components/MovieList/Movie';
import Navbar from '../../components/Navbar/Navbar';
import './Favorites.css';

const Favorites = () => {
    const [favorite]  = useContext(FavoriteList)

    return (
        <section className='landing_main_section'> 
            <Navbar signBtn={true} />
            <div className='d-flex div_movie_list favorite'>
                {
                    favorite.map(movie => (
                        <Movie favoriteBtn={false} key={movie.id} movie={movie} />
                    ))
                }

            </div>
        </section>
    );
};

export default Favorites;