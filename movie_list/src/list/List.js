import React from 'react'

const List = () => {
  const movies = [
    {title: 'The Protector'},
    {title: 'Drunken Master'},
    {title: 'Ong Bak'},
    {title: 'The Raid'},
    {title: 'The Rebel'},
    {title: 'Ip Man'}
  ]
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