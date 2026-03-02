//  Task 1: Reversed String
//  Complete the solution so that it reverses the string 
//   passed into it. 
//  'world'  =>  'dlrow'
//  'word'   =>  'drow'

let str = "That easy";
function revsStr (str){
return [...str].reverse().join('');
}
console.log(str); 

//  Task 2: Square(n) Sum
//  Complete the square sum function so that it squares each number 
//   passed into it and then sums the results together.
//  For example, for [1, 2, 2] it should return 9, 
//  because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

let arr1= [1,2,6];

function sqNSum (arr){
    return arr.reduce((acc,num) => acc + num ** 2,0);
}
let result = sqNSum(arr1)
console.log(result)

//  Task 3: What's the real floor?
//  Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
//  Write a function that given a floor in the american system returns the floor in the european system.
//  With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//  Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
  if (n <= 0) return n;
  if (n < 13) return n - 1;
  return n - 2; 
}

//Task 4: Convert string to camel case

//  Complete the method/function so that it converts dash/underscore
//  delimited words into camel casing. The first word within the 
//  output should be capitalized only if the original word was 
//  capitalized 
//  (known as Upper Camel Case, also often referred to as 
//  Pascal case). The next words should be always capitalized.
//
//Examples
//
//"the-stealth-warrior" gets converted to "theStealthWarrior"
//"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

let str1 = "Change-da_world_my-final-message"
function toCamelCase(str){
  str = str.toLowerCase()
  return str.replace(/[-_ ]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
};
str1 = toCamelCase(str1);
console.log(str1)

//  Нагуглил решение, сам написал чуть по другому, не смог понять
//  как сделать заглавнымим первые буквы слов. DeepSeek говорит 
//  решение верное, Codewars - ругается...
//  https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// Task 5: Third Angle of a Triangle
//  You are given two interior angles (in degrees) of a triangle.
//  Write a function to return the 3rd.
//  Note: only positive integers will be tested.

function otherAngle(a, b) {
  let lastAngle = 180 - (a+b);
  return lastAngle;
}