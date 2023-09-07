function printHello(s:string){
    console.log(s);
}

function passFunc(f: (s:string)=>void){
    f("Hello Boss");
}

passFunc(printHello);