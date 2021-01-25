function orderWeight(str) {

    let concArr = [];
    let nums = str.split(' ').map(e => e.trim()).filter(e => e !== '').sort();
    let changedNums = nums.map(e => e.split('').map(e => Number(e)).reduce((ac, e) => ac + e));
    nums.forEach((e, i)=> {
        concArr.push({
            num: e,
            modNum: changedNums[i]
        })
    });
    concArr.sort((a, b) => {
        if(a.modNum === b.modNum){
            if(a.num < b.num){
                return -1;
            }
            if(a.num > b.num){
                return 1;
            }
            return 0;
        }else{
            return a.modNum - b.modNum;
        }
    });

    return concArr.map(e => e.num).join(' ');
}