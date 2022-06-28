import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { fetchMovieSearchData, MovieSearchData } from '../utils/api'
import { Grid, GridItem, Card, CardBody, CardTitle, Banner } from '@patternfly/react-core'
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
   
   //Score rating colour system
   var scoreColour = 'orange'
   function scoreColourGrade() {
     if (movie.vote_average >= 7) {
         console.log('green')
        return scoreColour = 'green'
     } else if (movie.vote_average >= 4 && movie.vote_average < 7) {
         console.log('orange')
         return scoreColour = 'orange'
     } else if (movie.vote_average < 4) {
         console.log('red')
         return scoreColour = 'red'
     } else {
         console.log('gray')
         return scoreColour = 'gray'
     }
   }
   const posterImage = "https://image.tmdb.org/t/p/original" + movie.poster_path
   scoreColourGrade()
    return <Card>
       <CardBody>
            <Grid>
               <GridItem className="gridItem" span={4} rowSpan={3}><img width="100%" height="100%" src={posterImage}/></GridItem> 
               <GridItem className="CardTitle" span={8} >Title: {movie.title}</GridItem>
               <GridItem className="gridItem" span={4}>Genre: {movie.genres[0].name}</GridItem>
               <GridItem className="gridItem" span={4}>Users Watched: {movie.popularity}</GridItem>
               <GridItem className="score" span={8} >
                  <Banner id="scoreBox">Score: {movie.vote_average}</Banner>
                  </GridItem>
            </Grid>
         </CardBody>
      </Card>
}
export default MovieCard