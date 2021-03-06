/* global Given, Then, When */
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CommonsPage from '../pageobjects/CommonsPage';

const commonsPage = new CommonsPage;

When("usuario fecha o banner de cookies se estiver visivel", () => {
    commonsPage.clicarCloseCookies();
});

When("usuario fecha o banner de notificacoes se estiver visivel", () => {
    commonsPage.clicarCloseNotifications();
});

When("usuario vai na categoria {}", (categoria) => {
    commonsPage.mouseOverCategoria(categoria);
});

When("usuario vai na subcategoria {}", (subCategoria) => {
	commonsPage.mouseOverSubCategoria(subCategoria);
});

When("usuario clica na sub subcategoria {}", (subSubCategoria) => {
	commonsPage.clicarSubSubCategoria(subSubCategoria);
});

When("usuario clica no botao Account", () => {
    commonsPage.clicarBotaoAccount();
});