import React from "react";
import './aboutMovie.css'

const AboutMovie = (props) => {
    const {movie} = props
    const moviePoster = `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`
    return (
        <div className="container-movie">
            <div>
                <img src={moviePoster} alt="" />
            </div>
            <div>
                <p>{movie.genres.map( genresMovie => (genresMovie.name)).join(" - ")} - {movie.runtime}min</p>
                <p className="container-title">{movie.title} - ({movie.release_date})</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default AboutMovie