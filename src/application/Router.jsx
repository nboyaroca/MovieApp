import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/HomePage';
import MoviePage from '../pages/movies/MoviePage';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/movie/:id" element={<MoviePage />}/>
        </Routes>
    </BrowserRouter>      
  )
}
