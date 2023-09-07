/**
 * In ja function can have properties called call signatrures
 */


type Data = {
    description: string;
    (data: number):void;
}


function myFunc(someArgs: number){
    console.log(someArgs);
    
}

myFunc.description = "Its a miniature function";


function testFunc(f:Data){
    f(10);
}

