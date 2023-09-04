//interface is same like Type is another way to name an object

interface Person {
    name:string,
    age:number
};

interface PersonOne extends Person{
    gender: string
}

const createUser = (data: PersonOne)=>{
  console.log(data);
}

createUser({name:"sam", age:12, gender:"male"});

export{}


