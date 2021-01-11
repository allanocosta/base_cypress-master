@AddProdCartPdp
Feature: Calculo de frete da PDP

    Como usuario, eu quero acessar a PDP do produto LC27RG50FQLXZD
    Para poder realizar o calculo do frete para o CEP 26.261-220

    Background: Acessar a home do site Shop Samsung e fechar a notificao e cookies
        Given usuario acessa o site Shop Samsung
        And usuario fecha o banner de notificacoes se estiver visivel
        And usuario fecha o banner de cookies se estiver visivel

    Scenario Outline: Acessar a PDP du produto LC27RG50FQLXZD e calcular o frete para o CEP 26261220
        When usuario vai na categoria <categoria>
        And usuario vai na subcategoria <subCategoria>
        And usuario clica na sub subcategoria <subSubCategoria>
        When usuario clica no produto <productEan> da galeria
        When usuario informa um codigo postal <codPostal> para calcular o frete
        And usuario clica no botao calcular
        Then usuario devera visualizar o resultado do calculo

        Examples:
            | categoria   | subCategoria | subSubCategoria | productEan     | codPostal |
            | Informática | Monitores    | Monitor Gamer   | LC27RG50FQLXZD | 26261220  |