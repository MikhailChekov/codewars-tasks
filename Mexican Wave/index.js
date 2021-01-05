function wave(str) {
    return str.split('').map((e, i, arr) => {
        if (arr[i] !== ' ') {
            let copy = arr.concat();
            copy = copy.map(e => e.toLowerCase());
            copy[i] = copy[i].toUpperCase()
            return copy.join('');
        }
    }).filter(e => e)
}