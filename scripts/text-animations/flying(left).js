function initializeFlyingLeft(elementId, text) {
    const element = document.getElementById(elementId);
    element.textContent = text;
    element.classList.add('flying-left');
    element.classList.add('with-transition');
    
    requestAnimationFrame(() => {
        element.classList.add('active');
    });
}
