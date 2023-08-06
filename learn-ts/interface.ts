export interface User {
    id: number;
    name: string;
    age: number;
    email?: string; // ?
}

export interface Employees extends User {
    salary: number;
}

export interface Greeting {
    greet(): string;
}

var user: User = { id: 1, name: "Arin", age: 18 };
console.log(user);
var { name, age }: User = user;
console.log(`${name} ${age}`);

var { name: asName, age: asAge }: User = user;
console.log(`${asName} ${asAge}`);

let emplpoyee: Employees = { id: 1, name: "Arin", age: 18, salary: 99999 };
console.log(emplpoyee);

let [usr1, usr2, ...restUsr]: User[] = [
    { id: 1, name: "Arin1", age: 18 },
    { id: 2, name: "Arin2", age: 18 },
    { id: 3, name: "Arin3", age: 18 },
    { id: 4, name: "Arin4", age: 18 },
    { id: 5, name: "Arin5", age: 18 },
];

console.log(usr1);
console.log(usr2);
console.log(restUsr);
