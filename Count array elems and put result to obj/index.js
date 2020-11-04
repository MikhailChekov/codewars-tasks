function count(array) {
    let obj = {};
    array.forEach(e => {
        if(!obj[e]) {
            obj[e] = 1;
        } else {
            obj[e]++;
        }
    })
    return obj;
}