import { Component } from "react";
import { createUuid } from "../../utils/createUuid";
import { MovieCard } from "../card/MovieCard";
import { MovieForm } from "../form/MovieForm";

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
                    genre: 'Drama',
                    year: 1998,
                    imgUrl:
                    'https://www.tuposter.com/pub/media/catalog/product/cache/image/700x560/91bbed04eb86c2a8aaef7fbfb2041b2a/f/i/file_125_9.jpg',
                },
                {
                    id: 4,
                    title: 'Dogma',
                    genre: 'Comedy',
                    year: 1999,
                    imgUrl:
                    'https://es.web.img3.acsta.net/medias/nmedia/18/67/78/94/20302650.jpg',
                },
                {
                    id: 5,
                    title: 'The Piano',
                    genre: 'Drama',
                    year: 1993,
                    imgUrl:
                    'https://www.tuposter.com/pub/media/catalog/product/cache/image/700x560/91bbed04eb86c2a8aaef7fbfb2041b2a/e/l/el_piano_p_ster.png',
                },
                {
                    id: 6,
                    title: 'Cube',
                    genre: 'Science-fiction / Scary Movie',
                    year: 1997,
                    imgUrl: 'https://wildinthestreetsblog.files.wordpress.com/2010/06/cube_the_movie_poster_art.jpg',
                },
                {
                    id: 7,
                    title: 'Kill Bill Vol.1',
                    genre: 'Action',
                    year: 2003,
                    imgUrl: 'https://markwillltc.files.wordpress.com/2017/09/yjbd1jbhmpbd5ak2mw6aq95u.jpeg',
                },
                {
                    id: 8,
                    title: 'Eduard Scissorhands',
                    genre: 'Fantastic',
                    year: 1990,
                    imgUrl: 'https://www.ecartelera.com/carteles/4800/4849/001.jpg',
                },
                {
                    id: 9,
                    title: 'Lost in Translation',
                    genre: 'Drama',
                    year: 2003,
                    imgUrl: 'https://www.phenomena-experience.com/galeria/Febrero_2017/lost-in-translation-poster.jpg',
                },
                {
                    id: 10,
                    title: 'Star Wars, a new hope',
                    genre: 'Science-fiction',
                    year: 1977,
                    imgUrl: 'https://castwars.com/wp-content/uploads/2015/08/star-wars-iv-a-new-hope-poster1.jpg',
                },
            ],
        };
    };
    
    deleteMovie = (id) => { //la variable deleteMovie és igual a la funció ()
        let deleteConfirmed = window.confirm('really delete?');
        if (!deleteConfirmed) return; //clàusula salvaguarda
        let filterMovies = this.state.movies.filter(movie => movie.id !==id);
        this.setState({ movies: filterMovies });
    };

    /*addMovie = (data) => {
        let lastIndex = this.state.movies[this.state.movies.length-1].id;
        console.log(lastIndex);
        let newIndex = lastIndex+1;
        let newMovie = {id: newIndex, ...data}
        console.log(newMovie);
        this.setState({movies:[...this.state.movies, newMovie]});
    }*/

    addMovie = (data) => {
        data.id = createUuid();
        this.setState({ movies: [...this.state.movies, data] })
    }

    render() {
        return (
            <section>
                <MovieForm addMovie={this.addMovie}/>
                <div className="film-list">
                    {this.state.movies.map((movie, key) => (
                        <MovieCard key={key} movie={movie} deleteMovie={this.deleteMovie}/>
                        
                    ))}
                </div>
            </section>
        );
    }
}
