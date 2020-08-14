/// <reference types="cypress" />

describe('Our first suite', () => {

  it('first test', () => {

  it.only('check boxes', () => {
    cy.visit('http://localhost:4300')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    cy.get('[type="checkbox"]').check({force:true})
    cy.get('[type="checkbox"]').eq(0).click({force:true})
    cy.get('[type="checkbox"]').eq(0).check({force:true})
    //check only for checkboxes and radio buttons
    //check can not uncheck, use click
  });
})
