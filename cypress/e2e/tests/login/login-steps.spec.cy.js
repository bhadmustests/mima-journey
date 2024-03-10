import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^User is on the trymima page$/, () => {
	cy.visit('/')
});

When(/^User Clicks Login Button$/, () => {
	cy.ClickAButton("button[class='sc-imWYAI hgdAmX']")
});

When(/^User fills in a valid email$/, () => {
	return true;
});

When(/^User fills in a valid password$/, () => {
	return true;
});

Then(/^User clicks on the Login Button$/, () => {
	return true;
});
