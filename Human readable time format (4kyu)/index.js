function formatDuration(int){
    if(!Math.sign(int)) return 'now';
    if( int === 1 ) return '1 second';

    let res = { };
    let resultStr = '';

    const time = {
        year : 365 * 24 * 60 * 60,
        day : 24 * 60 * 60,
        hour : 60 * 60,
        minute: 60, 
        second : 1,
    } 

    for (let item in time){
        if(int >= time[item]){
            res[item] = Math.floor(int/time[item]);
            int -= res[item] * time[item];
        }
    }

    console.log(res);

    for (let item in res){

        switch (item) {
            case 'year':
                resultStr = `${res[item]} ${item}${res[item] > 1 ? 's' : ''}`;
                break;
            case 'day':
                if(resultStr){
                    resultStr += `, ${res[item]} ${item}${res[item] > 1 ? 's' : ''}`;
                }else{
                    resultStr = `${res[item]} ${item}${res[item] > 1 ? 's' : ''}`;
                }
                break;
            case 'hour':
                if(resultStr){
                    resultStr += `, ${res[item]} ${item}${res[item] > 1 ? 's' : ''}`;
                }else{
                    resultStr  += `${res[item]} ${item}${res[item] > 1 ? 's' : ''}`;
                }
                break;
            case 'minute': 
                if(!res.second && resultStr){
                    resultStr += ` and ${+res[item]} ${item}${res[item] > 1 ? 's' : ''}`;
                } else if (res.second && resultStr){
                    resultStr += `, ${+res[item]} ${item}${res[item] > 1 ? 's' : ''}`; 
                } else {
                    resultStr += `${+res[item]} ${item}${res[item] > 1 ? 's' : ''}`; 
                }
                break;
            case 'second': 
                if(resultStr) {
                    resultStr += ` and ${+res[item]} ${item}${res[item] > 1 ? 's' : ''}`;
                } else {
                    resultStr += `${int} seconds`;
                }
            default:
                break;
        }
    }

    return resultStr.trim();
}