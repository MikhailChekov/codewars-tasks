let number = function (busStops) {
  return busStops.reduce((accum, cur) => {
   return accum + (cur[0] - cur[1]);
  },0);
};

console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
