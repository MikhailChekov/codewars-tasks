function createPhoneNumber(n){
  let str = '(';
  n.forEach((e, i)=> {
    if(i === 3)  e = ') ' + e;
    if(i === 5) e = e +'-';
    str +=e;
  });
  return str;
}