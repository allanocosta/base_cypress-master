class CommonsElements {
    //HEADER
    logoSamsung = () => { return 'a[class="acupula-samsung-store-0-x-gnb__logo"]' }

    categorias = (categoria) => {
        switch (categoria) {
            case "Telefonia":
                return 'a[data-omni="TELEFONIA"] span'
                break
            case "Tablets":
                return 'a[data-omni="TABLETS"] span'
                break
            case "TV e Áudio":
                return 'a[data-omni="TV E ÁUDIO"] span'
                break
            case "Eletrodoméstico":
                return 'a[data-omni="ELETRODOMÉSTICOS"] span'
                break
            case "Informática":
                return 'a[data-omni="INFORMÁTICA"] span'
                break
        }
    }

    categoriaTelefonia = () => { return 'a[data-omni="TELEFONIA"] span' }
    categoriaTablets = () => { return 'a[data-omni="TABLETS"] span' }
    categoriaTvAudio = () => { return 'a[data-omni="TV E ÁUDIO"] span' }
    categoriaEletrodomesticos = () => { return 'a[data-omni="ELETRODOMÉSTICOS"] span' }
    categoriaInformatica = () => { return 'a[data-omni="INFORMÁTICA"] span' }
    botaoAccount = () => { return '#user-bold > path' }
    botaoMiniCart = () => { return 'li [class*="minicartContainer"] span[class="vtex-minicart-2-x-minicartIconContainer gray relative"]' }

    //SUBCATEGORIAS
    subCategMonitores = () => { return 'span[data-omni="informática:monitores"]' }

    //SUB SUBCATEGORIAS
    subSubCategMonitorGamer = () => { return 'a[data-omni="informática:monitores:monitor gamer"]' }

    //GALERIA DE ITENS
    produtoGaleria = (productEan) => { return '//div[@id="ProductEan"]/div[.='; productEan; ']' }

    //FRAMES
    closeCookies = () => { return '.acupula-samsung-store-0-x-closeBtnBanner > span' }
    closeNotifications = () => { return '#onesignal-slidedown-cancel-button' }
}

export default CommonsElements