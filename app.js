const express = require('express');
const url = require('url');
const querystring = require('querystring');

const app = express();

app.get('/', function(req, res){
  res.send('id: ' + req.query.id);
});

app.listen(3000, () => console.log("API Server is running..."))