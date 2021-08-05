const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe('Employee class constructor', () => {
    it('Creates blank values for name, id, and email', () => {
        const employee = new Employee;

        expect(employee.name).toBe('');
        expect(employee.id).toBe('');
        expect(employee.email).toBe('');
    })

    it('Gives the "role" key a value of "Employee" by calling the getRole method', () => {
        const employee = new Employee;

        expect(employee.role).toBe('Employee');
    })
});

describe('getName', () => {
    it("Returns the value of the Object's name key", () => {
        const employee = new Employee;

        expect(employee.getName()).toBe('');
    })
});

describe('getID', () => {
    it("Returns the value of the Object's id key", () => {
        const employee = new Employee;

        expect(employee.getID()).toBe('');
    })
});

describe('getEmail', () => {
    it("Returns the value of the Object's email key", () => {
        const employee = new Employee;

        expect(employee.getEmail()).toBe('');
    })
});

describe('getRole', () => {
    it("Returns the value of the Object's role key", () => {
        const employee = new Employee;

        expect(employee.getRole()).toBe('Employee');
    })
});