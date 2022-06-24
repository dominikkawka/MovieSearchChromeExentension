import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { fetchMovieSearchData, MovieSearchData } from '../utils/api'
import MovieCard from '../movieCard/movieCard'
import { TextInput } from '@patternfly/react-core'

const App: React.FC<{}> = () => {

  const [movieInput, setMovieInput] = useState<string>('')
  return (
    <div>
      <TextInput id="searchBar" iconVariant="search" value={movieInput} onChange={(event) => setMovieInput(event)}/>
      <MovieCard title={movieInput}></MovieCard>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
