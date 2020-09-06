function calculateYears(principal, interest, tax, desired) {
  
    if(desired <= principal) return 0;
    
    let years = 0;
    let middleSum = principal;

    //1 year loop
    while(middleSum <= desired){
        // calculate year profit
        let profit = (middleSum * interest)
        // calculate tax
        let taxForYear = profit * tax;
        // apply tax for a year profit
        profit -= taxForYear;
        // calculate full year profit
        middleSum += profit;

        years++;
    }

    return years;
      
}

console.log(calculateYears(1000,0.01625,0.18,1200));