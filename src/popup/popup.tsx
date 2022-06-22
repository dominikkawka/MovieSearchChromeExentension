import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { fetchMovieSearchData, MovieSearchData } from '../utils/api'
import MovieCard from '../movieCard/movieCard'

const App: React.FC<{}> = () => {

  return (
    <div><MovieCard title="Marvel"></MovieCard></div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
