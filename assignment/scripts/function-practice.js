console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
console.log('hello,', helloName("Justin") + '!' );

// Remember to call the function to test

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
  // return firstNumber + secondNumber;
}
console.log(addNumbers(6,4));



// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber ){
let result = firstNumber * secondNumber * thirdNumber;
return result;
}
console.log(multiplyThree(5,4,2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else
    return false;
}

// Call the function to test each outcome (true & false) 
console.log(isPositive(4));
console.log(isPositive(-4));
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let houseHold = ["Justin", "Jane" ,"Bones", "Bear"]

function getLast( array ){
  if (array.length > 0){
    return array[array.length-1]
  }
//else{return console.log('undefined');} "returns undefined without need for CL in else statement"
}
console.log(getLast(houseHold))
console.log(houseHold);



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let garden = ["carrots", "beans", "potatoes", "corn", "cabbage", "squash"]
function find( value, array ){
for(locate of array){
  if(locate === value){
    return true
  }
} return false

}
//second; for extra practice I wanted to see how and if it would work with other loops 

function find2( value, array ){
  for (let i =0; i< array.length;i++){
   if(array[i]=== value){return true
    }
} return false
}

//third
let i=0
function find3( value, array){
  while(i<array.length){
    if(array[i]=== value){return true;
  }i++
}return false
}

console.log(find("beans", garden))
console.log(find("pies", garden))
console.log(find2("potatoes", garden));
console.log(find2("lettuce", garden));
console.log(find3("corn", garden));
console.log(find3("meat", garden));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if (string[0]=== letter)
{return true
}else {return false}
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for(i=0; i<array.length;i++){
    sum = array[i]+sum
  }
  // TODO: loop to add items
  return sum;
}
console.log(sumAll([2,5,8,5,5,6,7,2]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let allNumbers=[4,0,8,-4,19]
let newArray= []

function positive(array){
  for(i=0; i<array.length;i++){
if (array[i]>0){
  newArray.push(array[i])
}
  }
}

positive(allNumbers)

console.log("original array " + allNumbers);
console.log("new Array " + newArray)

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

