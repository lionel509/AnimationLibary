document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to the Animation Showcase!";
    const speed = 100; // Speed in milliseconds

    const typewriterElement = document.getElementById("typewriter");

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
