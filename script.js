// ===== ANIMATED SKILLS ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    const floatingTechs = document.querySelectorAll('.inner-orbit-circles, .middle-orbit-circles, .outer-orbit-circles');

    // Simple animation reset
    function resetOrbitAnimations() {
        floatingTechs.forEach(circle => {
            // Remove animation temporarily
            circle.style.animation = 'none';
            
            // Force reflow
            circle.offsetHeight;
            
            // Restore animation
            if (circle.classList.contains('middle-orbit-circles')) {
                circle.style.animation = 'counter-rotate-reverse 30s linear infinite';
            } else {
                circle.style.animation = 'counter-rotate 30s linear infinite';
            }
        });
    }
    
    // Reset once on load
    setTimeout(resetOrbitAnimations, 100);
});







// ===== HOVER EFFECTS FOR ORBIT CIRCLES =====
document.addEventListener('DOMContentLoaded', function() {
    const orbitCircles = document.querySelectorAll('.inner-orbit-circles, .middle-orbit-circles');
    
    orbitCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.3)';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 2px 0 rgba(255, 255, 255, 0.9)';
        });
    });
});

// ===== ANIMATION CONTROLS =====
let animationPaused = false;

function toggleAnimation() {
    const orbits = document.querySelectorAll('#inner-orbit, #middle-orbit, #outer-orbit');
    const circles = document.querySelectorAll('.inner-orbit-circles, .middle-orbit-circles, .outer-orbit-circles');
    
    if (animationPaused) {
        // Resume animations
        orbits.forEach(orbit => {
            orbit.style.animationPlayState = 'running';
        });
        circles.forEach(circle => {
            circle.style.animationPlayState = 'running';
        });
        animationPaused = false;
    } else {
        // Pause animations
        orbits.forEach(orbit => {
            orbit.style.animationPlayState = 'paused';
        });
        circles.forEach(circle => {
            circle.style.animationPlayState = 'paused';
        });
        animationPaused = true;
    }
}

// Add keyboard shortcut to toggle animation (Space key)
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        toggleAnimation();
    }
});

// Add click to toggle animation on center icons
document.addEventListener('DOMContentLoaded', function() {
    const centerIcons = document.querySelectorAll('.center-code-icon');
    
    centerIcons.forEach(icon => {
        icon.addEventListener('click', toggleAnimation);
        icon.style.cursor = 'pointer';
        icon.title = 'Animasyonu duraklat/devam ettir (Space)';
    });
});


