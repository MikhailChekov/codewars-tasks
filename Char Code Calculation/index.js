function calc(x) {
    const total1 = x.split('').reduce((ac, e) => {
        ac += e.charCodeAt(0);
        return ac;
    }, '').split('');
    const total2 = total1.map(e => {
        if (e === '7') {
            e = '1';
        }
        return e;
    });

    return total1.reduce((ac, e) => ac + Number(e),0) -
    total2.reduce((ac, e) => ac + Number(e),0)
}

console.log(calc('abcdef'));