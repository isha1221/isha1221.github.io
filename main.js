// Typewriter Animation
function typeWriter() {
    const typewriter = document.getElementById('typewriter');
    const text = typewriter.getAttribute('data-text');
    typewriter.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        } else {
            typewriter.style.borderRight = 'none';
        }
    }
    typewriter.style.borderRight = '0.15em solid #d9534f';
    type();
}

// Hamburger Menu Toggle
document.getElementById('hamburger-btn').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');

    // Optional: Animate hamburger to X
    const bars = document.querySelectorAll('.bar');
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        bars[0].style.transform = 'rotate(0deg)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0deg)';
    }
});

// Run typewriter animation on page load
window.onload = typeWriter;

// Fun Section Spin
document.getElementById('fun-btn').addEventListener('click', function() {
    const funFacts = [
        "I once coded a site upside-down for fun!",
        "I’ve hugged a tree in every timezone I’ve visited.",
        "I collect vintage typewriters (and use them!).",
        "I’ve eaten pizza for breakfast more times than I’ll admit.",
        "I dream in binary sometimes."
    ];
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById('fun-fact').textContent = randomFact;

    const spinCircle = document.getElementById('spin-circle');
    spinCircle.classList.remove('spin');
    void spinCircle.offsetWidth;
    spinCircle.classList.add('spin');
});