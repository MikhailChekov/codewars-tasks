function generateHashtag (str) {

    str = str.trim();
    if(str === '') return false;

    let res  = str.split(' ').map(el => el.trim()).filter(el => el !== '');
    res = res.map(el => el[0].toUpperCase() + el.slice(1)).join('');
    res = '#' + res;
     
    if(res.length > 140) {
        return false;
    } else {
        return res;
    }
}