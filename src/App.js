import React, { useEffect, createContext, useState } from "react";
import {
  BrowserRouter,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import RoutePage from './Route/RoutePage';
import { AuthProvider } from './contexts/AuthContext';

export const FavoriteList = createContext();
export const MovileList = createContext();
export const SearchValue = createContext()

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
  const [searchInputChange, setSearchInputChange] = useState('')

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
      .catch(err => console.log(err))
  }, [])
  return (
    <AuthProvider>
      <MovileList.Provider value={[allMovie, setAllMovie]}>
        <FavoriteList.Provider value={[favorite, setFavorite]}>
          <SearchValue.Provider value={[searchInputChange, setSearchInputChange]}>
            <BrowserRouter>
              <Navbar />
              <RoutePage />
            </BrowserRouter >
          </SearchValue.Provider>
        </FavoriteList.Provider>
      </MovileList.Provider>
    </AuthProvider>
  );
}

export default App;
