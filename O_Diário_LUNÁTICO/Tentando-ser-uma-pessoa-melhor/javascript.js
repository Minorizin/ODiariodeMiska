/*                                                                           
                                                                          
   ██ ▄█████   ▄▄▄▄   ▄▄▄    █████▄  ▄▄▄▄▄  ▄▄▄▄ ▄▄▄▄▄ ▄▄  ▄▄ ▄▄ ▄▄  ▄▄▄  
   ██ ▀▀▀▄▄▄   ██▀██ ██▀██   ██▄▄██▄ ██▄▄  ███▄▄ ██▄▄  ███▄██ ██▄██ ██▀██ 
████▀ █████▀   ████▀ ██▀██   ██   ██ ██▄▄▄ ▄▄██▀ ██▄▄▄ ██ ▀██ ██ ██ ██▀██ 
                                                                          
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⣤⣀⠀⠀⣿
⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⣿⣿⣆⣼⣿
⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⣆⣐⡀⠀⠴⣿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⢳⣦⣀⠀⠀⠀⠀⠀⠀⠁⠀⠀⢺⣿⣿⣿⠀⢰⠘⣿⣿⣿⣿
⠂⠀⠀⠀⠀⠀⠀⠐⠿⣿⢷⠀⢀⢤⡀⠀⠀⠀⠀⠘⠊⠉⠉⠀⠀⠂⣿⣿⣿⣿
⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⣀⡪⡚⢃⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⢀⣿⣿⣿⣿
⠀⠀⠀⠙⠻⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣷⣦⣴⣶⣷⣾⣿⠂⠀⠀⣼⣿⣿⣿⣿
⣦⡀⠀⠐⠈⠈⢻⣿⣿⣿⡿⠿⢿⣿⣿⠿⢿⣿⣿⣿⡿⣃⠆⢀⣼⣿⣿⣿⣿⣿
⣽⣿⡇⠀⠀⠀⠀⢻⣿⣿⣿⣄⠀⠈⠀⢀⣾⣿⣿⣿⣿⠹⠀⢸⣿⣿⣿⣿⣿⣿
⡻⢻⡇⠀⠀⠀⠀⠀⠙⣿⣿⠿⠆⠋⠀⠿⢿⣿⣿⣿⣿⠂⠀⢸⣿⣿⣿⣿⣿⣿
⣗⡲⠁⠀⠀⠀⠀⠀⠘⠈⠤⠶⠒⠒⠲⠶⣦⣝⣿⣿⡇⠀⠀⢸⣿⣿⣿⣿⣿⣿
⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣶⣶⣶⣾⣿⣿⡿⠃⠀⠀⠝⣿⢮⣽⣿⣿⣿
⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠰⣸⠽⣿⣿⣿⣿⡿⠃⠀⠀⠐⠀⢢⣻⣿⣿⣿⣿⣿
⣿⢿⣷⠃⠀⠀⠀⠀⠀⠀⠀⠙⠛⠓⠉⠘⠁⠀⠀⠀⠀⠀⠀⢺⣿⣿⣿⣿⣿⠓
⠉⠙⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠙⠋⠀⠀

*/
 
 // ==========================================
        // TEXTOS DA INTRODUÇÃO (PERSONALIZÁVEIS)
        // ==========================================
        
        const INTRO_TEXTS = [
            "Ah, olá.",
            "Quem é você mesmo?",
            "Se eu tivesse que julgar pela sua vibe..",
            "Hah! Quem eu estou querendo enganar, né?",
            "Eu sei muito bem quem é você. A gente já se cruzou antes, cê lembra de mim, né?",
            {
                image: "img/FL-011-03.jpg",
                text: "Foi naquele PATÉTICO dia, quando minha máscara escorregou em público e eu me entreguei sem nem perceber.", 
            },
            "Eram milhares de olhos, mas não tinha nenhum espelho. Foi o pior tipo de exposição da minha vida.",
            "Confesso que até hoje ainda me pergunto como consegui chegar àquele ponto, como consegui ser tão descuidada. Acho que essa foi, inclusive, a incógnita que mais assombrou minha cabeça naquele dia porque eu nunca cheguei a cometer um erro tão.. boçal antes.",
            "Mas, apesar de todas os meus questionamentos, não tinha mais como voltar atrás naquele ponto. As consequências vieram e tive que encará-las.",
            {
                text: "Primeiro, aquela bela mulher de branco, sempre tão sã, estragou tudo de vez. Ela me acertou com uma bigorna EXTREMAMENTE gigante na cabeça e acabei desmaiando na hora.", 
                image: "img/FL-011-02.png",
            },
            "Depois, quando eu acordei, além de ver o enorme galo que eu tinha na cabeça, também me vi presa em uma cela onde o tempo deixou de correr e passou a se arrastar.",
            "Foram anos. Muitos deles. Mas não se preocupa, eu consegui me adaptar ao meu ''lar'' temporário muito bem. Foi complicado no começo, é claro. Mas dificuldades sempre serão parte de um processo, não importa qual.",
            "Na prisão, eu tive direito a uma coisa muito preciosa. Algo que ia além de limpar aqueles vasos nojentos, comer comida de péssima qualidade e ouvir piadinhas idiotas sobre a minha pessoa.",
            "E essa coisa era nada mais, nada menos, do que o tempo livre.",
            "Eu tive tempo, mas muito tempo mesmo pra pensar. O suficiente para revisitar cada decisão, desvio e justificativa esfarrapada que eu usei pra continuar sendo quem eu era.",
            "Ou quem eu achava que era.",
            "Eu já falei antes, durante a maior parte da minha vida, nada jamais chegou perto da sensação de tirar alguém do mundo. Não existia abraço, conquista ou vitória que competisse com isso.",
            "O grito cru e desesperado das pessoas sempre foi como música para mim.",
            "Um pedido de ajuda lançado no vazio, condenado a não ser atendido.",
            "O brilho indo embora dos olhos, devagar, como uma lâmpada antiga sendo desligada.",
            "Era reconfortante. Na dor, eu encontrava mais do que prazer, eu encontrei acolhimento. Um conforto que fazia sentido.",
            "Nunca reclamei disso. Nunca lutei contra.",
            "Eu aceitei isso como se aceita uma cicatriz antiga: Algo permanente, mas meu.",
            "Mas, como pôde ver, escolhas assim não vêm sem conta pra pagar.",
            "Trancada, eu encarei perguntas que sempre fui indiferente em fazer:",
            "Minhas escolhas eram inevitáveis ou apenas convenientes? Meus princípios passavam desculpas ensaiadas e chulas? O meu monstro interior, a final de contas, realmente existia de verdade?",
            "Ou suas vozes eram apenas ilusões que minha cabeça criava?",
            "Eu sei. Pra você, a resposta sempre foi óbvia demais para merecer explicação.",
            "Pra mim, no entanto, nunca foi tão simples.",
            "Demorei mais do que gostaria para chegar a esse entendimento. Precisei tropeçar, errar feio, insistir em atalhos que só me afastavam do óbvio.",
            "Mas agora, depois de conseguir escapar daquela grande jaula, eu consigo dizer que compreendi o que significa levar uma vida genuinamente normal.",
            "E é isso que eu vou te mostrar, pequeno enxerido.",
            "Não com discursos vazios ou promessas elegantes, mas com atitudes.",
            "Então observe.",
            "Hoje é o dia..",
            ".. que eu me torno uma pessoa melhor."
        ];
        
        // ==========================================
        // MÚSICA DE FUNDO DA INTRODUÇÃO
        // ==========================================
        
        // Coloque a URL da música que tocará durante a introdução
        const INTRO_BACKGROUND_MUSIC = 'audio/musica2.mp3'; // Ex: 'https://exemplo.com/intro-music.mp3'
        
        // Volume da música de fundo (0.0 a 1.0)
        const INTRO_MUSIC_VOLUME = 0.5; // 50% do volume
        
        // ==========================================
        // MÚSICA DA ABERTURA DE TÍTULO
        // ==========================================
        
        // Coloque a URL da música que tocará durante a abertura "MISKA"
        const TITLE_OPENING_MUSIC = 'audio/musicaparaabertura.mp3'; // Ex: 'https://exemplo.com/title-music.mp3'
        
        // Volume da música da abertura (0.0 a 1.0)
        const TITLE_MUSIC_VOLUME = 0.6; // 60% do volume
        
        // ==========================================
        // CONFIGURAÇÃO DE MÚSICA PERSONALIZADA
        // ==========================================
        
        // Para adicionar sua música MP3, coloque a URL aqui:
        const CUSTOM_MUSIC_URL = ''; // Ex: 'https://exemplo.com/musica.mp3'
        
        // ==========================================
        
        let currentIntroIndex = 0;
        let isTransitioning = false;
        let introBgMusicElement = null;
        let titleMusicElement = null;
        
        // Inicializar a sequência
        window.addEventListener('DOMContentLoaded', () => {
            // Bloquear scroll enquanto a intro está ativa
            document.body.classList.add('intro-active');
            
            // Configurar música de fundo da introdução
            if (INTRO_BACKGROUND_MUSIC) {
                introBgMusicElement = document.getElementById('introBgMusic');
                introBgMusicElement.src = INTRO_BACKGROUND_MUSIC;
                introBgMusicElement.volume = INTRO_MUSIC_VOLUME;
                
                // Tentar tocar a música (pode ser bloqueado por alguns navegadores)
                introBgMusicElement.play().catch(err => {
                    console.log('Música de fundo será reproduzida após interação do usuário');
                });
            }
            
            // Configurar música da abertura de título
            if (TITLE_OPENING_MUSIC) {
                titleMusicElement = document.getElementById('titleOpeningMusic');
                titleMusicElement.src = TITLE_OPENING_MUSIC;
                titleMusicElement.volume = TITLE_MUSIC_VOLUME;
            }
            
            // Mostrar primeiro texto da introdução
            showIntroText(currentIntroIndex);
        });
        
        // Função para garantir que a música toque após primeira interação
        function ensureIntroMusicPlays() {
            if (introBgMusicElement && introBgMusicElement.paused && INTRO_BACKGROUND_MUSIC) {
                introBgMusicElement.play().catch(err => {
                    console.log('Não foi possível reproduzir a música');
                });
            }
        }
        
        // Mostrar texto da introdução
        function showIntroText(index) {
            const introText = document.getElementById('introText');
            
            if (index < INTRO_TEXTS.length) {
                const currentItem = INTRO_TEXTS[index];
                
                // Limpar conteúdo anterior
                introText.innerHTML = '';
                
                // Verificar se é objeto com imagem ou apenas texto
                if (typeof currentItem === 'object' && currentItem.text) {
                    // Criar elemento de texto
                    const textElement = document.createElement('div');
                    textElement.className = 'intro-text-content';
                    textElement.textContent = currentItem.text;
                    
                    // Criar elemento de imagem se existir
                    if (currentItem.image) {
                        const imgElement = document.createElement('img');
                        imgElement.className = 'intro-image';
                        imgElement.src = currentItem.image;
                        imgElement.alt = 'Imagem da introdução';
                        
                        // IMAGEM PRIMEIRO, depois o texto
                        introText.appendChild(imgElement);
                        introText.appendChild(textElement);
                    } else {
                        introText.appendChild(textElement);
                    }
                    
                    introText.setAttribute('data-text', currentItem.text);
                } else {
                    // Apenas texto simples
                    const textElement = document.createElement('div');
                    textElement.className = 'intro-text-content';
                    textElement.textContent = currentItem;
                    introText.appendChild(textElement);
                    introText.setAttribute('data-text', currentItem);
                }
                
                // Remover classe de fade out se existir
                introText.classList.remove('fade-out-text');
                
                // Forçar reflow para reiniciar animação
                void introText.offsetWidth;
            }
        }
        
        // Avançar para próximo texto
        function nextIntroText() {
            if (isTransitioning) return;
            
            // Garantir que a música toque após primeiro clique
            ensureIntroMusicPlays();
            
            const introText = document.getElementById('introText');
            const introScreen = document.getElementById('introScreen');
            
            isTransitioning = true;
            
            // Fade out do texto atual
            introText.classList.add('fade-out-text');
            
            setTimeout(() => {
                currentIntroIndex++;
                
                if (currentIntroIndex < INTRO_TEXTS.length) {
                    // Mostrar próximo texto
                    showIntroText(currentIntroIndex);
                    isTransitioning = false;
                } else {
                    // Acabaram os textos
                    // Fazer fade out da tela de introdução (mas manter preta)
                    introScreen.classList.add('fade-out');
                    
                    setTimeout(() => {
                        // Esconder a tela de introdução, mas a tela continua preta
                        introScreen.style.display = 'none';
                        
                        // Aguardar um momento e então mostrar a abertura MISKA
                        setTimeout(() => {
                            showTitleOpening();
                        }, 500);
                    }, 800);
                }
            }, 500);
        }
        
        // Pular a sequência de textos e ir direto para a abertura de título MISKA
        function skipIntro() {
            isTransitioning = true;
            
            const introScreen = document.getElementById('introScreen');
            
            // Parar e resetar a música de fundo da introdução, se estiver tocando
            if (introBgMusicElement) {
                introBgMusicElement.pause();
                introBgMusicElement.currentTime = 0;
            }
            
            // Esconder a tela de textos da introdução
            introScreen.style.display = 'none';
            
            // Seguir o fluxo normal a partir da abertura MISKA
            showTitleOpening();
        }
        
        // Mostrar abertura de título MISKA
        function showTitleOpening() {
            const titleOpening = document.getElementById('titleOpening');
            const titleText = document.querySelector('.title-text');
            const evidenceContainer = document.querySelector('.evidence-container');
            
            // PARAR música de fundo da introdução com fade out
            if (introBgMusicElement && !introBgMusicElement.paused) {
                const fadeOutInterval = setInterval(() => {
                    if (introBgMusicElement.volume > 0.05) {
                        introBgMusicElement.volume -= 0.05;
                    } else {
                        introBgMusicElement.pause();
                        introBgMusicElement.currentTime = 0;
                        clearInterval(fadeOutInterval);
                    }
                }, 50);
            }
            
            // TOCAR música da abertura de título
            if (titleMusicElement && TITLE_OPENING_MUSIC) {
                titleMusicElement.play().catch(err => {
                    console.log('Não foi possível reproduzir a música da abertura');
                });
            }
            
            // Mostrar a tela de abertura (fade in)
            titleOpening.classList.add('active');
            
            // Iniciar animação do título após o fade in
            setTimeout(() => {
                titleText.classList.add('animate');
            }, 500);
            
            // Após a animação completa, fazer fade out e mostrar conteúdo
            setTimeout(() => {
                titleOpening.classList.add('fade-out');
                
                // PARAR música da abertura com fade out
                if (titleMusicElement && !titleMusicElement.paused) {
                    const fadeTitleMusicOut = setInterval(() => {
                        if (titleMusicElement.volume > 0.05) {
                            titleMusicElement.volume -= 0.05;
                        } else {
                            titleMusicElement.pause();
                            titleMusicElement.currentTime = 0;
                            clearInterval(fadeTitleMusicOut);
                        }
                    }, 50);
                }
                
                setTimeout(() => {
                    titleOpening.style.display = 'none';
                    
                    // REMOVER O OVERLAY PRETO E LIBERAR TUDO
                    document.body.classList.remove('intro-active');
                    
                    // Pequeno delay antes de mostrar o conteúdo
                    setTimeout(() => {
                        evidenceContainer.classList.add('show');
                    }, 100);
                }, 1000);
            }, 8500); // Tempo total: fade in (500) + zoom (4000) + sangue (3000) + pausa (1000)
        }
        
        // Aplicar música personalizada
        if (CUSTOM_MUSIC_URL) {
            document.getElementById('audioSource').src = CUSTOM_MUSIC_URL;
            document.getElementById('audioPlayer').load();
        }
        
        // Toggle do bloco de música
        function toggleMusic() {
            const header = document.querySelector('.section-header');
            const content = document.getElementById('musicContent');
            
            header.classList.toggle('active');
            content.classList.toggle('active');
        }

        /* ⣿⣿⣿⣿⣿⣿⣿⣟⣭⣿⣯⣿⣿⣼⠀⠀⣾⣿⣞⣾⡽⣽⡿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣸⠋⣿⠿⠿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡷⣿⣮⣾⣭⣿⣯⠠⡿⡿⣿⡯⣿⣿⣿⡿⠷⣳⣿⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢡⠏⠀⢀⡴⠿⠿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣟⣻⣻⣿⣻⣯⣿⠀⢘⣿⣿⣝⣏⣩⡯⣏⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣮⣴⡶⢫⣴⣶⣤⣿⣿
⣿⣿⣿⡿⣟⣟⣷⡋⡽⢿⢟⣿⡟⢯⠀⢐⣿⡿⠉⠉⠉⠛⠛⠫⣿⣿⣿⣿⣿⣿⣿⠘⣿⣿⠿⠟⠁⠀⠈⠁⠀⠀⠈⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⡏⠸⢿⠾⠃⠉⠙⣿⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣽⣡⠀⢠⠝⡯⣧⣮⣀⡐⠀⠀⠀⠙⠛⣿⣿⣿⣿⣧⠹⡅⠀⢠⠄⠀⠒⠐⠒⠒⠾⠧⣄⡀⠈⢀⠹⣿⣿⣿⣿⣿⡇⣸⣿⠸⣧⠀⠀⠙⢸⣿⣿
⠬⡛⣿⣿⣯⣿⣿⢿⣿⣯⡿⣟⣬⡟⡖⢀⡻⣿⣿⠃⠀⠀⠀⠈⠐⠶⢼⣿⡿⣿⣿⣿⣷⡄⠀⠀⠀⢠⡄⠀⠀⢠⠍⣑⣀⣉⣂⣠⣴⣿⣿⣿⣿⣿⢡⣿⠿⠄⠈⠀⣀⢀⣾⣿⣿
⣏⣆⢽⡯⣏⣽⣿⢫⢽⡯⣵⣿⣿⣽⡕⠀⠬⣿⡿⠁⣠⣾⣿⣦⠀⠀⠀⣿⣿⣿⣿⣿⣿⣟⣀⣀⠀⠢⢤⣠⣤⣴⣾⣿⣿⣿⡏⣽⣿⣿⣿⣿⣿⡏⢸⣧⠀⠀⢠⣾⣿⣿⣿⣿⣿
⣾⡏⢭⣽⢯⣿⣿⣗⣟⡿⣿⠿⢳⣹⢯⠀⣐⠋⡏⠀⠘⠛⢡⣿⠀⠀⢸⣿⣭⣿⣿⠟⠁⣴⣿⣿⣧⠀⣤⣤⣭⣭⣍⣿⣿⣿⣴⣿⣿⣿⣿⣿⡿⢀⣿⢿⣶⠶⣿⠟⣡⣿⣿⣿⣿
⢾⡯⢹⣏⣷⣳⡿⣏⢿⣇⣽⣟⡿⣷⣿⠐⢸⠸⠁⠀⠀⣰⣿⠇⠀⠀⠸⠥⠾⠟⠁⠀⠘⢿⣿⣻⠏⣴⣿⣿⣿⣿⡟⣩⣿⣿⣿⣿⣿⣿⣿⣿⠃⣼⡛⠈⠙⠒⠁⢸⣿⣿⣿⣿⣿
⠗⡃⣯⣏⣿⢱⢯⣿⣯⡿⢿⠿⡫⣿⣽⡄⠘⠀⠀⠈⢠⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣿⡿⠃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⢼⣿⣷⣤⠻⣿⡄⠘⠛⢿⣿⣿⣿
⣙⡏⣯⣿⣝⡞⢎⢻⡿⣿⣾⣝⣿⢭⣯⣛⠀⠀⠀⢀⡸⣿⠁⠀⠀⠀⠀⠀⢀⣤⣶⣾⣿⠟⣰⣆⠉⢿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⡿⠁⣴⣾⣿⣿⡇⢰⣿⡇⠀⠀⠀⠙⢿⣿
⢽⣽⣽⣩⢷⣿⣏⣿⣿⣿⣏⡿⣽⣿⣱⡻⠀⠀⠘⢿⣿⡎⠀⠀⠀⠀⢀⣶⣿⣿⣿⣿⡏⣼⣿⢯⡀⠈⠹⣿⣿⣻⣿⡟⣿⣿⣿⣿⠟⣠⣿⣿⣿⣿⣿⡇⣼⣿⣷⠀⠀⠀⢰⠉⠉
⢽⣿⡏⣗⢹⠽⢯⣹⣿⣯⣿⡿⣿⣷⣻⠁⠀⠀⠀⢹⣿⠇⠀⠀⠀⠐⢿⣿⣿⣿⡟⠁⠴⠛⠟⣿⣦⣴⣦⡈⢧⢧⣿⣿⣾⣿⡿⢋⣼⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⠀⠀⠀⡴⢀⠀
⡿⣿⣯⣯⣾⡋⣏⡿⣿⢿⠏⣼⢍⡿⠃⠀⠀⠀⠀⣼⡿⠀⠀⡆⠀⠴⠀⢹⡿⠋⠀⠀⠀⣶⣾⣿⣿⣿⣿⣿⡌⢧⣹⣿⠟⣡⣶⣿⣿⣿⣿⣿⣿⡏⣹⣿⣿⣿⣿⡇⠀⢸⠗⠀⠀
⠿⢿⣯⣿⣟⠳⣿⣿⣏⣟⢣⢟⡟⠁⠀⡀⠀⢀⣾⣿⠃⠀⣤⡀⠀⣐⢰⡗⠁⠀⠀⠀⠀⠙⠛⢿⣿⣿⠿⠿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀
⠙⡥⣧⢿⣗⣿⣯⣿⡿⠏⡏⣾⠁⠀⣼⠃⣾⣿⣿⠏⠀⣴⣿⠟⣳⣿⡟⠀⢴⣂⣀⣀⣀⡄⢀⡈⠛⠀⠀⠀⠈⣀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀
⠮⠏⡗⠼⡟⠓⠋⣿⡝⡽⣹⠁⠀⠘⠋⣼⣿⠿⠋⢀⣼⣿⣿⣾⣿⠟⠀⣀⣤⣌⡁⠰⠦⠤⣍⡉⢙⠉⣀⣤⢤⣌⣰⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⢟⣿⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀ */

/* Mexe não, hein..? */
























































/* ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠟⣩⡙⢿⣉⣮⡅⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣼⣿⡿⢠⡙⢻⣿⠒⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣳⣷⣦⠌⣧⣸⡷⠤⠶⠷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢟⢿⣃⡤⠼⠏⠀⠀⠀⠀⠙⠲⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⠀⠀⢀⣤⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠉⠓⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠔⠋⠁⠀⠀⠀⠀⠀⠉⠉⡯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⣝⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠻⠀⠀⠀⠲⣄⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠙⢷⣿⠉⠉⠉⠙⠒⢤⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠀⢀⣠⠄⠀⠀⢀⣀⣤⣺⠃⠀⡆⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⠀⠀⠀⠙⢦⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣄⡞⠉⠀⠀⠀⣀⢼⣢⠞⠁⠀⢀⡿⠀⠀⠀⠀⢸⣷⡀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⣀⠳⣜⣷⣢⡄⠀⠀⢠⡀⠈⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⣀⠤⠤⣒⣯⠖⠋⠀⠀⠀⢀⡼⠁⠀⠀⠀⠀⢸⣿⣧⠀⠀⠀⢸⣷⠀⠀⠀⠀⠀⠸⡆⠈⠛⢿⣄⠀⠀⠀⠙⢦⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣷⠶⠞⠋⠉⠀⢀⡀⠀⠀⣠⡞⠁⠀⠀⠀⠀⠀⣼⣿⣿⣆⠀⠀⣼⣿⣇⠀⠀⠀⠀⠀⠹⡄⠀⠀⠈⠓⢦⣄⡠⠋⢆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣶⡿⠛⢉⣁⣀⣀⣀⡤⠴⠚⠋⠀⣠⠞⠋⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⠿⢿⠿⢿⣧⣀⣿⡀⠀⠀⠙⣆⠀⠀⠀⠀⠐⠈⠙⠺⢤⡀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⢀⣀⣴⡛⠁⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⠟⠋⠀⢠⠎⣀⡀⠙⠿⣿⣷⣤⡀⠀⠈⠓⠀⠀⠀⠀⠀⠐⠀⠀⠹⣆⠀
⠀⠀⠀⣸⡿⣻⢿⠁⠀⠐⢮⡝⠿⠿⢿⣿⣿⣿⣿⣶⣶⣤⣴⣶⣾⣿⣿⣿⠿⠋⡠⠖⢊⢽⡳⠋⡀⣌⠉⠒⣢⡸⠻⢷⣄⠀⠀⢀⡴⠒⣶⢚⣿⢹⡓⢦⣹⡄
⠀⠀⠀⠋⡼⠁⠈⢧⡀⠀⠀⠋⠉⠙⠮⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠯⣥⡒⠺⠶⠒⠲⡾⠴⠶⠧⢬⡟⠉⠀⠀⠀⠀⣾⡟⠾⠋⠀⠀⠹⠞⢁⡞⡇⠀⢹⡇
⠀⠀⠀⢰⠃⠀⠀⠀⠙⠲⣤⣀⠀⠀⠀⢠⣋⣉⡉⠉⠉⠙⣯⡽⠓⠀⠀⠈⠉⠙⠲⣤⣀⣿⡀⠀⢀⣨⣧⣤⣤⣀⡀⠀⢻⣿⣦⡀⠀⠀⠀⣠⠞⣰⡇⠀⠈⠁
⠀⠀⠀⡼⠀⠀⠀⠀⠀⢀⣠⠼⠛⠋⠉⠉⠁⠀⠀⠉⢙⡶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⠞⠉⠀⠀⠀⠀⠀⠉⠑⠾⣿⠧⢽⣓⣶⣴⣷⣾⠟⠁⠀⠀⠀
⠀⠀⡼⠁⠀⠀⢀⣠⠞⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⡀⠈⠙⢿⡟⠁⠀⠀⠀⠀⠀
⢀⡞⠑⠀⢀⡴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀
⢸⣧⣶⡴⠋⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⣠⡾⣆⠀⠀⠀⠀
⠘⣿⡏⠀⠀⠈⣷⣤⣄⣀⣀⣀⡀⣀⣀⡀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣴⣶⣿⣿⠇⢸⠀⠀⠀⠀
⠀⠉⣇⠀⠀⠀⠀⠀⠀⢈⡽⠋⠛⠛⠻⠿⣿⣿⣿⣶⣄⡀⠘⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⣻⠟⣿⠁⢀⣼⠃⠀⠀⠀
⠀⠀⠘⣧⣠⡆⠀⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠈⢝⡻⢿⣿⣤⡀⠉⠀⠀⠀⠀⠀⣀⣠⣾⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⠟⠀⠀⠈⣧⠟⠁⠀⠀⠀⠀
⠀⠀⠀⠈⠛⢿⣦⡀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠲⢍⡻⢿⣷⣶⣶⣶⣶⣿⣿⣿⠟⠛⢿⣿⣿⣷⣶⣦⣤⣴⣶⣾⣿⠟⠉⠀⢀⡤⠊⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠻⠿⣐⣒⠢⠀⠀⠀⠀⠀⠀⠀⣆⣶⠀⠉⠓⠮⣍⠛⠛⡻⣏⠉⠀⠀⠀⣠⠏⠛⠻⡿⠿⢿⣟⡿⡟⠁⢀⡠⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠓⠒⠒⠚⠉⢻⠀⠀⠀⠀⡠⠟⠉⠁⢸⠀⠀⠀⠀⡇⠀⠀⠀⠈⢯⠁⠀⠰⡧⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⡜⠁⠀⠀⢠⠎⠀⠀⠀⠀⢳⡀⠀⠀⠀⠈⣇⠀⠀⠱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠃⠀⡸⠀⠀⠀⡴⠃⠀⠀⠀⠀⠀⠀⠳⣄⠀⠀⠀⠘⣆⠀⠀⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠤⠀⠚⠁⠀⡰⠁⠀⠀⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⡀⠀⠀⠘⢦⡀⠀⠈⠒⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠾⠥⠄⠀⠤⠠⠾⠥⠤⠤⠤⠼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠧⠤⠤⠤⠤⠭⠷⠦⠤⠤⠵⠄⠀⠀⠀⠀⠀⠀⠀⠀ */