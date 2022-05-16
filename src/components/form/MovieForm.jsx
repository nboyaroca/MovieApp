import { render } from "@testing-library/react";
import { Component } from "react";

export class MovieForm extends Component {
    constructor(props) {
        super(props);
    }

    emptyInput = () => {
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const newMovie = {
            title: e.target.title.value,
            genre: e.target.genre.value,
            year: e.target.year.value,
            imgUrl: e.target.imgUrl.value,    
        };
        this.props.addMovie(newMovie);
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
                    <input type="text" id='title' placeholder="Title"/>
                    <input type="text" id='genre' placeholder="Genre"/>
                    <input type="text" id='year' placeholder="Year"/>
                    <input type="text" id='imgUrl' placeholder="Image URL"/>  
                </div>
                
                <button type="submit" className="submit" id="submit">Add Your Movie</button>
            </form>
        )
    }
}

