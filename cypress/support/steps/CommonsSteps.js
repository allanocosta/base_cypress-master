/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import CommonsPage from '../pageobjects/CommonsPage'

const commonsPage = new CommonsPage

When("usuario fecha o banner de cookies se estiver visivel", () => {
    commonPage.clicarCloseNotifications()
    commonPage.clicarCloseCookies()
})

When("usuario clica no botao Account", () => {
    commonPage.clicarBotaoAccount()
})