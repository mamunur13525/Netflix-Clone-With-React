import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login isLoginTrue={true} />} />
        <Route path='/signup' element={<Login isLoginTrue={false} />} />
        <Route path='/movies' element={<Movies />} />
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
  );
}

export default App;
