function initializeFlyletterRight(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    
    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'flyletter-right';
        span.style.transitionDelay = `${index * 0.05}s`;
        element.appendChild(span);
    });
    
    requestAnimationFrame(() => {
        Array.from(element.children).forEach(span => {
            span.classList.add('active');
        });
    });
}
