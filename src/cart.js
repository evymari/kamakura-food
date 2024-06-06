//DEBE contener las funcionalidades del carrito de compras.


import { filters, products } from '../assets/data/data.js';



document.addEventListener("DOMContentLoaded", function () {
  const cartList = document.getElementById("cart-products");
  const productList = document.getElementById("products");
  let cartItems = [];

  chargeaAddEventListener();

  function chargeaAddEventListener() {
    productList.addEventListener("click", addProduct);
  }

  function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains("add-button")) {
      const selectedProduct = e.target.closest(".product-container");
      getCartData(selectedProduct);
      cartFunction();
    }
  }

  function getCartData(product) {
    const productInfo = {
      name: product.querySelector("h3").textContent,
      price: product.querySelector("h5").textContent
    };
    
   if(cartItems.length === 0){
      console.log(cartItems);
       cartItems.push(productInfo);
     } else {
      const productoEnCesta = cartItems.find(productoCesta => productoCesta.name === productInfo.name);
          if(productoEnCesta){
            alert("Ya está en la cesta!");
          }else {
           cartItems.push(productInfo);
      }
  }
}

  function cartFunction() {
    clearCart();
    cartItems.forEach((product) => {
      const row = document.createElement("div");
      row.classList.add("cart-container");
      row.innerHTML = `
         <div class="text-container">
           <h3>${product.name}</h3>
           <h5>${product.price}</h5>
         </div>
         <div class="quantity-container" id="quantity">
                            <button>+</button>
                            <p class="quantity">1</p>
                            <button>-</button>
                        </div>
      `;
      cartList.appendChild(row);
    });
  }

  function clearCart() {
    while (cartList.firstChild) {
      cartList.removeChild(cartList.firstChild);
    }
  }
});
