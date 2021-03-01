// Return an array
function fizzbuzz(n)
{
  let arr = [];

  for(let i = 1; i <= n; i++){
    arr.push(i);
  }

  arr.map(e => {
    if(e % 3 === 0 && e % 5 === 0){
      return 'FizzBuzz';
    }
    if(e % 5 === 0){
      return 'Buzz';
    }
    if(e % 3 === 0){
      return 'Fizz';
    }

    return e;

  })
}

fizzbuzz(5);
