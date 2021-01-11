/// <reference types="Cypress" />

import CommonsElements from '../elements/CommonsElements'

const commonsElements = new CommonsElements

class CommonsPage {
    mouseOverInformatica(categoria) {
        cy.get(commonsElements.categorias(categoria)).trigger('mouseover')
    }

    clicarCloseCookies() {
        if (cy.get(homeElements.closeCookies()) == true) {
            cy.get(homeElements.closeCookies()).click()
        }
    }

    clicarCloseNotifications() {
        cy.get(homeElements.closeNotifications()).click()
    }

    // Clica no elemento que acessa a página de account do site
    clicarBotaoAccount() {
        cy.get(homeElements.botaoAccount()).click()
    }
}

export default CommonsPage