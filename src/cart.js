import { showReceipt } from "./receipt.js";

// Escucha el evento DOMContentLoaded y ejecuta la función cuando el DOM esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el elemento con el ID "cart-products" y lo asigna a la variable cartList.
  const cartList = document.getElementById("cart-products");

  // Obtiene el elemento con el ID "products" y lo asigna a la variable productList.
  const productList = document.getElementById("products");

  // Inicializa un array vacío para los elementos del carrito.
  let cartItems = [];
  let divisa = " €";

  // Llama a la función que añade los event listeners.
  chargeaAddEventListener();

  // Añade un event listener al productList para detectar clicks en los productos.
  function chargeaAddEventListener() {
    productList.addEventListener("click", addProduct);
  }

  // Maneja el evento de añadir un producto al carrito.
  function addProduct(e) {
    e.preventDefault();
    // Comprueba si el elemento clicado tiene la clase "add-button".
    if (e.target.classList.contains("add-button")) {
      // Encuentra el contenedor del producto seleccionado.
      const selectedProduct = e.target.closest(".product-container");
      // Obtiene los datos del producto seleccionado.
      getCartData(selectedProduct);
      // Actualiza la visualización del carrito.
      cartFunction();
    }
  }

  // Obtiene los datos del producto y los añade al carrito.
  function getCartData(product) {
    // Obtiene el nombre y el precio del producto.
    const productName = product.querySelector("h3").textContent;
    const productPrice = parseFloat(product.querySelector("h5").textContent);

    // Comprueba si el producto ya está en el carrito comparando el nombre del nuevo plato con el
    //que ya está en el carrito.
    const cartProducts = cartItems.find(
      (cartProduct) => cartProduct.name === productName
    );
    if (cartProducts) {
      // Si el producto ya está en el carrito, incrementa la cantidad.
      cartProducts.quantity++;
    } else {
      // Si no está en el carrito, crea un objeto con la información del producto y lo añade al array del carrito.
      const productInfo = {
        name: productName,
        price: productPrice,
        quantity: 1,
        unitPrice: productPrice,
      };
      cartItems.push(productInfo);
    }
  }

  // Actualiza la visualización del carrito.
  function cartFunction() {
    // Limpia el contenido actual del carrito.
    clearCart();
    // Recorre los elementos del carrito y los añade al DOM.
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

    // Añade event listeners a los botones de cerrar para eliminar productos del carrito.
    document.querySelectorAll(".close-button").forEach((button) => {
      button.addEventListener("click", removeProduct);
    });

    // Añade event listeners a los botones de incrementar y decrementar cantidad.
    addQuantityEventListeners();
    // Calcula el total del carrito.
    totalOfSubtotals();
  }
  const payButton = document.getElementById("pay-button");
  const receiptContainer = document.getElementById("receipt-container");
  payButton.addEventListener(
    "click",
    function () {
      if (cartItems.length === 0) {
        const emptyOrderMessage = document.createElement("p");
        emptyOrderMessage.innerText = "Tu orden está vacía";
        emptyOrderMessage.style.color = "red";
        receiptContainer.appendChild(emptyOrderMessage);
      } else {
        // Si hay productos en el carrito, mostramos el pop-up de agradecimiento
        showPopup();
      }
    },
    { once: true }
  );

  function showPopup() {}
  // Añade event listeners a los botones de incrementar y decrementar cantidad.
  function addQuantityEventListeners() {
    document.querySelectorAll(".increment").forEach((button) => {
      button.addEventListener("click", incrementQuantity);
    });
    document.querySelectorAll(".decrement").forEach((button) => {
      button.addEventListener("click", decrementQuantity);
    });
  }

  // Incrementa la cantidad del producto en el carrito.
  function incrementQuantity(e) {
    // Obtiene el nombre del producto.
    const productName = e.target
      .closest(".cart-container")
      .querySelector("h3").textContent;
    // Encuentra el producto en el array del carrito y incrementa su cantidad.
    const product = cartItems.find((item) => item.name === productName);
    if (product) {
      product.quantity++;
      cartFunction();
    }
  }

  // Decrementa la cantidad del producto en el carrito.
  function decrementQuantity(e) {
    // Obtiene el nombre del producto.
    const productName = e.target
      .closest(".cart-container")
      .querySelector("h3").textContent;
    // Encuentra el producto en el array del carrito y decrementa su cantidad.
    const product = cartItems.find((item) => item.name === productName);
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        // Si la cantidad es 1, elimina el producto del carrito.
        cartItems = cartItems.filter((item) => item.name !== productName);
      }
      cartFunction();
    }
  }

  // Limpia el contenido del carrito en el DOM.
  function clearCart() {
    while (cartList.firstChild) {
      cartList.removeChild(cartList.firstChild);
    }
  }

  // Elimina un producto del carrito.
  function removeProduct(e) {
    // Obtiene el índice del producto a eliminar.
    const product = e.target.closest(".close-button").getAttribute("id");
    // Elimina el producto del array del carrito.
    cartItems.splice(product, 1);
    // Actualiza la visualización del carrito.
    cartFunction();
  }

  // Calcula y muestra el total del carrito.
  // reduce recorre cada producto en cartItems, calcula el subtotal de cada producto
  //( product.unitPrice * product.quantity ) y acumula estos subtotales en sum, comenzando
  // desde 0
  function totalOfSubtotals() {
    const total = cartItems.reduce(
      (sum, product) => sum + product.unitPrice * product.quantity,
      0
    );
    //.innerText = ` Total: ${total.toFixed(2)} €`: Actualiza el texto de este elemento
    // con el total calculado.
    //  total.toFixed( 2 ): Convierte el total a una cadena con exactamente dos decimales
    document.getElementById("cart-total").innerText = ` Total: ${total.toFixed(
      2
    )} €`;
  }
  // Llamamos a la función showReceipt pasando los items del carrito
  document
    .getElementById("proceedPay-button")
    .addEventListener("click", function () {
      showReceipt(cartItems);
    });
});
