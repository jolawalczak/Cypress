import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
    cy.viewport(1600, 720);
});

Given("A user go to the login page", function () {
    cy.visit('account/login');
});


When("The user fill the username", function () {
    const username = Cypress.env('username');
    cy.get('#user_email').type(username)
});


When("The user fill the password", function () {
    const password = Cypress.env('password');
    cy.get('#user_password').type(password);
});

Then("The user click on the button submit", function () {
    cy.get('[type="submit"]').click();
});

Then("The user click on the button by text {string}", function (text) {
    cy.get('span').contains(text, { timeout: 5000 }).scrollIntoView();
    cy.get('span').contains(text, { timeout: 5000 }).click();
});

Then("The user is on the learning page", function () {
    const urlRequired = 'https://www.edu.goit.global/pl/learn/6128421/5832665/5832822/textbook';
    cy.url({ decode: true }).should('contain', urlRequired, { timeout: 5000 });
});

Then("The user find tab {string} and click on this", function (text) {
    cy.get('span').contains(text, { timeout: 5000 }).click();
});

Then("The user is on the homework page", function () {
    const urlRequired = 'https://www.edu.goit.global/pl/learn/6128421/5832665/5832822/homework';
    cy.url({ decode: true }).should('contain', urlRequired, { timeout: 5000 });
});

Then("The user find button {string}", function (text) {
    cy.get('span').contains(text, { timeout: 5000 });
});

