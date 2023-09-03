//how to pass an object as a parameter to a function in ts

let user = {
    names:"Sachin",
    age:20
}

 //object as input and output from a function
function createUser(data: {names:string,age:number}): {names:string,age:number}{
    console.log(data.age);
    return data;
}

//object with optional parameter
//

const optionalParams = (data: {names:string, age?:number}) =>{
    console.log(data);
}

optionalParams({names:"killer"})
optionalParams({names:"killer", age:66})

createUser(user);

export{}