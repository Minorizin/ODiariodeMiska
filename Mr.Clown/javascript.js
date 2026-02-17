 // Simulate VHS tracking distortion
        setInterval(() => {
            if (Math.random() > 0.95) {
                document.body.style.transform = `translateX(${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    document.body.style.transform = 'translateX(0)';
                }, 50);
            }
        }, 100);

        // Menu sound effect simulation (optional)
        document.querySelectorAll('.menu-option').forEach(option => {
            option.addEventListener('mouseenter', () => {
                // Add subtle transform for depth
                option.style.transform = 'translateX(15px) scale(1.02) translateZ(10px)';
            });
            
            option.addEventListener('mouseleave', () => {
                option.style.transform = 'translateX(0) scale(1) translateZ(0)';
            });
        });

        // Story screen navigation
        const storyBtn = document.getElementById('storyBtn');
        const backBtn = document.getElementById('backBtn');
        const mainMenu = document.getElementById('mainMenu');
        const storyScreen = document.getElementById('storyScreen');
        const menuScreen = document.querySelector('.menu-screen');

        storyBtn.addEventListener('click', () => {
            // Add VHS transition effect
            document.body.style.transition = 'opacity 0.3s';
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                mainMenu.classList.add('hidden');
                storyScreen.classList.add('active');
                menuScreen.classList.add('story-mode');
                document.body.style.opacity = '1';
            }, 300);
        });

        backBtn.addEventListener('click', () => {
            // Add VHS transition effect
            document.body.style.transition = 'opacity 0.3s';
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                storyScreen.classList.remove('active');
                mainMenu.classList.remove('hidden');
                menuScreen.classList.remove('story-mode');
                document.body.style.opacity = '1';
            }, 300);
        });