
function add(num: number):number{
    return num +10;
}

function getUpper(str:string):string{
    return str.toUpperCase()
}


//return type for normal function
function getStatus(status: boolean): boolean{
    return status;
}


// return type for arrow function
let loginUser = (emali:string, password:string, status:boolean) : number=>{

    return 10;

}

// when u return nothing u should annote the void return tyoe

function consoleError(error:string): void{
    console.log('nothing..');
}



const createUser = (name:string, age?:number)=>{
    console.log(name);
}

// ? operatoracception optional parameter of  age
createUser("sam");

add(22);
getUpper("sam");
getStatus(true);
loginUser("sam","ray", getStatus(true));

export {}