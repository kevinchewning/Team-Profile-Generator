const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor() {
        super();
        this.school = '';
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    };
}


module.exports = Intern;