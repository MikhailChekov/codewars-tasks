function maskify(cc) {
    if (cc.length < 5) return cc;
    let res = '';
    for (let i = 0; i < cc.length - 4; i++) {
        res += '#';
    }
    return res + cc.slice(cc.length - 4);
}
