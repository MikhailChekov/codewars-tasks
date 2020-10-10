// answer

function slowLoop(items, loopBody) {
  let i = 0;
  
  if (i > items.length) {
    return loopBody(items, i, loopBody);
  } else {
    return new Promise((resolve) => {});
  }
}

// Thats how i test :)
/*
function slowLoop(items, loopBody) {
  let i = 1;
  return loopBody(items, i, loopBody);
}

function loopBody(arr, i, callback) {
  return new Promise((resolve) => {
    if (i <= arr.length) {
      return setTimeout(() => {
        console.log(`item number ${i} is ${arr}`);
        i++;
        resolve(callback(arr, i, callback));
      }, 1000);
    } else {
      return resolve();
    }
  });
}

slowLoop([1, 2, 3], loopBody).then(() => {
  console.log('Done loop!');
});
*/
