const Engineer = require("../lib/Engineer");

TextDecoderStream("Using constructor arguments can set GitHub username", () => {
    const testGitHub = "GitHubUserName";
    const x = new Engineer("Snow", 1, "test@email.com", testGitHub);
    expect(x.github).toBe(testGitHub);
});