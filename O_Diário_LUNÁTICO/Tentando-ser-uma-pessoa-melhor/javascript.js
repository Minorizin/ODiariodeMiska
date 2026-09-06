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
        //
        // Cada item pode ser:
        //   - Uma string simples: "Texto qualquer"
        //   - Um objeto: { text: "...", image: "...", clearImage: true }
        //
        // Sobre a imagem exibida acima do texto:
        //   • "image": define/troca a imagem exibida a partir deste ponto.
        //   • Uma vez definida, a imagem PERMANECE na tela nos textos
        //     seguintes automaticamente, mesmo que eles sejam strings
        //     simples ou objetos sem o campo "image".
        //   • "clearImage: true" remove a imagem exibida naquele momento.
        //   • Para trocar de uma imagem para outra, basta usar "image"
        //     novamente com o novo caminho — não precisa de clearImage antes.
        //
        
        const INTRO_TEXTS = [
            "Oh. Olá, amigo.",
            "Quem é você mesmo?",
            "Se eu tivesse que julgar pela sua vibe, você deve ser..",
            "Hah! Quem que eu estou querendo enganar? Eu sei muito bem quem é você! A gente já se cruzou antes! Você lembra de mim, não lembra?",
            "Caso não lembre, permita-me refrescar sua memória um pouco..",
            {
                image: "img/FL-011-03.jpg",
                text: "Foi naquele dia miserável em que deixei minha máscara escorregar diante de um público que eu não esperava, muito menos desejava encontrar, mas encontrei.", 
            },

            {
             text: "Eram milhares de olhos, mas não tinha nenhum espelho. E, sem nem perceber, eu me entreguei pra esses olhos.",
            },

            {
             text: "Até hoje ainda me pergunto como consegui chegar àquele ponto, como consegui ser tão descuidada. É algo que me assombra muito porque eu nunca cheguei a cometer um erro tão.. boçal antes.",
            },

            {
                text: "De qualquer forma, não tinha mais como voltar atrás naquele ponto. As consequências da minha burrice vieram e eu tive que encará-las.",
                clearImage: true,
            },

            {
                image: "img/FL-011-02.png",
                text: "Tudo começou com aquela bela mulher de branco, tão sã e tão convencida de si mesma.", 
            },

            {
                text: "Enquanto segurava, em uma das mãos, uma bigorna extremamente enorme, ela me disse que arremessaria a bigorna direto na minha cabeça e, em seguida, me mandaria de volta para o meu lugar.",
            },

            {
                text: "Mas que não seria uma volta acompanhada de liberdade.",
            },

            {
                text: "Dito e feito, ela lançou aquela coisa na minha cabeça com tanta força que eu desmaiei na mesma hora.",
                clearImage: true,
            },

                {
                
                image: "img/enfermaria.jpg",
                text: "Quando acordei, eu estava em uma sala de enfermaria fria e tranquila, recebendo o tratamento médico necessário para me recuperar daquela pancada.",
            },

            {
                text: "E foi ali que descobri, através de uma televisão instalada no cômodo, que eu tinha me tornado uma manchete em todo o país.",
                clearImage: true,
            },

            {
                image: "img/notícias.jpg",
                text: "Todos os canais de notícia, sem exceção, estampavam o meu rosto. Exibiam meus troféus, meus escritos e, pra completar a humilhação, divulgavam as famosas provas de tudo o que eu cometi. Tudo. Pra qualquer pessoa assistir.",
            },

            {
                text: "A vergonha e a queimação no sangue que senti foram inexplicáveis. A minha própria inconsequência naquele palco idiota já tinha sido horrível, mas nem se comparava à sensação de assistir, impotente, tudo aquilo que eu guardava com tanto carinho por anos ser arrancado de mim e exibido ao vivo e a cores.",
                clearImage: true,
            },

            "Foi, sem sombra de dúvidas, a pior exposição da minha vida inteira. Aquela desgraçada realmente não estava brincando em nada do que ela me disse.",

            "Minutos depois, os policiais praticamente invadiram a enfermaria. Eles nem sequer tiveram a decência de deixar o procedimento médico acontecer como deveria. Me arrancaram de lá à força assim que decidiram que eu “já estava melhor”, mesmo com a cabeça ainda enfaixada e doendo que só. O que eles tinham de irritadinhos, tinham de apressados.",
            
            "Eu não reclamei, não. Muito pelo contrário. Não é como se eu não tivesse merecido aquilo. Mas porra, profissionalismo! Eu esperava que pudessem ter demonstrado um mínimo de cuidado com o paciente. Mas fazer o quê?",

            "Assim que me encaminharam pra prisão, tive de cumprir toda aquela burocracia idiota do processo administrativo judicial: fornecer meus dados pessoais, registrar minhas impressões digitais e tirar fotos pra minha ficha criminal.",

            "Devo admitir, essa parte foi uma das poucas coisas lá que me fez tremer um pouco de vergonha. Eles poderiam, no mínimo, ter deixado eu me arrumar. Ajeitar o meu cabelo, limpar a pele e ficar mais lindona pra foto. Mas nãããão! Tiveram que tirar aquelas malditas fotos justamente enquanto eu estava com aquele galo enorme do caralho na cabeça! Foi um pavor!",

            ".. mas, como eu já falei antes, também era o que eu merecia.",

            "Quando me deitei na cama da minha cela pela primeira vez, o tempo, dali em diante, deixou de correr. Passou a se arrastar.",

            "Cada minuto parecia deliberadamente mais longo que o anterior, e eu raramente fazia qualquer coisa além de ficar deitada, encarando o teto enquanto deixava a mente vagar.",

            "As únicas exceções aconteciam quando os grandes cavaleiros de farda decidiam me tirar da cela pra ir fazer alguma tarefa, como limpar todos os lugares imundos daquele lugar, fazer manutenções, recolher o lixo, me alimentar.",

            "Essa última, em teoria, nem deveria ser ruim. O problema é que a comida daquele lugar era tão horrível que comer lixo era até melhor. Ugh. Os cozinheiros dali precisavam aprender um pouco mais sobre gastronomia.",

            "Ah, e também quando aconteciam aquelas situações que eram beeem fora do meu alcance.",

            "Às vezes, algum outro igual resolvia tentar fazer coisas não muito agradáveis comigo; em outras, alguém só arrumava confusão por causa da ''fama'' que eu tinha (Sinto muito aí, caras. Eu não pedi por isso.).",

            "O bom é que eu sei me defender, autodefesa é uma virtude. Pelo menos aqueles movimentos dos comerciais serviram pra alguma coisa.",

            "Ahem, ahem! Enfim, essa rotina se estendeu por algum tempo, coisa de dois meses. Mas não se preocupa, tá? Eu consegui me adaptar ao meu “lar” temporário muito mais rápido do que imaginava.",

            "No começo, foi um tanto complicado, lógico. Mas dificuldades sempre fazem parte de qualquer processo de mudança e adaptação, não importa qual seja.",

            "Ah! Falando em mudança, lembra quando mencionei que deixava minha mente divagar dentro da cela? Pois é. Durante esses momentos, tive acesso a uma coisa bastante preciosa: autorreflexão.",

            "Eu tive 2 meses inteiros pra pensar e revisitar cada decisão, desvio e justificativa esfarrapada que eu usei pra continuar sendo quem eu era.",

            "Ou quem eu achava que era.",

            "Eu já falei antes: durante toda a minha vida, nada jamais chegou perto da sensação de tirar alguém do mundo. Não existia conquista ou vitória que conseguisse sequer arranhar a satisfação que isso me proporcionava.",

            "O grito cru e desesperado das pessoas sempre soou como música pros meus ouvidos. Um pedido de ajuda lançado no vazio, condenado a não ser atendido. O brilho indo embora dos olhos, devagar. Era reconfortante. Na dor, eu encontrava mais do que prazer. Encontrava acolhimento. Uma espécie de conforto que era perverso para a maioria, mas que, pra mim, era algo que fazia sentido.",

            "E durante uma esmagadora parte dos meus 20 anos de existência, sempre aceitei isso como parte da minha natureza, uma coisa que esteve ali antes mesmo de eu pensar em questioná-la. Algo permanente, que, embora eu tivesse tentado, em raras ocasiões, sentir a mesma coisa que humanos comuns sentem, nunca tentei lutar contra de verdade.",

            ".. Mas e se, dessa vez, eu realmente tentasse lutar? E se eu decidisse que eu não quero mais aceitar isso como parte de mim? E se eu tentasse o suficiente dessa vez? Esse meu monstro interior, que sempre aceitei como algo tão permanente em mim, sumiria?",

            "Eu sei. Pra você, essas perguntas devem soar tão óbvias de se entender que faz parecer que eu estou tentando zombar da sua inteligência. Mas tenta confiar em mim essa vez, vai. Pra mim, tais perguntas nunca foram tão simples.",

            "Precisei tropeçar, insistir em atalhos que só me afastavam do óbvio e errar feio para entendê-las..",

            ".. Tá. No meu caso foi errar muito, mas muito feio, mas, de alguma forma, ainda era errar.",

            "Mas agora, depois que consegui escapar daquela grande e decadente jaula, eu estou disposta a tentar recomeçar tudo do zero. Fazer aquilo que fui negligente em fazer por muito, muito tempo: mudar.",

            "Infelizmente, eu não posso fazer isso como Miska Vestergaard. Não mais, por motivos óbvios. Por isso, terei de fazê-lo com uma nova identidade, uma nova aparência. Afinal, existe jeito melhor de recomeçar uma nova vida senão com uma cara nova?",

            "Então senta aí e só observa, amigo. Eu vou te mostrar, não com discursos vazios ou promessas elegantes, mas com atitudes, que eu posso muito mais do que mostrei pra você até aqui!",

            "Hoje é o dia.. ",

            ".. que eu me torno uma pessoa melhor.",

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
        
        // Guarda a imagem atualmente exibida na introdução. Ela permanece
        // a mesma entre um texto e outro até que um item defina uma nova
        // ("image") ou peça explicitamente para removê-la ("clearImage: true").
        let currentIntroImage = null;
        
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
                const isObject = typeof currentItem === 'object' && currentItem !== null;
                const textValue = isObject ? currentItem.text : currentItem;
                
                // Atualizar a imagem atual conforme o controle definido no item:
                // - item.image        → troca/define a imagem exibida
                // - item.clearImage   → remove a imagem exibida
                // - nenhum dos dois   → a imagem atual permanece na tela sem alteração
                if (isObject && currentItem.clearImage) {
                    currentIntroImage = null;
                } else if (isObject && currentItem.image) {
                    currentIntroImage = currentItem.image;
                }
                
                // --- Imagem: só é criada/recriada quando ela realmente muda ---
                // Se a imagem atual for a mesma da tela anterior, o elemento
                // não é tocado, então ela permanece visível sem reanimar/piscar.
                let imgElement = introText.querySelector('.intro-image');
                
                if (currentIntroImage) {
                    const imageChanged = !imgElement || imgElement.dataset.src !== currentIntroImage;
                    if (imageChanged) {
                        if (imgElement) imgElement.remove();
                        imgElement = document.createElement('img');
                        imgElement.className = 'intro-image';
                        imgElement.alt = 'Imagem da introdução';
                        imgElement.dataset.src = currentIntroImage;
                        imgElement.src = currentIntroImage;
                        introText.insertBefore(imgElement, introText.firstChild);
                    }
                } else if (imgElement) {
                    imgElement.remove();
                }
                
                // --- Texto: sempre recriado, para reiniciar sua própria animação ---
                const oldTextElement = introText.querySelector('.intro-text-content');
                if (oldTextElement) oldTextElement.remove();
                
                const textElement = document.createElement('div');
                textElement.className = 'intro-text-content';
                textElement.textContent = textValue;
                introText.appendChild(textElement);
                
                introText.setAttribute('data-text', textValue);
            }
        }
        
        // Avançar para próximo texto
        function nextIntroText() {
            if (isTransitioning) return;
            
            // Garantir que a música toque após primeiro clique
            ensureIntroMusicPlays();
            
            const introScreen = document.getElementById('introScreen');
            const textElement = document.querySelector('.intro-text-content');
            
            isTransitioning = true;
            
            // Fade out apenas do texto atual — a imagem, se houver, permanece intacta
            if (textElement) {
                textElement.classList.add('fade-out-text');
            }
            
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