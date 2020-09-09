const binaryArrayToNumber = arr => {
    let str = arr.join('');
    let digit = parseInt(str, 2);
    
    return digit;
  };