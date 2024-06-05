//DEBE contener las funcionalidades del carrito de compras.


import { filters, products } from '../assets/data/data.js';

function addToCart(product) {
    if (!cart.find(item => item.id === product.id)) {
        cart.push( {...product, quantify: 1});
        renderCart();
    } else {
        alert("Este producto ya está en el carrito.");
    }
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        renderCart();
    }
}

