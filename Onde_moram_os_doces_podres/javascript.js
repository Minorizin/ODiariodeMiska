 let currentChapter = 0;
        const chapters = document.querySelectorAll('.chapter');
        const totalChapters = chapters.length;
        const audio = document.getElementById('backgroundMusic');
        const musicControl = document.getElementById('musicControl');
        const playIcon = document.getElementById('playIcon');
        const pauseIcon = document.getElementById('pauseIcon');

        function updateStory() {
            const chapterNumber = document.getElementById('chapterNumber');
            const pageIndicator = document.getElementById('pageIndicator');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            // Remove active de todos os capítulos
            chapters.forEach(chapter => {
                chapter.classList.remove('active');
            });

            // Adiciona active ao capítulo atual
            chapters[currentChapter].classList.add('active');

            // Atualiza o título do capítulo
            chapterNumber.textContent = chapters[currentChapter].getAttribute('data-chapter');

            // Atualiza o indicador de página
            pageIndicator.textContent = `${currentChapter + 1} / ${totalChapters}`;

            // Controla os botões
            prevBtn.disabled = currentChapter === 0;
            nextBtn.disabled = currentChapter === totalChapters - 1;

            // Rola para o topo do conteúdo ao mudar de capítulo
            document.getElementById('storyContent').scrollTop = 0;
        }

        function nextChapter() {
            if (currentChapter < totalChapters - 1) {
                currentChapter++;
                updateStory();
            }
        }

        function previousChapter() {
            if (currentChapter > 0) {
                currentChapter--;
                updateStory();
            }
        }

        function toggleMusic() {
            if (audio.paused) {
                audio.play();
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
                musicControl.classList.add('playing');
            } else {
                audio.pause();
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
                musicControl.classList.remove('playing');
            }
        }

        // Inicializa a interface
        updateStory();