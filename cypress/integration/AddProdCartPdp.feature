@AddProdCartPdp
Feature: Adiciona um produto ao carrinho via PDP

    Como usuario, eu quero acessar a PDP do produto LC27RG50FQLXZD
    Para poder adiciona-lo ao carrinho de compras

    Scenario Outline: Adicionar o produto LC27RG50FQLXZD no carrinho de compras via PDP
        Given usuario acessa o site Shop Samsung
        And usuario fecha o banner de notificacoes se estiver visivel
        And usuario fecha o banner de cookies se estiver visivel
        When usuario vai na categoria <categoria>
        And usuario vai na subcategoria <subCategoria>
        And usuario clica na sub subcategoria <subSubCategoria>
        When usuario clica no produto <productEan> da galeria
        When usuario clica em adicionar ao carrinho
        And usuario clica no botao calcular
        Then usuario devera visualizar o resultado do calculo

        Examples:
            | categoria   | subCategoria | subSubCategoria | productEan         | codPostal |
            | Informática | Monitores    | Monitor Gamer   | LC27RG50FQLXZD | 26261220  |