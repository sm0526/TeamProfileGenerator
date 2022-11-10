const Engineer = require("../lib/Engineer");

test("Using constructor arguments can set GitHub username", () => {
    const testGitHub = "GitHubUserName";
    const x = new Engineer("Snow", 1, "test@email.com", testGitHub);
    expect(x.github).toBe(testGitHub);
});

test("Using a function can retieve GitHub username", () => {
    const testGitHub = "GitHubUserName";
    const x = new Engineer("Snow", 1, "test@email.com", testGitHub);
    expect(x.retrieveGitHub()).toBe(testGitHub);
});

test("Using a function retrieve employee's role \"Engineer\"", () => {
    const testRole = "Engineer";
    const x = new Engineer("Snow", 1, "test@email.com", "GitHubUserName");
    expect(x.retrieveRole()).toBe(testRole);
});