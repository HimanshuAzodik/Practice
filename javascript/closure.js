function outer(){
    let x = 10;

    return function(){
        x+=1;
        return x;
    }

}


 let ans =  outer();

 console.log(ans());
 console.log(ans());
 console.log(ans());