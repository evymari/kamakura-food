document.addEventListener("DOMContentLoaded", function () {
  const cartList = document.getElementById("cart-products");
  const productList = document.getElementById("products");
  let cartItems = [];
  let divisa = " €";

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
    const productName = product.querySelector("h3").textContent;
    const productPrice = parseFloat(product.querySelector("h5").textContent);

    const cartProducts = cartItems.find(
      (cartProduct) => cartProduct.name === productName
    );
    if (cartProducts) {
      cartProducts.quantity++;
    } else {
      const productInfo = {
        name: productName,
        price: productPrice,
        quantity: 1,
        unitPrice: productPrice,
      };
      cartItems.push(productInfo);
    }
  }

  function cartFunction() {
    clearCart();
    cartItems.forEach((product, index) => {
      product.price = product.unitPrice * product.quantity + divisa;
      const row = document.createElement("div");
      row.classList.add("cart-container");
      row.innerHTML = `
      <button class="close-button" id="${index}"><img src="./assets/img/close.svg" alt="close"></button> 
         <div class="text-container">
           <h3>${product.name}</h3>
           <h5>${product.price}</h5>
         </div>
         <div class="quantity-container" id="quantity">
                            <button class="increment">+</button>
                            <p class="quantity">${product.quantity}</p>
                            <button class="decrement">-</button>
                        </div>
      `;
      cartList.appendChild(row);
    });

    document.querySelectorAll(".close-button").forEach((button) => {
      button.addEventListener("click", removeProduct);
    });

    addQuantityEventListeners();
    totalOfSubtotals();
  }

  function addQuantityEventListeners() {
    document.querySelectorAll(".increment").forEach((button) => {
      button.addEventListener("click", incrementQuantity);
    });
    document.querySelectorAll(".decrement").forEach((button) => {
      button.addEventListener("click", decrementQuantity);
    });
  }

  function incrementQuantity(e) {
    const productName = e.target
      .closest(".cart-container")
      .querySelector("h3").textContent;
    const product = cartItems.find((item) => item.name === productName);
    if (product) {
      product.quantity++;
      cartFunction();
    }
  }

  function decrementQuantity(e) {
    const productName = e.target
      .closest(".cart-container")
      .querySelector("h3").textContent;
    const product = cartItems.find((item) => item.name === productName);
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        cartItems = cartItems.filter((item) => item.name !== productName);
      }
      cartFunction();
    }
  }

  function clearCart() {
    while (cartList.firstChild) {
      cartList.removeChild(cartList.firstChild);
    }
  }

  function removeProduct(e) {
    const product = e.target.closest(".close-button").getAttribute("id");
    cartItems.splice(product, 1);
    cartFunction();
  }

  function totalOfSubtotals() {
    const total = cartItems.reduce(
      (sum, product) => sum + product.unitPrice * product.quantity,
      0
    );
    document.getElementById("cart-total").innerText =
     ` Total: ${total.toFixed(2)} €`;
  }
});
