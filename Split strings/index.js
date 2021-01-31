function solution(str){
    if(str.length % 2 === 0){
        return str.match(/.{1,2}/g)
    } else {
        return str.match(/.{1,2}/g).map((e, i , arr) => {return  i === arr.length - 1 ? e += '_' : e })
    }
}