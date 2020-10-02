function longest(s1, s2) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let str = s1 + s2,
    res = [];
    str = str.toLowerCase();
    arr_en.forEach(e => {
        if(str.includes(e)) res.push(e);
    });

    return res.join('');
}
