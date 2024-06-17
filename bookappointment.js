document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const countrySelect = document.getElementById('country');
    const timezoneSelect = document.getElementById('timezone');
    const clockTime = document.getElementById('clockTime');
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    // Initialize form fields with current time and options
    initializeDateTime();
    initializeClock();

    // Handle form submission
    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const appointment = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            country: countrySelect.options[countrySelect.selectedIndex].text,
            timezone: timezoneSelect.value
        };

        // Example: Send appointment data to server or localStorage
        console.log('Appointment Details:', appointment);
        alert('Appointment Booked Successfully!');
        appointmentForm.reset();
    });

    function initializeDateTime() {
        // Set current time
        const now = new Date();
        const formattedDate = now.toISOString().split('T')[0]; // Format as yyyy-mm-dd
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        document.getElementById('date').value = formattedDate;
        document.getElementById('time').value = formattedTime;

        // Populate countries (example options, replace with actual country options as needed)
        const countries = [
            { code: 'US', name: 'United States' },
            { code: 'CA', name: 'Canada' },
            { code: 'GB', name: 'United Kingdom' },
            // Add more countries as needed
        ];

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code;
            option.textContent = country.name;
            countrySelect.appendChild(option);
        });

        // Populate timezones (example options, replace with actual timezone options as needed)
        const timezones = [
            { value: 'UTC-12:00', label: 'UTC-12:00' },
            { value: 'UTC-11:00', label: 'UTC-11:00' },
            { value: 'UTC-10:00', label: 'UTC-10:00' },
            // Add more timezone options as needed
        ];

        timezones.forEach(timezone => {
            const option = document.createElement('option');
            option.value = timezone.value;
            option.textContent = timezone.label;
            timezoneSelect.appendChild(option);
        });
    }

    function initializeClock() {
        function updateClock() {
            const now = new Date();
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours();

            const secondDegrees = ((seconds / 60) * 360) + 90;
            const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
            const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

            secondHand.style.transform = `rotate(${secondDegrees}deg)`;
            minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;
            
            // Update digital clock text
            const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            clockTime.textContent = formattedTime;
        }

        setInterval(updateClock, 1000); // Update clock every second
        updateClock(); // Ensure clock is set correctly on page load
    }
});
