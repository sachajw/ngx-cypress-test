/// <reference types="cypress" />

describe('Our first suite', () => {

  it.only('radio button', () => {
    cy.visit('http://localhost:4300')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons => {
      cy.wrap(radioButtons)
        .first()
        .check({force:true})
        .should('be.checked')

      cy.wrap(radioButtons)
        //element with index 1
        .eq(1)
        .check({force:true})

      cy.wrap(radioButtons)
        .first()
        .should('not.be.checked')

      cy.wrap(radioButtons)
      .eq(2)
      .should('be.disabled')
    })
  })

