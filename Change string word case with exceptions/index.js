function titleCase(title, minorWords) {
    if(title.length < 1) return '';

    let arrChanging = title.toLowerCase().split(' ');
  
    if(typeof minorWords === "undefined" || minorWords.length < 1)
    return arrChanging.map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
  
    let arrTemplate = minorWords.toLowerCase().split(' ');
    let res = [];
    
    arrChanging.forEach(el => {
        if(arrTemplate.includes(el)){
            res.push(el);
        }else{
            res.push(el[0].toUpperCase() + el.slice(1));
        }
    });

    if(res[0].length > 1){
      res[0] = res[0][0].toUpperCase() + res[0].slice(1)
    }else{
      res[0] = res[0].toUpperCase()
    }
    return res.join(' ');

}

console.log(titleCase('the quick brown fox'));
