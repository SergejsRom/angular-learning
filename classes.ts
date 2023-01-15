import { Login, User } from "./interface";

class Employee implements Login {
  id: number;
  name: string;
  address: string;

  // constructor

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  Login(): User {
    return { name: "John", id: 1, email: "" };
  }

  /////////// Method //////////////
  getNameWithAddress(): string {
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
