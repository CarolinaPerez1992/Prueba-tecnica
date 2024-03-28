import React from 'react'
import './MoviesSection.css'

export default function MoviesSection(props) {
  return (
    <section className="movies__section">
        <div className="movies__title">
            <h1 >Popular Movies</h1>
        </div>
        <div className="movies__container">
          {props.children}
        </div>
    </section>
  )
}
