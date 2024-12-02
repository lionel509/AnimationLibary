function initScrambleRight(elementId, text) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = '';
    const chars = `!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyz`;
    const finalText = text;
    const iterations = 20;
    const ANIMATION_DELAY = 50; // Delay in milliseconds for setTimeout
    
    [...text].forEach((char) => {
        const span = document.createElement('span');
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.className = 'scramble-right';
        span.dataset.value = char;
        span.style.opacity = '1';
        if (element) {
            element.appendChild(span);
        }
    });

    const spans = element.querySelectorAll('.scramble-right');
    let frame = 0;
    const BUFFER = 10; // Added buffer constant

    function animate() {
        spans.forEach((span, index) => {
            const targetChar = span.dataset.value;
            const currentIteration = frame - (spans.length - index - 1) * 4;
            if (currentIteration < iterations) {
                const charPool = targetChar ? chars + targetChar.repeat(3) : chars;
                span.textContent = chars[Math.floor(Math.random() * charPool.length)];
            } else {
                span.textContent = targetChar || '';
                span.classList.add('revealed');
            }
        });

        frame++;
        setTimeout(() => {
            if (frame < (finalText.length * 4) + iterations + BUFFER) { // Used buffer constant
                requestAnimationFrame(animate);
            } else {
                spans.forEach(span => {
                    span.textContent = span.dataset.value || '';
                    span.classList.add('revealed');
                });
            }
        }, ANIMATION_DELAY);
    }

    requestAnimationFrame(animate);
}
