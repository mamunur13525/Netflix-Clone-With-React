import React, { useContext, useEffect, useState } from 'react';
import './MovieFrontSlider.css';
import Slider from "react-slick";
import { AiOutlinePlus, FiCheck, BsInfoCircle } from 'react-icons/all';
import { FavoriteList } from '../../App';
import { useNavigate } from 'react-router';

const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: true,
    fade: true
};

const MovieFrontSlider = () => {
    const [popularMovie, setPopularMovie] = useState([])
    const [favorite, setFavorite] = useContext(FavoriteList)
    const [favoriteAdd, setFavoriteAdd] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=1')
            .then(res => res.json())
            .then(data => {
                if (!data.hasOwnProperty('success'))
                    setPopularMovie(data.results)
            })
            .catch(err => console.log({ err }))
    }, [])


    const favoriteCLick = (movie) => {
        setFavoriteAdd(prev => !prev)
        const findMovie = favorite.find(item => item.id === movie.id) !== undefined;
        if (findMovie) {
            setFavorite(favorite.filter(item => item.id !== movie.id))
        } else {
            setFavorite([...favorite, movie])
        }
    }

    const clickMoreInfo = (movie) => {
        navigate(`/movies/${movie.id}`)
    }
    return (
        <div className='slider_movie_'>
            <Slider {...settings}>
                {
                    popularMovie.map(movie => (
                        <div key={movie.id} className='block'>
                            <div className='title_box'>
                                <div className='movie_title_content_box'>

                                    <h1 className='movie_title d-flex justify-content-between'>
                                        <span>{movie.title}</span>
                                    </h1>
                                    <div className="item-rating">
                                        <img src="https://netflix-clone-by-shivam.netlify.app/static/media/imdb.f7f2904f.png" alt="imdb" className="item-rating__imdb" />
                                        <span className="item-rating__rank">{movie.vote_average}/10</span>
                                        <img src="https://netflix-clone-by-shivam.netlify.app/static/media/star.9179862c.png" alt="imdb" className="item-rating__star" />
                                    </div>
                                    <p className='description'>{movie.overview}</p>
                                    <p className='description releaseDate'>
                                        Release Date: {movie.release_date}
                                    </p>
                                    <div className='d-flex'>
                                        <button onClick={() => favoriteCLick(movie)} className='favorite_btn '>
                                            <span>
                                                {
                                                    favoriteAdd ?
                                                        <>
                                                            <FiCheck />  Already Added
                                                        </>
                                                        :
                                                        <>
                                                            <AiOutlinePlus />  Add To Favorite
                                                        </>
                                                }
                                            </span>
                                        </button>
                                        <button onClick={() => clickMoreInfo(movie)} className='favorite_btn ml-2'>
                                            <BsInfoCircle />   More Info
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='slide_image_div'>
                                <img className='slide_img' src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt='img' />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default MovieFrontSlider;