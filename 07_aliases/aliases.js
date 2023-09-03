/**
 We’ve been using object types and union types by writing them directly in type annotations.
This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
A type alias is exactly that - a name for any type. The syntax for a type alias
 */
var createUser = function (user, other) {
    console.log(user.name);
};
createUser({ name: "sachin", age: 44 }, 22);
