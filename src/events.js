//Intenta separar los eventos en este archivo.

document.getElementById("cart").addEventListener("click", function () {
  const cartContainer = document.getElementById("cart-container");
  if (
    cartContainer.style.display === "none" ||
    cartContainer.style.display === ""
  ) {
    cartContainer.style.display = "block";
  } else {
    cartContainer.style.display = "none";
  }
});