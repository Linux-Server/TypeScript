/*
1.create a varibale with let or const or var
2. all the types should be lowercase
3. run any tsc file with command:  tsc filename.ts
4. which will generate a js file with the same name of ts file and that js file will contain the transpiled ts code


*/

//string type
let greeting:string ="Sachin"; //annote the type

let name = "Anju" // compiler will infer the type based on value

// number type
let hundered: number = 100; //there is not int or Float, only number exist

let ten:number = 10.6 // there no float

//boolean type
let status : boolean = true

console.log(greeting);

export{}