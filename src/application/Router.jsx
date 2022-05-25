import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviePage from '../pages/movies/MoviePage'
import App from '../App';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/Movie" element={<MoviePage/>}/>
        </Routes>
    </BrowserRouter>      
  )
}
