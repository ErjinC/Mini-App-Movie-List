import React, {useState} from 'react'

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <input
        type="text"
        id="searchbar"
        placeholder="Search for a Movie"
        onChange={() => {
          setSearch(document.getElementById('searchbar').value)
        }}
        onKeyDown={(event) => {
          if(event.key === 'Enter') {
            if (search !== '') {
              window.location=`http://localhost:3000/search/${search}`
            } else {
              alert('Your Search is Empty!')
            }
          }
        }}
      />
    </div>
  )
}

export default Search