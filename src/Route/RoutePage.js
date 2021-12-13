import React from 'react';
import { Route, Routes } from 'react-router';
import LandingPage from '../pages/LandingPage/LandingPage';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';
import Login from '../pages/Login/Login';
import Other from '../pages/Other/Other';
import Movies from '../pages/Movies/Movies';
import Favorites from '../pages/Favorites/Favorites';
import SpecificMovie from '../pages/SpecificMovie/SpecificMovie';
import MovieSearch from '../pages/MovieSearch/MovieSearch';

const RoutePage = () => {
    return (
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login isLoginTrue={true} />} />
            <Route path='/signup' element={<Login isLoginTrue={false} />} />
            <Route path='/search-movie' element={<MovieSearch />} />
            <Route
                path="/favorites"
                element={
                    <PrivateRoute>
                        <Favorites />
                    </PrivateRoute>
                }
            />       <Route
                path="/movies"
                element={
                    <PrivateRoute>
                        <Movies />
                    </PrivateRoute>
                }
            />     <Route
                path="/movies/:id"
                element={
                    <PrivateRoute>
                        <SpecificMovie />
                    </PrivateRoute>
                }
            />
            <Route
                path="/other"
                element={
                    <PrivateRoute>
                        <Other />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};

export default RoutePage;