import axios from "axios"

const baseUrl = "https://62863be396bccbf32d71c5a2.mockapi.io";

export const movieServices = {
    getAllMovies() {
        const movies = axios.get(baseUrl + "/movies").then( (res) => {
            return res.data;
        });
        console.log("service what?")

        return movies;
    },

    deleteMovie(id) {
        const deletedMovie = axios.delete(baseUrl + "/movies/" + id);

        return deletedMovie;

    }
};
