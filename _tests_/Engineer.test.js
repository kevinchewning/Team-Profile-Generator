const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Employee class", () => {
    it("Creates a github key with a value of ''.", () => {
        const engineer = new Engineer;

        expect(engineer.github).toBe('');
    })

    it("Changes the parent class key 'role' to a value of 'Engineer'", () => {
        const engineer = new Engineer;

        expect(engineer.role).toBe('Engineer');
    })
})

describe("getGithub", () => {
    it("Returns the value of the github key", () => {
        const engineer = new Engineer;

        const fn = engineer.getGithub();

        expect(fn).toBe('');
    })
})

describe("getRole", () => {
    it("Should return role of subclass", () => {
        const engineer = new Engineer;

        const fn = engineer.getRole();

        expect(fn).toBe('Engineer');
    })
})