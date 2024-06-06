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

  function getCartData ( product )
  {
    const productName = product.querySelector("h3").textContent;
    const productPrice = product.querySelector("h5").textContent;

    const cartProduct = cartItems.find(
      (cartProduct) => cartProduct.name === productInfo.name
    );
    if (cartProduct) {
      existingProduct.quantity++;
    } else {
      const productInfo = {
        name: productName,
        price: productPrice,
        quantity: 1,
      };
      cartItems.push(productInfo);
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
                            <button class="increment">+</button>
                            <p class="quantity">${product.quantity}</p>
                            <button class="decrement">-</button>
                        </div>
      `;
      cartList.appendChild(row);
    });
    addQuantityEventListeners();
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
});
