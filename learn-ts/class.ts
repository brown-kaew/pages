// import * as Inf from "./interface"; // dont import *
import { Greeting } from "./interface";

interface Address {
    streetName?: string;
    city: string;
    zipCode: number;
}

class Employee implements Greeting {
    #id: number;
    protected name: string;
    address: Address;

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    get id(): number {
        return this.#id;
    }

    set id(id: number) {
        this.#id = id;
    }

    greet(): string {
        return `Hi my name is ${this.name}`;
    }

    getNameWithAddress(): string {
        return `${this.name} ${this.address}`;
    }

    static getEmployeeCount(): number {
        return 55;
    }
}

let emp = new Employee(1, "Kaew", { city: "Bangkok", zipCode: 55555 });

console.log(emp);
// console.log(emp.#id); // error name is private
// console.log(emp.name); // error name is protected
console.log(emp.address);
console.log(emp.greet());
console.log(emp.getNameWithAddress());

emp.id = 100;
console.log(emp);
console.log(emp.id);

console.log(Employee.getEmployeeCount());

// Inheritance
class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getAddress(): string {
        return `Manager address -> ${this.address}`;
    }
}

let mgr = new Manager(2, "Arin", { city: "Korea", zipCode: 44444 });

console.log(mgr);
// console.log(mgr.#id); // error name is private
// console.log(mgr.name); // error name is protected
console.log(mgr.address);
console.log(mgr.greet());
console.log(mgr.getNameWithAddress());
console.log(mgr.getAddress());

mgr.id = 100;
console.log(mgr);
console.log(mgr.id);

console.log(Manager.getEmployeeCount());
