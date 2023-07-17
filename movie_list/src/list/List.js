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
            <>
              <p>{movie.title}</p>

              <button
                type='button'
                onClick={() => {
                  fetch(`http://localhost:8081/movies/${movie.id}`, {method: 'DELETE'})
                  // .then(() => alert('Deleted Movie!'))
                  .catch((error) => console.error('Error:', error))
                }
              }>
                Delete Movie
              </button>
            </>
          )
        })}
      </div>
    )
  }
}

export default List;