function solve(s){
    let numArr = [],
    singleNum = [];

    s.split('').forEach((e,i) => {
        if(!isNaN(+e)){
            console.log(e, 'element')
            singleNum.push(e);
            if(!numArr[++i]){
                numArr.push(singleNum.join(''));
            }
        }else{
            if(singleNum.length){
                numArr.push(singleNum.join(''));
                console.log((singleNum));
                singleNum = [];
            }
        }
    });
    return +numArr.sort((a,b)=> b-a)[0];
};

