document.addEventListener("DOMContentLoaded", () => {
    const slidingLeftElement = document.getElementById("sliding-left");
    if (slidingLeftElement) {
        const element = document.getElementById("sliding-left");
        if (element) {
            element.textContent = "Welcome to the Animation Showcase!";
            element.classList.add('sliding-left');
        }
        
        // Trigger the animation after a small delay
        setTimeout(() => {
            if (element) {
                element.classList.add('active');
            }
        }, 100);
    }
});
