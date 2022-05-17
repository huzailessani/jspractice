console.log("Hello world");
document.write("Hello world");
alert("Hello world");

//Adding numbers
let a1 = prompt("Please enter the number a", "");
let b = prompt("Please enter the number b", "");

var c = parseInt(a) + parseInt(b);
console.log("The sum of a " + a1 + " the sum of b is " + b + " The c is", c);

//How to take out square root
let d = prompt("please input a number", "");
console.log(Math.sqrt(d));

//Area of Triangle

// var base = prompt("PLease input base number" , "");
// var height = prompt("PLease input height number" , "");
// var area =(base*height)/2;
// console.log(area);

//Area of triangle through elons formula
var e = 10;
var f = 10;
var g = 10;
var h = (e + f + g) / 2;
var temp = h * (h - e) * (h - f) * (h - g);
var areas = Math.sqrt(temp);
console.log(areas);

//Swap two numbers
//swapping using temporary variable

var i = 5;
var j = 10;
console.log(`the value of i: ${i} and the value of j: ${j}`);
var temporary;
var temporary = i;
i = j;
console.log(" the val of temporary", temporary);
console.log(" the val of i now", i);

j = temporary;
console.log(" the val of j now", j);

//swapping without temporary variable
var k = 5;
var l = 6;
k = k + l;
console.log(k);
l = k - l;
console.log("value of l", l);
k = k - l;
console.log("value of k", k);

//convert kilometer to miles

function convert() {
  var kms = document.getElementById("data").value;
  const kilometer = 0.621371;
  var miles = kms * kilometer;
  alert(miles);
  document.getElementById("res").innerText = `${miles}`;
}

//conver celsius to farhenhite
//farhenheit = celsius*1.8 + 32
function temperature() {
  var celcius = document.getElementById("temp").value;
  var farhenhite = celcius * 1.8 + 32;
  var temper = (document.getElementById("temper").innerText = `${farhenhite}`);
  console.log(farhenhite);
}

//js sign checker + - or zero

let a = -4;
console.log(Math.sign(a));

// custom checker
let value = "z";
if (value > 0) {
  console.log("positive");
} else if (value < 0) {
  console.log("negative");
} else if (value == 0) {
  console.log("zero");
} else {
  console.log("Nan");
}

//Random number generator

var m = Math.floor(Math.random() * 100);
console.log(m);

//odd or even number
var n = 33;
var o = 10;

if (n % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

if (o % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//check if it is a prime number or not

let number = 11;
var isprime = true;

if (number == 1) {
  console.log("It is not a prime number ", number);
}
if (number < 1) {
  console.log("Less than 1 not a prime number ", number);
} else if (number > 1) {
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      isprime = false;
      console.log("not a prime number", number);
      break;
    }
  }
}
if (isprime) {
  console.log("it is a prime number ", number);
}

//using largest number in 3  numbers

console.log(Math.max(1, 8, -11));

//using largest number in 3  numbers custom made

function check(p, q, r) {
  if (p >= q && p >= r) {
    return p;
  } else if (q >= p && q >= r) {
    return q;
  } else return r;
}

p = -7;
q = 11;
r = 5;

var x = check(p, q, r);
console.log(x);

//find the factorial
var z = 5;
var fact = 1;
if (z == 0) {
  console.log("the factorial of 0 is 1");
} else if (z < 0) {
  console.log("fact of negative number not possible");
} else {
  for (i = 1; i <= z; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

// another factorial techniquefactorial

var numb = 5;
var facto = 1;
if (numb < 0) {
  console.log("negative num not possible");
}
for (numb; numb >= 1; numb--) {
  facto = facto * numb;
}
console.log(facto);

//Js method to print table of ony number
function table(numbe) {
  for (i = 1; i <= 10; i++) {
    var y = i * numbe;
    console.log(`${numbe} x ${i} = ${y}`);
  }
}
table(10);

//Armstrong number
var n1 = 153;
var tempo = n1;
var sum = 0;

while (tempo > 0) {
  var digit = tempo % 10;
  sum += digit ** 3;
  tempo = parseInt(tempo / 10);
}
console.log(sum);

//to check if all the numbers have same last digit or not

var a4 = 28;
var a6 = 48;
var a5 = 38;

let a7 = a4 % 10;
console.log(a7);
let a8 = a6 % 10;
console.log(a8);
let a9 = a5 % 10;
console.log(a9);
if (a7 === a8 && a9) {
  console.log("true");
} else {
  console.log("false");
}

//check palindrome using array methods

var sentence = "madam";
var newsentence = sentence.split("").reverse().join("");
console.log(newsentence);
if (sentence === newsentence) {
  console.log("its a palindrome");
} else {
  console.log("it is not a palindrome");
}

//palindrome string using loop

var sent = "huzail";
var len = sent.length;

for (var i = 0; i < len / 2; i++) {
  // console.log(sent[i])
  // console.log(sent[len -1- i])
}
if (sent[i] == sent[len - 1 - i]) {
  console.log("its a palindrome");
} else console.log("its not a plaindrome");

//how often a letter comes in a letter

var string = "daddy";
var letter = "d";
let strlen = string.length;
var counter = 0;
for (var i = 0; i < strlen; i++) {
  if (string[i] == letter) {
    counter++;
  }
}
console.log(counter);

//to check if a letter is in the start and end
var string1 = "huzail";
var strstart = string1.startsWith("h");
console.log(`${strstart}`);
var strend = string1.endsWith("l");
console.log(`${strend}`);

//program to check if a string cotains a substring or not
var string2 = "helloworld";
var substring = "wo";
var test = string2.includes(substring);
console.log(test);
var test1 = string2.indexOf(substring);
console.log(test1);

//convert the first letter of a string to uppercase

var string = "huzail";
var neweststring = string.slice(1);
console.log(neweststring);
var newstring = string.charAt(0).toUpperCase();
console.log(newstring);
console.log(`${newstring}${neweststring}`);

//count the number of vowels in string
var b1 = "huzail";
const reg = /[aeiou]/gi;
var chars = b1.match(reg);
console.log(chars.join(","));
console.log(chars.length);

//Armstrong number between an interval

let na = 1;
let nb = 1000;

for (i1 = na; i1 < nb; i1++) {
  arm = i1;
  var summary = 0;
  var nofdigit = i1.toString().length;
  while (arm > 0) {
    var digitz = arm % 10;
    summary += digitz ** nofdigit;
    var arm = parseInt(arm / 10);
  }
  if (i1 == summary) {
    console.log(i1);
  }
}

//sum of natural numbers

var n5 = 5;
var factory = 0;
for (i = n5; i > 0; i--) {
  factory = factory + i;
  console.log(factory);
}

//sum of natural numbers through recursion
function sums(nums) {
  if (nums > 0) {
    return nums + sums(nums - 1);
  } else {
    return nums;
  }
}
var sumss = sums(5);
console.log(sumss);

//factorial
var numbres = 12;
for (i2 = 1; i2 <= numbres; i2++) {
  if (numbres % i2 == 0) {
    console.log(i2);
  }
}

//simple calculator using switch case
var num1 = 2;
var num2 = 3;
var opr = "-";
switch (opr) {
  case "+":
    var result = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} + ${num2} = ${result}`);
    break;
  case "-":
    var result = parseFloat(num1) - parseFloat(num2);
    console.log(`${num1} - ${num2} = ${result}`);
    break;
  case "*":
    var result = parseFloat(num1) * parseFloat(num2);
    console.log(`${num1} * ${num2} = ${result}`);
    break;
  case "/":
    var result = parseFloat(num1) / parseFloat(num2);
    console.log(`${num1} / ${num2} = ${result}`);
    break;

  default:
    console.log("invalid operator");
    break;
}

//Fibonacci sequence
var a5 = 0;
var a6 = 1;
console.log(a5);
console.log(a6);
var summer = 0;
for (i3 = 0; i3 <= 10; i3++) {
  var summer = a5 + a6;
  a5 = a6;
  a6 = summer;
  console.log(summer);
}

//replace function
var strings = "Mr red has a red car and a red bike";
var regs = RegExp("red", "gi");
var newstrings = strings.replace(regs, "blue");
console.log(newstrings);

//reverse a string using for loop
var stringss = "huzail";
var strlens = stringss.length;
var revstr = "";
// console.log(stringss)
// console.log(stringss[strlens-1])
for (var i = strlens - 1; i >= 0; i--) {
  revstr += stringss[i];
}
console.log(revstr);

//sorting words in alphabetical order
var n5 = "huzail";
var n6 = n5.split("").sort().join("");
console.log(n6);

//
var sumber = 0;
var a10 = 0;
var a11 = 1;

console.log(a10);
console.log(a11);

for (i = 0; i <= 10; i++) {
  sumber = a10 + a11;
  a10 = a11;
  a11 = sumber;
  console.log(sumber);
}

//calculate century
var century = 0;
var decade = century % 100;
var decades = parseInt(century / 100);
console.log(decades);

if (century == 0) {
  console.log(`the century is ${decades + 1}`);
} else if (decade > 0) {
  console.log(`the century is ${decades + 1}`);
} else {
  console.log(` the century is ${decades}`);
}

//anagrams

var str0 = "huzail";
var str1 = "aeiou";
var str2 = "aueoi";
var str3 = str2.sort;
var str4 = str1.sort;
var str5 = str0.sort;
if (str3 == str4) {
  console.log("they are anangrams");
} else {
  console.log("they are not anangrams");
}
if (str0 == str1) {
  console.log("they are anangrams");
} else {
  console.log("they are not anangrams");
}

let longestword = "";
console.log(words);

for (let word of words) {
  if (word.length > longestword.length) {
    longestword = word;
  }
  console.log(word);
}
