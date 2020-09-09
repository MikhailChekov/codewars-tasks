function race(v1, v2, g) {
    if(v1 >= v2) return null;
    
    let res = g/(v2 - v1);
    
    res = res * 60 * 60;
    let hours = Math.floor((res / (60 * 60)));
    res = res - (hours * 60 * 60);
    let minutes = Math.floor((res / 60));
    res = res - (minutes * 60);
    let seconds = Math.round(res);
    
    return [hours, minutes, seconds];
    
  }