let fname: string = "kaew";
// fname = 2; error
console.log(fname);
console.log(fname.toUpperCase());

let age: number;
age = 25;
// age = "25"; error
console.log(age);

let isValid: boolean;
// console.log(isValid); error not init
isValid = true;
console.log(isValid);

let nameList: string[];
// nameList = ["kaew", "arin", 2]; error
nameList = ["kaew", "arin"];

let numList: Array<number>;
numList = [1, 2, 3, 4];

let result = numList.filter((num) => num > 2);
console.log(result);

enum Color {
    Red,
    Green,
    Blue,
}

let c: Color = Color.Blue;

const enum SomeType {
    AAA,
    BBB,
    CCC,
}

let t: SomeType = SomeType.CCC;
// t = 3 when it is const enum

let swapNum: [firstNum: number, secondNum: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNum = swapNumbers(10, 20);

console.log(swapNum[0]);
console.log(swapNum[1]);

let department: any; // dont use any
// let department;
department = "IT";
department = 2;
department = true;
