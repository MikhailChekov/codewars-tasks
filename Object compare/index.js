function cakes(recipe, available) {
    let res = 0;
    let count = [];
   
    for (let val in recipe){

        if(Object.keys(available).includes(val)) {
            if( !(available[val] /recipe[val])){
                return res;
            } else{
                count.push(Math.floor(available[val] /recipe[val]))
            }
        } else {
            return res;
        }
    }

    // smallest int in arr
     return Math.min(...count);
  }