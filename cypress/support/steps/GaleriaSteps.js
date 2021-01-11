/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import GaleriaPage from '../pageobjects/GaleriaPage'

const galeriaPage = new GaleriaPage;

When("usuario clica no produto {} da galeria", (productEan) => {
    galeriaPage.clicarSumarioProduto(productEan);
});