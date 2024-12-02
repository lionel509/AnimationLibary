function initializeSlidingRightUnique(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
        element.classList.add('sliding-right');
    }
    
    // Trigger the animation after a small delay
    setTimeout(() => {
        if (element) {
            element.classList.add('active');
        }
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    const slidingRightElement = document.getElementById("sliding-right");
    if (slidingRightElement) {
        initializeSlidingRightUnique("sliding-right", "Welcome to the Animation Showcase!");
    }
});
