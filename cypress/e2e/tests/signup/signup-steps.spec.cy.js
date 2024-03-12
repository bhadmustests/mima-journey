import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import {faker} from '@faker-js/faker'

let sel

let inboxId
let emailAddress
let emailBody
let otpValue

before(function () {
  cy.fixture('selectors').then((data) => {
    sel = data
  })
})

When(/^User selects how they heard about mima$/, () => {
	cy.selectReferalOption()
});

When(/^User clicks the SignUp Button$/, () => {
	cy.clickElement(sel.otpPage.submitButton)
});

Then(/^User sees token notification message$/, () => {
  cy.get(sel.otpPage.otpMessage).invoke('text').then((message) => {
      expect(message).to.contain('To make sure we’ve got your details right,we’ve sent a 5 digit code to your registered email')
      cy.log(message)
  })
});

Then(/^User retrieves token from email$/, () => {
	// retrieve token from the email
  cy.retrieveToken()
});

When(/^User inserts token on the token page$/, () => {
	// insert the OTP
  cy.insertOTP()
});

Then(/^The user should have access to the home page$/, () => {
	// Verify Page access is successful
  cy.url().should("include", "home")
  cy.get('.Sidebar_sb_nav_ul__SIy2E > li:nth-of-type(1)').should('contain', 'Home')
});


When(/^User fills in a "([^"]*)"$/, (args1) => {
	cy.insert(args1);
});


When(/^User Clicks "([^"]*)" Button$/, (args1) => {
	cy.clickElement(args1)
});

When(/^User selects "([^"]*)" as how they heard about mima$/, (args1) => {
	cy.selectAReferalOption(args1)
});

When(/^The user should see the content of the side tabs$/, (datatable) => {
	datatable.hashes().forEach((row) => {
		cy.contains(row.sidebar).should('exist').and('be.visible').and('contain', row.sidebar)
	})
});
