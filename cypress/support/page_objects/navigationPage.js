/// <reference types="cypress" />


function selectGroupmenuItem(groupName){
  cy.contains('a', groupName).then( menu => {
    cy.wrap(menu).find('.expand-state g g').invoke('attr','data-name').then(attr => {
      if(attr.includes('left')){
        cy.wrap(menu).click()
      }
    })
  })
}

export class NavigationPage{

  formLayoutsPage(){
    selectGroupmenuItem('Form')
    cy.contains('Form Layouts').click()
  }

  datepickerPage(){
    selectGroupmenuItem('Form')
    cy.contains('Datepicker').click()
  }

  toasterPage(){
    selectGroupmenuItem('Modal & Overlays')
    cy.contains('Toastr').click()
  }

  smartTablePage(){
    selectGroupmenuItem('Tables & Data')
    cy.contains('Smart Table').click()
  }

  tooltipPage(){
    selectGroupmenuItem('Modal & Overlays')
    cy.contains('Tooltip').click()
  }

}

export const navigateTo = new NavigationPage()
