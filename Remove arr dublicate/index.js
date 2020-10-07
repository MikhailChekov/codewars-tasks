const uniqueInOrder = (iterable) => {
    if(typeof iterable === 'string'){
        return iterable.split('').filter((i, p, arr) => {
        return i !== arr[++p];
      });
    }else{
      return iterable.filter((i, p, arr) => {
        return i !== arr[++p];
      });
    }
}