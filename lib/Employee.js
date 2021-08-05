const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.name = '';
        this.id = '';
        this.email = '';
        this.role = 'Employee';
    }

    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
}

module.exports = Employee;