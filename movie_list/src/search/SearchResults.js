import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const SearchResults = () => {
  const { search } = useParams();
  const [movies, setMovies] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8081/search/${search}`)
      .then(response => response.json())
      .then(data => setMovies(data))
  }, [movies, search])

  if(movies !== '') {
    return (
      <div>
        {movies.map(movie => {
          return (
            <p>{movie.title}</p>
          )
        })}
      </div>
    )
  }
}

export default SearchResults