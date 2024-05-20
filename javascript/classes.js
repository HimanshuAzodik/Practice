// class car{
//     constructor(name , year){
//         this.name = name;
//         this.year = year;
//     }
// }


// const car1 = new car("audi", 2022);
// const car2 = new car("mercidies", 2024);

// console.log(car1);
// console.log(car2);



// Class inheritance

class Animals {
    alive = true;
    eat(){
        console.log(`this ${this.name} can eat`);
    }

    sleep(){
        console.log(`this ${this.name} can sleep`);
    }
}

class rabbit extends Animals{
    
}