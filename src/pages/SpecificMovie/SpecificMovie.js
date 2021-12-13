import React, { useState, useContext, useEffect } from 'react';
import './SpecificMovie.css';
import { useParams } from 'react-router-dom';
import { FavoriteList } from '../../App';
import { AiOutlinePlus, FiCheck, AiOutlineEye } from 'react-icons/all';
import { IoClose } from 'react-icons/all'
import Movie from '../../components/MovieList/Movie';

const SpecificMovie = () => {
    const { id } = useParams();
    const [favorite, setFavorite] = useContext(FavoriteList)
    const [favoriteAdd, setFavoriteAdd] = useState(false)
    const [findMovie, setFindMovie] = useState({})
    const [watchVideo, setWatchVideo] = useState({ status: false, key: '' })
    useEffect(() => {
        window.scrollTo(0, 0)
        if (id) {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1a12ab4d115a6496ed52f90f1149fbd4&append_to_response=videos,credits&language=en-US`)
                .then(res => res.json())
                .then(data => setFindMovie(data))
                .catch(err => console.log(err))
        }
    }, [id])

    const favoriteCLick = (movie) => {
        setFavoriteAdd(prev => !prev)
        const findMovie = favorite.find(item => item.id === movie.id) !== undefined;
        if (findMovie) {
            setFavorite(favorite.filter(item => item.id !== movie.id))
        } else {
            setFavorite([...favorite, movie])
        }
    }

    const WatchTrailer = () => {
        let findVideo = findMovie?.videos?.results?.find(item => item.name === 'Official Trailer')
        findVideo = findVideo === undefined ? findMovie?.videos?.results[0] : findVideo;
        setWatchVideo({ status: true, key: findVideo?.key })
    }

    return (
        <>
            <section className='landing_main_section h-100'>
                <div className='specific'>
                    <div className="">

                        <img className='background_image_specific' src={`http://image.tmdb.org/t/p/w1280${findMovie && findMovie.backdrop_path}`} alt="img" />
                        <main className='movie_content'>
                            <img className='specific_poster_image' src={`http://image.tmdb.org/t/p/w1280${findMovie && findMovie.poster_path}`} alt="Movie poster" />
                            <div className="content_side">
                                <h2 className='font-weight-bold'>
                                    <span>{findMovie?.title}</span>
                                </h2>
                                <p className='description mt-0 specific_description' style={{ fontSize: '1rem' }}>{findMovie?.overview}</p>
                                <div className='d-flex justify-content-between align-item-end flex-wrap'>
                                    <div className="item-rating">
                                        <img src="https://netflix-clone-by-shivam.netlify.app/static/media/imdb.f7f2904f.png" alt="imdb" className="item-rating__imdb" />
                                        <span className="item-rating__rank">{findMovie?.vote_average}/10</span>
                                        <img src="https://netflix-clone-by-shivam.netlify.app/static/media/star.9179862c.png" alt="imdb" className="item-rating__star" />
                                    </div>
                                    <h5 className='font-weight-bold'>
                                        Release Dat:{findMovie.release_date}
                                    </h5>
                                </div>
                                <h4 className='font-weight-bold mt-3'>Cast</h4>
                                <div className="d-flex justify-content-evenly flex-wrap">
                                    {
                                        findMovie?.credits?.cast?.slice(0, 4).map(item => (
                                            <div key={item.id} className='cast_img'>
                                                <img src={`http://image.tmdb.org/t/p/w92${item.profile_path}`} alt="Cast Img" />
                                                <p>
                                                    {
                                                        item.name
                                                    }
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='d-flex mt-3 flex-wrap' >
                                    <button style={{ fontSize: '.9rem' }} onClick={() => favoriteCLick(findMovie && findMovie)} className='favorite_btn '>
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
                                    <button onClick={WatchTrailer} style={{ fontSize: '.9rem' }} className='favorite_btn ml-2'>
                                        <AiOutlineEye />   Watch Trailer
                                    </button>


                                </div>

                            </div>

                        </main>

                    </div>
                </div>
                {
                    watchVideo.status && <TrailerVideo setWatchVideo={setWatchVideo} watchVideo={watchVideo} />
                }
            </section>
            <Recommandation />
        </>
    );
};

export default SpecificMovie;

const TrailerVideo = ({ watchVideo, setWatchVideo }) => {

    return (
        <div className='overlayOutside'>
            <div className='popup_video'>
                <p className='d-flex justify-content-between w-100 p-3 mb-0 pb-2 text-white'>
                    <span>
                        Play Trailer
                    </span>
                    <IoClose style={{fontSize:'2rem'}} className='cursor-pointer ' onClick={() => setWatchVideo({ status: false, key: '' })} />
                </p>
                {
                    watchVideo.status &&
                    <iframe src={`https://www.youtube.com/embed/${watchVideo.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                }
            </div>
        </div>
    )
}



const Recommandation = () => {
    const [recommmandation, setRecommmandation] = useState([])
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=1`)
                .then(res => res.json())
                .then(data => {
                    if (!data.hasOwnProperty('success')) {
                        setRecommmandation(data.results)
                    }
                })
        }
    }, [id])
    return (
        <div className='landing_main_section h-auto recomandation_section'>
            {
                recommmandation.length &&
                <>
                    <h2 className='text-white font-weight-bold px-5 pt-5 mb-4'>Recommandation</h2>
                    <div className='d-flex div_movie_list'>
                        {
                            recommmandation.slice(0, 12).map(movie => (
                                <Movie favoriteBtn={false} key={movie.id} movie={movie} />
                            ))
                        }
                    </div>
                </>
            }
        </div>
    )
}