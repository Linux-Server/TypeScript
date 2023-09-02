"use strict";
// union types allow to combine two or more types
exports.__esModule = true;
var createPassword = function (password) {
    console.log(password);
};
createPassword(123);
createPassword("sachin");
// union type accept either object or string
var signUp = function (details) {
    console.log(details);
};
signUp("sam");
signUp({ name: "sam", email: "sam@gmil.com" });
