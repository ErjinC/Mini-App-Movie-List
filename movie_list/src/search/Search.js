import React, {useState} from 'react'

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Movie"
        onChange={() => {
          setSearch(document.getElementById('searchbar').value)
        }}
        onKeyDown={(event) => {
          if(event.key === 'Enter') {
            window.location=`http://localhost:3000/search/${search}`
          }
        }}
      />
    </div>
  )
}

export default Search