'use strict';

// const bookings = [];

// const createBooking = function(
//   flightNum,
//   numPassengers=1,
//   price=199*numPassengers,){
  
//   //ES5
//   // numPassengers = numPassengers||1;
//   // price=price||199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// // How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const jonas= {
//   name:'jonas Sc',
//   passport:23445
// }
// const checkIn = function(flightNum,passenger){
// flightNum = 'LH999';
// passenger.name = 'Mr.' + passenger.name;
// if(passenger.passport == 23445){
//   alert('CheckIn')
//   }
//   else{
//     alert('Wrong Message')
//   }
// }
// checkIn(flight,jonas)
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//JS use callback
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);


// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };
// document.body.addEventListener('click', high5);

// //fun returning fun
// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`);
//   }
// }
//  const greeterHey= greet('Hey');
//  greeterHey('Jonas');
//  greeterHey('Steven');

//  // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas');

// const lufthansa={
//   airline:'Lufthansa',
//   iataCode:'LH',
//   bookings:[],
//   book(flightNum,name){
//   console.log(`${name} booked a seat on ${this.airline}
//   flight ${this.iataCode}${flightNum}`);
  
//   this.bookings.push({flight:`${this.iataCode}${flightNum}`,name})
//   }

// }
// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = lufthansa.book;

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// //Blind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);


// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));



// ///////////////////////////////////////
// // Coding Challenge #1

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

// registerNewAnswer(){
//   const input = Number( 
//     prompt(`${this.question}\n ${this.options.join('\n')}\n (Write option number) `)
// );
// console.log(input);
// }

// }

// poll.registerNewAnswer();

// //Register answer
// typeof answer === 'number' && answer < this.answers.length
 

//IIFE
const runOnce = function(){
  console.log('This will never run again');
  var isPrivate = 23;
}
runOnce();

// (function (){
//   console.log('This will never run again');
// })();

// // console.log(isPrivate);

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(isPrivate);
// console.log(notPrivate);

//Closures
const secureBooking = function(){
  let passengerCount = 0;
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}
const booker = secureBooking();