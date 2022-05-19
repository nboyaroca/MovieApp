//import { render } from "@testing-library/react";
import { Component } from "react";

export class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            newMovie: this.props.editedMovie,
            isEditMode: this.props.isEditMode,
        }
    }

    onInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name)
        this.setState({newMovie: {...this.state.newMovie, [name]:value}});
    };


    onSubmitHandler = (e) => {
        e.preventDefault();
        
        !this.state.isEditMode ? 
        this.props.addMovie(this.state.newMovie) //this.state.newMovie representa "data" de la funció addMovie
        : this.props.updateMovie(this.state.newMovie)
                
        this.props.resetInputsForm(e);
    };

    //Extract To Method
    // resetInputsForm = (e) => {
    //     this.setState({newMovie: {id:"", title:"", genre:"", year:"", imgUrl:""}})
    // };   

    render() {
        return(
            <form onSubmit={this.onSubmitHandler} className="form">
                <div className="inputForm">
                    <input type="text" onChange={this.onInputChange} name='title' value={this.state.newMovie.title} placeholder="Title"/>
                    <input type="text" onChange={this.onInputChange} name='genre' value={this.state.newMovie.genre} placeholder="Genre"/>
                    <input type="num" onChange={this.onInputChange} name='year' value={this.state.newMovie.year} placeholder="Year"/>
                    <input type="url" onChange={this.onInputChange} name='imgUrl' value={this.state.newMovie.imgUrl} placeholder="Image URL"/>  
                </div>
                {this.state.isEditMode ? 
                <button type="submit" className="submit" id="submit">Update Your Movie</button>
                : <button type="submit" className="submit" id="submit">Add Your Movie</button>
                }

            </form>
        )
    }
}

