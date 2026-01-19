// Sistema de Diálogo com personagens
        const dialogues = [
            { text: "", character: "Jellie" },
            { text: "Opa! Você tá aí, Miska?", character: "Jellie" },
            { text: "Não sei se você tá dormindo ou o quê..", character: "Jellie" },
            { text: "Mas se você estiver.. a gente se fala pela manhã, boa noite.", character: "Jellie" },
            { text: "Ah, oi Jellie.", character: "Miska" },
            { text: "Eu ainda tô acordada, não se preocupa.", character: "Miska" },
            { text: "Cruzes! Você tá de pé ainda, mulher?", character: "Jellie" },
            { text: "Já tá bem tarde!", character: "Jellie" },
            { text: "São literalmente 8 da noite ainda, Jellie.", character: "Miska" },
            { text: "É?! Nossa, eu acho que eu perdi a noção do tempo, então..", character: "Jellie" },
            { text: "Deixe-me adivinhar, você ficou jogando o dia inteiro?", character: "Miska" },
            { text: "Para, vai! Foram só 6 horas hoje, eu não sou tão viciada assim! Me respeita!", character: "Jellie" },
            { text: "Tá, tá. Cê que sabe.", character: "Miska" },
            { text: "Mas me diz, por que você tá me ligando?", character: "Miska" },
            { text: "Ah, nada demais. Eu só queria saber..", character: "Jellie" },
            { text: "Saber sobre o quê?", character: "Miska" },
            { text: "Sobre você.", character: "Jellie" },
            { text: "Eu? Por que?", character: "Miska" },
            { text: "É isso aí, mulher.", character: "Jellie" },
            { text: "Você tá bem de saúde? Tá precisando de alguma coisa?", character: "Jellie" },
            { text: "Quer sair pra tomar um ar?", character: "Jellie" },
            { text: "Éé..", character: "Miska" },
            { text: "Desculpa, eu fui precipitada demais?", character: "Jellie" },
            { text: "Não, não é isso! Eu só achei meio repentino.", character: "Miska" },
            { text: "Por que isso do nada? Eu tô bem, Jellie.", character: "Miska" },
            { text: "Eu desconfio.", character: "Jellie" },
            { text: "É sério, Jellie..", character: "Miska" },
            { text: "Não se preocupa, tá? Eu tô firme e forte por aí.", character: "Miska" },
            { text: "Hm..", character: "Jellie" },
            { text: "Você finge meio mal.", character: "Jellie" },
            { text: "Ah, qual é-", character: "Miska" },
            { text: "Psiu, mocinha!", character: "Jellie" },
            { text: "Olha, eu vou ter que ser sincera.", character: "Jellie" },
            { text: "Você parece bem próxima de ter um colapso.", character: "Jellie" },
            { text: "Por que você acha isso?", character: "Miska" },
            { text: "Você vem passando por muita coisa pesada, Miska.", character: "Jellie" },
            { text: "Ouvi dizer que você estava tendo pesadelos constantes, e não só isso..", character: "Jellie" },
            { text: "Também me disseram que você parecia estar.. vendo coisas?", character: "Jellie" },
            { text: "Tendo alucinações?", character: "Jellie" },
            { text: "E tem também aquele evento lá no metrô que você..", character: "Jellie" },
            { text: "Ugh, nem ousa me lembrar dessa merda.", character: "Miska" },
            { text: "Eu sei, eu sei, me perdoa, mas..", character: "Jellie" },
            { text: "Isso é preocupante, sabe?", character: "Jellie" },
            { text: "Esse monte de coisa acumulada não é bom pra você.", character: "Jellie" },
            { text: "E, mesmo com tudo isso, você ainda estuda muito, trabalha muito.", character: "Jellie" },
            { text: "Você vai surtar, amiga.", character: "Jellie" },
            { text: "Tenta relaxar, sabe?", character: "Jellie" },
            { text: "É, nesse caso, você tem que reclamar com meu chefe e com a direção da escola, cê não acha não?", character: "Miska" },
            { text: "Olha, se eu pudesse, eu falava mesmo! Hahah!", character: "Jellie" },
            { text: "Mas como não posso demitir seu chefe, diretor e blá blá blá.. eu apenas posso conversar contigo.", character: "Jellie" },
            { text: "E sim, eu sei o que parece quando falo desse jeito.", character: "Jellie" },
            { text: "''Mais fácil falar do que fazer'', eu não te julgo por isso. Seria até uma falta de respeito julgar.", character: "Jellie" },
            { text: "Mas eu só tô preocupada, sabe?", character: "Jellie" },
            { text: "Porque você parece estar no seu limite a cada dia.", character: "Jellie" },
            { text: "Hm.", character: "Miska" },
            { text: "Aqui, quer saber o que eu faço quando eu me sinto estressada ou meio pra baixo?", character: "Jellie" },
            { text: "É.. você joga?", character: "Miska" },
            { text: "Isso mesmo! Você me conhece bem, né? O que me entrega tanto?!", character: "Jellie" },
            { text: "O que será, né..?", character: "Miska" },
            { text: "Heh! Mas voltando, eu tenho um jogo que eu acho que poderia ajudar.", character: "Jellie" },
            { text: "Sabe qual?", character: "Jellie" },
            { text: "Qual?", character: "Miska" },
            { text: "O próprio e único!", character: "Jellie" },
            { text: "Minecraft!", character: "fundo1" },
            { text: "Já ouviu falar sobre? Tenho certeza que sim, né?", character: "fundo1" },
            { text: "Ah, claro. Eu via algumas pessoas jogando isso no YouTube, embora nunca fosse algo que me despertasse tanto interesse.", character: "fundo1" },
            { text: "Já entendi, você quer que eu jogue isso? Parece entediante.", character: "fundo1" },
            { text: "Ficar construindo, construindo, construindo, sobrevivendo e mais nada.", character: "fundo1" },
            { text: "Eu sei que parece entediante, e não vou mentir, fica um pouco chato mesmo com o passar do tempo.", character: "fundo2" },
            { text: "Mas acredito que seja o jogo que possa te fazer descansar um pouco, porque é um jogo em que você pode fazer praticamente o que quiser.", character: "fundo2" },
            { text: "Sem regras, sem nada! Só você e seu próprio mundo, sacou?", character: "fundo2" },
            { text: "Construir, sei lá, um castelo enorme.", character: "fundo3" },
            { text: "Uma casa simples.", character: "fundo4" },
            { text: "Vai chegar em um momento em que você nem vai perceber que ficou bastante ocupada fazendo essas coisas que, em tese, parecem bobas.", character: "Jellie" },
            { text: "Mas que tiraram seu foco dos seus problemas da vida, pelo menos por um tempinho.", character: "Jellie" },
            { text: "Isso ajuda com estresse, ansiedade, essas coisas.", character: "Jellie" },
            { text: "Claro, não vai resolver sua vida, infelizmente. Mas você também não vai pifar, entende o que eu tô dizendo?", character: "Jellie" },
            { text: "Sim, eu entendo.", character: "Miska" },
            { text: "Obrigada por isso, eu vou tentar. Eu só preciso ligar meu computador.", character: "Miska" },
            { text: "Esse é o espírito, mulher!", character: "Jellie" },
            { text: "Muito obrigada, de verdade. É muito meigo da sua parte vir aqui falar comigo sobre essa zona de guerra que é minha vida.", character: "Miska" },
            { text: "Ah, tu me conhece, né? Não curto ver meus amiguinhos sofrendo.", character: "Jellie" },
            { text: "E além do mais, cê sabe que eu te amo muito, né?", character: "Jellie" },
            { text: "Bobeia na minha frente que eu te sequestro pra mim!", character: "Jellie" },
            { text: "É, isso daí não é minha praia. Hah.", character: "Miska" },
            { text: "Hahahahaha!", character: "Jellie" },
            { text: "Bom, acho que isso foi tudo.", character: "Jellie" },
            { text: "A gente se vê amanhã na escola. Bora dar uma saída quando as aulas terminarem porque amanhã vai ser um porre!", character: "Jellie" },
            { text: "Além de um monte de matéria chata, vai ter Educação Física!", character: "Jellie" },
            { text: "Amanhã você vai ter que me aguentar bêbada.", character: "Jellie" },
            { text: "Você diz isso como se não trucidasse todo mundo em todos os esportes.", character: "Miska" },
            { text: "Ahhhh, tem diferença entre não curtir uma coisa e fazer feio.", character: "Jellie" },
            { text: "Além do mais, eu não sou praticamente nada! Já viu a Ashley e a Kenda nas aulas? Faltam só matar todo mundo! Hahaha!", character: "Jellie" },
            { text: "Cruzes...", character: "Miska" },
            { text: "Beeeeem, bom jogo pra você, emo!", character: "Jellie" },
            { text: "E boa noiteeeeeee!", character: "Jellie" },
            { text: "Boa noite.", character: "Miska" },
        ];

        // URLs das imagens dos personagens (substitua com suas próprias imagens)
        const characterImages = {
            Jellie: "img/Jellie.png",
            Miska: "img/Miska.png",
            fundo1: "img/minecraftfundo1.jpg",
            fundo2: "img/minecraftfundo2.jpg",
            fundo3: "img/minecraftfundo3.jpg",
            fundo4: "img/minecraftfundo4.jpg",
        };

        // Nomes dos personagens
        const characterNames = {
            Jellie: "Jellie Graves",
            Miska: "Miska Vestergaard"
        };

        let currentDialogue = 0;
        let canClick = false;
        const dialogueText = document.getElementById('dialogue-text');
        const clickPrompt = document.getElementById('click-prompt');
        const introScreen = document.getElementById('intro-screen');
        const mainContent = document.getElementById('main-content');
        const characterImage = document.getElementById('character-image');
        const characterName = document.getElementById('character-name');
        const messageNotification = document.getElementById('message-notification');
        const conversationContainer = document.getElementById('conversation-container');
        const callSound = document.getElementById('call-sound');
        const dialogueMusic = document.getElementById('dialogue-music');

        // Inicializa a sequência de notificação
        function startIntroSequence() {
            // Inicia o som de ligação
            callSound.volume = 0.5; // Volume a 50%
            callSound.play().catch(e => {
                console.log('Autoplay bloqueado. Clique na tela para iniciar o áudio.');
            });

            // Após 12 segundos, fade out da notificação e fade in da conversa
            setTimeout(() => {
                // Fade out do áudio de ligação
                let volume = 0.5;
                const fadeAudio = setInterval(() => {
                    if (volume > 0) {
                        volume -= 0.05;
                        callSound.volume = Math.max(0, volume);
                    } else {
                        callSound.pause();
                        callSound.currentTime = 0;
                        clearInterval(fadeAudio);
                    }
                }, 50);

                messageNotification.style.animation = 'notification-fade 0.5s ease-in-out reverse forwards';
                
                setTimeout(() => {
                    messageNotification.style.display = 'none';
                    conversationContainer.classList.add('show');
                    canClick = true;
                    
                    // Inicia a música de fundo com fade in
                    dialogueMusic.volume = 0;
                    dialogueMusic.play().catch(e => {
                        console.log('Erro ao tocar música de fundo.');
                    });
                    
                    let musicVolume = 0;
                    const fadeInMusic = setInterval(() => {
                        if (musicVolume < 0.3) {
                            musicVolume += 0.02;
                            dialogueMusic.volume = Math.min(0.3, musicVolume);
                        } else {
                            clearInterval(fadeInMusic);
                        }
                    }, 100);
                    
                    showDialogue();
                }, 500);
            }, 12000);
        }

        function showDialogue() {
            if (currentDialogue < dialogues.length) {
                const current = dialogues[currentDialogue];

                


                // Atualiza o texto
                dialogueText.textContent = current.text;
                
                // Atualiza o nome do personagem
                characterName.textContent = characterNames[current.character];
                
                // Atualiza a imagem do personagem
                characterImage.style.backgroundImage = `url('${characterImages[current.character]}')`;
                characterImage.style.backgroundSize = 'cover';
                characterImage.style.backgroundPosition = 'center';
                
                currentDialogue++;

                // Oculta o prompt de click nos momentos de tensão
                if (current.text === "...") {
                    clickPrompt.style.opacity = '0.2';
                } else {
                    clickPrompt.style.opacity = '1';
                }
            } else {
                // Finaliza a introdução
                introScreen.classList.add('fade-out');
                
                // Fade out da música de diálogo
                let musicVolume = dialogueMusic.volume;
                const fadeOutMusic = setInterval(() => {
                    if (musicVolume > 0) {
                        musicVolume -= 0.02;
                        dialogueMusic.volume = Math.max(0, musicVolume);
                    } else {
                        dialogueMusic.pause();
                        dialogueMusic.currentTime = 0;
                        clearInterval(fadeOutMusic);
                    }
                }, 50);
                
                setTimeout(() => {
                    introScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                }, 1000);
            }
        }

        // Inicia a sequência
        startIntroSequence();

        // Avança o diálogo ao clicar (apenas após a notificação sumir)
        introScreen.addEventListener('click', () => {
            if (canClick) {
                showDialogue();
            }
        });