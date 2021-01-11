/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pageobjects/LoginPage'

const loginPage = new LoginPage

When("usuario informa um email {} correto", (email) => {
    loginPage.escreverEmail(email)
})

When("usuario informa uma senha {} correta", (senha) => {
    loginPage.escreverSenha(senha)
})

When("usuario clica no botao Entrar", () => {
    loginPage.clicarBotaoEntrar()
})