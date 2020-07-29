/// <reference types="cypress" />

  it.only('tooltip', () => {
    cy.visit('http://localhost:4300')
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()

    cy.contains('nb-card','Colored Tooltips')
      .contains('Default').click()
    cy.get('nb-tooltip').should('contain','This is a tooltip')
  })

