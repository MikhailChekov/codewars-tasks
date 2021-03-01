// write the function isAnagram
var isAnagram = function (test, original) {
  test = test.split('').map(e => e.toLowerCase()).sort().join('');
  original = original.split('').map(e => e.toLowerCase()).sort().join('');

  return original === test;
 
};

console.log(isAnagram('Buckethead', 'DeathCubeK'));