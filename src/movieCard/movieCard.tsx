import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { fetchMovieSearchData, MovieSearchData } from '../utils/api'
import { Grid, GridItem, Card } from '@patternfly/react-core'


const MovieCard: React.FC<{
   title: string,
}> = ({ title }) => {
   const [movie, setMovie] = useState<MovieSearchData | null>(null)
   useEffect(() => {
      fetchMovieSearchData(title)
        .then((data) => {
          setMovie(data) //to return all results, do a for every number until results=result_total loop.
        })
        .catch((error) => console.log(error))
    }, [title])

    if (!movie) {
       return <div>loading...</div>
    }

    const posterImage = "https://image.tmdb.org/t/p/original" + movie.results[0].poster_path
    //const loadPosterImage = (document.getElementById("poster") as HTMLImageElement).src = posterImage

    return <Card>
         <GridItem span={4} rowSpan={3}>{posterImage}</GridItem>
         <GridItem span={4}>Title: {movie.results[0].title}</GridItem>
         <GridItem span={4}>Score: {movie.results[0].vote_average}</GridItem>
       </Card>
}

export default MovieCard