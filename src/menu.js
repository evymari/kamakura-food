import {filters, products} from '../assets/data/data.js';

console.log(filters);
console.log(products);

const filtersContainer = document.getElementById('filters');
const productsContainer = document.getElementById('products');

function renderFilters() {
    filtersContainer.innerHTML = '';
    filters.forEach(filter => {
        const button = document.createElement('button');
        button.className = 'filter';
        button.textContent = filter;
        button.addEventListener('click', () => filterProducts(filter));
        filtersContainer.appendChild(button);
    });
}

function renderProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-container';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price-container">
                <h5>${product.price} €</h5>
                <button class="add-button">Añadir</button>
            </div>`;
        productsContainer.appendChild(productDiv);
    });
}

function filterProducts(category) {
    if (category === 'todos') {
        renderProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
}

renderFilters();
renderProducts(products);