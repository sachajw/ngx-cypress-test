/// <reference types="cypress" />

it('dialogue box', () => {
  cy.visit('http://localhost:4300')
  cy.contains('Tables & Data').click()
  cy.contains('Smart Table').click()

  //1
  cy.get('tbody tr').first().find('.nb-trash').click()
  cy.on('window:confirm', (confirm) => {
    expect(confirm).to.equal('Are you sure you want to delete?')
  })

  //2
  const stub = cy.stub()
  cy.on('window:confirm', stub)
  cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
    expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
})

  //3 click cancel
  cy.get('tbody tr').first().find('.nb-trash').click()
  cy.on('window:confirm', () => false)
})
