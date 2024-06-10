//Aquí intenta poner las funcionalidades del recibo

function contenedorRecibo(cartItems) { 
    const carritoproducto = document.getElementById('receipt-container');
    const carritorRecibo = document.getElementById('receipt-product');
    
  
    
   while (carritorRecibo.firstChild){
    carritorRecibo.removeChild(carritorRecibo.firstChild);
   }

     let total = 0;
     
     cartItems.forEach(product  => {
        const div = document.createElement("div");
        div.classList.add("receipt-product");
        div.innerHTML = `
                
                    <h3>Título ${product.name}</h3>
                    <div class="receipt-price">
                        <p>Cantidad:  ${product.quantity}</p>
                        <h5>Subtotal €${(product.unitPrice * product.quantity).toFixed()} €</h5>
                    </div>
                </div>
                <h3 id="receipt-total">Total: €</h3>`;
        contenedorRecibo.appendChild7(div);
        total += product.unitPrice * product.quantity;
    });

    document.getElementById("receipt-total").innerText = `Total: ${total.toFixed(2)} €`;

    carritoproducto.style.display = "flex";
    document.querySelector("#products-container").style.display = "none";
   
    document.getElementById("close-receipt").addEventListener("click",function () {
        carritoproducto.style.display = "none";
        document.querySelector("#products-container").style.display = "none";
    })
        
   
}
    
    //if (contenedorRecibo) {
       // carritoproducto.classList.add("disable");
       // carritorRecibo.classList.add("disable");}

       export{contenedorRecibo}



    
    


