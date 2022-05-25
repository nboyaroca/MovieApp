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
            isEditMode: false,
            editedMovie: { },
            movies: [],
        }
    }
    
    //Cridem totes les pel·lícules de l'array de "services"
    componentDidMount() {
        movieServices.getAllMovies().then((res) => {
        this.setState({ movies: res });    
        });
    }

    //FUNCIÓ PER ESBORRAR UNA PEL·LÍCULA
    deleteMovie = (id) => { //la variable deleteMovie és igual a la funció ()
        let deleteConfirmed = window.confirm('really delete ?');
        if (!deleteConfirmed) return; //clàusula salvaguarda
       
        movieServices.deleteMovie(id).then((res) => {
            if (res.status === 200) {
                let filterMovies = this.state.movies.filter(movie => movie.id !==id);
                this.setState({ movies: filterMovies });
            }
            // if (res.status == 404) {
            //     alert("not found")
            // }
            // console.log(res)
        })
    }

    //FUNCIÓ PER EDITAR UNA PEL·LÍCULA
    editMovie = (id) => {
        this.openForm();
        let editedMovie = this.state.movies.find(movie => movie.id === id);
        //return editedMovie;
        console.log(editedMovie);
        this.setState({editedMovie})
        this.setState({isEditMode: true})
    }

    //FUNCIÓ PER CANVIAR UNA PEL·LÍCULA
    updateMovie = (newMovie) => {
            let newMoviesState = this.state.movies //fem un nou array com l'original
            let movieToEditIndex = newMoviesState.findIndex(movie => movie.id === newMovie.id); //busquem l'index que sigui igual al que volem canviar
        movieServices.updateMovie(newMovie.id, newMovie).then((res) => {
            newMoviesState[movieToEditIndex] = res //de la nova llista newMoviesState busquem l'index [movieToEditIndex] i li diem que és newMovie
            this.setState({movies: newMoviesState})          
        })
        this.openForm()
        this.resetInputsForm()
        this.setState({isEditMode: false})
    }

    //FUNCIÓ PER AFEGIR UNA PEL·LÍCULA
    addMovie = (data) => {
            data.id = createUuid();
        movieServices.addMovie(data).then((res) => {
            this.setState({ movies: [...this.state.movies, res] }) // ... script operator
            
        })
        this.openForm()
    }

    //FUNCIÓ PER BUIDAR OBRIR I TANCAR EL FORMULARI
    openForm = () => {
        this.setState(prevState => ({ viewForm: !prevState.viewForm}));
        //prèviament this.setState({ viewForm: true })
        //una altra forma és if else:
        //   if (this.state.viewform) this.setState({viewform:false});
        //   else this.setState({viewform:true})
        this.resetInputsForm()
        this.setState({isEditMode: false})
        
    }

    //FUNCIÓ PER BUIDAR EL FORMULARI
    resetInputsForm = () => {
        this.setState({editedMovie: {id:"", title:"", genre:"", year:"", imgUrl:""}})
    };   

    render() {
        return (
            <section>
                <button onClick={ this.openForm } className="add-button"> Add A Film By Yourself,  Click Here! </button>
                {this.state.viewForm ? <MovieForm 
                    addMovie={this.addMovie} //passem paràmetres d'un component a un altre
                    editedMovie={this.state.editedMovie} 
                    isEditMode={this.state.isEditMode} 
                    updateMovie={this.updateMovie}
                    resetInputsForm={this.resetInputsForm}/> 
                    : ''
                }
                <div className="film-list">
                    {this.state.movies.map((movie, key) => (
                    <MovieCard key={key} movie={movie}
                    deleteMovie={this.deleteMovie}
                    editMovie={this.editMovie}/>     
                    ))}
                </div>
            </section>
        )
    }
}
