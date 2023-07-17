import React, {useEffect, useState} from 'react'

const List = () => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8081/movies`)
      .then(response => response.json())
      .then(data => setMovies(data))
  }, [movies])

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

export default List;