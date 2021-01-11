/// <reference types="Cypress" />

import GaleriaElements from '../elements/GaleriaElements';

const galeriaElements = new GaleriaElements;

class GaleriaPage {
    clicarSumarioProduto(productEan) {
        cy.xpath(galeriaElements.sumarioProduto(productEan)).click();
    };
};

export default GaleriaPage;