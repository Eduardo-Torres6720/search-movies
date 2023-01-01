import React from "react";
import AboutMovie from "./AboutMovie";
import './movie.css'

const Movie = (props) => {
    const {data, movie} = props

    return (
        <div>
            <div className="header">
                <img src="https://cdn-icons-png.flaticon.com/512/59/59489.png" alt="" className="crossed-arrows"/>
                <h2>Sem saber o que assistir hoje?</h2>
            </div>
           {data ? (
                <AboutMovie movie={movie}/>
           ) : (
                <div></div>
           )}
        </div>
    )
}

export default Movie