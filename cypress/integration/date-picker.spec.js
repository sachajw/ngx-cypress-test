/// <reference types="cypress" />

describe('Date Picker', () => {

  it('first test', () => {
  })

  it('second test', () => {
  })

  it('then and wrap methods', () => {
  })

  it('invoke command', () => {
  })

  it('assert property', () => {
        cy.visit('http://localhost:4300')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card','Common Datepicker').find('input').then(input => {
          cy.wrap(input).click()
          cy.get('nb-calendar-day-picker').contains('17').click()
          //using the property tab in the chrome browser to
          cy.wrap(input).invoke('prop','value').should('contain','Jul 17, 2020')
        })

  })

  it('radio button', () => {
  })

  it('check boxes', () => {
  })

})
