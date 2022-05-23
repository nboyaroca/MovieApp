import { Component } from "react";
import { Link } from 'react-router-dom';
//import { MovieForm } from "../form/MovieForm";

export class MovieCard extends Component {

    render() {
        let movie = this.props.movie;
        return (
            <div className="film-card" id="filmCard">
                <Link to="/element">
                        <button className="more-button">+</button>
                </Link>
                <div className="film-image-frame">
                    
                    <img className="film-image" src={movie.imgUrl} alt={movie.title}/>
                </div>
                <div className="film-base">
                    <div className="film-info">
                        <h4 className="name">{movie.title}</h4>
                        <p className="genre">{movie.genre}</p>
                        <h3 className="year">{movie.year}</h3>
                    </div>
                    <div className="buttons">
                        <button className="card-button"
                        onClick={() => this.props.deleteMovie(movie.id)}>delete</button>
                        <button className="card-button"
                        onClick={() => this.props.editMovie(movie.id)}>change</button>
                    </div>
                </div>
            </div>
        );
    }
}