//Almost working, code length is too high + some test incorrect

const moonRating = rating => {
    if(rating > 10) return;
    let res = '';
    let pos = String(Math.round(rating * 2/4));
    let neg = String(5 - (Math.round(rating * 2/4)));


    if(pos.length > 1){
        let p = Number(pos.split('.')[0]);
        for(let i = 0; i < p; i++){
            res += 'o';
        }
        res += 'c';
        let n  = Number(neg.split('.')[0]);
        for(let i = 0; i < n; i++){
            res += 'x';
        }

    } else {
        let p = Number(pos);
        for(let i = 0; i < p; i++){
            res += 'o';
        }
        let n  = Number(neg);
        for(let i = 0; i < n; i++){
            res += 'x';
        }
    }
    return res;
}

console.log(moonRating(1.5));


//'ooocx'