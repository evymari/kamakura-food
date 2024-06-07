//Intenta separar los eventos en este archivo.

// abrir y cerrar un menú lateral

document.getElementById("cart").addEventListener("click", function() {
   const cartContainer = document.getElementById("cart-container"); 
   if (cartContainer.style.display === "none" ||  cartContainer.style.display === "") {
    cartContainer.style.display = "block";
   } else {
    cartContainer.style.display = "none" ;
   }
});
 
//Sumar el subtotal mientras se cambie la cantidad de cada plato

document.addEventListener("DOMContentLoaded", function() {
   // Función para actualizar el subtotal
   function updateSubtotal() {
       let total = 0;
       document.querySelectorAll('.cart-container').forEach(function(cartContainer) {
           const price = parseFloat(cartContainer.querySelector('.price').innerText.replace('Precio €', ''));
           const quantity = parseInt(cartContainer.querySelector('.quantity').innerText);
           total += price * quantity;
       });
       document.getElementById('cart-total').innerText = 'Total: €' + total.toFixed(2);
   }

   // Añadir event listeners a los botones de aumentar/disminuir cantidad
   document.querySelectorAll('.increase-quantity').forEach(function(button) {
       button.addEventListener('click', function() {
           const quantityElement = this.parentElement.querySelector('.quantity');
           let quantity = parseInt(quantityElement.innerText);
           quantityElement.innerText = ++quantity;
           updateSubtotal();
       });
   });

   document.querySelectorAll('.decrease-quantity').forEach(function(button) {
       button.addEventListener('click', function() {
           const quantityElement = this.parentElement.querySelector('.quantity');
           let quantity = parseInt(quantityElement.innerText);
           if (quantity > 1) {
               quantityElement.innerText = --quantity;
               updateSubtotal();
           }
       });
   });

   // Inicializar el subtotal al cargar la página
   updateSubtotal();
});
