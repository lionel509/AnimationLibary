function initializeScrambleLeft(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const finalText = text;
    const iterations = 20; // Increased for slower effect
    
    [...finalText].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        span.className = 'scramble-left';
        span.dataset.value = char;
        span.style.opacity = '1'; // Start visible with random character
        span.style.transitionDelay = `${index * 0.1}s`; // Add delay for smoother effect
        element.appendChild(span);
    });
    
    const spans = element.querySelectorAll('.scramble-left');
    let frame = 0;
    
    const animate = () => {
        const currentSpans = [...spans].filter((_, index) => frame >= index * 4); // Slowed down progression
        
        currentSpans.forEach((span, index) => {
            const currentIteration = frame - index * 4; // Matched with filter above
            if (currentIteration < iterations) {
                // More focused character set based on the target character
                const targetChar = span.dataset.value;
                const charPool = chars + targetChar.repeat(3); // Weight towards target
                span.textContent = charPool[Math.floor(Math.random() * charPool.length)];
            } else if (currentIteration === iterations) {
                span.textContent = span.dataset.value;
                span.classList.add('revealed');
            }
        });

        frame++;
        setTimeout(() => { // Add slight delay between frames
            if (frame < (finalText.length * 4) + iterations) {
                requestAnimationFrame(animate);
            }
        }, 50); // 50ms delay between frames
    };

    requestAnimationFrame(animate);
}
