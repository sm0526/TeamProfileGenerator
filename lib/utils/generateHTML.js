const path = require("path");
const fs = require("fs");

const templateDir = path.resolve(__dirname, "./template");

const render = employees => {
    const html = [];
    html.push(
        ...employees.filter((employee) => employee.retrieveRole() === "Manager").map((manager) => renderManager(manager))
    );
    html.push(
        ...employees.filter((employee) => employee.retrieveRole() === "Engineer").map((engineer) => renderEngineer(engineer))
    );
    html.push(
        ...employees.filter((employee) => employee.retrieveRole() === "Intern").map((intern) => renderIntern(intern))
    );
    return renderContainer(html.join(""));
};
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf-8");
    template = replacePlaceholders(template, "name", manager.retrieveName());
    template = replacePlaceholders(template, "role", manager.retrieveRole());
    template = replacePlaceholders(template, "email", manager.retrieveEmail());
    template = replacePlaceholders(template, "id", manager.retrieveId());
    template = replacePlaceholders(template, "officeNumber", manager.retrieveOfficeNumber());
    return template;
};
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf-8");
    template = replacePlaceholders(template, "name", engineer.retrieveName());
    template = replacePlaceholders(template, "role", engineer.retrieveRole());
    template = replacePlaceholders(template, "email", engineer.retrieveEmail());
    template = replacePlaceholders(template, "id", engineer.retrieveId());
    template = replacePlaceholders(template, "github", engineer.retrieveGitHub());
    return template;
};
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf-8");
    template = replacePlaceholders(template, "name", intern.retrieveName());
    template = replacePlaceholders(template, "role", intern.retrieveRole());
    template = replacePlaceholders(template, "email", intern.retrieveEmail());
    template = replacePlaceholders(template, "id", intern.retrieveId());
    template = replacePlaceholders(template, "school", intern.retrieveSchool());
    return template;
};
const renderContainer = html => {
    const template = fs.readFileSync(path.resolve(templateDir, "container.html"), "utf-8");
    return replacePlaceholders(template, "team", html);
};
const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + "}}", "gm");
    return template.replace(pattern, value);
};
module.exports = render;