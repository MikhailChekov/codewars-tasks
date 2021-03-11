//TODO: complete kata

function checkConcatenatedSum(num, times) {
  
  let numArr = String(num).split('').map(e => Number(e.repeat(times)));
  numArr.reduce((ac, e) => ac + e, 0);

}

// checkConcatenatedSum(2997,3) true
// checkConcatenatedSum(-2997,3) true

// https://www.codewars.com/kata/59a1ec603203e862bb00004f/train/javascript