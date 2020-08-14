/// <reference types="cypress" />

describe('then and wrap methods', () => {

  it('then and wrap methods', () => {

    cy.visit('http://localhost:4300')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //lots of repetition which can be converted to a variable to be called
    cy.contains('nb-card','Using the Grid')
    .find('[for="inputEmail1"]')
    .should('contain','Email')

    cy.contains('nb-card','Using the Grid')
    .find('[for="inputPassword2"]')
    .should('contain','Password')

    cy.contains('nb-card','Basic form')
    .find('[for="exampleInputEmail1"]')
    .should('contain','Email address')

    cy.contains('nb-card','Basic form')
    .find('[for="exampleInputPassword1"]')
    .should('contain','Password')

    //selenium - wont work in Cypress because of its asynchronous nature
    //const firstForm = cy.contains('nb-card', 'Using the Grid')
    //const secondForm = cy.contains('nb-card','Basic form')

    //firstForm.find('[for="exampleInputEmail1"]')
    //firstForm.find('[for="exampleInputPassword1"]')
    //secondForm.find('[for="exampleInputEmail1"]')

    //Cypress style
    //Difference between Cypress jquery and jquery format
    //Jquery chai
    //saving contains results into firstform
    cy.contains('nb-card','Using the Grid').then(firstForm => {
      //variables - jquery
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
      //chai assertions
      expect(emailLabelFirst).to.equal('Email')
      expect(passwordLabelFirst).to.equal('Password')

      cy.contains('nb-card','Basic form').then(secondForm => {
        const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
        expect(passwordLabelFirst).to.equal(passwordSecondText)

        //convert jquery object back to cypress command methods
        cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain','Password')
    })
  })
})
