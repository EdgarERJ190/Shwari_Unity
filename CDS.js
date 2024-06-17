document.addEventListener("DOMContentLoaded", function() {
    const checkpoints = document.querySelectorAll(".checkpoint");

    checkpoints.forEach(checkpoint => {
        checkpoint.addEventListener("mouseover", function() {
            this.style.transform = "rotateY(180deg)";
        });

        checkpoint.addEventListener("mouseout", function() {
            this.style.transform = "rotateY(0deg)";
        });
    });
});
