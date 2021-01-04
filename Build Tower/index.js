function towerBuilder(nFloors) {
  let length = nFloors * 2 - 1;
  let res = [];
  let floor = '';

  //create arr with elems 
  for(let i = 0; i < length; i++) {
    floor += '*';
    if(i % 2 === 0){
        res.push(floor);
    }
  }
  // add space to elems
  return res.map((e, i, arr) => {
    let len = arr[arr.length -1].length;
    let spaceLen = (len - e.length)/2;
    if(spaceLen > 0){
        let space = '';
        for(let b = 0; b < spaceLen; b++){
            space += ' ';
        }
        e = space + e + space;
    }
    return e;
  });
}