import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const credentials = "credentials"

Given(/^User is on the trymima page$/, () => {
	cy.visit('/')
});

When(/^User Clicks Login Button$/, () => {
	cy.ClickAButton("button[class='sc-imWYAI hgdAmX']")
});

When(/^User fills in a valid email$/, () => {
	cy.fixture(credentials).then((data) => {
        cy.get('#email').type(data.email);
      });
});

When(/^User fills in a valid password$/, () => {
	cy.fixture(credentials).then((data) => {
        cy.get('#password').type(data.password);
      });
});

When(/^User clicks on the Login Button$/, () => {
    cy.ClickAButton("button[type='submit']")
});

Then(/^User is able to login$/, () => {
    cy.Validate('.AppPage_topside_name__7zj2X')
});

