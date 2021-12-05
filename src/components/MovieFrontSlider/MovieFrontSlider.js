import React, { useEffect, useState } from 'react';
import './MovieFrontSlider.css';
import Slider from "react-slick";
import { AiOutlinePlus, IoCheckmarkDoneOutline,BsInfoCircle } from 'react-icons/all';

const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: true,
    fade: true
};

const MovieFrontSlider = () => {
    const [popularMovie, setPopularMovie] = useState([])
    const [favoriteAdd, setFavoriteAdd] = useState(false)
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=3')
            .then(res => res.json())
            .then(data => {
                if (!data.hasOwnProperty('success'))
                    setPopularMovie(data.results)
            })
            .catch(err => console.log({ err }))
    }, [])
   
    return (
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
                               <button onClick={() => setFavoriteAdd(prev => !prev)} className='favorite_btn '>
                                    <span>
                                        {
                                            favoriteAdd ?
                                                <>
                                                    <IoCheckmarkDoneOutline />  Already Added
                                                </>
                                                :
                                                <>
                                                    <AiOutlinePlus />  Add To Favorite'
                                                </>
                                        }
                                    </span>
                                </button>
                                <button className='favorite_btn ml-2'>
                               <BsInfoCircle/>   More Info
                                </button>
                               </div>
                            </div>
                        </div>
                        <div>
                            <img className='slide_img' src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt='img' />
                        </div>
                    </div>
                ))
            }
        </Slider>

    );
};

export default MovieFrontSlider;