const FindFunction = function (func, arr) {
    return arr.filter(func.filter(e => typeof e === 'function')[0]);
};

console.log(FindFunction([(a=>a%2==0),9,3,1,0],[1,2,3,4]));