/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'

const homeElements = new HomeElements

class HomePage {
    // Acessa a page que será testada
    acessarPage() {
        cy.visit('https://shop.samsung.com.br/')
        cy.wait(2000);
    }
}

export default HomePage