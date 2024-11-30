function initializeFlyingRight(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = text;
    element.classList.add('flying-right');
    element.classList.add('with-transition');
    
    requestAnimationFrame(() => {
        element.classList.add('active');
    });
}
