// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
    // Your answer here
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
}

console.log('max-number-of-two-should-be-3', max(1, 3));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
    // Your answer here
    if (num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else {
      return num3;
    }
}

console.log('max-number-of-three-should-be-5', maxOfThree(2, 5, 1));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true;
    } else {
      return false;
    }
}

console.log('is-vowel-should-be-true', isVowel('e'));
console.log('is-vowel-should-be-false', isVowel('b'));
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2) {
  return num1 + num2;
}

console.log('sum-should-be-8', sum(3, 5));
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(a, b, c) {
  let sum = a + b + c;
  return sum / 3;
}

console.log('avg-should-be-3', avg(4, 2, 3));
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string) {
  return string.length;
}

console.log('string-length-should-be-5', getLength('apple'));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(a, b) {
  if (b > a) {
    return true;
  } else {
    return false;
  }
}

console.log('should-return-true', greaterThan(2,5));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name) {
  return 'Hello, ' + name; + '!';
}

console.log('should-return-hello-austin', greet('Austin'));
// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(noun1, adjective, verb, noun2) {
  return `The ${adjective} ${noun1} ${verb} over the ${noun2}`;
}

console.log('should-return-the-angry-dog-runs-over-the-cat', madlib('dog', 'angry', 'runs', 'cat'));
