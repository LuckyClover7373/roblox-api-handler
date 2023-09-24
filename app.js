const express = require('express');
const fetch = require('node-fetch');

const app = express();

// const TERMINAL_LOG_LIMIT = 15;
// let logs = 0;

async function getData(url) {
  const response = await fetch(url);
  const jsonResponse = await response.json();

  // console.log(jsonResponse);
  return jsonResponse;
};

app.get('/', function(req, res){
  // if (logs === TERMINAL_LOG_LIMIT) {
  //   console.clear();
  //   logs = 0;
  // };

  let output;
  const query = req.query.q

  getData(decodeURIComponent(query))
  .then((response)=>{
    output = {"result": "success", "response": response};
    // console.log(output)
  })
  .catch((e)=>{
    output = {"result": "error", "error": "Unable to fetch. Name: " + e.name + ", Message: " + e.message};
  })
  .finally(()=>{
    res.send(output);
    // console.log("API result: " + JSON.stringify(output));
    // logs += 1;
  });
});

app.listen(3000, () => console.log("API Server is running..."));