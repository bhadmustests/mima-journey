const credentials = "credentials"

describe('mima login', () => {
    it('logs in using credentials', () => {
    cy.visit('/');
   cy.get("button[class='sc-imWYAI hgdAmX']").should('exist').and('be.visible').click();

    cy.fixture(credentials).then((data) => {
        cy.get('#email').type(data.email);
        cy.get('#password').type(data.password);
        cy.get("button[type='submit']").contains('Login').click()
        cy.get('.AppPage_topside_name__7zj2X').should('have.text', "eyeballs")//Kindly add Id 
      });
})
})