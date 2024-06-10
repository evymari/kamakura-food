//Aquí intenta poner las funcionalidades del recibo

<<<<<<< HEAD
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
=======
function showReceipt(cartItems) {
    const receiptContainer = document.getElementById('receipt-container');
    const receiptProductContainer = document.getElementById('receipt-product');

    let total= 0;
    
    cartItems.forEach(product => {
        const row = document.createElement('div');
        row.classList.add('receipt-product');
        row.innerHTML=`
        
        <h3>${product.name}</h3>
        <div class="receipt-price">
            <p>${product.quantity}</p>
            <h5>${(product.unitPrice * product.quantity).toFixed(2)} €</h5>
        </div>`;
        receiptProductContainer.appendChild(row);
>>>>>>> 95d67aa121936fd829a7403d6665b3f0b0c6959b
        total += product.unitPrice * product.quantity;
    });

    document.getElementById("receipt-total").innerText = `Total: ${total.toFixed(2)} €`;
<<<<<<< HEAD

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



    
    


=======
    receiptContainer.style.display = "flex";
    receiptContainer.style.margin = 'auto';
    receiptContainer.style.marginTop = '20px';
    document.querySelector("#products-container").style.display = "none";

    document.getElementById("close-receipt").addEventListener("click", function () {
        receiptContainer.style.display = "none";
        document.querySelector("#products-container").style.display = "flex";
    });
    
}


export {showReceipt}
>>>>>>> 95d67aa121936fd829a7403d6665b3f0b0c6959b
