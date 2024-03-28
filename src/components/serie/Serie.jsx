import React from 'react'
import './serie.css'

export default function Serie(props) {
  return (
    <div className="serie">
        <img className='serie__img' src='https://picsum.photos/id/22/200/300' alt="movie" />
        <h5 className='serie__title'>{props.title}</h5>
    </div>
  )
}
