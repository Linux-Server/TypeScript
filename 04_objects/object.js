"use strict";
//how to pass an object as a parameter to a function in ts
exports.__esModule = true;
var user = {
    names: "Sachin",
    age: 20
};
function createUser(_a) {
    var string = _a.names, number = _a.age;
    console.log(age);
}
createUser({ names: "siya", age: 77 });
