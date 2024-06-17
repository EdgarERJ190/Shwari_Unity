document.addEventListener('DOMContentLoaded', () => {
    const quotesContainer = document.querySelector('.quotes-container');

    const quotes = [
        {
            title: "🌟 Inspirational Quote 1",
            content: "The best way to predict the future is to invent it.",
            author: "Alan Kay"
        },
        {
            title: "📖 Inspirational Story 1",
            content: "Once upon a time, in a land far away...",
            author: "Anonymous"
        },
        {
            title: "💪 Inspirational Quote 2",
            content: "Life is 10% what happens to us and 90% how we react to it.",
            author: "Charles R. Swindoll"
        },
        {
            title: "🌼 Inspirational Story 2",
            content: "There was a young boy who lived in a small village...",
            author: "Anonymous"
        },
        // Add more quotes and stories as needed
    ];

    quotes.forEach(quote => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <h2>${quote.title}</h2>
            <p>${quote.content}</p>
            <div class="author">- ${quote.author}</div>
        `;

        quotesContainer.appendChild(card);
    });
});
