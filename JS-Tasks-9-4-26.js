//Numbers ending with zeros are boring.

//They might be fun in your world, but not here.

//Get rid of them. Only the ending ones.

//1450   -> 145
//960000 -> 96
//1050   -> 105
//-1050  -> -105
//0      -> 0

//Note: Zero should be left as it is.

function noBoringZeros(n) {
  if (n === 0){
    return n;
  }
  const nToString = n.toString();
  const nn = nToString.replace(/0+$/, '');
  let num = +nn;
  return num;
}

//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//Example

//filter_list([1,2,'a','b']) == [1,2]
//filter_list([1,'a','b',0,15]) == [1,0,15]
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter(item =>typeof item !== 'string');
}

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//Examples

//highAndLow("1 2 3 4 5"); // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

//Notes

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  const num = numbers.split(" ");
  const maxCount = Math.max(...num);
  const minCount = Math.min(...num);
  const result = maxCount.toString() + " " + minCount.toString();
  return result;
}

//Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

//Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

//Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

//In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

//Otherwise return, False/false (according to the language in use).
//NOTE
//Remember, in C# you have to cast your output value to Object type! 

function playerRankUp (points) {
  let isRankUp = points >= 100 ? ("Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.") : false
  return isRankUp
}

//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const strToArray = str.split("");
  const letter = ['a', 'e', 'i', 'o','u'];
  const count = strToArray.reduce((acc,item) => (letter.includes(item) ? acc + 1 : acc), 0);
  return count;
}