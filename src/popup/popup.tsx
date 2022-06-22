import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { fetchMovieSearchData, MovieSearchData } from '../utils/api'

const App: React.FC<{}> = () => {
  useEffect(() => {
    fetchMovieSearchData("Pokemon")
      .then((data) => {
        console.log(data) 
        console.log(data.results[0].title) //to return all results, do a for every number until results=result_total loop.
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div><img src="icon.png"/></div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
