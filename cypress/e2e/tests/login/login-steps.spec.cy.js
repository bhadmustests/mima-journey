import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(/^User fills in a "([^"]*)"$/, (args1) => {
	cy.insert(args1);
});

When(/^User clicks on the "([^"]*)" Button$/, (args1) => {
	cy.clickElement(args1)
});

Then(/^The user should see the content of the side tabs$/, (datatable) => {
	datatable.hashes().forEach((row) => {
		cy.contains(row.sidebar).should('exist').and('be.visible').and('contain', row.sidebar)
	})
});

