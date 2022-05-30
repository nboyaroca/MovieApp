import { useState } from "react";

export function MovieForm ({addMovie, updateMovie, resetInputsForm, editedMovie, isEditMode}) {

    const [newMovie, setNewMovie] = useState(editedMovie)

    const onInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNewMovie({...newMovie, [name]:value});
                
        // let name = e.target.name;
        // let value = e.target.value;
        // setState({newMovie: {...state.newMovie, [name]:value}});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        !isEditMode ? 
        addMovie(newMovie)
        : updateMovie(newMovie);
           
        // setIsEditMode() //ATENCIÓ: el botó add i update no canvia però el tipus de dades del form sí.
        resetInputsForm(e);
        
        
        // e.preventDefault();
        
        // !state.isEditMode ? 
        // props.addMovie(state.newMovie) //state.newMovie representa "data" de la funció addMovie
        // : props.updateMovie(state.newMovie) //state.newMovie és "newMovie" de la funció updateMovie
                
        // props.resetInputsForm(e);
    };

    //Extract To Method sent to MovieList.jsx and imported by props
    // resetInputsForm = (e) => {
    //     setState({newMovie: {id:"", title:"", genre:"", year:"", imgUrl:""}})
    // };   


        return(
            <form onSubmit={onSubmitHandler} className="form">
                <div className="inputForm">
                    <input type="text" onChange={onInputChange} name='title' defaultValue={newMovie.title} placeholder="Title"/>
                    <input type="text" onChange={onInputChange} name='genre' defaultValue={newMovie.genre} placeholder="Genre"/>
                    <input type="num" onChange={onInputChange} name='year' defaultValue={newMovie.year} placeholder="Year"/>
                    <input type="url" onChange={onInputChange} name='imgUrl' defaultValue={newMovie.imgUrl} placeholder="Image URL"/>  
                </div>
                {isEditMode ? 
                <button type="submit" className="submit" id="submit">Update Your Movie</button>
                : <button type="submit" className="submit" id="submit">Add Your Movie</button>
                }

            </form>
        )
    }
