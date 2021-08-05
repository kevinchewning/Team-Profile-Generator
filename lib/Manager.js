const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber = '';
        this.role = 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber;
    };
}

module.exports = Manager;