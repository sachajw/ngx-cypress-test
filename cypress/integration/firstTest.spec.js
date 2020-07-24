/// <reference types="cypress" />

const { verify } = require("crypto")
const { table } = require("console")

describe('Our first suite', () => {

//  it('first test', () => {
//
//    cy.visit('http://localhost:4300')
//    cy.contains('Forms').click()
//    cy.contains('Form Layouts').click()
//
//    //by Tag Name
//    cy.get('input')
//
//    //by ID
//    cy.get('#inputEmail1')
//
//    //by Attribute name
//    cy.get('[placeholder]')
//
//    //by Attribute name and value
//    cy.get('[placeholder="Email"]')
//
//    //by Class name
//    cy.get('.input-full-width')
//
//    //by Class value - provide entire string
//    cy.get('[class="input-full-width size-medium shape-rectangle"]')
//
//    //by Tag name and Attribute with value
//    cy.get('input[placeholder="Email"]')
//
//    //by two different attributes
//    cy.get('[placeholder="Email"][fullwidth][type="email"]')
//
//    //by tag name, attribute with value, ID and class name
//    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
//
//    //recommended way by Cypress
//    cy.get('[data-cy="inputEmail1"]')
//
//  })
//
//  it('second test', () => {
//
//    cy.visit('http://localhost:4300')
//    cy.contains('Forms').click()
//    cy.contains('Form Layouts').click()
//
//    cy.get('[data-cy="signInButton"]')
//
//    cy.contains('Sign in')
//
//    cy.contains('[status="warning"]','Sign in')
//
//    cy.get('#inputEmail3')
//      .parents('form')
//      .find('button')
//      .should('contain', 'Sign in')
//      //only finds parent
//      .parents('form')
//      //only finds child
//      .find('nb-checkbox')
//      .click()
//    //parent, child, object
//    cy.contains('nb-card','Horizontal form').find('[type="Email"]')
//
//  })

//  it('then and wrap methods', () => {
//
//    cy.visit('http://localhost:4300')
//    cy.contains('Forms').click()
//    cy.contains('Form Layouts').click()

    //lots of repetition which can be converted to a variable to be called
//    cy.contains('nb-card','Using the Grid')
//    .find('[for="inputEmail1"]')
//    .should('contain','Email')
//
//    cy.contains('nb-card','Using the Grid')
//    .find('[for="inputPassword2"]')
//    .should('contain','Password')
//
//    cy.contains('nb-card','Basic form')
//    .find('[for="exampleInputEmail1"]')
//    .should('contain','Email address')
//
//    cy.contains('nb-card','Basic form')
//    .find('[for="exampleInputPassword1"]')
//    .should('contain','Password')

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
//    cy.contains('nb-card','Using the Grid').then(firstForm => {
//      //variables - jquery
//      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
//      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
//      //chai assertions
//      expect(emailLabelFirst).to.equal('Email')
//      expect(passwordLabelFirst).to.equal('Password')
//
//      cy.contains('nb-card','Basic form').then(secondForm => {
//        const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
//        expect(passwordLabelFirst).to.equal(passwordSecondText)
//
//        //convert jquery object back to cypress command methods
//        cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain','Password')
//
//      })
//
//    })

  })

//  it('invoke command', () => {
//    cy.visit('http://localhost:4300')
//    cy.contains('Forms').click()
//    cy.contains('Form Layouts').click()
//
//    //1
//    cy.get('[for="exampleInputEmail1"]').should('contain','Email address')
//
//    //2 jquery text method
//    cy.get('[for="exampleInputEmail1"]').then(label => {
//      expect(label.text()).to.equal('Email address')
//
//    //3 cypress invoke method
//    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
//      expect(text).to.equal('Email address')
//
//    //4 checkbox
//    cy.contains('nb-card','Basic form')
//    .find('nb-checkbox')
//    .click()
//    .find('.custom-checkbox')
//    .invoke('attr','class')
//    //one way to make an assertion is to use the cypress method of should
//    //.should('contain','checked')
//    //the other way to make an assertion is to extract the result of the invoke function as a parameter for that function
//    //then use the chai assertion to make the same verification
//    .then(classValue => {
//      expect(classValue).to.contain('checked')
//    })
//
//  })

//  it.only('assert property', () => {
//      cy.visit('http://localhost:4300')
//      cy.contains('Forms').click()
//      cy.contains('Datepicker').click()
//
//      cy.contains('nb-card','Common Datepicker').find('input').then(input => {
//        cy.wrap(input).click()
//        cy.get('nb-calendar-day-picker').contains('17').click()
//        //using the property tab in the chrome browser to
//        cy.wrap(input).invoke('prop','value').should('contain','Jul 17, 2020')
//      })
//
//    })

//  it.only('radio button', () => {
//    cy.visit('http://localhost:4300')
//    cy.contains('Forms').click()
//    cy.contains('Form Layouts').click()
//
//    cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons => {
//      cy.wrap(radioButtons)
//        .first()
//        .check({force:true})
//        .should('be.checked')
//
//      cy.wrap(radioButtons)
//        //element with index 1
//        .eq(1)
//        .check({force:true})
//
//      cy.wrap(radioButtons)
//        .first()
//        .should('not.be.checked')
//
//      cy.wrap(radioButtons)
//      .eq(2)
//      .should('be.disabled')
//    })
//
//  })

//  it.only('check boxes', () => {
//    cy.visit('http://localhost:4300')
//    cy.contains('Modal & Overlays').click()
//    cy.contains('Toastr').click()
//
//    cy.get('[type="checkbox"]').check({force:true})
//    cy.get('[type="checkbox"]').eq(0).click({force:true})
//    cy.get('[type="checkbox"]').eq(0).check({force:true})
//    //check only for checkboxes and radio buttons
//    //check can not uncheck, use click
//  })

//  it.only('lists and dropdowns', () => {
//    cy.visit('http://localhost:4300')
    //1
//    cy.get('nav nb-select').click()
//    cy.get('.options-list').contains('Dark').click()
    //colour change covert hex to rgb for cypress
//    cy.get('nav nb-select').click().should('contain','Dark')
//    cy.get('nb-layout-header nav').should('have.css','background-color','rgb(34, 43, 69)')

    //2
    //cypress looping through the elements
//    cy.get('nav nb-select').click().then(dropdown => {
//      cy.wrap(dropdown).click()
//      //each can have up to 3 items
//      cy.get('.options-list nb-option').each((listItem, index) => {
//        //trim removes whitespace
//        const itemText = listItem.text().trim()
//        //json list ogject
//        const colors = {
//          "Light": "rgb(255, 255, 255)",
//          "Dark": "rgb(34, 43, 69)",
//          "Cosmic": "rgb(50, 50, 89)",
//          "Corporate": "rgb(255, 255, 255)"
//        }
//
//        cy.wrap(listItem).click()
//        cy.wrap(dropdown).should('contain'. itemText)
//        cy.get('nb-layout-header nav').should('have.css','background-color', colors[itemText])
//        //if the list is more than 3 the next action will be skipped
//        if(index < 3){
//          cy.wrap(dropdown).click()
//        }
//
//      })
//    })

    it.only('Web tables', () => {
      cy.visit('http://localhost:4300')
      cy.contains('Tables & Data').click()
      cy.contains('Smart Table').click()

      //1
      cy.get('tbody').contains('tr','Larry').then(tableRow => {
        cy.wrap(tableRow).find('.nb-edit').click()
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
        cy.wrap(tableRow).find('.nb-checkmark').click()
        cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
      })

      //2
      cy.get('thead').find('.nb-plus').click()
      cy.get('thead').find('tr').eq(2).then(tableRow => {
        cy.wrap(tableRow).find('[placeholder="First Name"]').type('Artem')
        cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Bondar')
        cy.wrap(tableRow).find('.nb-checkmark').click()
      })
      cy.get('tbody tr').first().find('td').then(tableColumns => {
        cy.wrap(tableColumns).eq(2).should('contain','Artem')
        cy.wrap(tableColumns).eq(3).should('contain','Bondar')
      })

      //3
      //array with test data
      const age = [20, 30, 40]

      cy.wrap(age).each(age => {
        cy.get('thead [placeholder="Age"]').clear().type(age)
        cy.wait(500)
        cy.get('tbody tr').each(tableRow => {
          if(age == 200){
            cy.wrap(tableRow).should('contain', 'No data found')
          } else {
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)
          }

      })



    })

  })








