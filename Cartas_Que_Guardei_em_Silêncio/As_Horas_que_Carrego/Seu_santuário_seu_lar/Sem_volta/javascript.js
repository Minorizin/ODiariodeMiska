// áudios

      var audio = document.getElementById("myaudio");
  audio.volume = 0.6;

        // Minimal timestamp
        function updateTimestamp() {
            const now = new Date();
            const timestamp = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            document.getElementById('timestamp').textContent = timestamp;
        }
        updateTimestamp();
        setInterval(updateTimestamp, 60000);
        
        // Subtle random ambient shift
        setInterval(() => {
            if (Math.random() > 0.97) {
                const body = document.body;
                body.style.filter = 'brightness(0.98)';
                setTimeout(() => {
                    body.style.filter = 'brightness(1)';
                }, 150);
            }
        }, 5000);
        
        // Parallax effect on scroll (very subtle)
        window.addEventListener('scroll', () => {
            const images = document.querySelectorAll('.image-container');
            images.forEach((img, index) => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.05;
                img.style.transform = `translateY(${rate}px)`;
            });
        });
        
        // Red section pulse effect
        const redSection = document.querySelector('.red-section');
        if (redSection) {
            let intensity = 0.2;
            let increasing = true;
            
            setInterval(() => {
                if (increasing) {
                    intensity += 0.01;
                    if (intensity >= 0.4) increasing = false;
                } else {
                    intensity -= 0.01;
                    if (intensity <= 0.2) increasing = true;
                }
                redSection.style.boxShadow = `0 0 ${intensity * 100}px rgba(200, 0, 0, ${intensity})`;
            }, 100);
        }