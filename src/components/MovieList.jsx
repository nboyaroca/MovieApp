import { Component } from "react";

export class MovieList extends Component {
    constructor() {
        super();
        this.state={
            movies: [
                {
                    id: 1,
                    title: 'Gattaca',
                    genre: 'Science-fiction',
                    year: 1999,
                    imgUrl:
                    'https://www.cineycine.com/archivos/2013/11/gattaca-poster.jpg',
                },
                {
                    id: 2,
                    title: 'Matrix',
                    genre: 'Science-fiction',
                    year: 1999,
                    imgUrl:
                    'https://www.cineycine.com/archivos/2021/12/matrix-poster.jpg',
                },
                {
                    id:3,
                    title: 'Los amantes del Círculo Polar',
                    genre: 'Dramma',
                    year: 1998,
                    imgUrl:
                    'https://www.tuposter.com/pub/media/catalog/product/cache/image/700x560/91bbed04eb86c2a8aaef7fbfb2041b2a/f/i/file_125_9.jpg'
                },
                {
                    id: 4,
                    title: 'Dogma',
                    genre: 'Comedie',
                    year: 1999,
                    imgUrl:
                    'https://es.web.img3.acsta.net/medias/nmedia/18/67/78/94/20302650.jpg',
                },
            ],
        };
    }
    
    deleteMovie = (id) => { //la variable deleteMovie és igual a la funció ()
        let deleteConfirmed = window.confirm('really delete?');
        if (!deleteConfirmed) return; //clàusula salvaguarda
        let filterMovies = this.state.movies.filter(movie => movie.id !==id);
        this.setState({ movies: filterMovies });
    };

    render() {
        return (
            <section>
                <div className="film-list">
                    {this.state.movies.map((movie, key) => (
                        <div className="film-card" key={key} id="filmCard">
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
                                onClick={() => this.deleteMovie(movie.id)}
                                className="btn btn-danger">delete</button>
                                <p className="diamond">💎</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}
