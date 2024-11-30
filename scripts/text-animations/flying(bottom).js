function initializeFlyingBottom(elementId, text) {
    const element = document.getElementById(elementId);
    
    // Reset the element
    element.classList.remove('active');
    element.classList.remove('with-transition');
    element.textContent = text;
    
    // Force reflow
    void element.offsetWidth;
    
    // Add transition class and trigger animation
    element.classList.add('with-transition');
    requestAnimationFrame(() => {
        element.classList.add('active');
    });
}
