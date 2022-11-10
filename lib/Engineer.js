const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    retrieveGitHub() {
        return this.github;
    }
    retrieveRole() {
        return "Engineer";
    }
}

module.exports = Engineer;