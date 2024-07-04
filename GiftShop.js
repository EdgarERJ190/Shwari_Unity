const products = [
    { id: 1, name: 'Stethoscope Mug', price: 14.99, img: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Medical Themed T-Shirt', price: 19.99, img: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Anatomy Puzzle', price: 24.99, img: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Heart Model', price: 29.99, img: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Syringe Pen Set', price: 9.99, img: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Medical Socks', price: 12.99, img: 'https://via.placeholder.com/100' }
];

let cart = [];

function addProductToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function removeProductFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="removeProductFromCart(${product.id})">Remove</button>
        `;
        cartList.appendChild(cartItem);
        total += product.price;
    });
    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product';
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addProductToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
});
