import React from 'react'
import './MovieCard.css'

export const MovieCard = ({el}) => {
    return (
        <div className="movie-card">
            <img src={el.Poster} alt="Здесь будет постер фильма"/>
            <h3>{el.Title}</h3>
            <p>{el.Type}</p>
            <b>{el.Year}</b>
        </div>
    )
}