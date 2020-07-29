/// <reference types="cypress" />

import {navigateTo} from "../support/page_objects/navigationPage"
import {onFormLayoutsPage} from "../support/page_objects/formLayoutsPage"
import {onDatePickerPage} from "../support/page_objects/datepickerPage"
import {onSmartTablePage} from "../support/page_objects/smartTablePage"

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

  it('should submit Inline and Basic forma nd selct tomorrow date in the calendar', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem','test@test.com')
    onFormLayoutsPage.submitInlineFormWithEmailAndPassword('test@test.com','password')
    navigateTo.datepickerPage()
    onDatePickerPage.selectCommonDatepickerDateFromToday(1)
    onDatePickerPage.selectCommonDatepickerWithRangeFromToday(7, 14)
    navigateTo.smartTablePage()
    onSmartTablePage.addNewRecordWithFirstAndLastName('Artem','Bondar')
    onSmartTablePage.updateAgeByFirstName('Artem', '35')
    onSmartTablePage.deleteRowByIndex(1)
  })
})
