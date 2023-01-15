"use strict";
let lname;
lname = "Sergejs";
let newname = lname.toUpperCase();
console.log(newname);
//////////////
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
////////////////
let isValid = false;
console.log(isValid);
////////////////////
let empList;
empList = ["Sergejs", "Serg", "S"];
//////////////////
let numList;
numList = [1, 2, 6, 9, 8, 7];
let result2 = numList.filter((num) => num > 2);
console.log(result2);
let num = numList.find((num) => num === 6);
console.log(num);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let emp = empList.find((emp) => emp === "Serg");
console.log(emp);
let c = 2 /* Blue */;
///////////////////////
// tuple
///////////////////////
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
////////////////////////
// any
/// try to avoid useing "any", better declare what variable is it
////////////////////////
let department;
department = "IT";
department = 10;
///////////////////////
// void
// never
///////////////////////
