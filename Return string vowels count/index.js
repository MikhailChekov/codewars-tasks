function getCount(str) {
  let vovels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;
  let arr = str.split('');
  
  for(let i = 0; i < arr.length; i++){
    vovels.forEach((item) => {
       if(arr[i] === item){
         vowelsCount++;
       }
    });
  }

  return vowelsCount;
}

console.log( getCount("abracadabra"));