function copyCode(codeId) {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    });
}

function toggleCode(codeId, buttonId) {
    const codeElement = document.getElementById(codeId);
    const buttonElement = document.getElementById(buttonId);
    if (codeElement.style.display === "none") {
        codeElement.style.display = "block";
        buttonElement.innerText = "Hide Code";
    } else {
        codeElement.style.display = "none";
        buttonElement.innerText = "Show Code";
    }
}

function replaySliding(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('active', 'with-transition');
    void element.offsetWidth;
    element.classList.add('with-transition');
    requestAnimationFrame(() => {
        element.classList.add('active');
    });
}

function replayFlying(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    element.classList.remove('active', 'with-transition');
    element.style.opacity = '0';
    
    void element.offsetWidth;
    
    element.classList.add('with-transition');
    
    requestAnimationFrame(() => {
        element.style.opacity = '1';
        element.classList.add('active');
    });
}

function replayFlyword(elementId, text) {
    if (elementId.includes('right')) {
        initializeFlywordRight(elementId, text);
    } else if (elementId.includes('bottom')) {
        initializeFlywordBottom(elementId, text);
    }
}

function replayFlyletter(elementId, text) {
    if (elementId.includes('right')) {
        initializeFlyletterRight(elementId, text);
    } else if (elementId.includes('left')) {
        initializeFlyletterLeft(elementId, text);
    } else if (elementId.includes('top')) {
        initializeFlyletterTop(elementId, text);
    } else if (elementId.includes('bottom')) {
        initializeFlyletterBottom(elementId, text);
    }
}

function replayScramble(elementId, text) {
    if (elementId.includes('right')) {
        initializeScrambleRight(elementId, text);
    } else if (elementId.includes('left')) {
        initializeScrambleLeft(elementId, text);
    }
}

function downloadCode(codeId, filename) {
    const codeElement = document.getElementById(codeId);
    const codeText = codeElement.textContent;
    const blob = new Blob([codeText], { type: 'text/javascript' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

document.addEventListener("DOMContentLoaded", () => {
    // Initialize typewriter with specific text
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const text = typewriterElement.getAttribute('data-text') || 'Typewriter Animation';
        typewriterElement.setAttribute('data-original-text', text);
        setTimeout(() => typeWriter(typewriterElement, text, 100), 500);
    }

    // Initialize sliding animations
    const slidingRightElement = document.getElementById("sliding-right");
    if (slidingRightElement) {
        slidingRightElement.classList.add('with-transition');
        replaySliding("sliding-right");
    }

    const slidingLeftElement = document.getElementById("sliding-left");
    if (slidingLeftElement) {
        slidingLeftElement.classList.add('with-transition');
        replaySliding("sliding-left");
    }

    // Initialize flying animations
    const flyingRightElement = document.getElementById("flying-right");
    if (flyingRightElement) {
        initializeFlyingRight("flying-right", "Flying Right Animation");
    }

    const flyingLeftElement = document.getElementById("flying-left");
    if (flyingLeftElement) {
        initializeFlyingLeft("flying-left", "Flying Left Animation");
    }
    
    // Initialize typewriter
    typeWriter(document.getElementById('typewriter'), 'Typewriter Animation', 100);
    
    // Initialize sliding animations
    document.getElementById('sliding-right').classList.add('active');
    document.getElementById('sliding-left').classList.add('active');
    
    // Initialize flying animations
    document.getElementById('flying-right').classList.add('active');
    document.getElementById('flying-left').classList.add('active');
    
    // Initialize word animations
    initializeFlywordRight('flyword-right', 'Flying Words Right Animation');
    initializeFlywordLeft('flyword-left', 'Flying Words Left Animation');
    initializeFlyletterRight('flyletter-right', 'Flying Letters Right');
    initializeFlyletterLeft('flyletter-left', 'Flying Letters Left');
    initializeFlyingTop('flying-top', 'Flying Top Animation');
    initializeFlyingBottom('flying-bottom', 'Flying Bottom Animation');
    initializeFlyletterTop('flyletter-top', 'Flying Letters Top');
    initializeFlyletterBottom('flyletter-bottom', 'Flying Letters Bottom');
    initializeFlywordTop('flyword-top', 'Flying Words Top Animation');
    initializeFlywordBottom('flyword-bottom', 'Flying Words Bottom Animation');
    initializeScrambleLeft('scramble-left', 'Scramble Left');
    initializeScrambleRight('scramble-right', 'Scramble Right');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the animation element
                const animationBox = entry.target;
                const animationElement = animationBox.querySelector('[id]');
                if (animationElement) {
                    // Get the animation type from the class name
                    if (animationElement.classList.contains('typewriter')) {
                        typeWriter(animationElement, animationElement.getAttribute('data-text') || 'Typewriter Animation', 100);
                    } else if (animationElement.classList.contains('sliding-right') || 
                             animationElement.classList.contains('sliding-left')) {
                        replaySliding(animationElement.id);
                    } else if (animationElement.classList.contains('flying-right') || 
                             animationElement.classList.contains('flying-left') || 
                             animationElement.classList.contains('flying-top') || 
                             animationElement.classList.contains('flying-bottom')) {
                        replayFlying(animationElement.id);
                    } else if (animationElement.id.startsWith('flyword-')) {
                        replayFlyword(animationElement.id, animationElement.textContent);
                    } else if (animationElement.id.startsWith('flyletter-')) {
                        replayFlyletter(animationElement.id, animationElement.textContent);
                    } else if (animationElement.id.startsWith('scramble-')) {
                        replayScramble(animationElement.id, animationElement.textContent);
                    }
                }
                // Unobserve after playing
                observer.unobserve(animationBox);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Observe all animation boxes
    document.querySelectorAll('.animation-box').forEach(box => {
        observer.observe(box);
    });
});

// Helper function to capitalize first letter
function capitalize(str) {
    return str.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
}
