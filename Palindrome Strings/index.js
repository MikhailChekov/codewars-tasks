function isPalindrome(line) {
    line = String(line);
    line = line.split('');
    let res = true;
    let length = line.length % 2 !== 0 ? line.length - 1 : line.length;

    for(let i = 0; i <= length; i ++){
        if(line[i] !== line[line.length - 1 - i]) res = false;
    }
    return res;

}

console.log(isPalindrome(123321));