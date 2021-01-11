/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import PdpPage from '../pageobjects/PdpPage';
const pdpPage = new PdpPage;

When("usuario informa um codigo postal {} para calcular o frete", (cep) => {
	pdpPage.escreverPostalCode(cep);
});

When("usuario clica no botao calcular", () => {
	pdpPage.clicarCalcularFrete();
});

Then("usuario devera visualizar o resultado do calculo", () => {
	pdpPage.visualizarCalculoFrete();
});


When("usuario clica em adicionar ao carrinho", () => {
	pdpPage.clicarBotaoAddCartPrice();
});
