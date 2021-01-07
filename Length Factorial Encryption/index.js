function decrypt(message, key)
{
    message = message.split('');
    let arr = key.split('[')[1].split(']')[0].split('-').map(e => Number(e));
    let rubLen = Number(key.split('[')[0].split('p')[1]);
    let res = [];
    arr.forEach((e, i) => {
        res.push({num:e, el: message[i]});
    });
    
    // res = res.sort((a, b) => a.num - b.num);
    // console.log(res)
    // res = res.reverse().slice(rubLen).reverse();
    // return res.map(e => e.el).join('');
    
}

// console.log(decrypt("snes@%jhrjsrawedoc", "p10[18-17-16-15-14-13-12-11-10-9-8-7-6-5-4-3-2-1]"))
console.log(decrypt("psrteeto c", "p0[7-8-1-9-2-5-10-3-6-4]"))
// codewars
//top secret