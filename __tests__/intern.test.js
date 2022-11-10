const Intern = require("../lib/Intern");

test("Using constructor arguments can set school", () => {
    const testSchool = "DU";
    const x = new Intern("Snow", 1, "test@email.com", testSchool);
    expect(x.school).toBe(testSchool);
});