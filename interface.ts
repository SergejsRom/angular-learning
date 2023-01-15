export interface User {
    name: string;
    age?: number; // "?" makes it optional
    id: number;
    email: string;
}

let user : User = {name: "John", id: 1, email: ""};

interface Employees extends User {
    salary: number;
}
let employees: Employees = {name: "John", id: 1, email: "", salary: 2000}

export interface Login {
    Login(): User;
}
