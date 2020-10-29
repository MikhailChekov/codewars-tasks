function spinWords(str) {
    return str.split(' ').map(e => {
        return (e.length >= 5) ? [...e].reverse().join('') : e;
    }).join(' ');
}