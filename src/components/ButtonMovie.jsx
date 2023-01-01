import React from "react";
import './buttonMovie.css'

const ButtonMovie = (props) => {
    const {changeMovie} = props

    return (
        <div className="container-button">
            <button onClick={() => changeMovie()}>Encontrar filme</button>
        </div>
    )
}

export default ButtonMovie