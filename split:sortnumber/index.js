const n = (n) => {
    return Number(String(n).split('').map(i=>Number(i)).sort((a,b)=> b-a).join(''));
};