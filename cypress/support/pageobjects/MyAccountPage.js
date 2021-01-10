/// <reference types="Cypress" />

import MyAccountElements from '../elements/MyAccountElements';
const myAccountElements = new MyAccountElements;

class MyAccountPage {
    // Verifica se o menu "My Account" existe
    visualizarMenuMyAccount() {
        cy.get(myAccountElements.menuMyAccount()).should('be.visible');
    }
}

export default MyAccountPage;