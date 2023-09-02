"use strict";
//how to pass an object as a parameter to a function in ts
exports.__esModule = true;
var user = {
    names: "Sachin",
    age: 20
};
//object as input and output from a function
function createUser(data) {
    console.log(data.age);
    return data;
}
//object with optional parameter
var optionalParams = function (data) {
    console.log(data);
};
optionalParams({ names: "killer" });
optionalParams({ names: "killer", age: 66 });
createUser(user);
