//Aquí intenta poner las funcionalidades del recibo

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
        total += product.unitPrice * product.quantity;
    });

    document.getElementById("receipt-total").innerText = `Total: ${total.toFixed(2)} €`;
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