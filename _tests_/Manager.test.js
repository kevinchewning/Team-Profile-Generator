const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it("Creates a officeNumber key with a value of ''.", () => {
        const manager = new Manager;

        expect(manager.officeNumber).toBe('');
    })

    it("Changes the parent class key 'role' to a value of 'Manager'", () => {
        const manager = new Manager;

        expect(manager.role).toBe('Manager');
    })
})

describe("getOfficeNumber", () => {
    it("Returns the value of the officeNumber key", () => {
        const manager = new Manager;

        const fn = manager.getOfficeNumber();

        expect(fn).toBe('');
    })
})

describe("getRole", () => {
    it("Should return role of subclass", () => {
        const manager = new Manager;

        const fn = manager.getRole();

        expect(fn).toBe('Manager');
    })
})