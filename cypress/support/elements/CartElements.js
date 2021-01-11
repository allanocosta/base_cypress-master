class CartElements {
    botaoFecharPedido = (productEan) => { return `//a[@id='cart-to-orderform' and contains(@data-omni-variant,"${productEan}")]` };
};

export default CartElements;