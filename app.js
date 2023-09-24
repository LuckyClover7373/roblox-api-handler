const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/', function(req, res){
  let output;

  try {
    const query = req.query.q;

    const response = fetch(decodeURI(query));

    output = {"result": "success", "response": response};
  }
  catch(e) {
    output = {"result": "error", "error": "Unable to fetch. Name: " + e.name + ", Message: " + e.message};
  }
  res.send(output);
});

app.listen(3000, () => console.log("API Server is running..."));