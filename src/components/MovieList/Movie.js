import React, { useContext, useState } from 'react';
import { AiOutlinePlus, FiCheck } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { FavoriteList } from '../../App';
import './MovieList.css';

const Movie = ({ movie }) => {
    const navigate = useNavigate();
    const [favorite, setFavorite] = useContext(FavoriteList)
    const findMovie = favorite.find(item => item.id === movie.id) !== undefined;
    const [favoriteAdd, setFavoriteAdd] = useState(findMovie)
    const poster = movie.poster_path === null ? movie.backdrop_path : movie.poster_path
    const favoriteCLick = () => {
        setFavoriteAdd(prev => !prev)
        const findMovie = favorite.find(item => item.id === movie.id) !== undefined;
        if (findMovie) {
            setFavorite(favorite.filter(item => item.id !== movie.id))
        } else {
            setFavorite([...favorite, movie])

        }
    }

    const movieClick = () => {
        navigate(`/movies/${movie.id}`)
    }
    return (
        <div className='movie_list_div'>
            <img loading='lazy' onClick={movieClick} key={movie.id} className='list_movie_img' src={`http://image.tmdb.org/t/p/w1280${poster === null ? '/2Gi7Lu1pv8BeYiiGIsI3ILlLqHL.jpg' : poster}`} alt='Movie poster' />
            <div className='movie_title_des'>
                <h5 onClick={movieClick} >{movie.title}</h5>
                <p onClick={movieClick} >{movie.overview && movie.overview.slice(0, 70)} <span onClick={movieClick} className='font-weight-bold'>Read More..</span></p>

                <button onClick={favoriteCLick} className='favorite_btn movie_list'>
                    <span>
                        {
                            favoriteAdd ?
                                <>
                                    <FiCheck className='icon' />  Already Added
                                </>
                                :
                                <>
                                    <AiOutlinePlus className='icon' />  Add Favorite
                                </>
                        }
                    </span>
                </button>

            </div>
        </div>
    );
};

export default Movie;