const createUser = (data: Person, method:"GET")=>{
    console.log(data);
}

interface Person{
    name:string,
    age:number

}

const myObj = {name:"Sachin", age:28, method:"GET"};


createUser(myObj, myObj.method as "GET");

export{}

