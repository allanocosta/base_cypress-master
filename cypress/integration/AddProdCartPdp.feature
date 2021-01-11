@AddProdCartPdp
Feature: Adiciona um produto ao carrinho via PDP

    Como usuario, eu quero acessar a PDP do produto LC27RG50FQLXZD
    Para poder adiciona-lo ao carrinho de compras

    Background: Acessar a home do site Shop Samsung e fechar a notificao e cookies
        Given usuario acessa o site Shop Samsung
        And usuario fecha o banner de notificacoes se estiver visivel
        And usuario fecha o banner de cookies se estiver visivel

    Scenario Outline: Adicionar o produto LC27RG50FQLXZD no carrinho de compras via PDP
        When usuario vai na categoria <categoria>
        And usuario vai na subcategoria <subCategoria>
        And usuario clica na sub subcategoria <subSubCategoria>
        When usuario clica no produto <productEan> da galeria
        And usuario clica em adicionar ao carrinho
        Then usuario devera visualizar o produto <productEan> no carrinho de compras

        Examples:
            | categoria   | subCategoria | subSubCategoria | productEan     |
            | Informática | Monitores    | Monitor Gamer   | LC27RG50FQLXZD |