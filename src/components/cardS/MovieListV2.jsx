import { useState, useEffect } from "react";
import { movieServices } from "../../services/movieServices";
import { MovieCardV2 } from "../card/MovieCardV2";
import { MovieFormV2 } from "../form/MovieFormV2";
import { Loading } from "../loading/Loading";



export function MovieList ( ) {
    
    const [movies, setMovies] = useState ([])
    const [editedMovie, setEditedMovie] = useState ('')
    const [isEditMode, setIsEditMode] = useState (false)
    const [isLoading, setIsLoading] = useState(false)
    const [viewForm, setViewForm] = useState(false)
    const [movieToEdit, setMovieToEdit] = useState(null)
    

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
                setMovies(filterMovies);
            }
        })
    }

    //FUNCIÓ PER EDITAR UNA PEL·LÍCULA (omplir els camps del formulari)
    const editMovie = (data) => { //passem la movie sencera sense id)
        setMovieToEdit(data)
        // passem posar data en un estat i passar-li a formulari per poder-ho editar
        // necessitarem la nova constant MovieToEdit useState

        openForm();
        }

    //FUNCIÓ PER CANVIAR UNA PEL·LÍCULA
    const updateMovie = (data) => {
        movieServices.updateMovie(data).then((res) => {
            getAllMovies()})
            setMovieToEdit(null)
            // .catch((err) => console.log(err))
        openForm()
        resetInputsForm()
        setIsEditMode(false)
    }

    //FUNCIÓ PER AFEGIR UNA PEL·LÍCULA
    const addMovie = (data) => {
        movieServices.addMovie(data).then((res) => getAllMovies())
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
                {viewForm ? <MovieFormV2 
                    addMovie={addMovie}
                    editedMovie={editedMovie}
                    movieToEdit={movieToEdit} 
                    isEditMode={isEditMode} 
                    updateMovie={updateMovie}
                    resetInputsForm={resetInputsForm}/> 
                    : ''
                }
                {isLoading ?
                (<Loading/>)
                : (<div className="film-list">
                    {movies.map((movie, key) => (
                    <MovieCardV2 key={key} movie={movie}
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}/>     
                    ))}
                </div>)
                }
            </section>
        )
}

