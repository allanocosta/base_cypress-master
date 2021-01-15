class CommonsElements {
    //HEADER
    logoSamsung = () => { return 'a[class="acupula-samsung-store-0-x-gnb__logo"]' };

    categorias = (categoria) => {
        switch (categoria) {
            case "Telefonia":
                return 'a[data-omni="TELEFONIA"] span';
            case "Tablets":
                return 'a[data-omni="TABLETS"] span';
            case "TV e Áudio":
                return 'a[data-omni="TV E ÁUDIO"] span';
            case "Eletrodoméstico":
                return 'a[data-omni="ELETRODOMÉSTICOS"] span';
            case "Informática":
                return 'a[data-omni="INFORMÁTICA"] span';
        };
    };
    //SUBCATEGORIAS
    subCategorias = (subCategoria) => {
        switch (subCategoria) {
            case "Computadores":
                return 'span[data-omni="informática:computadores"]';
            case "Monitores":
                return 'span[data-omni="informática:monitores"]';
        };
    };
    //SUB SUBCATEGORIAS
    subSubCategorias = (subSubCategoria) => {
        switch (subSubCategoria) {
            case "Monitor Gamer":
                return 'a[data-omni="informática:monitores:monitor gamer"]';
            case "Monitor 4K":
                return 'a[data-omni="informática:monitores:monitor 4k"]';
            case "Monitor Curvo":
                return 'a[data-omni="informática:monitores:monitor curvo"]';
            case "Monitor 4K":
                return 'a[data-omni="informática:monitores:ver todos"]';
        };
    };

    botaoAccount = () => { return '#user-bold > path' };
    botaoMiniCart = () => { return 'li [class*="minicartContainer"] span[class="vtex-minicart-2-x-minicartIconContainer gray relative"]' };

    //FRAMES
    closeNotifications = () => { return '#onesignal-slidedown-cancel-button' };
    closeCookies = () => { return '.acupula-samsung-store-0-x-closeBtnBanner > span' };
};

export default CommonsElements;