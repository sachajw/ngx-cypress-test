/// <reference types="cypress" />

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
    .should('contain','checked')


    })

    })



  }

})

