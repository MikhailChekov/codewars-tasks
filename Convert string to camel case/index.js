function toCamelCase(str){
    let sep = str.includes('_') ? '_' : '-';
  
    return str.split(sep).map((e,i)=> {
      return i > 0 ? (e[0].toUpperCase() + e.slice(1)) : e;
    }).join('');
}