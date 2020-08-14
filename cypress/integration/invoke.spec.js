/// <reference types="cypress" />

describe('Our first suite', () => {

  it('invoke', () => {

  it('invoke command', () => {
    cy.visit('http://localhost:4300')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //1
    cy.get('[for="exampleInputEmail1"]').should('contain','Email address')

    //2 jquery text method
    cy.get('[for="exampleInputEmail1"]').then(label => {
      expect(label.text()).to.equal('Email address')

    //3 cypress invoke method
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
      expect(text).to.equal('Email address')

    //4 checkbox
    cy.contains('nb-card','Basic form')
    .find('nb-checkbox')
    .click()
    .find('.custom-checkbox')
    .invoke('attr','class')
    //one way to make an assertion is to use the cypress method of should
    //.should('contain','checked')
    //the other way to make an assertion is to extract the result of the invoke function as a parameter for that function
    //then use the chai assertion to make the same verification
    .then(classValue => {
      expect(classValue).to.contain('checked')
    })
  })

