document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.navigation-button');
    const mainContent = document.getElementById('main-content');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const target = button.getAttribute('href').substring(1); // Get target without the '#'
            loadContent(target);
        });
    });

    function loadContent(target) {
        fetch(target + '.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                mainContent.innerHTML = html;
                executeScriptForContent(target); // Execute specific script after loading content
            })
            .catch(error => {
                console.error('Error loading content:', error);
                mainContent.innerHTML = '<h2>Error</h2><p>Sorry, there was an error loading the content.</p>';
            });
    }

    function executeScriptForContent(target) {
        if (target === 'bookappointment') {
            // Load and execute bookappointment.js dynamically
            const script = document.createElement('script');
            script.src = 'bookappointment.js';
            script.defer = true;
            document.body.appendChild(script);
        }
        // Add other conditions for different content if needed
    }
});