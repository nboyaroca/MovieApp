import { useState, useEffect } from "react";
import { movieServices } from "../../services/movieServices";
import { createUuid } from "../../utils/createUuid";
import { MovieCard } from "../card/MovieCard";
import { MovieForm } from "../form/MovieForm";
import { Loading } from "../loading/Loading";



export function MovieList ( ) {
    
    const [movies, setMovies] = useState ([])
    const [editedMovie, setEditedMovie] = useState ('')
    const [isEditMode, setIsEditMode] = useState (false)
    const [isLoading, setIsLoading] = useState(false)
    const [viewForm, setViewForm] = useState(false)
    

    useEffect(() => {
       getAllMovies();
    },[]);
    

    const getAllMovies = () => {
        setIsLoading(true)
        movieServices.getAllMovies().then((res) => {
            setMovies(res);
            setIsLoading(false);
        });
    };

    //FUNCIÓ PER ESBORRAR UNA PEL·LÍCULA
    const deleteMovie = (id) => {
        let deleteConfirmed = window.confirm('really delete ?');
        if (!deleteConfirmed) return; //clàusula salvaguarda
        
        movieServices.deleteMovie(id).then((res) => {
            if (res.status === 200) {
                let filterMovies = movies.filter(movie => movie.id !==id);
                setMovies(filterMovies );
            }
        })
    }

    //FUNCIÓ PER EDITAR UNA PEL·LÍCULA (omplir els camps del formulari)
    const editMovie = (id) => {
        openForm();
        let editedMovie = movies.find(movie => movie.id === id);
            setEditedMovie(editedMovie);
            setIsEditMode(true);
        }

    //FUNCIÓ PER CANVIAR UNA PEL·LÍCULA
    const updateMovie = (newMovie) => {
        movieServices.updateMovie(newMovie.id, newMovie).then((res) => {
            let movieToUpdate = movies.map((movie) => movie.id === newMovie.id ? newMovie : movie)
            setMovies(movieToUpdate)
            // .catch((err) => console.log(err))
        })
        openForm()
        resetInputsForm()
        setIsEditMode(false)
    }

    //FUNCIÓ PER AFEGIR UNA PEL·LÍCULA
    const addMovie = (data) => {
            data.id = createUuid();
        movieServices.addMovie(data).then((res) => {
            setMovies([...movies, res])
            
        })
        openForm()
    }

    //FUNCIÓ PER OBRIR I TANCAR EL FORMULARI
    const openForm = () => {
        if (viewForm) setViewForm(false);
        else setViewForm(true);

        // setState(prevState => ({ viewForm: !prevState.viewForm}));
        
        // ////prèviament setState({ viewForm: true })
        // ////una altra forma és if else:
        // ////   if (state.viewform) setState({viewform:false});
        // ////   else setState({viewform:true})
        resetInputsForm()
        setIsEditMode(false)  
    }

    //FUNCIÓ PER BUIDAR EL FORMULARI
    const resetInputsForm = () => {
        setEditedMovie({id:"", title:"", genre:"", year:"", imgUrl:""})
    };

        return (
            <section>
                <button onClick={ openForm } className="add-button"> Add A Film By Yourself,  Click Here! </button>
                {viewForm ? <MovieForm 
                    addMovie={addMovie}
                    editedMovie={editedMovie} 
                    isEditMode={isEditMode} 
                    updateMovie={updateMovie}
                    resetInputsForm={resetInputsForm}/> 
                    : ''
                }
                (<div className="film-list">
                    {movies.map((movie, key) => (
                    <MovieCard key={key} movie={movie}
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}/>     
                    ))}
                </div>)
            </section>
        )
}

