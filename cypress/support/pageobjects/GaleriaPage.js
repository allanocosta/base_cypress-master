/// <reference types="Cypress" />

import GaleriaElements from '../elements/GaleriaElements';

const galeriaElements = new GaleriaElements;

class GaleriaPage {
    clicarSumarioProduto(productEan) {
        cy.xpath(galeriaElements.sumarioProduto(productEan)).click().wait(10000);
    };
};

export default GaleriaPage;