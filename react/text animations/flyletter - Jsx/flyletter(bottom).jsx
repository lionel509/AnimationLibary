function initializeFlyletterBottomUnique(elementId, text) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = '';
    
    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'flyletter-bottom';
        span.style.transitionDelay = `${index * 0.05}s`;
        element.appendChild(span);
    });
    
    requestAnimationFrame(() => {
        Array.from(element.children).forEach(span => {
            span.classList.add('active');
        });
    });
}
