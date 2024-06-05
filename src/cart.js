//DEBE contener las funcionalidades del carrito de compras.

import { filters, products } from "../src/assets/data/data.js";

// funcion para no añadir dos veces el mismo id

window.addToCart = function(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({...product, quantity: 1 });
    }
    updateCart();
};




