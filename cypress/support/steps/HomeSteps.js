/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../pageobjects/HomePage'

const homePage = new HomePage

Given("usuario acessa o site Shop Samsung", () => {
    homePage.acessarPage()
})