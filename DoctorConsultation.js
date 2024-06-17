document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('consultation-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Consultation booked successfully!');
        form.reset();
    });
});
