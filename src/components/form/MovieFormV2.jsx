import { useEffect, useState } from "react";

//Fem un formulari inicial que s'obriria si no tenim cap movie per editar
const initForm = {
    title: '',
    imgUrl: '',
};

export function MovieFormV2 ({addMovie, updateMovie, resetInputsForm, editedMovie, isEditMode, movieToEdit}) {
                            // { props deconstruïdes }

    //Fem un binding amb el useEffects que funcionarà com a constructor perquè s'executa el didMount
    
    const [form, setForm] = useState({})
    
    useEffect(() => {
        movieToEdit ? setForm(movieToEdit) : setForm(initForm)
    }, [movieToEdit])

    // const [newMovie, setNewMovie] = useState(editedMovie)

    const onInputChange = (e) => {
        // event target és l'input, el name és el nom
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
        //li passem l'estat anterior (amb ...form) i fem un canvi de valor dinàmicament
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        //addMovie(form)

        !movieToEdit ? 
        addMovie(form)
        : updateMovie(form);
           
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
                    <input type="text" onChange={onInputChange} name='title' value={form.title ?? ""} placeholder="Title"/>
                    <input type="text" onChange={onInputChange} name='genre' value={form.genre ?? ""} placeholder="Genre"/>
                    <input type="num" onChange={onInputChange} name='year' value={form.year ?? ""} placeholder="Year"/>
                    <input type="url" onChange={onInputChange} name='imgUrl' value={form.imgUrl ?? ""} placeholder="Image URL"/>  
                </div>
                {!movieToEdit ? 
                <button type="submit" className="submit" id="submit">Add Your Movie</button>
                : <button type="submit" onClick={() => updateMovie(form)} className="submit" id="submit">Update Your Movie</button>
                }
                

            </form>
        )
    }
