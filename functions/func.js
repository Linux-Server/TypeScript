"use strict";
exports.__esModule = true;
function printHello(s) {
    console.log(s);
}
function passFunc(f) {
    f("Hello Boss");
}
passFunc(printHello);
