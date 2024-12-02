function initializeScrambleLeftUniqueRenamed(elementId: string, text: string) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = '';
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const finalText = text;
    const iterations = 20; // Increased for slower effect
    
    [...finalText].forEach((char) => {
        const span = document.createElement('span');
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.className = 'scramble-left';
        span.dataset.value = char;
        span.style.opacity = '1'; // Start visible with random character
        if (element) {
            element.appendChild(span);
        }
    });
    const spans = element.querySelectorAll('.scramble-left') as NodeListOf<HTMLSpanElement>;
    let frame = 0;
    const charPool = chars.split('');
    let currentIteration = 0;

    const animate = () => {
        const currentSpans = [...spans].filter((_, index) => frame >= index * 4); // Slowed down progression
        
        currentSpans.forEach((span) => {
            if (frame < iterations) {
                // More focused character set based on the target character
                span.textContent = charPool[Math.floor(Math.random() * charPool.length)];
            } else if (currentIteration === iterations) {
                span.textContent = span.dataset.value || '';
            } else if (frame === iterations) {
                span.textContent = span.dataset.value || '';
            }
        });

        frame++;
        setTimeout(() => { // Add slight delay between frames
            if (frame < (finalText.length * 4) + iterations) {
                requestAnimationFrame(animate);
            }
        }, 50);
    };

    requestAnimationFrame(animate);
}
