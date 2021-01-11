class PdpElements {
    campoPostalCode = () => { return 'form[class*=postalCode] input' };
    botaoCalcularFrete = () => { return `//button[@type='submit']/div[.='Calcular o frete']`}
    calculoFrete = () => { return "table[class*='x-shippingTable']" }
};

export default PdpElements