// Dados de preview das folhas
const previewData = {
    folha001: {
        title: "Folha 001 - besteira",
        image: "img/folha001.gif",
        description: "Miska quer lasanha.",
        status: "Disponível",
    },
    folha002: {
        title: "Folha 002 - familiar",
        image: "img/folha002.jpg",
        description: "“Isso me lembra de quando eu era criança.”",
        status: "Disponível",
    },
    folha003: {
        title: "Folha 003 - ???",
        image: "img/folha003.png",
        description: "Você não é bem-vindo aqui.",
        status: "Disponível",
    },
    folha004: {
        title: "Folha 004 - tédio",
        image: "img/folha004.png",
        description: "Vida é tããããão tediosa, às vezes.",
        status: "Disponível",
    },
    folha005: {
        title: "Folha 005 - real",
        image: "img/folha005.png",
        description: "De novo, de novo, de novo.",
        status: "Disponível",
    },
    folha006: {
        title: "Folha 006 - metrô",
        image: "img/folha006.jpg",
        description: "Miska pega um metrô, ela precisa ir até a festa do pijama da sua amiga depois de um longo dia.",
        status: "Disponível",
    },
    folha007: {
        title: "Folha 007 - uma visita inesperada e NADA memorável",
        image: "img/folha007.jpg",
        description: "Miska e Ash, seu amigo, trocam mensagens simples como qualquer outra pessoa no mundo faria.",
        status: "Disponível",
    },
    folha008: {
        title: "Folha 008 - Criatividade é refúgio.",
        image: "img/folha008.jpg",
        description: "Você está no seu próprio mundo agora. Você pode fazer o que quiser, inclusive esquecer o que tem lá fora.",
        status: "Disponível",
    },
    folha009: {
        title: "Alarme Falso!",
        image: "img/folha009.png",
        description: "Alguém está vindo!",
        status: "Disponível",
    },
    folha010: {
        title: "Folha 010 - culpa",
        image: "img/folha010.jpg",
        description: "Existe algo que a razão não consegue abafar. (Continuação da Folha 009)",
        status: "Disponível",
    },
    folha011: {
        title: "Folha 011 - Uma nova perturbação",
        image: "img/folha011.gif",
        description: "Miska descobre que tem outro maluco no pedaço.",
        status: "Disponível",
    },
    folha012: {
        title: "Folha 012 - Onde moram os doces podres",
        image: "img/folha012.jpg",
        description: "A mamãe foi fazer compras, o papai me deixou sozinha.",
        status: "Disponível",
    },
    folha013: {
        title: "Folha 013 - parque",
        image: "img/folha013.png",
        description: "Entre tantas sensações, o relaxamento é, sem dúvidas, uma das sensações mais presentes no silêncio da noite.",
        status: "Disponível",
    },
    folha014: {
        title: "Folha 014 - パートタイム - Meio Período",
        image: "img/folha014.jpg",
        description: "O emprego de meio período de Miska.",
        status: "Disponível",
    },
    folha015: {
        title: "Folha 015 - Invasão??",
        image: "img/static.gif",
        description: "Fechado por tempo indeterminado.",
        status: "Indisponível",
    },
    folha016: {
        title: "Folha 016 - Doce como dor",
        image: "img/folha016.gif",
        description: "Fingir é algo que você sempre fez tão bem.",
        status: "Disponível",
    },
    folha017: {
        title: "Você ou nada.",
        image: "img/folha017.gif",
        description: "O quão longe você acha que iriam por você?",
        status: "Disponível",
        theme: "gray"
    },
    folha018: {
        title: "Folha 018 - Desça.",
        image: "img/folha018.gif",
        description: "Desça as escadas.",
        status: "Disponível",
    },
    folha019: {
        title: "Folha 019 - Mr. Clown",
        image: "img/folha019.png",
        description: "Tudo vai, tudo volta.",
        status: "Disponível",
    },
    folha020: {
        title: "Folha 020 - happyhappy",
        image: "img/folha020.jpg",
        description: "Uma deliciosa explosão de sorrisos!",
        status: "Disponível - (AVISO DE EPILEPSIA)",
    },
    folha021: {
        title: "Folha 021 - 夢の宮殿",
        image: "img/folha021.gif",
        description: "Quer um lugar mágico, Miska?",
        status: "Disponível",
    },
    folha022: {
        title: "Folha 022 - pizzaria",
        image: "img/folha022.jpg",
        description: "Miska retorna à pizzaria que era um sucesso quando criança.",
        status: "Disponível",
    },
    folha023: {
        title: "Folha 023 - Gelo e Néon",
        image: "img/folha023.png",
        description: "Em uma tentativa de fazer Miska não se deteriorar em casa, Kenda a convida para uma balada.",
        status: "Disponível",
    },
    folha024: {
        title: "carne frágil, alma fria",
        image: "img/folha024.jpg",
        description: "Miska acorda em um quarto branco.",
        status: "Disponível",
        theme: "white"
    },
    folha025: {
        title: "Palavras de um Trauma",
        image: "img/folha025.jpg",
        description: "Tem um momento para mim, mortal?",
        status: "Disponível",
        theme: "pink"
    },
    folha026: {
        title: "Dualidades",
        image: "img/yin e yang.jpg",
        description: "Um pequeno vislumbre das duas Filhas do Eterno, almas imortais unidas por um destino comum, equilibrando luz e contraste enquanto aprendem a se completar apesar de suas diferenças.",
        status: "Disponível",
        theme: "yellow"
    },
    folha027: {
        title: "Folha 027 - Festinha",
        image: "img/folha027.jpg",
        description: "Miska precisa fazer uma última entrega antes de fechar o estabelecimento.",
        status: "Disponível",
    },
    folha028: {
        title: "Folha 028 - Um, dois...",
        image: "img/folha028.png",
        description: "Uma pequena reflexão.",
        status: "Disponível",
    },
    folha029: {
        title: "Cartas Que Guardei em Silêncio",
        image: "img/folha029.jpg",
        description: "Dê-me sua mão, como você fazia quando era pequena.",
        status: "Disponível",
        theme: "red"
    },
    folha030: {
        title: "Rooooosquinhas!",
        image: "img/folha030preview.png",
        description: "Ashley decide visitar Miska para tentar reconstruir um pouco do que ficou fora dos trilhos depois de tudo.",
        status: "Disponível",
        theme: "dark-purple"
    },
    folha031: {
        title: "Antes de ir embora",
        image: "img/folha031preview.jpg",
        description: "Mazzi recebe mais uma visita de sua tão querida filha. Porém, desta vez, ela veio acompanhada.",
        status: "Disponível",
        theme: "dark-gray"
    },
    folha032: {
        title: "Um Sonho de Criança",
        image: "img/folha032preview.jpg",
        description: "“Eu prometo te levar até lá, um dia.”",
        status: "Disponível",
        theme: "marrom-acinzentado"
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