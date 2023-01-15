class Employee {
  id: number;
  name: string;
  address: string;

  // constructor

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  /////////// Methods //////////////
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


