/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
//import Metodos from '../pageobjects/Metodos'
import LoginPage from '../pageobjects/LoginPage'
import HomePage from '../pageobjects/HomePage'
import MyAccountPage from '../pageobjects/MyAccountPage'

//const m = new Metodos
const loginPage = new LoginPage
const homePage = new HomePage
const myAccountPage = new MyAccountPage

Given("usuario acessa o site Shop Samsung", () => {
    homePage.acessarPage()
})

When("usuario fecha o banner de cookies se estiver visivel", () => {
    homePage.clicarCloseNotifications()
    homePage.clicarCloseCookies()
})

When("usuario clica no botao Account", () => {
    homePage.clicarBotaoAccount()
})

When("usuario informa um {} correto", (email) => {
    loginPage.escreverEmail(email)
})

When("usuario informa uma {} correta", (senha) => {
    loginPage.escreverSenha(senha)
})

When("usuario clica no botao Entrar", () => {
    loginPage.clicarBotaoEntrar()
})

Then("usuario visualiza o menu do My Account", () => {
    myAccountPage.visualizarMenuMyAccount()
})