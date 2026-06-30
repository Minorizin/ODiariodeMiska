// Sistema de Diálogo com múltiplas conversas
        const dialogueSets = {
            1: [
                {
                    speaker: "Michael",
                    text: "Fala ae, gatona!"
                },

                {
                    speaker: "Miska",
                    text: "Olha aqui, nunca mais me chame assim."
                },

                {
                    speaker: "Miska",
                    text: "E outra, eu ouvi dizer que você reportou que as portas estavam se abrindo sozinhas, não é?"
                },

                {
                    speaker: "Miska",
                    text: "Espero que tenha chamado algum técnico pra concertar isso."
                },

                {
                    speaker: "Miska",
                    text: "Sério, já tô quase quebrando essa merda."
                },

                {
                    speaker: "Michael",
                    text: " Uepa, uepa, aquieta o faixo! A gente tem sim um cara pra dar uma olhada, é o sensor que tá com problema."
                },

                {
                    speaker: "Michael",
                    text: "Pelo que ele disse, a fiação tá solta."
                },

                {
                    speaker: "Miska",
                    text: "Maravilhoso."
                },

                {
                    speaker: "Michael",
                    text: "E se, vai saber, isso for um POOOLTEEEERGEIST?"
                },

                {
                    speaker: "Miska",
                    text: " Ah, pelo amor de Deus, Michael! Eu já vi esse tipo de coisa na TV. E, vamos ser sinceros, tudo é encenação, roteiro e maquiagem!"
                },

                {
                    speaker: "Miska",
                    text: "Em outras palavras, isso não passa de história inventada."
                },

                {
                    speaker: "Michael",
                    text: "Se cê diz, gata."
                },

                {
                    speaker: "Miska",
                    text: "EU JÁ TE FALEI PRA NÃO ME CHAMAR ASSIM, DESGRAÇADO!"
                },
                    
            ],
            2: [
                {
                    speaker: "Gerente (Bilhete)",
                    text: "Uhhhh, eu vi alguns ratos atrás da loja ontem. Eu acho que alguém deveria ter deixado a lata de lixo aberta, que saco."
                },

                {
                    speaker: "Gerente (Bilhete)",
                    text: "A primeira pessoa a ver esta nota terá que se livrar dos roedores o mais rápido possível!!! - Seu Gerente"
                },

            ],
            
        };
        
        let currentDialogueSet = 1;
        let currentDialogue = 0;
        
        function openDialogue(setNumber) {
            const modal = document.getElementById('dialogueModal');
            modal.classList.add('active');
            currentDialogueSet = setNumber;
            currentDialogue = 0;
            updateDialogue();
        }
        
        function closeDialogue() {
            const modal = document.getElementById('dialogueModal');
            modal.classList.remove('active');
        }
        
        function updateDialogue() {
            const dialogues = dialogueSets[currentDialogueSet];
            const textElement = document.getElementById('dialogueText');
            const speakerElement = document.querySelector('.speaker');
            const counter = document.getElementById('dialogueCounter');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            // Debug - verificar se está pegando os dados
            console.log('Diálogo atual:', dialogues[currentDialogue]);
            
            // Atualiza o nome do personagem e o texto
            speakerElement.textContent = dialogues[currentDialogue].speaker;
            textElement.textContent = dialogues[currentDialogue].text;
            textElement.style.display = 'block';
            
            // Muda a cor da borda baseado no personagem
            const messageBox = document.querySelector('.dialogue-message');
            const speaker = dialogues[currentDialogue].speaker;
            
            if (speaker === "Michael") {
                messageBox.style.borderLeftColor = "#039c88ff";
                speakerElement.style.color = "#039c88ff";

                } else if (speaker === "Homem de rua") {
                messageBox.style.borderLeftColor = "#e60000ff";
                speakerElement.style.color = "#e60000ff";

                } else if (speaker === "Miska") {
                messageBox.style.borderLeftColor = "#0004d3ff";
                speakerElement.style.color = "#0004d3ff";

            } else if (speaker === "Entregador") {
                messageBox.style.borderLeftColor = "#9c27b0";
                speakerElement.style.color = "#9c27b0";

                } else if (speaker === "Gerente (Bilhete)") {
                messageBox.style.borderLeftColor = "#f1f1f1ff";
                speakerElement.style.color = "#f1f1f1ff";

            } else {
                messageBox.style.borderLeftColor = "#fdff6bff";
                speakerElement.style.color = "#fdff6bff";
            }
            
            // Atualiza o contador
            counter.textContent = `${currentDialogue + 1} / ${dialogues.length}`;
            
            // Atualiza os botões
            prevBtn.disabled = currentDialogue === 0;
            nextBtn.disabled = currentDialogue === dialogues.length - 1;
            
            // Se for o último, muda o texto do botão
            if (currentDialogue === dialogues.length - 1) {
                nextBtn.textContent = 'Fechar';
                nextBtn.onclick = closeDialogue;
            } else {
                nextBtn.textContent = 'Próximo →';
                nextBtn.onclick = nextDialogue;
            }
        }
        
        function nextDialogue() {
            const dialogues = dialogueSets[currentDialogueSet];
            if (currentDialogue < dialogues.length - 1) {
                currentDialogue++;
                updateDialogue();
            }
        }
        
        function previousDialogue() {
            if (currentDialogue > 0) {
                currentDialogue--;
                updateDialogue();
            }
        }
        
        // Fechar modal ao clicar fora
        document.getElementById('dialogueModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeDialogue();
            }
        });
        
        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeDialogue();
            }
        });
        
        // Timestamp em tempo real
        function updateTimestamp() {
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };
            document.getElementById('timestamp').textContent = 
                now.toLocaleString('pt-BR', options).replace(',', ' -');
        }
        
        updateTimestamp();
        setInterval(updateTimestamp, 60000);
        
        // Efeito de digitação suave ao carregar
        window.addEventListener('load', () => {
            document.querySelectorAll('.story-text').forEach((text, index) => {
                text.style.opacity = '0';
                text.style.animation = 'fadeIn 0.8s ease-out forwards';
                text.style.animationDelay = `${index * 0.2}s`;
            });
        });
        
        // Remover indicador de leitura quando chegar ao fim
        window.addEventListener('scroll', () => {
            const indicator = document.querySelector('.reading-indicator');
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            
            if (scrollPercent > 90) {
                indicator.style.opacity = '0';
            } else {
                indicator.style.opacity = '1';
            }
        });