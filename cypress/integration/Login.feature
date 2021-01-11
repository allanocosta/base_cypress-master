#@LoginCorreto
Feature: Login site Samsung

    Como usuario, eu quero realizar o login com sucesso na loja Samsung

    Scenario Outline: Logar no site Shop Samsung e visualizar o Menu My Accont
        Given usuario acessa o site Shop Samsung
        When usuario fecha o banner de notificacoes se estiver visivel
        And usuario fecha o banner de cookies se estiver visivel
        When usuario clica no botao Account
        And usuario informa um email <email> correto
        And usuario informa uma senha <senha> correta
        When usuario clica no botao Entrar
        Then usuario visualiza o menu do My Account

        Examples:
            | email                   | senha        |
            | allan.costa@acct.global | gNYqzE4#gpnq |