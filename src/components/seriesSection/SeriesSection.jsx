import React from 'react'
import './SeriesSections.css'

export default function SeriesSection(props) {
  return (
    <section className="series__section">
        <div className="series__title">
            <h1 >Popular Movies</h1>
        </div>
        <div className="series__container">
          {props.children}
        </div>
    </section>
  )
}
