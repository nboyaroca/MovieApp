import React from 'react'
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
    
    <section className='page'> 
      
      <div className="page-container">
      
        <div className="movie-container">
          <img className='page-image' src={movie.imgUrl} alt='' />
        </div>
        <div className='info-container'>
          <div className='title'>
            <h2 className="title">{movie.title}</h2>
          </div>
          <div className="details">
          <p className="genre">{movie.genre}</p>
          <h5 className="year">{movie.year}</h5>
          </div>
          <div>
            <h6 className="sipnosis-title">Sipnosis:</h6>
            <p className="sipnosis-info">{movie.sipnosis}</p>
            <br></br>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet nibh ut lacus dapibus sollicitudin quis eu mauris. Phasellus mi velit, varius sit amet ornare dictum, varius eu neque. Aliquam ac rutrum magna. Cras lacinia massa a suscipit accumsan. Donec ultricies dolor et mattis bibendum. Nunc eu tortor augue. Vivamus a scelerisque ipsum, in elementum dui.</p>
            <br></br>
            <p className='paragraph'>Donec a tortor volutpat, fermentum magna et, sagittis lectus. Vivamus ut ultricies augue. Mauris ut est nisl. Duis gravida condimentum feugiat. Etiam sit amet lectus sed velit ullamcorper lobortis posuere a mauris. Sed porttitor a lectus ac lobortis. In lobortis fermentum lectus, ac euismod nisi vestibulum ut. Nunc dolor sem, vehicula id elementum in, vehicula id nisl. Nulla lacinia pellentesque purus ac porta. Sed accumsan nisi eget mattis laoreet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}