class PdpElements {
    botaoAddCartPrice = () => { return `//div[contains(@class,"ProductBuyButton")]//button[@type='button']//../span[.='Adicionar ao carrinho']` }
    campoPostalCode = () => { return 'form[class*=postalCode] input' };
    botaoCalcularFrete = () => { return `//button[@type='submit']/div[.='Calcular o frete']`};

    calculoFrete = () => { return "table[class*='x-shippingTable']" };
};

export default PdpElements