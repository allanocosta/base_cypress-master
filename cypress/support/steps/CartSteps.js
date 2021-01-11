/* global Given, Then, When */
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CartPage from '../pageobjects/CartPage';

const cartPage = new CartPage;


Then("usuario devera visualizar o produto {} no carrinho de compras", (productEan) => {
	cartPage.visualizarBotaoFecharPedido(productEan);
});
