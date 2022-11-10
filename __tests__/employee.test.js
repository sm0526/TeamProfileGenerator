const Employee = require("../lib/Employee");

test("Can create new Employee", () => {
    const x = new Employee();
    expect(typeof(x)).toBe("object");
});

test("Using constructor arguments can set a name", () => {
    const testName = "Snow";
    const x = new Employee(testName);
    expect(x.name).toBe(testName);
});

test("Using constructor arguments can set an id", () => {
    const testId = 100;
    const x = new Employee("White", testId);
    expect(x.id).toBe(testId);
});

test("Using constructor arguments can set an email", () => {
    const testEmail = "test@email.com";
    const x = new Employee("White", 1, testEmail);
    expect(x.email).toBe(testEmail);
});