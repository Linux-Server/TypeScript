type Data = (s:string)=> void; // type alias


function printHello(s:string){
    console.log(s);
}

function passFunc(f: Data){
    f("Hello Boss");
}

passFunc(printHello);

export{

}