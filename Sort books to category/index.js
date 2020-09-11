function stockList(listOfArt, listOfCat){
 
    let res = [];
    let splited = listOfArt.map(i => i.split(' '));
    if(splited.every(i => (+i[1]) === 0)) return '';
  
    for(let i = 0; i < listOfCat.length; i++){
      let el = listOfCat[i];
      let sum = 0;
      splited.forEach(item => {
        if(item[0][0] === el){
          sum += +item[1];
        };
      });
      res.push(`(${el} : ${sum})`);
    
    }
    return res.join(' - ');
  }