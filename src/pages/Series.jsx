import React from 'react'
import Serie from '../components/serie/Serie'
import SeriesSection from '../components/seriesSection/SeriesSection'
import data from '../data/sample.json'

export default function Series() {
    return (
        <SeriesSection>
            {data.entries.map(serie=>
                <Serie 
                    key={serie.title}
                    img={serie.images.PosterArt.url}
                    title={serie.title}
                />
            )}
            </SeriesSection>
    )
}
