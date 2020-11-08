function persistence(num) {
    let count = 0;
    while(String(num).length !== 1) {
        count++;
        let arr = String(num).split('');
        num = arr.reduce((a, i) => {
            return Number(a) * Number(i);
        });
    }
    return count;
}