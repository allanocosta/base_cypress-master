@DesafioAutomacao
Feature: Login, calculo de frete e adicao de produto ao Cart

    Como usuario eu quero:
    Realizar o login com sucesso na loja Samsung;
    Acessar a PDP do produto LC27RG50FQLXZD para poder realizar o calculo do frete para o CEP 26.261-220;
    Acessar a PDP do produto LC27RG50FQLXZD para poder adiciona-lo ao carrinho de compras;

    Background: Acessar a home do site Shop Samsung e fechar a notificao e cookies
        Given usuario acessa o site Shop Samsung
        And usuario fecha o banner de notificacoes se estiver visivel
        And usuario fecha o banner de cookies se estiver visivel

    @LoginCorreto
    Scenario Outline: Logar no site Shop Samsung e visualizar o Menu My Accont
        When usuario clica no botao Account
        And usuario informa um email <email> correto
        And usuario informa uma senha <senha> correta
        When usuario clica no botao Entrar
        Then usuario visualiza o menu do My Account

        Examples:
            | email                   | senha        |
            | allan.costa@acct.global | gNYqzE4#gpnq |

    @CalculoFreteCorreto
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

    @AddProdCartPdp
    Scenario Outline: Adicionar o produto LC27RG50FQLXZD no carrinho de compras via PDP
        When usuario vai na categoria <categoria>
        And usuario vai na subcategoria <subCategoria>
        And usuario clica na sub subcategoria <subSubCategoria>
        When usuario clica no produto <productEan> da galeria
        And usuario clica em adicionar ao carrinho
        Then usuario devera visualizar o produto no carrinho de compras

        Examples:
            | categoria   | subCategoria | subSubCategoria | productEan     |
            | Informática | Monitores    | Monitor Gamer   | LC27RG50FQLXZD |