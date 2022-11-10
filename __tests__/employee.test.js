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
    const x = new Employee("Snow", testId);
    expect(x.id).toBe(testId);
});

test("Using constructor arguments can set an email", () => {
    const testEmail = "test@email.com";
    const x = new Employee("Snow", 1, testEmail);
    expect(x.email).toBe(testEmail);
});

test("Using a function can retrieve name", () => {
    const testName = "Snow";
    const x = new Employee(testName);
    expect(x.retrieveName()).toBe(testName);
});

test("Using a funciton can retrieve id", () => {
    const testId = 100;
    const x = new Employee("Snow", testId);
    expect(x.retrieveId()).toBe(testId);
});

test("Using a function can retrieve email", () => {
    const testEmail = "test@email.com";
    const x = new Employee("Snow", 1, testEmail);
    expect(x.retrieveEmail()).toBe(testEmail);
})