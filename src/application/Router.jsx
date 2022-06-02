import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import MoviePage from '../pages/movies/MoviePage';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/movie/:id" element={<MoviePage />}/>
        </Routes>
    </BrowserRouter>
  )
}
