/// <reference types="Cypress" />

import CommonsElements from '../elements/CommonsElements';

const commonsElements = new CommonsElements;

class CommonsPage {
    mouseOverCategoria(categoria) {
        cy.get(commonsElements.categorias(categoria)).trigger('mouseover');
    };

    mouseOverSubCategoria(subCategoria) {
        cy.get(commonsElements.subCategorias(subCategoria)).trigger('mouseover');
    };

    clicarSubSubCategoria(subSubCategoria) {
        cy.get(commonsElements.subSubCategorias(subSubCategoria)).click();
    };

    clicarCloseCookies() {
        cy.get(commonsElements.closeCookies).then($cookies => {
            if($cookies.is(':visible')) {
                cy.get(commonsElements.closeCookies).click();
            };
        });
    };

    clicarCloseNotifications() {
        cy.get(commonsElements.closeNotifications).then($element => {
            if($element.is(':visible')) {
                cy.get(commonsElements.closeNotifications).click();
            };
        });
    };

    clicarBotaoAccount() {
        cy.get(commonsElements.botaoAccount()).click();
    };
};

export default CommonsPage;