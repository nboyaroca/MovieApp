import { Component } from "react";
import { Link } from 'react-router-dom';
//import { MovieForm } from "../form/MovieForm";

export class MovieCard extends Component {

    render() {
        let movie = this.props.movie;
        return (
            <div className="film-card" id="filmCard">
                <Link to="/Movie">
                    <button className="more-button"><i className="fa-solid fa-info"></i></button>
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
                        <button onClick={() => this.props.deleteMovie(movie.id)}
                        className="card-button"><i className="fa-solid fa-trash-can"></i></button>
                        <button onClick={() => this.props.editMovie(movie.id)}
                        className="card-button"><a href="#root"><span><i className="fa-solid fa-pen-to-square"></i></span></a></button>
                    </div>
                </div>
            </div>
        );
    }
}