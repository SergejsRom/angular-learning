/////////////////////////////
// different ways to write functions
/////////////////////////////

// name function
function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(2, 3));

///////////////////////
// arrow function

const sub = (num1: number, num2: number) : number => num1 - num2;

console.log(sub(10, 7));

////////////////
// function expression

const mult = function (num1: number, num2: number) : number {
    return num1 * num2;
};

console.log(mult(5, 4));

///////////////////////
// optional parameter
function add2(num1: number, num2: number, num3?: number) {
    return num3? num1 + num2 + num3 : num1 + num2;
  }
// ↑↑↑↑↑↑ if else statement ↑↑↑↑↑↑
  
  console.log(add2(2, 3, 2));

// required parameter
// if nothing passed, will be used default!!!
  const sub2 = (num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3;

  console.log(sub2(4, 2));
  console.log(sub2(4, 2, 1));

// rest parameter
function add3(num1: number, num2: number, ...num3: number[]) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
  }
  let numbers = [1, 2, 3, 4, 10]
  console.log(add3(2, 3, ...numbers));
  console.log(add3(2, 3, ...[1, 1, 6]));
  console.log(add3(2, 3, -1, 8, 7));

  ///////////////////////////////////
  // Generic functions

  function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
  }
  let concatResult = getItems<number>([1, 2, 5, 6]);

  let concatString = getItems<string>(["a", "b", "c"]);
  // ↑↑↑↑↑↑ can replace type as needed <number> <string> ... ↑↑↑↑↑↑

