// Author: Zablon Charles
// 04/28/2022

let v = "This is my string message";
console.log("hey dude");

function ageCheck(age) {
  if (age >= 21) {
    console.log("You have a license to drink sir!");
  } else if (age < 13) {
    console.log("You do not have permission to drink");
  }
}

ageCheck(20);

let num = 5;

switch (num) {
  case 1:
    console.log("Your number is 1");
    break;

  case 2:
    console.log("Your number 2");
    break;

  case 3:
    console.log("Your number 3");
}

// let n = 1;
// do {
//   console.log(n);
//   n++;
// } while (n < 5);

let array1 = ["a", "b", "c", "g"];

let n = 0;
do {
  console.log("the number is " + n);
  n += 1;
} while (n < 15);
