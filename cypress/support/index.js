// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'



// ignore uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
    return false
})
  

afterEach(() => {
  cy.window().then((win) => {
    win.sessionStorage.clear()
  });
})





//beforeEach(() => {
//const sizes = [ [1280, 980], 'samsung-s10']

 // sizes.forEach((size) => {

    //  if (Cypress._.isArray(size)) {
      //  cy.viewport(size[0], size[1])
     // } else {
     //   cy.viewport(size)
     // }


   // })
 // })
// patch Cypress top.onerror
// Alternatively you can use CommonJS syntax:
// require('./commands')
