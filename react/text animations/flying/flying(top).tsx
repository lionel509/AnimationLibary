function initializeFlyingTopUnique(elementId: string, text: string): void {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id '${elementId}' not found`);
        return;
    }
    
    // Reset the element
    element.classList.remove('active');
    element.classList.remove('with-transition');
    element.classList.remove('flying-top');
    element.textContent = text;
    
    // Force reflow
    void element.offsetWidth;
    
    // Add classes and trigger animation
    element.classList.add('flying-top', 'with-transition');
    requestAnimationFrame(() => {
        element.classList.add('active');
    });
}
