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

  it.only('assert property', () => {

      function selectDayFromCurrent(day){
        //get date object - current system date and time
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate()
            let futureMonth = date.toLocaleString('default', {month: 'short'})
            let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear()
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
                if(!dateAttribute.includes(futureMonth)){
                    cy.get('[data-name="chevron-right"]').click()
                    //call the function again until the right date is found
                    selectDayFromCurrent(day)
                    //cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                } else {
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                }
            })
            return dateAssert
        }

        cy.visit('http://localhost:4300')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card','Common Datepicker').find('input').then( input => {

          cy.wrap(input).click()
          let dateAssert = selectDayFromCurrent()
          cy.wrap(input).invoke('prop','value').should('contain',dateAssert)

          //using the property tab in the chrome browser
          //hardcoded example
          //cy.get('nb-calendar-day-picker').contains('17').click()
        })

  })

  it('radio button', () => {
  })

  it('check boxes', () => {
  })

})
