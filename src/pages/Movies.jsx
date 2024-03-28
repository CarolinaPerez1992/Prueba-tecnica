import React from 'react'
import MoviesSection from '../components/MoviesSection/MoviesSection'
import data from '../data/sample.json'
import Movie from '../components/movie/movie'

export default function Movies() {
  return (
        <MoviesSection>
          {data.entries.map(movie=>
            <Movie 
                  key={movie.title}
                  img={movie.images.PosterArt.url}
                  title={movie.title}
            />
          )}
        </MoviesSection>
  )
}
