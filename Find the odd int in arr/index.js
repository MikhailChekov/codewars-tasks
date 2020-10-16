function findOdd(arr) {
    arr.sort();
    for(const e of arr){
        newArr = arr.filter(el => e === el);
        if(newArr.length % 2 === 1) return e; 
    }
}