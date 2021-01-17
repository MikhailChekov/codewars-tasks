var moveZeros = function (arr) {
    let count = 0;
    let res = [];

   arr.forEach(e => {
        if(e === 0){
            count++
        }else{
            res.push(e);
        }
    });
    let newArr = new Array(count).fill(0);
    arr = res.concat(newArr);
    return arr;
}