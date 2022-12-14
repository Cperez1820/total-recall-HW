//========================= I Variables & Datatypes===============================

// To answer these questions, you can add them in a multiline comment section inside of script.js

// like this:


//  How do we assign a value to a variable? A. With the assignment operator
//  How do we change the value of a...
// ... 
//=============================================================================
// A. Q + A
//=============================================================================
// 1a. How do we assign a value to a variable?

// ANSWER 1a:  let (name of varible) "=" (value)

//==================================================================================================
//1b. How do we change the value of a variable?

// //ANSWER 1b: 
// let (x) = 10; 
// let (x) = 20;
// console.log(x)

//==================================================================================================
//1c. How do we assign an existing variable to a new variable?

// // ANSWER 1C:
//     let x = 10
//     let y =  x

//===============================================================================================
//1d. Remind me, what are declare, assign, and define?

// ANSWER 1d. 
// Delcaration: You are declaring that something exist such as a class function or variable.

// Definiton: You define how something is being implements suich as a class, function and variable.

// Assign: method copies all enumerable own properties from one or more source objects to a target
//         object. It returns the modified target object.


//================================================================================================
//1e. What is pseudocoding and why should you do it?

// ANSWER 1e.
// Pseudocode literally means ‘fake code’. It is an informal and contrived way of writing programs in 
// which you represent the sequence of actions and instructions (aka algorithms) in a form that humans
//  can easily understand.

//=================================================================================================
//1f. What percentage of time should be spent thinking about how you're going to solve
//a problem vs actually typing in code to solve it?

// ANSWER 1f.
// Personally i think about 20% of the time spent im outlining the code, and "pseudocoding it". 

//=================================================================================================
//  B. Strings ====================================================================================

//1. Create a variable called firstVariable

// ANSWER 1
// let x = firstVariable

// ================================================================================================
//2. Assign it the value of the string "Hello World"

// ANSWER 2
// let firstVariable = "Hello World"

//==================================================================================================
//3. Change the value of this variable to some number

// ANSWER 3
// let x = 125 

//================================================================================================
//4. Store the value of firstVariable in a new variable called secondVariable

// ANSWER 4 
// let y = 125

//=================================================================================================
//5. Change the value of secondVariable to any string.

// ANSWER 5
// let y = " Auto bots roll out "

//=================================================================================================
//6. What is the value of firstVariable?

//A ANSWER 6
//    125

//=================================================================================================
//7. Create a variable called yourNameand set it equal to your name as a string.
// Then, write an expression that takes the string "Hello, my name is " and the 
// variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean.


// ANSWER 7
// let yourNameand = "Chris"
//  let hello = ("Hello, my name is " +  yourNameand)
//  console.log(hello)

// C. Booleans ==================================================================================================================================

// console.log(a _<_ b);

// console.log(c _>_ d);

// console.log('Name' _=_ 'Name');

// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true _||_ false);
// console.log(false _&&_ false _&&_ false _&&_ false _&&_ false _||_ true);

// console.log(false _&&_ false)
// console.log(e _===__ 'Kevin');
// console.log(a _<_ b _<__ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a _=_ a __<_ d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 _=_ '48');
//============================================================================================================================================
// D. The farm =============================================================================================================================== 


//1. Declare a variable animal. Set it to be either "cow" or something else

// let x = "dragon"
// let y = "dragon"

//2. Write code that will print out "mooooo" if the it is equal to cow

// if (x = y) {
//     console.log('RAWRRRRR')
// }

//3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

// if (x !== "dragon") {
//     console.log("Hey ! You're not a dragon!! ")
// }

//4. Commit
//==============================================================================================================================================

// E. Driver's Ed ============================================================================================================================== 
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or,
// if the age is younger than 16, a message should print "Sorry, you're too young."

// let age = 26 
//     if (age >= 16) {
//         console.log("Here are the keys!")
//              } else {
//                  console.log("Sorry your too young")
// }
//==============================================================================================================================================
//===================================================================== II Loops ===============================================================

// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A.The basics =====================================================================================================================================

//1.  Write a loop that will print out all the numbers from 0 to 10, inclusive

// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }
//2. Write a loop that will print out all the numbers from 10 up to and including 400

// for (let i = 0; i < 401; i++) {
//     console.log(i)
// }
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000


// for (let i = 0; i < 4001; i += 3) {
//     console.log(i)
//     }

// B. Get even =================================================================================================================================

// 1. Print out the numbers that are within the range of 1 - 100

// for (let i = 0; i < 101; i++) {
//     console.log(i)
// }

// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let i = 1; i <= 100; i++) {
//     if (i === 0) {
//         console.log(i +  " is even");
// }
// else if (i % 2 === 0) {
//         console.log(i + " is even");   
// }
// else {
//         console.log(i + " is odd");
// }
// }

// C. Give me Five ===============================================================================================================================

//1a. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//1b. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

//ANSWER 1a-1b:
// for (let x = 0; x <= 101; x++) {
//     if( x % 3 && x % 5) {
//         console.log((x)) ;
//     }   else {
//             if( x % 3 == 0 ){
//                 console.log(`I found a ${x} Three is a crowd`); // <-----1a
//     }
//                     if( x % 5 == 0 ) {
//                        console.log(`I found a ${x} high five`); // <-----1b
//     }
//     }
//     // 
// } 

// D. Savings account============================================================================================================================

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.


// let bank_account = 0;

// for (let i = 1; i < 11; i++) {
//     bank_account += i; 
    
//     console.log(i);
// }


// console.log(bank_account)


// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// let bank_account = 0;

// for (let i = 1; i < 101; i++) {
//     bank_account += i * 2; 
    
//     console.log(i);
// }


// console.log(bank_account)

//=============================== III Arrays & Control flow =====================================================

// A. Talk about it =============================================================================================

// 1.what are the things in an array called?

// ANSWER 1. elements? 

//2. Do Arrays guarantee those things will be in order?

//ANSWER 2. yes arrays do gurantee that!

//3. What real-life thing could you model with an array?

//ANSWER 3. Chess-board, a tray of eggs, fence

//B. Easy does it ============================================================================================

// 1. Create an array that contains three quotes and store it in a variable  called quotes 

// quotes = [1. + " what goes up must come down", 2. + " get to the choppa", 3. + " you got the juice now, kid"] 
// console.log(quotes)

// C. Accessing elements =====================================================================================

// // Given the following array
// const randomThings = [1, 10, "Hello", true]

// //1. How do you access the 1st element in the array?

// //ANSWER 1
// randomThings[0]
// console.log(randomThings[0])

// //2. Change the value of "Hello"to "World"

// //ANSWER 2
// randomThings[3] = "World"
// console.log(randomThings[3])

// //3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

// //ANSWER 3
// console.log(randomThings)

// D. Change values ============================================================================================

//Given the following array 

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // 1. What would you write to access the 3rd element of the array?

// //ANSWER 1 
// ourClass[2]

// // 2. Change the value of "Github" to "Octocat"

// //ANSWER 2
// ourClass[4] = "Octocat"

// // 3. Add a new element, "Cloud City" to the array

// //ANSWER 3 
// ourClass.push("Cloud City")

// E. Mix It UP ==============================================================================================

// Given the following array: 
// const myArray = [5, 10, 500, 20]

//1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

// //ANSWER
// myArray[myArray.length] = "Aegon";
// myArray[myArray.length] = "Conqueror";
//     console.log(myArray)

//2. Remove the 5from the beginning of the array.

// //ANSWER
// myArray.shift(myArray[0])
//     console.log(myArray)

//3. Add the string "Bob Marley"to the beginning of the array.

// //ANSWER
// myArray.unshift("Bob Marley");
//     console.log(myArray)

//4. Remove the string of your choice from the end of the array.

// //ANSWER
// myArray.pop(5)
//     console.log(myArray)

//5a. Reverse this array using Array.prototype.reverse(). 

// //ANSWER
// myArray.reverse();
//     console.log(myArray)

//5b. Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

//ANSWER 
// YES I DID. 
// MUTATE MEANS TO CHANGE THE Elements.
// No, but after i console.log'ed the array again i got the whole array in reverse 

//F. Biggie Smalls ==============================================================================================

// Write an if ... elsestatement that:

//1. console.log()s "little number" if the number is entered is less than 100.
//2. console.log()s big numberif the number is greater than or equal to 100.

//ANSWER TO BOTH BELOW
// let num = 120
// if ( num < 100) {
//     send = "little number";
// }else if( num >= 100 ){
//     send = "big number"
// }else {
//     send = "number"
// }
// console.log(send)


// G. Monkey in the Middle ======================================================================================


//1. console.log()little numberif the number entered is less than 5.
//2. If the number entered is more than 10, log big number.
//3. Otherwise, log "monkey".

//ANSWER TO ALL THREE BELOW
// let mon = 7
// if ( mon < 5 ){
//     send = "little number";
// }else if( mon > 10 ){
//     send = "big number"
// }else {
//     send = "monkey"
// }
// console.log(send)

//H. What's in Your Clost? =====================================================================================

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
//  log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// kristynsCloset.pop([3])
//   console.log("kristyn is rocking that " + kristynsCloset[2] + " today")

//2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

// kristynsCloset.push("raybans")
//   console.log(kristynsCloset)

//3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

// //ANSWER
// kristynsCloset[5] = "stained knit hat"

//   console.log(kristynsCloset)


//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

//ANSWER
// let shirt = thomsCloset[0][0]
//   console.log(shirt)

//5. In the same way, access one item from Thom's pants array.

//ANSWER
// let pants = thomsCloset[1][1]
//   console.log(pants)

//6. Access one item from Thom's accessories array.

//ANSWER
// let misc = thomsCloset[2][2]
//   console.log(misc)

//7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// //ANSWER
// console.log("Thom is looking fierce in " + shirt + ", " + pants + " and " + misc)

//8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// //ANSWER  , even tho i dont really understand this one to much 
// kristynsCloset[1][2] = "Footie Pajamas"
//   console.log(thomsCloset)

//==================================== IV. Functions ========================================================================

//A. printGreeting =================================================================================================

// lol skipped cuz i read it :D

//B. printCool =====================================================================================================

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

//ANSWER 

// const printCool = (argument) => {
//    return argument + " is cool"; 
// };
//   console.log(printCool("Captain Reynolds"));

//C. calculateCube =================================================================================================

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

//ANSWER 
// const calculateCube = (cubed) => {
//     return  "12" + cubed;
// }
//   console.log(calculateCube(5));

//D. isVowel =======================================================================================================

// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working.
// In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

//ANSWER 
// const isAVowel = (character) => {
// 	if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
// console.log(isAVowel("A".toLowerCase()));

//E. getTwoLengths ===================================================================================================


// Write a function getTwoLengths that accepts two parameters (strings).
//  The function should return an array of numbers where each number is the length of the corresponding string.

//ANWER
// let getTwoLengths = (string1, string2) => {
// 	const lengArray = [string1.length, string2.length];
// 	return lengArray;
  
// };

// //=> [4, 13]



// console.log(getTwoLengths("Hank", "Hippopopalous"));

//F. getMultipleLengths ==========================================================================================


// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings.
//  The function should return an array of numbers where each number is the length of the corresponding string.

// //ANSWER
// const getMultipleLengths = (stringArr) => {
//     let multipleLengths = [];
//         for( x = 0; x < stringArr.length;x++) {
//             multipleLengths.push(stringArr[x].length);
//           };
//     return multipleLengths;

// };
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

//G. maxOfThree =====================================================================================================


// //ANSWER THIS ONE IS FUNNY i had <= in the for loop after like ten mins of intense staring i noticed and had a good laugh clg kept giving me princess
// let printLongestWord = (wordArr) => {
//     let lWord = "";
//         for(x = 0; x < wordArr.length;x++){
//               if(wordArr[x].length > lWord.length){
//                  lWord = wordArr[x];
//            };


//         };
//         return lWord;
// };
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//========================================= OBJECTS ================================================================

// A. Make a user object ===============================================================================================

//  const user = {name: "Billy", email: "billy1922@gmail.com", age: 90, purchased: []}; {
 
//  }
//  //console.log(user)
// //B. Update the user ========================================================================================================

//  //1.
//  user.email = "Billyrisesagain@gmail.com";
//   //  console.log(user.email)

// / //2.
// user.age++;
// //   console.log(user)

// //C. Adding keys and values ===================================================================================================

// // //3. 
// // user.location = ("New York")

// //D. Shopalic! =======================================================================================================================

// //4abc.
// user.purchased.push("carbohydrates" , "peace of mind" , "Merino jodhpurs");

// // //4d. 
// // console.log(user.purchased[2])

// //E. OBJECT-WITHIN-OBJECT =======================================================================================================

// //1.
// user.friend = {
//   name:"Jimmy John",
//   age: 26,
//   location: "manhattan",
//   purchased: []
// }

// //2.
// // console.log(user.friend.name)

// //3.
// // console.log(user.friend.location)

// //4.
// user.friend.age = ("55");
// // console.log(user.friend)

// //5. 
// user.friend.purchased.push("The One Ring", "A latte")

// //6. 
// // console.log(user.friend.purchased[1])

// // F. Loops ====================================================================================================================================

// //answer 
// function listUser(listParam) {
//   listParam.purchased.forEach((x) => {
//       // console.log(x)
//   })
// }



// function listPeople(listParam) {
//   listParam.friend.purchased.forEach((x) => {
//       // console.log(x)
//   })
// }

// // console.log(user.purchased)  // <----- 1.
// // console.log(user.friend.purchased) // <---- 2.



// //intial thought
// // for( x = 0; x < 2;x++)
// //     if(x < user.purchased){

// //     }

    

// //     console.log(x)


// // G.===================================================================================================================


// //ANSWER 1. 2. 3.
// // function updateUser() {
// //     user.age++
// //     user.name = user.name.toUpperCase();
// // }
// // updateUser()
// //   console.log(user)


// //ANSWER 

// function outAndLoud(person) {
//     person.age++
//     person.name = person.name.toUpperCase();
// };
// outAndLoud(user)
// outAndLoud(user.friend)
//   console.log(user)

  //=================================== Cat Combinator =====================================================================================================

//ANSWER 1.
let cat1 = {
  name: "Whiskers",
  breed: "ragdoll",
  age: "6",
}
console.log(cat1.age)
console.log(cat1.breed)

//ANSWER 2.

let cat2 = {
  name: "Jolt",
  breed:"birman",
  age: 2,
}

//ANSWER 3.
function combineCats(mama , papa) {
  return {
    name: mama.name + papa.name,
      age: 1,
    breed: mama.breed + "-" + papa.breed,
  }
}
//console.log(combineCats(cat1, cat2));

//ANSWER 4. Why just WHY.
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))),combineCats(cat1, cat2)));

