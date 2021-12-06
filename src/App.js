import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import React, { useEffect, createContext, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login';
import Other from './pages/Other/Other';
import Movies from './pages/Movies/Movies';
import TvShow from './pages/TvShow/TvShow';
import Favorites from './pages/Favorites/Favorites';
import SpecificMovie from './pages/SpecificMovie/SpecificMovie';

export const FavoriteList = createContext();
export const MovileList = createContext();

const fetchMovieAll = [
  'https://api.themoviedb.org/3/movie/popular?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=1',
  'https://api.themoviedb.org/3/movie/popular?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=2',
  'https://api.themoviedb.org/3/movie/popular?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=3',
  'https://api.themoviedb.org/3/movie/popular?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=4',
  'https://api.themoviedb.org/3/movie/popular?api_key=1a12ab4d115a6496ed52f90f1149fbd4&language=en-US&page=5',
]


function App() {
  const [favorite, setFavorite] = useState([])
  const [allMovie, setAllMovie] = useState([]);

  useEffect(() => {
    Promise.all(fetchMovieAll.map(u => fetch(u))).then(responses =>
      Promise.all(responses.map(res => res.json()))
    ).then(data => {
      let arrayMovie = []
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        arrayMovie.push(...element.results)
      }
      setAllMovie(arrayMovie)
    })
  }, [])
  return (
    <MovileList.Provider value={[allMovie, setAllMovie]}>
      <FavoriteList.Provider value={[favorite, setFavorite]}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login isLoginTrue={true} />} />
            <Route path='/signup' element={<Login isLoginTrue={false} />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:id' element={<SpecificMovie />} />
            <Route path='/tvshows' element={<TvShow />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route
              path="/other"
              element={
                <PrivateRoute>
                  <Other />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter >
      </FavoriteList.Provider>
    </MovileList.Provider>
  );
}

export default App;
