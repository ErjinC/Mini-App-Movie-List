import React, {useEffect, useState} from 'react'

const List = () => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8081/movies`)
      .then(response => response.json())
      .then(data => setMovies(data))
  }, [movies])

  return (

    <div>
      <p>{movies[0].title}</p>
      <p>{movies[1].title}</p>
      <p>{movies[2].title}</p>
      <p>{movies[3].title}</p>
      <p>{movies[4].title}</p>
      <p>{movies[5].title}</p>
    </div>

  )
}

export default List;