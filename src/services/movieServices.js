import axios from "axios"

const baseUrl = "https://62863be396bccbf32d71c5a2.mockapi.io";

export const movieServices = {
    getAllMovies() {
        const movies = axios.get(baseUrl + "/movies").then((res) => res.data);
        return movies;
    },

    deleteMovie(id) {
        const deletedMovie = axios.delete(baseUrl + "/movies/" + id).then((res) => res); 
        return deletedMovie;
    },

    addMovie(data) {
        const addedMovie = axios.post(baseUrl + "/movies/", data).then((res) => res.data);
        return addedMovie;
    },

    updateMovie(id, newMovie) {
        const updatedMovie = axios.put(baseUrl + "/movies/" + id, newMovie).then((res) => res.data);
        return updatedMovie;
    },

    getMoviesById(id) {
        const movies = axios.get(baseUrl + "/movies/" + id).then((res) => res.data);
        return movies;
    }
};