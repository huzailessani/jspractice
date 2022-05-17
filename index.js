var str = "hello";

//reversinig the string
function reversestring(str) {
  var strarr = str.split("").reverse().join("");
  console.log(strarr);
}
reversestring(str);

//reversinig the string
function reverssestring() {
  var revstring = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstring = revstring + str[i];
  }
  console.log(revstring);
}
reverssestring(str);

//reversinig the string
function reversssestring() {
  var revsstring = "";
  for (let i = 0; i <= str.length - 1; i++) {
    revsstring = str[i] + revsstring;
  }
  console.log(revsstring);
}
reversssestring(str);

//reversinig the string
function reverssssestring() {
  var revssstring = "";
  for (let char of str) {
    revssstring = char + revssstring;
  }
  console.log(revssstring);
}
reverssssestring(str);

//is a palindrome
var reverses = "racecar";

function palindrome(reverse) {
  var reversal = reverses.split("").reverse().join("");
  console.log(reversal);
  if (reversal == reverses) {
    console.log("True");
  } else {
    console.log("false");
  }
}
palindrome(reverses);

//reverse numbers
var int = 12345;

function reverseint(int) {
  const revint = int.toString().split("").reverse().join("");

  console.log(revint);
}
reverseint(int);

//longest word in a string
var str = "This is the longest word";
let words = str.split(" ").sort((stra, strb) => {
  return strb.length - stra.length;
});
console.log(words[0]);

//Arithmetic , Geometric or No paattern
//no negative numbers

// var arith = [];
// var geo = [];
// arr = [2, 4, 6, 8]

// for (let i = 1; i < arr.lenth; i++);

//fibonacci
var a = 1;
var b = 3;
var c = 0;
var summ = 0;
var d = 3;
var sum = 0;

for (i = 0; i < 10; i++) {
  var sum = a * b;
  a = b;
  b = sum;

  console.log(b);
}

// plus
for (i = 0; i < 10; i++) {
  var summ = c + d;
  c += d;
  console.log(summ);
}

let fibonacci = [0, 1];

function listFibonacci(num) {
  // starting at array index 1, and push current index + previous index to the array
  for (let i = 1; i < num; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  }
  console.log(fibonacci);
}

listFibonacci(10);

//capitalize words
var str = "i woke up early in the morniing";
var wordings = str.split(" ").map((wordss) => {
  let firstword = wordss.slice(0, 1).toUpperCase();
  // let firstword = wordss.charAt(0).toUpperCase();
  let rest = wordss.slice(1);
  var newword = firstword + rest;

  console.log(`${newword}`);
});

//to find if the largest in the array is total sum or not
// arr = [1, 2, 13, 6, 4];
function checker(arr) {
  let temparr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = temparr.pop();
  console.log(largest);
  let number = 0;
  temparr.forEach((item) => (number += item));
  if (largest === number) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checker([1, 2, 4, 6, 13]);

//reversing a string

var randomarr = "hello world";
rand = randomarr.split("").reverse().join("");
console.log(rand);

//reversing
var final = "";
for (i = randomarr.length - 1; i >= 0; i--) {
  final += randomarr[i];
  console.log(i);
}
console.log(final);

//factorialize number
var num = 5;
var fact = 1;
for (i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log(fact);

//fibonacci
var a1 = 0;
var a2 = 1;
var sum = 0;
console.log(a1);
console.log(a2);

for (i = 0; i <= 10; i++) {
  sum = a1 + a2;
  a1 = a2;
  a2 = sum;
  console.log(sum);
}

var sequence = [0, 1];

for (i = 1; i <= 10; i++) {
  sequence.push(sequence[i] + sequence[i - 1]);
}
console.log(sequence);

//factorial
var num = 5;
var fact = 1;
for (i = 1; i <= num; i++) {
  fact *= i;
}
console.log(fact);

//longest word in sentence
var string = "the quick brown fox jumped over the lazy dog";
var wording = string.split(" ");
longest = "";

for (var word of wording) {
  if (word.length > longest.length) {
    longest = word;
  }
}
console.log(longest);

var wording = string.split(" ").sort((a, b) => {
  return b.length - a.length;
});
console.log(wording[0]);

//titlecase

var strimg = "hello there how are you doing";
var string = strimg.split(" ").forEach((word) => {
  let sting = word.charAt(0).toUpperCase();
  var supari = console.log(sting + word.substring(1));
});

//2d arrays
var moxes = [];
arr = [
  [4, 5, 1, 3],
  [5, 4, 9, 12],
  [4, 15, 1, 3],
  [5, 14, 9, 1201],
];
for (var i = 0; i < arr.length; i++) {
  var max = arr[i][0];

  for (ii = 0; ii < arr[i].length; ii++) {
    current = arr[i][ii];
    // console.log(arr[i][ii])
    if (current >= max) {
      max = current;
    }
  }
  moxes.push(max);
}
console.log(moxes);

//repeat a string

console.log("hello ".repeat(3));

//repeat a string
function repeater(str, num) {
  // var str = 'hello we are here'
  // num = 3
  var final = "";
  if (num < 0) {
    ("");
  }
  for (var i = 0; i < num; i++) {
    final += str;
    console.log(str);
  }
}
repeater("hello world", 3);

//truncate a string
num = 2;
var str = "hello";
var string = str.slice(0, num);
console.log(string);

// chunk arrays
function chunkarr(letters, size) {
  var groups = [];
  while (letters.length > 0) {
    groups.push(letters.splice(0, size));
    console.log(groups);
  }
  return groups;
}

chunkarr(["a", "b", "c", "d"], 2);

//mutations
var arr = ["hello", "he"];
var fw = arr[0].toLowerCase();
var sw = arr[1].toLowerCase();

for (var i = 0; i < sw.length; i++) {
  console.log(sw[i]);
  if (fw.indexOf(sw[i]) === -1) {
    console.log(false);
  } else {
    console.log(true);
  }
}

//falsy bouncer
var arr = [7, "ate", "", false, 9];
var result = [];
for (var a of arr) {
  if (a) result.push(a);
  console.log(result);
}

//where do i belong
var num = 3;
var arr = [1, 2, 32, 8, 4, 6];

var arrays = arr.sort((a, b) => {
  return a - b;
});
for (var i = 0; i <= arr.length; i++) {
  if (num <= arr[i]) {
  }
  console.log(i);
}
console.log(arrays);

//pushing num in array
function getindex(arr1, num1) {
  var arrays = arr1.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < arr1.length; i++) {
    if (num1 <= arr1[i]) {
      return i;
    }
  }

  console.log(arrays);
  arrays.push(num1);
  return arr.length;
}
getindex([40, 60, 5, 3], 70);

//plus number in range
var arr = [1, 4];
var total = 0;
var start = arr[0]; // Math.min(arr[0], arr[1])
var end = arr[1]; //Math.max(arr[0], arr[1])
console.log(start, end);

for (i = start; i <= end; i++) {
  total += i;
}
console.log(total);

//find the missing no in 2nd array
arr1 = [1, 2, 3, 5];
arr2 = [1, 2, 3, 4, 5];

var combo = arr1.concat(arr2).filter(function (num) {
  if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
    console.log(num);
  }
});

//compare to arrays are equal or not
var array1 = [4, 8, 10, 9, 5];
var array2 = [5, 10, 8, 9, 4];

const issame =
  array1.length == array2.length &&
  array1.every((curelement) => {
    if (array2.indexOf(curelement) > -1) {
      return (curelement = array2[array2.indexOf(curelement)]);
    }
  });
console.log(issame);

//remove duplicate values in array
//array can contain duplicate values but set cannot
var arr = [1, 2, 3, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 8, 8, 8];
var newunique = new Set(arr); //[...new Set(arr)];
console.log(newunique);

//reverse numbers
// var num = -123;

function reversenumber(num) {
  var newstr = num.toString();
  var hello = newstr.split("").reverse().join("");
  if (hello.endsWith("-")) {
    hello = "-" + hello;
    console.log(parseInt(hello));
  } else {
    console.log(parseInt(hello));
  }
}

reversenumber(-123);

//factorial of any number
var n1 = 5;
var fact = 1;

for (i = 1; i <= n1; i++) {
  fact = fact * i;
}
console.log(fact);

//other technique for factorial
for (let i = n1; i > 1; ) {
  i = i - 1;
  var fact = n1 * i;
  n1 = fact;
}
console.log(fact);

//concat
var nums1 = [4, 9, 5];
var nums2 = [9, 4, 9, 8, 4];
var nums3 = nums1.concat(nums2);
var new1 = new Set(nums3);
console.log(new1);

//spread
var nums4 = [...nums1, ...nums2];
var nums5 = new Set(nums4);
console.log(nums5);

//returning common elelment in array
var numss3 = [1, 2, 2, 1];
var numss1 = [2, 2];

let intarr = numss1.filter((curelem) => {
  return numss3.includes(curelem);
});
console.log([...new Set(intarr)]);

//summing

var sumarr = [1, 5];
var total = 0;
var startarr = sumarr[0];
var endarr = sumarr[1];

for (i = startarr; i <= endarr; i++) {
  total += i;
}
console.log(total);

//summing
const getsum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
var total = getsum(5)(4)(3)(2)(1);
console.log(total);

//guessing game in js

var secretno = Math.floor(Math.random() * 100);
console.log(secretno);

for (i = 0; i < 10; i++) {
  var input = prompt("please guess a number");
  if (input > secretno) {
    alert("guess too big");
  } else if (input < secretno) {
    alert("input too low");
  } else if (input == secretno) {
    alert("congratulations you win");
    break;
  } else {
    alert("please input a valid number");
  }
}
alert("you lost all lives");

//
