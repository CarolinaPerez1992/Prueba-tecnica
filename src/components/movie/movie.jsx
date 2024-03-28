import React from 'react'
import './movie.css'

export default function movie(props) {
  return (
    <div className="movie">
        <img className='movie__img' src='https://picsum.photos/id/22/200/300' alt="movie" />
        <h5 className='movie__title'>{props.title}</h5>
    </div>
  )
}
