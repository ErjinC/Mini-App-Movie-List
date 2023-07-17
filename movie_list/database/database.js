const express = require('express');
const app = express();
const port = 8081;
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/', (request, response) => {
  response.status(200).send('Here are da movies!')
})

app.get('/movies', (request, response) => {
  const movies = [
    {title: 'The Protector'},
    {title: 'Drunken Master'},
    {title: 'Ong Bak'},
    {title: 'The Raid'},
    {title: 'The Rebel'},
    {title: 'Ip Man'}
  ]
  response.status(200).send(movies)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})