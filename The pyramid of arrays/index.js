function pyramid(n) {
    let arr = [];
    if(n < 1) return arr;
    for(let i = 0; i < n; i++){
      let insArr = [];
      for(let b = 0; b <= i; b++){
          insArr.push(1);
      }
      arr.push(insArr);
    }
    return arr;
}