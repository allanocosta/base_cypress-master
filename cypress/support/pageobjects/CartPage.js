/// <reference types="Cypress" />

import CartElements from '../elements/CartElements';

const cartElements = new CartElements;

class CartPage {
    visualizarBotaoFecharPedido(productEan) {
        cy.xpath(cartElements.botaoFecharPedido(productEan)).click('be.visible');
    };
};

export default CartPage;