// union types allow to combine two or more types

const createPassword = (password: string | number) => {
    console.log(password);

}

createPassword(123);
createPassword("sachin");

// union type accept either object or string
const signUp = (details: {name:string, email:string} | string) =>{
   console.log(details);
}

signUp("sam");
signUp({name:"sam", email: "sam@gmil.com"});


const eitherChance = (input : string |number) => {
    // console.log(input.toUpperCase());        = > //you cant do like this, bcoz its a union

    if( typeof input === "string"){
        console.log(input.toUpperCase());
    }
}

eitherChance(200);
eitherChance("samray")


export{}