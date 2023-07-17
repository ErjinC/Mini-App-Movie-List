import React, {useState} from 'react'

const AddMovie = () => {
  const [createMovie, setCreateMovie] = useState('')

  return (
    <div>
      <input
        type="text"
        id="create"
        placeholder="Add a Movie"
        onChange={() => {
          setCreateMovie(document.getElementById('create').value)
        }}
        onKeyDown={(event) => {
          if(event.key === 'Enter') {
            if (createMovie !== '') {
              const init = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify([{title: createMovie}])
              };

              fetch('http://localhost:8081/', init)
                // .then(response => response.json())
                .then(data => console.log(data))
                .catch((error) => console.error('Error:', error))
                .then(() => (window.location=`http://localhost:3000/`))
            } else {
              alert('The Textbox is Empty!')
            }
          }
        }}
      />
    </div>
  )
}

export default AddMovie