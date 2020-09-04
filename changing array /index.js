const list = (names) => {
  
  let startData = [], endData = [], resultData = '';
  
  if(names.length > 2){
    names.forEach(item => {
      startData.push(item.name);
    })
    endData = [startData[startData.length -2], startData[startData.length -1]];
    endData = endData.join(' & ');
    startData.splice(startData.length - 2, 2);
    startData = startData.join(', ');
    
    return resultData = `${startData}, ${endData}`;

  }else if(names.length === 2){

    return `${names[0].name} & ${names[1].name}`;

  }else if(names.length === 1){

    return names[0].name;

  }else{
    
    return '';
    
  } 
}