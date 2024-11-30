function initializeSlidingRight(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = text;
    element.classList.add('sliding-right');
    
    // Trigger the animation after a small delay
    setTimeout(() => {
        element.classList.add('active');
    }, 100);
}
