function killer(suspectInfo, dead) {
  let res = '';
  for (let susp in suspectInfo) {
    if (suspectInfo.hasOwnProperty(susp)) {
      if (dead.every(e => {
        return suspectInfo[susp].includes(e);
      })) {
        res = susp;
      }
    }
  }
  return res;
}