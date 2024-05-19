function greet(name){
    console.log("hello" ,name);
} 

function Userinput(){
    let name = prompt("enter your name");
    return greet(name);
}


Userinput(greet); 