const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    retrieveOfficeNumber() {
        return this.officeNumber;
    }
    retrieveRole() {
        return "Manager";
    }
}

module.exports= Manager;