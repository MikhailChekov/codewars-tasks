function high(x){
    const a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arr = [];
    x.split(' ').forEach(e => {
        let sum = e.split('').reduce((acc, e) => {
            return acc + a.indexOf(e);
        }, 0);
       
        arr.push([sum, e]);
    });
    return arr.sort((a, b) => {
        if (a[0] > b[0]) {
            return -1;
          }
          if (a[0] < b[0]) {
            return 1;
          }
          return 0;
    })[0][1];
}