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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/login' element={<Login />} />
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
