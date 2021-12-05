import React, { useEffect, useState } from 'react';
import './MovieList.css';

const MovieList = () => {
    const [allMovie, setAllMovie] = useState([])
    const [categorySearch, setCategorySearch] = useState('All')
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&query=infinity')
            .then(res => res.json())
            .then(data => {
                if (!data.hasOwnProperty('success'))
                    setAllMovie(data.results)
            })
            .catch(err => console.log({ err }))
    }, [])

    return (
        <section>
            <h4 className='category_search'>Search by Category</h4>
            <ul className='movie_list_filter'>
                <li className={categorySearch === 'All'?'activeCategory':''} onClick={() => setCategorySearch('All')}>All</li>
                <li className={categorySearch === 'Popular'?'activeCategory':''} onClick={() => setCategorySearch('Popular')}>Popular</li>
                <li className={categorySearch === 'Top Rated'?'activeCategory':''} onClick={() => setCategorySearch('Top Rated')}>Top Rated</li>
                <li className={categorySearch === 'Highest Grossing'?'activeCategory':''} onClick={() => setCategorySearch('Highest Grossing')}>Highest Grossing</li>
                <li className={categorySearch === 'New Releases'?'activeCategory':''} onClick={() => setCategorySearch('New Releases')}>New Releases</li>
                <li className={categorySearch === 'Most Liked'?'activeCategory':''} onClick={() => setCategorySearch('Most Liked')}>Most Liked</li>
                <li className={categorySearch === 'Trending Now'?'activeCategory':''} onClick={() => setCategorySearch('Trending Now')}>Trending Now</li>
            </ul>
            <div className='d-flex div_movie_list'>
                {
                    allMovie.map(movie => (


                        <img key={movie.id} className='list_movie_img' src={`http://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt='img' />

                    ))
                }
                {/* <div>
<h5>{movie.title}</h5>
<p>{movie.overview}</p>
                        </div> */}

            </div>
        </section>
    );
};

export default MovieList;