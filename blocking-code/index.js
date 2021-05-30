const express = require('express');

const app = express();

app.get('/fibonacci', (req,res) => {
  const response = getFibonacci(parseInt(req.query.number));
  res.send(response);
});

function fibonacci (n){
  if(n == 0)
    return 0;
  if(n == 1)
    return 1;
  return fibonacci(n-2)+fibonacci(n-1);
}

function getFibonacci(number){

  const ans= fibonacci(number);

  return {
    number,
    "Fibonacci Number" : ans
  }
}

app.listen(3000, () => console.log("Server running"));