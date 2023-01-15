"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // constructor
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Login() {
        return { name: "John", id: 1, email: "" };
    }
    /////////// Method //////////////
    getNameWithAddress() {
        // return this.name + ": " + this.address; (with +++)
        return `${this.name} lives at ${this.address}`;
    }
}
let john = new Employee(1, "John", "Blabla 88");
let address = john.getNameWithAddress();
// john.id = 1;
// john.name = 'John';
// john.address = 'Blabla 88';
console.log(john);
console.log(address);
