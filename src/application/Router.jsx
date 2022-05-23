import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from '../pages/movies/MoviePage';
import HomePage from '../pages/home/HomePage';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="element" element={<MoviePage />}/>
        </Routes>
    </BrowserRouter>      
  )
}
