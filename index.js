document.addEventListener("DOMContentLoaded", function() {
    const ferrisWheel = document.querySelector(".ferris-wheel");
    const slides = document.querySelectorAll(".ferris-wheel-slide");
    const descriptionBox = document.querySelector(".description-box");

    let currentIndex = 0;

    const descriptions = [
        { title: "Compassionate Care", content: "Providing the best care with empathy and understanding." },
        { title: "Advanced Medical Solutions", content: "Utilizing state-of-the-art technology for better outcomes." },
        { title: "Holistic Wellness Programs", content: "Comprehensive programs promoting physical and mental well-being." },
        { title: "Specialized Elderly Care", content: "Tailored care plans designed for the unique needs of seniors." },
        { title: "Maternity Support Services", content: "Expert care and guidance for expectant mothers throughout pregnancy." },
        { title: "Rehabilitation Expertise", content: "Specialized rehabilitation services to aid recovery and improve quality of life." }
    ];

    const slideTitle = document.getElementById("slideTitle");
    const slideContent = document.getElementById("slideContent");

    function updateDescription() {
        const currentDescription = descriptions[currentIndex];
        slideTitle.innerText = currentDescription.title;
        slideContent.innerText = currentDescription.content;
        fadeIn(descriptionBox);
    }

    function fadeIn(element) {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = "opacity 1s";
            element.style.opacity = 1;
        }, 100);
    }

    function fadeOut(element) {
        element.style.transition = "opacity 1s";
        element.style.opacity = 0;
    }

    function cycleDescriptions() {
        fadeOut(descriptionBox);
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % descriptions.length;
            updateDescription();
        }, 1000); // Adjust timing as needed
    }

    // Initial update
    updateDescription();

    // Cycle through descriptions every 5 seconds
    setInterval(cycleDescriptions, 5000);

});
