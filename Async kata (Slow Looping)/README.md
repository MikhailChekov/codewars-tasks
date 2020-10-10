The task is to write a function that allows us to run an asynchronous function for each item in an array - the catch is, it must run the function sequentially - in other words, the asynchronous function for the first item must finish before the next one is started.

Rules...
Your function (slowLoop) will take 2 arguments:

The array to be looped over
A (loopBody) function - the function that is executed once for each item in the array.
The loopBody function must receive 3 arguments:

The current item in the array
The index of the current item in the array
A callback function that is called after the async task is finished, to trigger the next iteration in the "loop."
Your function (slowLoop) must return a Promise, which must be resolved only after all items in the array have been iterated.

Example
Given the below example, your slowLoop function should log each item to the console, waiting a full second between each one, and then log "done looping" after all items have been logged.

slowLoop([1,2,3], function(item, index, callback){
  setTimeout(()=>{
    console.log(`item number ${index} is ${item}`);
    callback(); 
   }, 1000)
}).then(()=>{
   console.log("done looping")
});