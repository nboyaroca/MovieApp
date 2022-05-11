import { Component } from "react";

export class MovieCard extends Component {
    
    render() {
        let movie = this.props.movie;
        return (
            <div className="film-card" id="filmCard">
                <div className="film-image-frame">
                    <img className="film-image" src={movie.imgUrl} alt={movie.title}/>
                </div>
                <div className="film-base">
                    <div className="film-info">
                        <h4 className="name">{movie.title}</h4>
                        <p className="genre">{movie.genre}</p>
                        <h3 className="year">{movie.year}</h3>
                    </div>
                    <button
                    onClick={() => this.props.deleteMovie(movie.id)}
                    className="btn btn-danger">delete</button>
                    <p className="diamond">💎</p>
                </div>
            </div>
        );
    }
}