function bouncingBall(h,  bounce,  window) {
    let steps = 0;
    
    //check for error conditions before begin
    if (h < 0 || bounce < 0|| bounce > 1 || window > h) return -1;

    // 1 floor step
    while(h > window){
        steps++;
        h *= bounce;
        if(h > window) steps++;
    }

    //condition   -   if < 1 return -1 
    if(steps == 0) return -1;
  
    return steps;
}