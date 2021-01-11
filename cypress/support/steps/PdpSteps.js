/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import CommonsPage from '../pageobjects/CommonsPage'
import PdpPage from '../pageobjects/PdpPage'

const commonsPage = new CommonsPage
const pdpPage = new PdpPage


When("usuario vai na categoria {}", (categoria) => {
    commonsPage.mouseOverInformatica(categoria)
});

When("usuario vai na subcategoria {}", () => {
	return true;
});

When(/^usuario clica na sub subcategoria <subSubCategoria>$/, () => {
	return true;
});

When(/^usuario clica no produto <produto>$/, () => {
	return true;
});

When(/^usuario informa o codigo postal <codPostal> para calcular o frete$/, () => {
	return true;
});

When(/^usuario clica no botao calcular$/, () => {
	return true;
});

Then(/^usuario devera visualizar o resultado do calculo$/, () => {
	return true;
});
