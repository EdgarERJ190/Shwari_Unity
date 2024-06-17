document.addEventListener('DOMContentLoaded', () => {
    const submitButtons = document.querySelectorAll('.submit-btn');

    submitButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Review submitted!');
        });
    });
});
