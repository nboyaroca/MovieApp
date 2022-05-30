import React from 'react'
// import { MovieCard } from '../../components/card/MovieCard'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieServices } from '../../services/movieServices';

export default function MoviePage() {
  
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
      getMovieById(id);
  },[id])

  const getMovieById = (id) => {
    movieServices.getMoviesById(id).then(res => {
      setMovie(res)
  })
  }


    // const detail = async () => {
    //     const data = await fetch(`https://62863be396bccbf32d71c5a2.mockapi.io/movie/${id}`)
    // }

  
  return (
   
    <div className="movie-container"> 
      You are in the MoviePage
      <h1>{movie.title}</h1>
      <p>{movie.imgUrl}</p>


    </div>
  )
}