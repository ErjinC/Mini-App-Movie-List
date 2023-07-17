const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development'])
const port = 8081;
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000'
}));

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})