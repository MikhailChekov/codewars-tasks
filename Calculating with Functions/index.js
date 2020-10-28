function zero(f) {
    const val = 0;
   return f ? f(val) : val;
}
function one(f) {
    const val = 1;
   return f ? f(val) : val;
}
function two(f) {
    const val = 2;
   return f ? f(val) : val;
}
function three(f) {
    const val = 3;
   return f ? f(val) : val;
}
function four(f) {
    const val = 4;
   return f ? f(val) : val;
}
function five(f) {
    const val = 5;
   return f ? f(val) : val;
}
function six(f) {
    const val = 6;
   return f ? f(val) : val;
}
function seven(f) {
    const val = 7;
   return f ? f(val) : val;
}
function eight(f) {
    const val = 8;
   return f ? f(val) : val;
}
function nine(f) {
    const val = 9;
   return f ? f(val) : val;
}
function plus(b) {
    return (a => Math.floor(a + b));
}
function minus(b) {
    return (a => Math.floor(a - b));
}
function times(b) {
    return (a => Math.floor(a * b));
}
function dividedBy(b) {
    return (a => Math.floor(a / b));
}

console.log(four(plus(nine())));