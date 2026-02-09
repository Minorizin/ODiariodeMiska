// Sistema de mudança de background baseado no scroll
        const sections = document.querySelectorAll('[data-bg]');
        let currentBg = 'bg-cosmos';

        function checkScrollPosition() {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const bgClass = section.getAttribute('data-bg');

                // Se o meio da tela está dentro desta seção
                if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                    if (currentBg !== bgClass) {
                        // Remove todas as classes de background
                        document.body.classList.remove('bg-escuridão', 'bg-jardim', 'bg-chuva');
                        // Adiciona a nova classe
                        document.body.classList.add(bgClass);
                        currentBg = bgClass;
                    }
                }
            });
        }

        // Inicializa com o primeiro background
        document.body.classList.add('bg-casa');

        // Escuta o evento de scroll
        window.addEventListener('scroll', checkScrollPosition);
        
        // Executa uma vez no carregamento
        checkScrollPosition();