function squareDigits(num){
    return Number(String(num).split('').map(e => String(Math.pow(+e,2))).join(''));
}