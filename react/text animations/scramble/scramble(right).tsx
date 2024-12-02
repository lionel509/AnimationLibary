function initializeScrambleRight(elementId: string, text: string) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = '';
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const finalText = text;
    const iterations = 20;
    
    // Create spans in normal order
    [...finalText].forEach((char) => {
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
    
    const animate = () => {
        // Filter spans starting from the right side
        const currentSpans = [...spans].filter((_, index) => 
            frame >= (spans.length - index - 1) * 4
        );
        
        currentSpans.forEach((span, index) => {
            const currentIteration = frame - (spans.length - index - 1) * 4;
            if (currentIteration < iterations) {
                const targetChar = (span as HTMLElement).dataset.value;
                const charPool = targetChar ? chars + targetChar.repeat(3) : chars;
                span.textContent = chars[Math.floor(Math.random() * charPool.length)];
            } else {
                // Changed to ensure final state is always reached
                span.textContent = (span as HTMLElement).dataset.value || '';
                span.classList.add('revealed');
            }
        });

        frame++;
        setTimeout(() => {
            // Ensure animation continues until all spans are processed
            if (frame < (finalText.length * 4) + iterations + 10) { // Added buffer
                requestAnimationFrame(animate);
            } else {
                // Final cleanup to ensure all spans show correct characters
                spans.forEach(span => {
                    span.textContent = (span as HTMLElement).dataset.value || '';
                    span.classList.add('revealed');
                });
            }
        }, 50);
    };

    requestAnimationFrame(animate);
}
