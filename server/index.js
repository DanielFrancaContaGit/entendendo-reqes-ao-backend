const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', ( req, res ) => {
  res.send('você usou um get');
});

app.post('/',(req,res) => {
  res.send('você usou um post');
});

app.listen(3001);