import { Link } from 'react-router-dom';

export function MovieCard ({movie, deleteMovie, editMovie} ) {

    
        return (
            <div className="film-card" id="filmCard">
                <Link to={`/movie/${movie.id}`}>
                    <button className="more-button">
                        <i className="fa-solid fa-info"></i>
                    </button>
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
                        <button onClick={() => deleteMovie(movie.id)}
                        className="card-button"><i className="fa-solid fa-trash-can"></i></button>
                        <button onClick={() => editMovie(movie.id)}
                        className="card-button"><a href="#root"><span><i className="fa-solid fa-pen-to-square"></i></span></a></button>
                        
                    </div>
                </div>
            </div>
        );
    }
