import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { fetchMovieSearchData, MovieSearchData } from '../utils/api'
import { Grid, GridItem, Card, CardBody } from '@patternfly/react-core'
import './movieCard.css'


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

   /*
   //Score rating colour system
   const scoreColour = 'orange'
   function scoreColourGrade() {
     if (movie.results[0].vote_average >= 7) {
        let scoreColour = 'green'
     } else if (movie.results[0].vote_average >= 4 && movie.results[0].vote_average < 7) {
        let scoreColour = 'orange'.toString
     } else if (movie.results[0].vote_average < 4) {
        let scoreColour = 'red'.toString
     } else {
        let scoreColour = 'gray'.toString
     }
   }
   */
    return <Card>
       <CardBody>
            <Grid>
               <GridItem className="gridItem" span={4} rowSpan={3}><img width="100%" height="100%" src={posterImage}/></GridItem> 
               <GridItem className="gridItem" span={4}>Title: {movie.results[0].title}</GridItem>
               <GridItem className="gridItem" span={4}>Genre: {movie.results[0].genre_ids}</GridItem>
               <GridItem className="gridItem" span={4}>Users Watched: {movie.results[0].popularity}</GridItem>
               <GridItem className="score" span={4}>
                  Score: {movie.results[0].vote_average}
                  </GridItem>
            </Grid>
         </CardBody>
      </Card>
}
export default MovieCard