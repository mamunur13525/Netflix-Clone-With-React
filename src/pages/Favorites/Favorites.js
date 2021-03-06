import React, { useContext } from 'react';
import { FavoriteList } from '../../App';
import Movie from '../../components/MovieList/Movie';
import './Favorites.css';

const Favorites = () => {
    const [favorite] = useContext(FavoriteList)

    return (
        <section className='landing_main_section'>
            <div className='d-flex div_movie_list favorite'>
                {
                    favorite.map(movie => (
                        <Movie favoriteBtn={false} key={movie.id} movie={movie} />
                    ))
                }
                {
                    favorite.length === 0 &&
                    <h3 className='text-white text-center mt-5 w-100'>No Favorite Here...!</h3>
                }
            </div>
        </section>
    );
};

export default Favorites;