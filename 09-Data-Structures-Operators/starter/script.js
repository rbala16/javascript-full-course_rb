'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },


  orderDelivery:function({starterIndex=1,mainIndex=0,time='20:00',address}){
    console.log(`Order received !${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be 
  delivered to ${address} at ${time}}`);
  },

  orderPaste:function(ing1,ing2,ing3){
    console.log(`Here is ur delicious paste with ${ing1},${ing2},${ing3}`);
  },

    orderPizza:function(mainIngredient,...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


//challenge4

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click',function(){
//   const text = document.querySelector('textarea').value;
//  const rows = text.split('\n')
//  console.log(rows);

//  for (const [i, row] of rows.entries()) {
//   const [first, second] = row.toLowerCase().trim().split('_');

//   const output = `${first}${second.replace(
//     second[0],
//     second[0].toUpperCase()
//   )}`;
//   console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
// }
// });
// // Working With Strings - Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 8));

// console.log (airline.slice(0,airline.indexOf('')));
// console.log (airline.slice(airline.lastIndexOf('')+ 1));

// console.log (airline.slice(-2));
  
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat){
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
//   else console.log('You got lucky 😎');
// }
//   checkMiddleSeat('11B');
//   checkMiddleSeat('23C');
//   checkMiddleSeat('3E');

//   console.log(new String('jonas'));
//   console.log(typeof new String('jonas'));
//   console.log(typeof new String('jonas'));

//Part 2 string
// Working With Strings - Part 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// // Working With Strings - Part 3

// // Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard('334859493847755774747'));

// // Repeat
// const message2 = 'Bad waether... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);




// //Challenge 3
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1
// const events = [...new Set(gameEvents.values())];
// console.log(events)

// // 2.
// gameEvents.delete(64);

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }
// //Maps:Fundamentals
// const rest = new Map();
// rest.set('name','Rajni');
// rest.set(1,'Firenze','Italy');
// console.log(rest.set(2,'Lisbon,Portugal'));

// rest
// .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open',11)
// .set('close',23)
// .set(true,'We are open:D')
// .set(false,'We are closed:(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 8;
// console.log( rest.get(time>rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest.size);

// const arr = [1,2];
// rest.set(arr,'Test');
// console.log (rest);
// console.log(rest.get(arr));
// // rest.clear();
// // console.log(rest);


// //MAPS ITERATION

// const question = new Map([
//   ['question','What is the best programming langauge in the world?'],
//   [1,'C'],
//   [2,'Java'],
//   [3,'Javascript'],
//   ['correct',3],
//   [true,'Correct'],
//   [false,'try again'],
// ]);

// console.log(question);
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// //qUIZ APP
// console.log(question.get('question'));
// for(const [key,value] of question){
//   if(typeof key == 'number') console.log(`Answer ${key}: ${value}`);

// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// //Sets
// const orderSet = new Set ([
//   'Pizza',
//   'Pasta',
//   'Macroni',
//   'Risotto',
//   'Pizza',
// ]);

// console.log(orderSet); //all the duplicate are gone

// console.log(new Set('Jonas'));
// console.log(orderSet.has('Pizza'));
// orderSet.add('pp') ;


// // orderSet.clear();
// console.log(orderSet);

// for(const order of orderSet) console.log(order);

//e.g
// const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);
// console.log(new Set('Rajni').size);




// //lOPPING IN OBJECT:Project names
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days:`;
// for(const day of properties){
//   openStr+= `${day},`;
// }
// console.log(openStr);

// //property values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// //Entire oBJECT
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for(const [day,{open,close}] of entries){
//   console.log(`On ${day} we open at ${open} and close at ${close}`); 
    
//   }


// for (const day of Object.keys(restaurant.openingHours)){
// console.log(day);
// }

// //with optional chaining
// const days = ['mon','tue','wed','thu','fri','sat','sun'];
// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day},we open at ${open}`);
// }

// //method
// console.log(restaurant.order?.(0,1)??'Method doesnot exist');



// //Looping Array
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// for(const item of menu) console.log(item);
// // for(const item of menu.entries()){
  
// //    console.log(`${item[0] + 1}: ${item[1]}`);
// // }
// /*****Destructor looping for array*/
// for(const [i,el] of menu.entries ()){
//   console.log(`${i + 1}: ${el}`);
// }





// const res1 = {
//   name :" Capri",
//   numGuests:''
// };
// const res2 = {
//   name : 'La Paa',
//   owner: 'Rajni'
// };

// //OR assignment operator
// res1.numGuests = res1.numGuests||10;
// res2.numGuests = res2.numGuests||10;

// res1.numGuests ||= 10;

// res2.numGuests ||= 10;
// console.log(res1);
// console.log(res2);


// //Nullish Coalescing Operator (null and undefined)
// res1.numGuests ??= 10;
// res2.numGuests ??= 10;
// console.log(res1);
// console.log(res2);

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);




//ShortCircuit Operator
// console.log(3||'Jonas');
// console.log(''|| 'Jonas' );
// console.log(true||0);
// console.log(''||undefined);


// console.log('' && 'Jonas' && null);
// console.log(undefined||0||''||23||null);

// restaurant.numGuests=23;
// const guests1 = restaurant.numGuests?restaurant.numGuests:10;
// console.log(guests1);

// //And
// console.log(0 && 'Jonas');

// //Example
// if(restaurant.orderPizza) 
// {restaurant.orderPizza('mushrooms','spinach');}

// restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');




//Rest patterns  and Parameters

// restaurant.orderPizza('mushrooms','onions','peppers','tomatoes');

// //DESTRUCTORING

// //Spread ,because on Right side of =
// const arr = [1,2,...[3,4]];

// //REST synax ,becaue on left side of =
// const [a,b, ...others] = [1,2,4,5];
// console.log(a,b,others);

// const [pizza, ,Risotto,...otherFood]= [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza,Risotto,otherFood);

// //Ojects
// const {sat,...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// //Functions   rest arguments
// const add = function(...numbers){
// let sum=0;
// for(let i=0;i<numbers.length;i++) sum+= numbers[i];
// console.log(sum);
// }

// add(2,3);
// add(5,3,7,2);
// add(8,2,5,3,2,1,4)

// const x = [23,5,7];
// add(...x);
// /////////////////////////////////////////
// //Spread Operator

// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);

// const newArr = [1,2,...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);
// console.log(...newMenu);


// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join 2 arrays 
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(menu);

// //Iterables :arrays,strings,maps,sets.NOT objects
// const str = 'Jonas';
// const letters = [...str,'','S.'];
// console.log(letters);
// console.log(...str);
// // console.log('j','o');


// const ingredients = [
//   // prompt('Lets make pasta! Ingredient1!!'),
//   // prompt('Ingredient2!!'),
//   // prompt('Ingredient3!!')
// ];
// console.log(ingredients);

// restaurant.orderPaste(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPaste(...ingredients);

// //Objects
// const newRestaurant = {
//   foundedIn:1998,
//   ...restaurant,
//   founder:'Guiseppe'
// };

// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Virsa';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // //Destructing objects
// // restaurant.orderDelivery({
// // time:'22:30',
// // address:'Via del Sole,21',
// // mainIndex:2,
// // starterIndex:2
// // })


// // restaurant.orderDelivery({
  
// //   address:'Via del Sole,21',
 
// //   starterIndex:1
// //   })

// // //objects
// // const{
// //   name,
// //   openingHours,
// //   categories
// // }   = restaurant;

// // console.log(name,openingHours,categories);

// // const{name:restaurantName,openingHours:hours,categories:tags
// // }= restaurant;  //declar new variable name
// // console.log(restaurantName,openingHours,categories);


// // //set up Default value
// // const {menu=[],starterMenu:starters=[]}= restaurant //[] to set a default value
// // console.log(menu,starters);

// // //Mutating varaibles
// // let a = 23;
// // let b = 7;
// // const obj = {
// //   a:23,
// //   b:7,
// //   c:14
// // };

// // ({a,b} = obj);
// // console.log(a,b);

// // //nested object
// // // const {fri:{open:o,close:c}}=openingHours;
// // // console.log(o,c);


// // // const arr = [2,3,4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];

// // // const [x,y,z]
// // // = arr;
// // // console.log(x,y,z);

// // // let [main, ,secondary] = restaurant.categories;
// // // console.log(main,secondary);

// // // //Switching variables
// // // // const temp = main;
// // // // main = secondary;
// // // // secondary = temp;
// // // // console.log(main,secondary)
// // //   //or
// // // [main,secondary]=[secondary,main];
// // // console.log(main,secondary);


// // // const [starter, mainCourse]=restaurant.order(2,0);
// // // console.log(starter,mainCourse);

// // // const nested = [2,4,[5,6]];
// // // // const [i,,j]= nested;
// // // // console.log(i,j);


// // // const [i,,[j,k]]= nested;
// // // console.log(i,j,k);  // 2 5 6
// // // //Default values
// // // const [p=1,q=1,r=1]=[8,9];  //if r will be defined,output will be undefined
// // // console.log(p,q,r);

// // // //Objects

// // ****************************************
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
//   ],
//   [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
//   },
//   };

//   //Challenge
//   //1
//   for(const [i,player] of game.scored.entries()){
// console.log(`Goal ${i + 1}: ${player}`)
//   }

//   //2
//   const odds = Object.values(game.odds);
//   let average = 0;
//   for(const odd of odds)
//   average += odd;
// average/= odds.length;
// console.log(average);

// //3
// for(const [team,odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x'?'draw':`victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`)

// }

//   //1
//   const [players1,players2] = game.players;
//   console.log(players1,players2);

//   //2
//   const [gk,...fieldPlayers] = players1;
//   console.log(gk,fieldPlayers);

//   //3
//   const allPlayers= [...players1,...players2];
//   console.log(allPlayers);
  
//   //4
//   const players1Final = [...players1,'Thiago','Coutinho','Periscic'];
//   console.log(players1Final);

//   //5
//   const {
//     odds:{
//       team1,
//       x:draw,
//       team2}
//     } = game;
//   console.log(team1,draw,team2);
  
//   //6
//   const printGoals = function(...players){
//     console.log(players);
// console.log(`${players.length} goals were scored`);
//   }

//   // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log('Team1 is nore likely to win');