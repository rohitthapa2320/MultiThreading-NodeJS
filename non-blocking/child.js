process.on('message', message => {
  const response= getFibonacci(message.number);
  process.send(response);
  process.exit();
})


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