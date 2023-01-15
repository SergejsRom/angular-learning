let lname : string;
lname = "Sergejs";
let newname = lname.toUpperCase();
console.log(newname);
//////////////

let age: number;
age = 25;
age = 25.5;

let dob = "25"
let result = parseInt(dob);
////////////////

let isValid : boolean = false;
console.log(isValid);
////////////////////


let empList : string[];
empList = ["Sergejs", "Serg", "S"];
//////////////////

let numList : Array<number>;
numList = [1,2,6,9,8,7];

let result2 = numList.filter((num)=> num>2);
console.log(result2);

let num = numList.find((num) => num === 6);
console.log(num);

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

let emp = empList.find((emp) => emp === "Serg");
console.log(emp);



///////////////////
// enum
///////////
// Typescript allow to declare "enum" as "const"
// then "enum" will not be visible on js code, just values
///////////
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

///////////////////////
// tuple
///////////////////////
let swapNumbs: [number, number];
function swapNumbers(num1:number, num2:number) : [number, number] {
    return [num2, num1]
}

swapNumbs = swapNumbers(10,20);

swapNumbs[0];
swapNumbs[1];

////////////////////////
// any

/// try to avoid useing "any", better declare what variable is it
////////////////////////
let department: any;

department = "IT";
department = 10;

///////////////////////
// void
// never
///////////////////////



