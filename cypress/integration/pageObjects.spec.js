/// <reference types="cypress" />

import {navigateTo} from "../support/page_objects/navigationPage"

describe('page objects', () => {

  beforeEach('open application', () => {
      cy.visit('http://localhost:4300')
  })

  it('verify navigation across the pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
    navigateTo.smartTablePage()
    navigateTo.tooltipPage()
    navigateTo.toasterPage()
  })
})
