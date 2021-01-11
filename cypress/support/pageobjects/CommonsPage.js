/// <reference types="Cypress" />

import CommonsElements from '../elements/CommonsElements'
import HomeElements from '../elements/HomeElements'

const commonsElements = new CommonsElements
const homeElements = new HomeElements

class CommonsPage {
    mouseOverInformatica(categoria) {
        cy.get(commonsElements.categorias(categoria)).trigger('mouseover')
    }

    clicarCloseCookies() {
            cy.get(commonsElements.closeCookies()).click()
    }

    clicarCloseNotifications() {
        cy.get(commonsElements.closeNotifications()).click()
    }

    // Clica no elemento que acessa a página de account do site
    clicarBotaoAccount() {
        cy.get(commonsElements.botaoAccount()).click()
    }
}

export default CommonsPage