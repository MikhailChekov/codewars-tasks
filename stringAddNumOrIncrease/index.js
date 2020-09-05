function incrementString (string) {
    let arr = string.split('');
    let countZero = 0;
    let allZero = false;

    if(string == "") return "1";
    //checking for start Numbers in a strArraying
    let numInd = arr.findIndex((item,i) => {
      let elem = Number(item);
      return !isNaN(elem);
    });

    if(numInd !== -1){
      let numArray = arr.splice(numInd);
      let strArray = arr.splice(0, numInd).join('');  
      
      // saving Zero to numbers start
      numArray.forEach(item => {
        if(+item === 0) ++countZero;
      });

      //checking for all zeros
      allZero = numArray.every((item)=>{
        return +item === 0;
      });
      if(allZero === true){
        countZero--;
      }

      // checking for 9 last number
      if(numArray[numArray.length - 1] == 9){
        countZero--;
      }
    
      numArray = numArray.join('');
      +numArray;
      numArray++;
      numArray = numArray.toString();

      // adding Zeros to start of NumArray
      if(countZero > 0){
        for(let i = 0; i < countZero; i++){
          numArray = "0" + numArray;
        }
      }

      strArray+=numArray

      return strArray;

    }else{
      return string + 1;
    }
}
