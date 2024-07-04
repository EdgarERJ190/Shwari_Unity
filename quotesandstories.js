document.addEventListener('DOMContentLoaded', () => {
    const quoteStoryContent = document.getElementById('quoteStoryContent');
    const generateQuoteButton = document.getElementById('generateQuote');
    const generateStoryButton = document.getElementById('generateStory');
    const apiKey = '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'; // Replace with your actual API key

    generateQuoteButton.addEventListener('click', () => {
        fetchContent('quote');
    });

    generateStoryButton.addEventListener('click', () => {
        fetchContent('story');
    });

    async function fetchContent(type) {
        const endpoint = 'https://api.openai.com/v1/completions';
        let prompt = '';

        if (type === 'quote') {
            prompt = 'Generate an inspiring quote for mothers.';
        } else if (type === 'story') {
            prompt = 'Generate a short, uplifting story for mothers.';
        } else {
            console.error('Invalid content type.');
            return;
        }

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'text-davinci-003',
                    prompt: prompt,
                    max_tokens: 100
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const content = data.choices[0].text.trim();
            quoteStoryContent.innerHTML = `<p>${content}</p>`;
        } catch (error) {
            console.error('Error fetching content:', error);
            quoteStoryContent.innerHTML = '<p>Failed to fetch content. Please try again later.</p>';
        }
    }
});
