function initializeSlidingLeft(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = text;
    element.classList.add('sliding-left');
    
    // Trigger the animation after a small delay
    setTimeout(() => {
        element.classList.add('active');
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    const slidingLeftElement = document.getElementById("sliding-left");
    if (slidingLeftElement) {
        initializeSlidingLeft("sliding-left", "Welcome to the Animation Showcase!");
    }
});
