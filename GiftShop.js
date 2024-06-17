document.addEventListener('DOMContentLoaded', () => {
    const prices = [];
    for (let i = 0; i < 7; i++) {
        prices.push((Math.random() * 100).toFixed(2));
    }
    
    prices.forEach((price, index) => {
        document.getElementById(`price${index + 1}`).textContent = `$${price}`;
    });
});
