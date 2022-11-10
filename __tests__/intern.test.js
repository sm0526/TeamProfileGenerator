const Intern = require("../lib/Intern");

test("Using constructor arguments can set school", () => {
    const testSchool = "DU";
    const x = new Intern("Snow", 1, "test@email.com", testSchool);
    expect(x.school).toBe(testSchool);
});

test("Using a function to retrieve the school name", () => {
    const testSchool = "DU";
    const x = new Intern("Snow", 1, "test@email.com", testSchool);
    expect(x.retrieveSchool()).toBe(testSchool);
});

test("Using a function retrieve the employee role \"Intern\"", () => {
    const testRole = "Intern";
    const x = new Intern("Snow", 1, "test@email.com", "DU");
});