import { Component } from "react";
import { movieServices } from "../../services/movieServices";
import { createUuid } from "../../utils/createUuid";
import { MovieCard } from "../card/MovieCard";
import { MovieForm } from "../form/MovieForm";

export class MovieList extends Component {
    constructor() {
        super();
        this.state={
            viewForm: false,
            editedMovie: { },
            movies: [],
        };
    };
    
    componentDidMount() {
        this.setState({
            movies: movieServices.getAllMovies(),
        });
    }

    deleteMovie = (id) => { //la variable deleteMovie és igual a la funció ()
        let deleteConfirmed = window.confirm('really delete ?');
        if (!deleteConfirmed) return; //clàusula salvaguarda
        let filterMovies = this.state.movies.filter(movie => movie.id !==id);
        this.setState({ movies: filterMovies });
    };

    editMovie = (id) => {
        this.openForm();
        let editedMovie = this.state.movies.find(movie => movie.id ===id);
        //return editedMovie;
        console.log(editedMovie);
        this.setState({editedMovie})
    }

    addMovie = (data) => {
        data.id = createUuid();
        this.setState({ movies: [...this.state.movies, data] })
    }

    openForm = () => {
        this.setState(prevState => ({ viewForm: !prevState.viewForm}));
    }

    render() {
        return (
            <section>
                <button onClick={ this.openForm } className="add-button"> Add A Film By Yourself, Click Here! </button>
                {this.state.viewForm ? <MovieForm addMovie={this.addMovie} editedMovie={this.state.editedMovie}/> : ''}
                <div className="film-list">
                    {this.state.movies.map((movie, key) => (
                    <MovieCard key={key} movie={movie}
                    deleteMovie={this.deleteMovie}
                    editMovie={this.editMovie}/>     
                    ))}
                </div>
            </section>
        );
    }
}
