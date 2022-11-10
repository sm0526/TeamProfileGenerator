const Manager = require("../lib/Manager");

test("Using constructor argument can set office number", () => {
    const testOffice = 100;
    const x = new Manager("Snow", 1, "test@email.com", testOffice);
    expect(x.officeNumber).toBe(testOffice);
});

test("Using a function can retrieve the office number", () => {
    const testOffice = 100;
    const x = new Manager("Snow", 1, "test@email.com", testOffice);
    expect(x.retrieveOfficeNumber()).toBe(testOffice);
});