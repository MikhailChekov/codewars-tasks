function isPangram(s){
    const a = 'abcdefghijklmnopqrstuvwxyz'
    return a.toLowerCase().split('').every(e => s.toLowerCase().includes(e));
}