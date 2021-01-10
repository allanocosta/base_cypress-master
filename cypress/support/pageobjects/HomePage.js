/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements';

const homeElements = new HomeElements;
//const url = Cypress.config("baseUrl");

class HomePage {
    // Acessa a page que será testada
    acessarPage() {
        cy.visit('https://shop.samsung.com.br/');
    }

    clicarCloseCookies(){
        if(cy.get(homeElements.closeCookies()) == true){
            cy.get(homeElements.closeCookies()).click();
        }
    }

    clicarCloseNotifications(){
        cy.get(homeElements.closeNotifications()).click();
    }

    // Clica no elemento que acessa a página de account do site
    clicarBotaoAccount() {
        cy.get(homeElements.botaoAccount()).click();
    }
}

export default HomePage;