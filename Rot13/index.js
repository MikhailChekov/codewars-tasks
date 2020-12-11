function rot13(str) {
  const a = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let res = [];
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    let e = str[i];
    if (!isLetter(e)) {
      res.push(e);
      continue;
    } else {
      let flag = (e === e.toUpperCase()),
        el = '';
      e = e.toLowerCase();

      if (a.indexOf(e) + 13 > 25) {
        el = a[a.indexOf(e) - 13];
      } else {
        el = a[a.indexOf(e) + 13];
      };

      res.push(flag ? el.toUpperCase() : el);
    }
  }

  function isLetter(str) {
    reg = /[A-z]/i;
    return reg.test(str);
  }

  return res.join('');
}

console.log(rot13('abcdefghijklmnopqrstuvwxyz'));

//grfg