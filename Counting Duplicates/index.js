function duplicateCount(text){
    let dupl = 0;
    let arr = [];
    text = text.split('').map(e => e.toLowerCase());
    text.forEach(e => {
      if((text.join('').match(new RegExp(e, "g"))||[]).length > 1 && !arr.includes(e)){
        dupl++;
        arr.push(e);
      }
    })
    return dupl;
  }