'use strict';
//  function calcAge(birthYear){
//   const age = 2037-birthYear;
//   console.log(firstName);

//   function printAge(){
//     const output = `${firstName},You are ${age}, born in ${birthYear}
//     `
//     console.log(output); 
    
//     //block scope
//     if(birthYear >= 1981 && birthYear <=1996){
//       var millenial = true;
      
//       const str = `Oh ,and you are a millenial , ${firstName}`
//       console.log(str)

//       function add (a,b){
//         return a + b;
//       }

//     }
   // it will not access str beacause its block scope
    // console.log(str)
    //let and const are block block but var is not !! thatswhy blocked is ignored
//     console.log(millenial);
  
//   }
//  printAge();

//   return age;
//  }

//  const firstName = 'Jonas';
//  calcAge(1991);

//  Only inner scope can have access to the age so thatswhy age is not displayed it will show an error.
// console.log(age);


//varaibles
// console.log(me);
// console.log(job);
// console.log(year)

// var me = "Rajni";
// let job ="Student";
// const year = 1997;


// //functions

// console.log(addDecl(2,3));
// function addDecl (a,b){
//   return a +b;

// }
// const addExpr = function(a,b){
//   return a +b;
// };

// const addArrow = (a,b)=> a+b ;


//e.g

// var numProducts = 10;

// if(!numProducts) deleteShoppingCart()

// function deleteShoppingCart(){
//   console.log("All products deleted!!")
// }


// //def var,const,let

// var x = 1;//donot create property in window object
// let y = 2;
// const z = 3;

// console.log(x === window.x);


//window object

// console.log(window);

// const calcAge = function(birthYear){
// console.log(2037-birthYear);
// console.log(this);//undefined

// };

// calcAge(1991);

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   }}

// const mitilda = {
//   year:2017,
// };


// mitilda.calcAge = jonas.calcAge;
// mitilda.calcAge();  //20


// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//       // console.log(this);
//       console.log(2037 - this.year);

//       const isMillenial = function(){
//         console.log(this.year >=1981 && this.year <=1996);
//         isMillenial();
//       }
//     },
//   greet:()=>console.log(`Hey ${this.firstName}`)
  
//   }

//   jonas.greet(); //because can arrow function output will be undefined
//   jonas.calcAge();



// let age = 30;
// let oldAge = age ;
// age = 31;
// console.log(age);   //
// console.log(oldAge);


// const me = {
//     name:'Rajni',
//     age:27,
// }

// const friend =  me;
// friend.age = 27;
// console.log('Friend:',friend);
// console.log('Me',me);

//examples
//Primitive types
let lastName = 'Bala';
let oldLastName = lastName;
lastName = 'Balas';
console.log(lastName);
console.log(oldLastName);


//references types
const Raj = {
    name:'Jessica',
    lastName:'Williams',
    age:26,
}

const marriedJassica = Raj;
marriedJassica.lastName = 'Bala';
console.log('BeforeMarriage:',Raj);
console.log('AfterMaariage:',marriedJassica

)

// // marriedJassica = {}  Not possible

// //Copying objects
// const Raj2 = {
//     name:'Jessica',
//     lastName:'Williams',
//     age:26,
//     family:['Alice','Bob'],
// }

// const RajCopy = (Object.assign({},Raj2));
// RajCopy.lastName = 'Davis';
// console.log('BeforeMarriage:',Raj2);
// console.log('AfterMaariage:',RajCopy);

// RajCopy.family.push('Mary');
// RajCopy.family.push('John');

// console.log('AfterMaariage:',RajCopy);