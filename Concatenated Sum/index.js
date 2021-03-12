function checkConcatenatedSum(num, times) {

  num = Math.abs(num);
  
  let numArr = String(num).split('').map(e => Number(e.repeat(times)));
  return num === numArr.reduce((ac, e) => ac + e, 0);

}

// https://www.codewars.com/kata/59a1ec603203e862bb00004f/train/javascript