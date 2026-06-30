// Dados de preview das folhas
const previewData = {
    folha001: {
        title: "Folha 001 - antes da lasanha esfriar",
        image: "img/folha001preview.jpg",
        description: "É uma boa forma de terminar um dia monótono.",
        status: "Disponível",
    },

    folha002: {
        title: "Folha 002 - familiar",
        image: "img/folha002.jpg",
        description: "“Isso me lembra de quando eu era criança.”",
        status: "Disponível",
    },

    folha003: {
        title: "Folha 003 - tédio",
        image: "img/folha003.png",
        description: "Vida é tããããão tediosa, às vezes.",
        status: "Disponível",
    },

    folha004: {
        title: "Folha 004 - real",
        image: "img/folha004.png",
        description: "De novo, de novo, de novo.",
        status: "Disponível",
    },

    folha005: {
        title: "Folha 005 - metrô",
        image: "img/folha005.jpg",
        description: "Miska pega um metrô, ela precisa ir até a festa do pijama da sua amiga depois de um longo dia.",
        status: "Disponível",
    },

    folha006: {
        title: "Folha 006 - uma visita inesperada e NADA memorável",
        image: "img/folha006.jpg",
        description: "Miska e Ash, seu amigo, trocam mensagens simples como qualquer outra pessoa no mundo faria.",
        status: "Disponível",
    },

    folha007: {
        title: "Folha 007 - Criatividade é refúgio.",
        image: "img/folha007.jpg",
        description: "Você está no seu próprio mundo agora. Você pode fazer o que quiser, inclusive esquecer o que tem lá fora.",
        status: "Disponível",
    },

    folha008: {
        title: "Alarme Falso!",
        image: "img/folha008-preview.png",
        description: "Alguém está vindo!",
        status: "Disponível",
    },

    folha009: {
        title: "Folha 009 - Uma nova perturbação",
        image: "img/folha009.gif",
        description: "Miska descobre que tem outro maluco no pedaço.",
        status: "Disponível",
    },

    folha010: {
        title: "Folha 010 - Onde moram os doces podres",
        image: "img/folha010.jpg",
        description: "A mamãe foi fazer compras, o papai me deixou sozinha.",
        status: "Disponível",
    },

    folha011: {
        title: "Folha 011 - parque",
        image: "img/folha011.png",
        description: "Entre tantas sensações, o relaxamento é, sem dúvidas, uma das sensações mais presentes no silêncio da noite.",
        status: "Disponível",
    },

    folha012: {
        title: "Folha 012 - Doce como dor",
        image: "img/folha012.gif",
        description: "Fingir é algo que você sempre fez tão bem.",
        status: "Disponível",
    },

    folha013: {
        title: "Mr. Clown",
        image: "img/folha013-preview.png",
        description: "Ele está de volta.",
        status: "Disponível",
        theme: "mr-clown"
    },

    folha014: {
        title: "Folha 014 - pizzaria",
        image: "img/folha022.jpg",
        description: "Miska retorna à pizzaria que era um sucesso quando criança.",
        status: "Disponível",
    },

    folha015: {
        title: "Folha 015 - Gelo e Néon",
        image: "img/folha023.png",
        description: "Em uma tentativa de fazer Miska não se deteriorar em casa, Kenda a convida para uma balada.",
        status: "Disponível",
    },

    folha016: {
        title: "carne frágil, alma fria",
        image: "img/folha024.jpg",
        description: "Miska acorda em um quarto branco.",
        status: "Disponível",
        theme: "white"
    },

    folha017: {
        title: "Palavras de um Trauma",
        image: "img/folha025.jpg",
        description: "Tem um momento para mim, mortal?",
        status: "Disponível",
        theme: "pink"
    },

    folha018: {
        title: "Dualidades",
        image: "img/yin e yang.jpg",
        description: "Um pequeno vislumbre das duas Filhas do Eterno, almas imortais unidas por um destino comum, equilibrando luz e contraste enquanto aprendem a se completar apesar de suas diferenças.",
        status: "Disponível",
        theme: "yellow"
    },

    folha019: {
        title: "Folha 019 - Festinha",
        image: "img/folha027.jpg",
        description: "Miska precisa fazer uma última entrega antes de fechar o estabelecimento.",
        status: "Disponível",
    },

    folha020: {
        title: "Folha 020 - Um, dois...",
        image: "img/folha028.png",
        description: "Uma pequena reflexão.",
        status: "Disponível",
    },

    folha021: {
        title: "Cartas Que Guardei em Silêncio",
        image: "img/folha029preview.jpg",
        description: "Dê-me sua mão, como você fazia quando era pequena.",
        status: "Disponível",
        theme: "red"
    },

    folha022: {
        title: "Rooooosquinhas!",
        image: "img/folha030preview.png",
        description: "Ashley decide visitar Miska para tentar reconstruir um pouco do que ficou fora dos trilhos depois de tudo.",
        status: "Disponível",
        theme: "dark-purple"
    },

    folha023: {
        title: "Antes de ir embora",
        image: "img/folha031preview.jpg",
        description: "Mazzi recebe mais uma visita de sua tão querida filha. Porém, desta vez, ela veio acompanhada.",
        status: "Disponível",
        theme: "dark-gray"
    },

    folha024: {
        title: "Um Sonho de Criança",
        image: "img/folha032preview.jpg",
        description: "“Eu prometo te levar até lá, um dia.”",
        status: "Disponível",
        theme: "marrom-acinzentado"
    },

    FolhaR1: {
        title: "パートタイム - Meio Período",
        image: "img/folha014.jpg",
        description: "O emprego de meio período de Miska.",
        status: "Disponível",
        theme: "rasgada"
    },
};

// Elementos DOM
const previewBox = document.getElementById('preview-box');
const previewTitle = document.getElementById('preview-title');
const previewImg = document.getElementById('preview-img');
const previewDesc = document.getElementById('preview-desc');
const previewStatus = document.getElementById('preview-status');

// Seleciona todos os cards com preview
const cards = document.querySelectorAll('[data-preview]');

// Adiciona eventos aos cards
cards.forEach(card => {
    // Evento ao passar o mouse
    card.addEventListener('mouseenter', function(e) {
        const previewId = this.getAttribute('data-preview');
        const data = previewData[previewId];

        if (data) {
            // Remove todas as classes de tema
            previewBox.className = '';
            
            // Adiciona a classe active e o tema específico
            previewBox.classList.add('active');
            if (data.theme && data.theme !== 'default') {
                previewBox.classList.add('theme-' + data.theme);
            }
            
            // Atualiza o conteúdo
            previewTitle.textContent = data.title;
            previewImg.src = data.image;
            previewDesc.textContent = data.description;
            previewStatus.textContent = data.status;
        }
    });

    // Evento ao sair com o mouse
    card.addEventListener('mouseleave', function() {
        previewBox.classList.remove('active');
    });

    // Evento ao mover o mouse (para seguir o cursor)
    card.addEventListener('mousemove', function(e) {
        const offset = 20;
        let x = e.clientX + offset;
        let y = e.clientY + offset;

        // Dimensões da caixa e janela
        const boxWidth = previewBox.offsetWidth;
        const boxHeight = previewBox.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Ajusta posição se sair da tela (horizontal)
        if (x + boxWidth > windowWidth) {
            x = e.clientX - boxWidth - offset;
        }

        // Ajusta posição se sair da tela (vertical)
        if (y + boxHeight > windowHeight) {
            y = e.clientY - boxHeight - offset;
        }

        // Aplica a posição
        previewBox.style.left = x + 'px';
        previewBox.style.top = y + 'px';
    });
});