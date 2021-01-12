/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements';
const loginElements = new LoginElements;

class LoginPage {
    // Acessa a page que será testada
    acessarPage() {
        cy.visit('https://shop.samsung.com.br/login?returnUrl=%2Faccount');
    };
    //Escreve no campo "E-mail"
    escreverEmail(email){
        cy.get(loginElements.setEmail()).type(email);
    };
    //Escreve no campo "Senha"
    escreverSenha(senha){
        cy.get(loginElements.setSenha()).type(senha);
    };
    //Clica no botão "Entrar"
    clicarBotaoEntrar(){
        cy.get(loginElements.botaoEntrar()).click();
    };
    //Verifica se o botao Entrar existe
    visualizarBotaoEntrar() {
        cy.get(loginElements.botaoEntrar()).should('exist');
    };
};

export default LoginPage;