function openOrSenior(data){
  return data.map(e => {
    return e[0] > 54 && e[1] > 7 ? 'Senior' : 'Open';
  })
}