const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development'])
const port = 8081;
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.get('/', (request, response) => {
  response.status(200).send('Here are da movies!')
})

app.get('/movies', (request, response) => {
  knex('movies')
  .select('*')
  .then(data => response.status(200).send(data))
})

app.get('/search/:search', (request, response) => {
  let query = request.params.search;
  knex('movies')
  .select('*')
  .where('title', 'ilike', `%${query}%`)
  .then(data => response.status(200).send(data))
})

app.delete('/movies/:id', (request, response) => {
  let query = request.params.id
  knex('movies')
  .select('*')
  .where('id', query)
  .del()
  .then(data => {
    response.status(204).send('Movie was Deleted from the DB!')
  })
})

app.post('/', (request, response) => {
  const movieToAdd = request.body
  let newMovieId;
  console.log(request.body)

  knex('movies')

  .count('*')
  .where('title', 'ilike', movieToAdd[0].title,)
  .then (data => {
    if (data[0].count > 0) { //Checks duplicate
      console.log('Duplicate Entry!')
    } else ( //Adds new ID
      // knex('movies')
      // .select('*')
      // .then(data => {
      //   newMovieId = Number(data[0].id)+1
      //   while(newMovieId === movieToAdd[0].id) {
      //     newMovieId++
      //   }
      //   movieToAdd[0].id = newMovieId
      // })

      // .then(() => { //Performs the addition
        knex('movies')
        .select('*')
        .insert(movieToAdd)
        .then(data => response.status(201))
      // })
    )
  })

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})