function initializeFlywordBottom(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    
    // Split text into words
    const words = text.split(' ');
    
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? ' ' : '');
        span.className = 'flyword-bottom';
        span.style.transitionDelay = `${index * 0.1}s`;
        element.appendChild(span);
    });
    
    requestAnimationFrame(() => {
        Array.from(element.children).forEach(span => {
            span.classList.add('active');
        });
    });
}
