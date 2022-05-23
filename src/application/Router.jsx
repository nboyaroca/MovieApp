import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from '../pages/Movie';
import Home from '../pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="element" element={<Movie/>}/>
        </Routes>
    </BrowserRouter>      
  )
}
