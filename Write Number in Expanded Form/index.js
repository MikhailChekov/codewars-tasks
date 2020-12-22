function expandedForm(num) {
    let numb = [];
    let deg = 0;
    const len = num.toString().length

    for(let i = 0; i <= len; i++){
        let last = num % 10;
        
        if(last > 0){
            num -=last;
            if(deg > 0){
                last = last * (10 ** deg);
            }
            numb.push(last.toString());
        }
        deg++;
        num = num / 10;
    }
    return numb.reverse().join(' + ');
  }