function divisors(int) {
    let arr = [];
    for(let i = 2; i < int; i++) {
      if(int % i === 0){
        arr.push(i);
      }
    }
    return arr.length ? arr : `${int} is prime`
  };