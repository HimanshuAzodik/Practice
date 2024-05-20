async function GitubData(){
    let responce = await fetch("https://randomuser.me/api/");
    let user = await responce.json();
    return user;
}


GitubData()
.then((details)=> console.log(details))
.catch((error)=> console.log(error))