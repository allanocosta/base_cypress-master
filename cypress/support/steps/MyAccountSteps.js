/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import MyAccountPage from '../pageobjects/MyAccountPage';

const myAccountPage = new MyAccountPage;

Then("usuario visualiza o menu do My Account", () => {
    myAccountPage.visualizarMenuMyAccount();
});