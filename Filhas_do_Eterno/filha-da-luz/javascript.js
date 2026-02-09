// Parallax suave no scroll
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const fog = document.querySelector('.fog');
            const lightRays = document.querySelector('.light-rays');
            
            fog.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.15}px) rotate(${scrolled * 0.01}deg)`;
            lightRays.style.opacity = Math.max(0.03 - (scrolled * 0.00003), 0.01);
            
            lastScrollY = scrolled;
        });

        // Adicionar mais partículas dinamicamente
        const voidParticles = document.querySelector('.void-particles');
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.opacity = Math.random() * 0.3 + 0.1;
            voidParticles.appendChild(particle);
        }

window.addEventListener('click'), function () {
    var audio = document.getElementById("música");
    audio.play();
}
