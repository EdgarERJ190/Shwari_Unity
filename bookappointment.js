document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');

    // Handle form submission
    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const appointment = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value
        };

        // Example: Send appointment data to server or localStorage
        console.log('Appointment Details:', appointment);
        alert('Appointment Booked Successfully!');
        appointmentForm.reset();
    });
});

