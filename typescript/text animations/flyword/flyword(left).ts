function initializeFlywordLeft(elementId: string, text: string) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = '';
    
    const words = text.split(' ');
    words.forEach((word: string, index: number) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? ' ' : '');
        span.className = 'flyword-left';
        span.style.transitionDelay = `${index * 0.1}s`;
        element.appendChild(span);
    });
    
    requestAnimationFrame(() => {
        Array.from(element.children).forEach(span => {
            span.classList.add('active');
        });
    });
}