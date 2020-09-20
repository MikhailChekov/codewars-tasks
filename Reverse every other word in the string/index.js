function reverse(str){
    let arr = str.split(' ');
    
    for (let i = 1; i <= arr.length; i = i+2) {
       let el = arr[i]; 
       arr[i] = el.split('').reverse().join('');
    };
    return arr.join(' ');
}