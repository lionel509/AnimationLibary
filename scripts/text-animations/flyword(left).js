function initializeFlywordLeft(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    
    const words = text.split(' ');
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.className = 'flyword-left';
        span.style.transitionDelay = `${index * 0.2}s`;
        element.appendChild(span);
    });
    
    requestAnimationFrame(() => {
        Array.from(element.children).forEach(span => {
            span.classList.add('active');
        });
    });
}