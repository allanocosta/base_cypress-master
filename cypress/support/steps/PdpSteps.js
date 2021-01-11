/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import CommonsPage from '../pageobjects/CommonsPage'
import PdpPage from '../pageobjects/PdpPage'

const commonsPage = new CommonsPage
const pdpPage = new PdpPage;