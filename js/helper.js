function typeWriter(element, text, speed) {
    // Reset and store original text
    element.textContent = '';
    if (!element.hasAttribute('data-original-text')) {
        element.setAttribute('data-original-text', text);
    }
    
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent = text.substring(0, i + 1);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

function replayTypewriter(elementId, text, speed) {
    const element = document.getElementById(elementId);
    const originalText = element.getAttribute('data-original-text') || text;
    typeWriter(element, originalText, speed);
}

function toggleCode(codeId, buttonId) {
    const codeBlock = document.getElementById(codeId);
    const button = document.getElementById(buttonId);
    
    if (codeBlock.style.display === 'none') {
        codeBlock.style.display = 'block';
        button.textContent = 'Hide Code';
    } else {
        codeBlock.style.display = 'none';
        button.textContent = 'Show Code';
    }
}

function copyCode(codeId) {
    const codeBlock = document.getElementById(codeId);
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy code:', err);
    });
}
