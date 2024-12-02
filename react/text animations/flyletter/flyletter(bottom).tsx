export function initializeFlyletterBottom(elementId: string, text: string): void {
    if (!elementId || !text) {
        console.error('Both elementId and text must be provided');
        return;
    }
    const element: HTMLElement | null = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = '';
    
    [...text].forEach((char: string, index: number) => {
        const span: HTMLSpanElement = document.createElement('span');
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
