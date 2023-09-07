/**
 * In ja function can have properties called call signatrures
 */
function myFunc(someArgs) {
    console.log(someArgs);
}
myFunc.description = "Its a miniature function";
function testFunc(f) {
    f(10);
}
