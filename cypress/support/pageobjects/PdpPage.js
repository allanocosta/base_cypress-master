/// <reference types="Cypress" />

import PdpElements from '../elements/PdpElements';
const pdpElements = new PdpElements;

class PdpPage {
    clicarBotaoAddCartPrice() {
        cy.xpath(pdpElements.botaoAddCartPrice()).click();
    }

    escreverPostalCode(cep) {
        cy.get(pdpElements.campoPostalCode()).type(cep);
    };

    clicarCalcularFrete() {
        cy.xpath(pdpElements.botaoCalcularFrete()).click();
    };

    visualizarCalculoFrete() {
        cy.get(pdpElements.calculoFrete()).should('be.visible');
    };
};

export default PdpPage;