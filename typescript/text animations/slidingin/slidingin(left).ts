function initializeSlidingLeftUnique(elementId: string, text: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
        element.classList.add('sliding-left');
    }
    
    // Trigger the animation after a small delay
    setTimeout(() => {
        if (element) {
            element.classList.add('active');
        }
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    const slidingLeftElement = document.getElementById("sliding-left");
    if (slidingLeftElement) {
        initializeSlidingLeftUnique("sliding-left", "Welcome to the Animation Showcase!");
    }
});
