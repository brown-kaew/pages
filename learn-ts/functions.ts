function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(3, 2));
console.log(add(3, 2, 5));

const sub = (num1: number, num2: number, num3 = 1): number => num1 - num2 - num3;
console.log(sub(3, 2));
console.log(sub(3, 2, 5));

const mult = function (num1: number, num2: number): number {
    return num1 * num2;
};
console.log(mult(3, 2));

function sum(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((prev, current) => prev + current);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sum(1, 2, ...[3, 4, 5, 6, 7, 8, 9]));

function getItem<Type>(item: Type[]): Type[] {
    return new Array<Type>(...item);
}

let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(getItem(nums));

let friuts: string[] = ["banana", "apple", "orrenge", "coconut"];
console.log(getItem(friuts));
