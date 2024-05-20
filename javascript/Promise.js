let promise = new Promise(function(resolve , reject){
    setTimeout(()=> resolve("issue resolved"),1000)
})

promise.then((result)=> console.log(result))