const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor() {
        super();
        this.github = ''
        this.role = 'Engineer';
    }

    getGithub() {
        return this.github;
    };
}


module.exports = Engineer;