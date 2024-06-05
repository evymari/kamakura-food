//DEBE contener las funcionalidades del carrito de compras.
const cart = document.querySelector(".cart-container");
const cartList = cart.querySelector(".cart-products");
let cartItems = [];

document
  .getElementsByClassName("add-button")
  .addEventListener("click", (event) => {
    productList.addEventListener("click", addProduct);
  });

function addProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains("add-button")) {
    selectedProduct = e.target.parentElement.parentElement;
    getCartData(selectedProduct);
  }
}

function cart() {
  cartItems.forEach((product) => {
    const row = document.createElement(".cart-container");

    row.innerHTML = `
       <h3>${product.name}</h3>
       <h5> ${product.price}</h5>
       `;
  });

  cartList.appendChild(row);
}
function clearCart() {
  while (cartList.firstChild) {
    cartList.removeChild(cartList.firstChild);
  }
}
