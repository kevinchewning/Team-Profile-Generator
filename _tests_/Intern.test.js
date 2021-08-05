const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it("Creates a school key with a value of ''.", () => {
        const intern = new Intern;

        expect(intern.school).toBe('');
    })

    it("Changes the parent class key 'role' to a value of 'Intern'", () => {
        const intern = new Intern;

        expect(intern.role).toBe('Intern');
    })
})

describe("getSchool", () => {
    it("Returns the value of the school key", () => {
        const intern = new Intern;

        const fn = intern.getSchool();

        expect(fn).toBe('');
    })
})

describe("getRole", () => {
    it("Should return role of subclass", () => {
        const intern = new Intern;

        const fn = intern.getRole();

        expect(fn).toBe('Intern');
    })
})