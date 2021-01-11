/// <reference types="Cypress" />

import PdpElements from '../elements/PdpElements'
const pdpElements = new PdpElements

class PdpPage {
    escreverPostalCode(cep) {
        cy.get(pdpElements.campoPostalCode()).type(cep)
    }
}

export default PdpPage