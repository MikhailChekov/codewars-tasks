function removeBMW(str) {
    function strError(message) {
        this.message = message;
    }
    if (typeof str !== 'string') throw new strError('This program only works for text.');

    return str.split('').filter( e => {
        return ( e !== 'b' && e !== 'w' && e !== 'm' && e !== 'B' && e !== 'W' && e !== 'M');
    }).join('');
}

