// TODO: some test with error

function longestConsec(arr, k) {
    let trArr = Object.entries(Object.assign({}, arr));
    trArr.sort((a, b) => {
        if(a[1].length > b[1].length){
            return -1;
        } else {
            return 1;
        }
        return 0;
    });
    trArr = trArr.slice(0, k).sort((a,b) => {
        if(a[0] < b[0]){
            return -1;
        } else {
            return 1;
        }
        return 0;
    });

    return trArr.map(e => e[1]).join('');
}

console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));