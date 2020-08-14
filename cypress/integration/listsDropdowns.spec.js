/// <reference types="cypress" />

describe('Our first suite', () => {

  it('lists and dropdowns', () => {

  it.only('lists and dropdowns', () => {
    cy.visit('http://localhost:4300')
    //1
    cy.get('nav nb-select').click()
    cy.get('.options-list').contains('Dark').click()
    //colour change covert hex to rgb for cypress
    cy.get('nav nb-select').click().should('contain','Dark')
    cy.get('nb-layout-header nav').should('have.css','background-color','rgb(34, 43, 69)')

    //2
    //cypress looping through the elements
    cy.get('nav nb-select').click().then(dropdown => {
      cy.wrap(dropdown).click()
      //each can have up to 3 items
      cy.get('.options-list nb-option').each((listItem, index) => {
        //trim removes whitespace
        const itemText = listItem.text().trim()
        //json list ogject
        const colors = {
          "Light": "rgb(255, 255, 255)",
          "Dark": "rgb(34, 43, 69)",
          "Cosmic": "rgb(50, 50, 89)",
          "Corporate": "rgb(255, 255, 255)"
        }

        cy.wrap(listItem).click()
        cy.wrap(dropdown).should('contain'. itemText)
        cy.get('nb-layout-header nav').should('have.css','background-color', colors[itemText])
        //if the list is more than 3 the next action will be skipped
        if(index < 3){
          cy.wrap(dropdown).click()
        }
    })
  })

