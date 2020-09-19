function kebabize(str){
    let arr = str.split('');
    
    let notStrInd = 0 ; let letterInd =  0;
    
    let notStr = [],
        upperPos = [];
    arr.forEach((el, i) => { 
        !isNaN(el) ? notStr.push(i) : null;
    })

    notStr.forEach((el) => {
        arr.splice(el + notStrInd ,1);
        notStrInd--;
    });

    arr.forEach((el, i) => { 
        el === el.toUpperCase() ? upperPos.push(i) : null;
    })

    upperPos.forEach((el) => {
        arr.splice(el + letterInd , 0, '-');

        letterInd++;
    });

    if(arr[0] === '-') arr.shift();

    return arr.map(i => i.toLowerCase()).join('');
  }