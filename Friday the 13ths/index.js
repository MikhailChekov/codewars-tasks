function fridayTheThirteenths(start, end) {
    const years = [];
    let period = null;
    let res = '';

    if(end > start){
        period = end - start;
    } else {
        period = start - end;
    }
    
    if(end) {
        for(let i = 0; i <= period; i++){

            for(let b = 1; b <= 12; b++){
                const date = `${b}/13/${start}`;
                const objDate = new Date(date);
                
    
                if(objDate.getDay() === 5){
                    res += `${date} `;
                }
            }
    
            start++;
        }
    }
    if(!end) {
        for(let b = 1; b <= 12; b++){
            const date = `${b}/13/${start}`;
            const objDate = new Date(date);
            

            if(objDate.getDay() === 5){
                res += `${date} `;
            }
        }
    }

    return res.trim();

}