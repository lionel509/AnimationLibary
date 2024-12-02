function initializeFlywordBottomUniqueV2(elementId: string, text: string) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id ${elementId} not found`);
        return;
    }
    element.innerHTML = '';
    
    // Split text into words
    const words = text.split(' ');
    
    words.forEach((word: string, index: number) => {
        const span = document.createElement('span');
        span.textContent = word + (index < words.length - 1 ? ' ' : '');
        span.className = 'flyword-bottom';
        span.style.transitionDelay = `${index * 0.1}s`;
        element.appendChild(span);
    });
    
    requestAnimationFrame(() => {
        Array.from(element.children).forEach(span => {
            (span as HTMLElement).classList.add('active');
        });
    });
}
