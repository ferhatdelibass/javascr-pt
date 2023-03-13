// var x = 5;
// var y = 6;
// var z = x + y ;
// console.log(z)


// const price1 = 9 ;
// const price2 = 6 ;
// let total = price1 + price2 ;
// console.log(total)

// let x = 10;
// x = x + 5 ;
// console.log(x)

// const pi = 3.14 ;
// let person = "Ferhat";
// let person2 = 'Delibaş'
// console.log(person)

// var carName1;
// let carName2;
// carName2 = "Volvo"
// let carName3 = "Mercedes"
// console.log(carName1)

// let person = "Ahmet" , carName = "renoult" , price = 200 ;
// console.log(price)
// console.log(carName)

//let carName = "Volvo"
//let carName tekrar tanımlanamaz 

// var carName = "volvo"
// var carName = "reno"
// console.log(carName)

//tanımlamalar önce yapılır...
// let adres = "istanbul"
// adres = "ankara"

// let'in içinde olmazsa gözükmez (console.log)
// {
//     let a1 = 2;
//     console.log(a1)
// }


// var'ın dışında veya içinde olması önemli değil.

// {
//     var a1 = 3;
// }
// console.log(a1)
// let a1 = 3;
// {
//     let a1 = 5 ;
// }
// {
//     let a1 = 6;
//     console.log(a1)
// }


// carName = "audi"
// var carName;
// console.log(carName)

// const PI = 3.14 ;
// PI = 3 ;

//diziler 


// const cars = ["mercedes","volvo","bmw"]
// console.log(cars[0]);
// console.log(cars.length);

// cars.push("audi");
// console.log(cars)

// const cars = ["mercedes","volvo","bmw"]
// cars = ["toyota","volvo","bmw"];


//objeler

// const car = {
//     type: "Fiat",
//     model: "500",
//     color: "white",
//     cost: 1000
// }
// console.log(car)
// console.log(car.color)
// car.color = "red"
// console.log(car)
// car.owner = "Ferhat"
// console.log(car)

// aşağıdaki yanlıştır.
//  const car = {   
//       type: "Fiat",    
//       model: "500",     
//       color: "white",
//      cost: 1000
//      }
//      car = {
//         type:"volvo",
//         model:"EX60",
//         color:"red"
//      }



//  let car = {   
//       type: "Fiat",    
//       model: "500",     
//       color: "white",
//      cost: 1000
//      }
//      console.log(car)


    //  car = {

    //  }
    //  console.log(car)

    // eğer let ile yaparsak tüm veriyi istenmeyen 
    // şekilde değiştirebliriz.o yüzden tavsiye 
    // edilen const ile kullanmaktır.(array,object,function)

    // const a = 1 ;
    // {
    //     const a = 2 ;
    // }
    
    // console.log(a)

//bu ikisi de global değişkendir
   var isim = 1 ;
    isim2 = 2 ;

    //tek farkı değer atma zorunluluğudur.
 var isim3;
 isim4;