import { render } from "@testing-library/react";
import { Component } from "react";

export class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            newMovie: this.props.editedMovie,
            isEditMode: this.props.isEditMode,
        }
    }

    onInputChange = () => { //falta fer la funció onChange i assignar a cada input la funció
        //mirar el projecte de changeImage
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        // const newMovie = {
        //     title: e.target.title.value,
        //     genre: e.target.genre.value,
        //     year: e.target.year.value,
        //     imgUrl: e.target.imgUrl.value,    
        // };

        if (this.state.newMovie.title.lenght > 0) {
            !this.state.isEditMode ? 
            this.props.addMovie(this.state.newMovie)
            : this.props.updateMovie(this.state.newMovie)
        }
        
        this.resetInputsForm(e);
    };

    //Extract To Method
    resetInputsForm = (e) => {
        e.target.title.value = "";
        e.target.genre.value = "";
        e.target.year.value = "";
        e.target.imgUrl.value = "";
    };   

    render() {
        return(
            <form onSubmit={this.onSubmitHandler} className="form">
                <div className="inputForm">
                    <input type="text" onChange={this.onInputChange} id='title' value={this.state.newMovie.title} placeholder="Title"/>
                    <input type="text" id='genre' value={this.state.newMovie.genre} placeholder="Genre"/>
                    <input type="text" id='year' value={this.state.newMovie.year} placeholder="Year"/>
                    <input type="text" id='imgUrl' value={this.state.newMovie.imgUrl} placeholder="Image URL"/>  
                </div>
                {this.state.isEditMode ? 
                <button type="submit" className="submit" id="submit">Update Your Movie</button>
                : <button type="submit" className="submit" id="submit">Add Your Movie</button>
                }
            </form>
        )
    }
}

