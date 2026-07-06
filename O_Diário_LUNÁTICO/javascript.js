/* ================================================================
   CONFIGURAÇÃO DE ÍCONES DOS PROGRAMAS
   ─────────────────────────────────────
   Para cada programa você pode definir:
     icone : URL de uma imagem (PNG, JPG, GIF, WebP, SVG)
             Deixe "" para usar o ícone padrão do programa.
 
   Exemplos:
     icone: "https://meusite.com/icone.png"
     icone: ""   ← usa o ícone padrão
================================================================ */
const appsConfig = {
  'dl-win': { nome: "O Diário Lunático", icone: "ícones/DiárioLunátco.png" },
  'wp-win': { nome: "Papel de Parede",   icone: "ícones/PapelDeParede.png" },
  'wa-win': { nome: "MP3",               icone: "ícones/MP3.png" },
  'sol-win':{ nome: "Paciência",         icone: "ícones/Paciência.webp" }
};
 
// URL para onde o botão "Desligar" irá redirecionar
// Exemplo: "https://meusite.com" ou "https://google.com"
const linkDesligar = "https://thisismydiary.netlify.app/";
 
// Som de clique personalizado
// Cole a URL de um arquivo de áudio (MP3, OGG, WAV)
// Deixe "" para usar o som padrão gerado automaticamente
const somClick = "audio/mouse-click.mp3";
/* ================================================================
   FIM DA CONFIGURAÇÃO DE ÍCONES
================================================================ */
 
/* SVGs padrão por programa (fallback quando icone == "") */
const defaultSVGs = {
  'dl-win': `<svg class="icon-img" viewBox="0 0 32 32">
    <rect x="3" y="1" width="22" height="28" rx="2" fill="#2d0050" stroke="#cc44cc" stroke-width="1.5"/>
    <rect x="3" y="1" width="5" height="28" rx="2" fill="#4a0080" stroke="#cc44cc" stroke-width="1"/>
    <line x1="10" y1="8" x2="22" y2="8" stroke="#ff69b4" stroke-width="1"/>
    <line x1="10" y1="12" x2="22" y2="12" stroke="#ff69b4" stroke-width="1"/>
    <line x1="10" y1="16" x2="22" y2="16" stroke="#ff69b4" stroke-width="1"/>
    <line x1="10" y1="20" x2="18" y2="20" stroke="#ff69b4" stroke-width="1"/>
    <circle cx="23" cy="6" r="4" fill="#ffd700" stroke="#cc8800" stroke-width="1"/>
    <text x="21" y="9" font-size="6" fill="#000" font-weight="bold">!</text>
  </svg>`,
  'wp-win': `<svg class="icon-img" viewBox="0 0 32 32">
    <rect x="1" y="3" width="26" height="20" rx="1" fill="#c0c0c0" stroke="#808080" stroke-width="1"/>
    <rect x="3" y="5" width="22" height="16" fill="#008080"/>
    <polygon points="3,21 12,11 18,16 22,12 25,21" fill="#00aa00"/>
    <circle cx="8" cy="10" r="3" fill="#ffd700"/>
    <circle cx="8" cy="10" r="1.5" fill="#ffaa00"/>
    <rect x="7" y="23" width="14" height="3" fill="#c0c0c0"/>
    <rect x="4" y="26" width="20" height="2" fill="#808080"/>
  </svg>`,
  'wa-win': `<svg class="icon-img" viewBox="0 0 32 32">
    <rect x="1" y="1" width="30" height="30" rx="15" fill="#0a0a18" stroke="#2244aa" stroke-width="1.5"/>
    <path d="M16 4 A12 12 0 0 1 28 16" stroke="#cc2222" stroke-width="5" fill="none"/>
    <path d="M28 16 A12 12 0 0 1 16 28" stroke="#22aa22" stroke-width="5" fill="none"/>
    <path d="M16 28 A12 12 0 0 1 4 16" stroke="#ffaa00" stroke-width="5" fill="none"/>
    <path d="M4 16 A12 12 0 0 1 16 4"  stroke="#2255cc" stroke-width="5" fill="none"/>
    <circle cx="16" cy="16" r="7" fill="#0e1a50" stroke="#4488ff" stroke-width="1"/>
    <polygon points="13,12 22,16 13,20" fill="#55ccff"/>
  </svg>`,
  'sol-win': `<svg class="icon-img" viewBox="0 0 32 32">
    <rect x="1" y="3" width="13" height="18" rx="2" fill="#cc0000" stroke="#880000" stroke-width="1"/>
    <text x="7" y="15" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold" font-family="Arial">♥</text>
    <rect x="18" y="3" width="13" height="18" rx="2" fill="#fff" stroke="#aaa" stroke-width="1"/>
    <text x="24" y="15" text-anchor="middle" font-size="11" fill="#000" font-weight="bold" font-family="Arial">♠</text>
    <rect x="1" y="11" width="13" height="18" rx="2" fill="#fff" stroke="#aaa" stroke-width="1"/>
    <text x="7" y="23" text-anchor="middle" font-size="11" fill="#cc0000" font-weight="bold" font-family="Arial">♦</text>
    <rect x="18" y="11" width="13" height="18" rx="2" fill="#007700" stroke="#005500" stroke-width="1"/>
    <text x="24" y="23" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold" font-family="Arial">♣</text>
  </svg>`
};
 
/* SVGs padrão PEQUENOS para a titlebar */
const defaultTitlebarSVGs = {
  'dl-win': `<svg width="14" height="14" viewBox="0 0 16 16">
    <rect x="1" y="0" width="11" height="14" rx="1" fill="#2d0050" stroke="#cc44cc" stroke-width="1"/>
    <rect x="1" y="0" width="3" height="14" rx="1" fill="#4a0080"/>
    <line x1="6" y1="4" x2="11" y2="4" stroke="#ff69b4" stroke-width="1"/>
    <line x1="6" y1="6" x2="11" y2="6" stroke="#ff69b4" stroke-width="1"/>
    <line x1="6" y1="8" x2="11" y2="8" stroke="#ff69b4" stroke-width="1"/>
  </svg>`,
  'wp-win': `<svg width="14" height="14" viewBox="0 0 16 16">
    <rect width="16" height="16" fill="#008080"/>
    <rect x="2" y="2" width="12" height="10" fill="#000080"/>
    <circle cx="5" cy="7" r="2" fill="#ffd700"/>
    <polygon points="8,4 14,10 2,10" fill="#00aa00"/>
  </svg>`,
  'wa-win': `<svg width="14" height="14" viewBox="0 0 16 16">
    <rect width="16" height="16" rx="8" fill="#0a0a18"/>
    <path d="M8 2 A6 6 0 0 1 14 8" stroke="#cc2222" stroke-width="3" fill="none"/>
    <path d="M14 8 A6 6 0 0 1 8 14" stroke="#22aa22" stroke-width="3" fill="none"/>
    <path d="M8 14 A6 6 0 0 1 2 8"  stroke="#ffaa00" stroke-width="3" fill="none"/>
    <path d="M2 8 A6 6 0 0 1 8 2"   stroke="#2255cc" stroke-width="3" fill="none"/>
    <circle cx="8" cy="8" r="3.5" fill="#0e1a50"/>
    <polygon points="6.5,6 11,8 6.5,10" fill="#55ccff"/>
  </svg>`,
  'sol-win': `<svg width="14" height="14" viewBox="0 0 16 16">
    <rect x="0" y="1" width="7" height="10" rx="1" fill="#cc0000"/>
    <text x="3.5" y="9" text-anchor="middle" font-size="7" fill="#fff" font-family="Arial">♥</text>
    <rect x="8" y="5" width="7" height="10" rx="1" fill="#fff" stroke="#aaa" stroke-width="0.5"/>
    <text x="11.5" y="13" text-anchor="middle" font-size="7" fill="#000" font-family="Arial">♠</text>
  </svg>`
};
 
/* Gera o HTML do ícone (img ou svg padrão) */
function iconHTML(winId, size) {
  const cfg = appsConfig[winId];
  if (cfg && cfg.icone && cfg.icone.trim()) {
    const s = size || 32;
    return `<img src="${cfg.icone.trim()}" width="${s}" height="${s}" style="object-fit:contain;image-rendering:auto;" onerror="this.outerHTML=defaultSVGs['${winId}']">`;
  }
  return defaultSVGs[winId] || '';
}
 
/* Gera o HTML do ícone PEQUENO para a titlebar */
function titlebarIconHTML(winId) {
  const cfg = appsConfig[winId];
  if (cfg && cfg.icone && cfg.icone.trim()) {
    return `<img src="${cfg.icone.trim()}" width="14" height="14" style="object-fit:contain;image-rendering:auto;" onerror="this.outerHTML=defaultTitlebarSVGs['${winId}']">`;
  }
  return defaultTitlebarSVGs[winId] || '';
}
 
/* Injeta ícones nas titlebars */
function buildTitlebarIcons() {
  Object.keys(appsConfig).forEach(winId => {
    const el = document.getElementById(winId + '-tbicon');
    if (el) el.innerHTML = titlebarIconHTML(winId);
  });
}
 
/* Renderiza ícones da área de trabalho */
function buildDesktopIcons() {
  const desktop = document.getElementById('desktop');
  const order   = ['dl-win','wp-win','wa-win','sol-win'];
  order.forEach((winId, idx) => {
    const cfg = appsConfig[winId];
    if (!cfg) return;
    const iconId = 'icon-' + winId.replace('-win','');
    const top    = 16 + idx * 100;
    const div    = document.createElement('div');
    div.className = 'desktop-icon';
    div.id        = iconId;
    div.style.top  = top + 'px';
    div.style.left = '12px';
    div.setAttribute('ondblclick',   `openWin('${winId}')`);
    div.setAttribute('onclick',      `selectIcon('${iconId}')`);
    div.setAttribute('ontouchend',   `handleIconTap(event,'${winId}','${iconId}')`);
    div.innerHTML = iconHTML(winId, 32) + `<div class="icon-label">${cfg.nome}</div>`;
    desktop.appendChild(div);
  });
}
 
/* Renderiza itens do menu Iniciar */
function buildStartMenu() {
  const ul   = document.getElementById('sm-app-list');
  const order = ['dl-win','wp-win','wa-win','sol-win'];
 
  order.forEach(winId => {
    const cfg = appsConfig[winId];
    if (!cfg) return;
    const li = document.createElement('li');
    li.onclick = () => { openWin(winId); toggleStartMenu(); };
    // ícone menor para o menu
    const iconEl = document.createElement('span');
    iconEl.className = 'sm-icon';
    iconEl.style.display = 'inline-flex';
    iconEl.style.alignItems = 'center';
    if (cfg.icone && cfg.icone.trim()) {
      iconEl.innerHTML = `<img src="${cfg.icone.trim()}" width="20" height="20" style="object-fit:contain;">`;
    } else {
      // SVG pequeno inline
      const tmp = document.createElement('div');
      tmp.innerHTML = defaultSVGs[winId];
      const svg = tmp.querySelector('svg');
      if (svg) { svg.setAttribute('width','20'); svg.setAttribute('height','20'); svg.removeAttribute('class'); iconEl.appendChild(svg); }
    }
    li.appendChild(iconEl);
    li.appendChild(document.createTextNode(' ' + cfg.nome));
    ul.appendChild(li);
  });
 
  // separador + Desligar
  const sep = document.createElement('div');
  sep.className = 'sm-separator';
  ul.appendChild(sep);
 
  const liOff = document.createElement('li');
  liOff.onclick = () => { desligar(); toggleStartMenu(); };
  liOff.innerHTML = `<svg class="sm-icon" width="20" height="20" viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="12" fill="#c0c0c0" stroke="#808080" stroke-width="2"/>
    <rect x="14" y="6" width="4" height="12" fill="#ff4444"/>
    <path d="M10 10 A8 8 0 1 0 22 10" fill="none" stroke="#ff4444" stroke-width="3"/>
  </svg> Desligar...`;
  ul.appendChild(liOff);
}
 
/* ================================================================
   CONFIGURAÇÃO DO DIÁRIO LUNÁTICO
   Edite aqui para personalizar o programa!
================================================================ */
const dlConfig = {
 
  aviso: "Para evitar transtornos, ative a opção \"Modo Computador/Desktop\", dependendo do seu dispositivo móvel.",
 
  // URL direta do arquivo MP3
  musicaUrl: "mp3/músicatrololol.MP3",
 
  // Imagem exibida antes do texto de apresentação
  // Exemplo: "https://meusite.com/banner.png"
  // Deixe "" para não exibir nenhuma imagem
  imagemTopo: "img/ODiárioLunático.png",

  // Imagem de fundo da interface (aparece entre a animação de cores)
  // Controle a opacidade com imagemFundoOpacidade (0.0 a 1.0)
  // Exemplo: "https://meusite.com/fundo.png"
  imagemFundo: "img/diário-lunático-fundo.png",
  imagemFundoOpacidade: 0.2,

  // Fonte dos textos do Diário Lunático
  // Exemplos:
  //   "Comic Sans MS"          ← fonte do sistema
  //   "Georgia"                ← padrão atual
  //   "https://fonts.googleapis.com/css2?family=Pacifico&display=swap" + "Pacifico"
  // Para usar Google Fonts: coloque a URL em fonteDiarioUrl e o nome em fonteDiario
  fonteDiario: "Comic Sans MS",
  fonteDiarioUrl: "", // URL do @import (Google Fonts, etc.) — deixe "" se for fonte do sistema

  textoDiario: [
    "Ah, oi.",
    "Eu me chamo Miska, tenho 17 anos e blá, blá, blá, acho que você já sabe de todo o resto.",
    "Gostaria de te parabenizar por ser tão louco e tão sem vergonha na cara pra dar um jeito de conseguir invadir minha casa, ligar o meu computador e fuçar nas minhas coisas a ponto de encontrar esse meu diário.",
    "Eu poderia te xingar de várias formas. Poderia até chamar a polícia por invasão de privacidade e propriedade. Mas, existem alguns motivos pra eu não fazer isso.",
    "O primeiro é que eu formatei o meu PC depois que a Jellie me mandou um vírus jurando que seria croissant grátis. Então, no fim das contas, tudo que sobrou pra nós dois foi esse meu diário, meu MP3 com umas músicas que eu baixei, Paciência e um programinha de papel de parede que você pode trocar como quiser.",
    "O segundo é que eu sou só uma personagem fictícia, em um mundo fictício. Então, eu poderia ligar pra todas as delegacias possíveis e, ainda assim, não teria como te encontrar. Parabéns por ser real.",
    " O terceiro é que eu não dou a mínima.",
    "Por quê? Porque nada disso é canônico.",
    "Pois é, né? Tudo o que você vê e tudo o que você verá daqui em diante não passa de histórias completamente malucas, sem sentido e totalmente desconectadas da minha outra parte original, que tá sempre fodida e mal paga. (Não que aqui seja muito diferente.)",
    "Resumo da ópera: fica à vontade pra ficar na minha cadeira e vasculhar essa coleção de absurdos que eu chamo de vida nesse mundo.",
    "Ah, e quando terminar, desliga o meu computador.",
  ],

  /*
    FOLHAS — adicione, edite ou remova à vontade!
    numero : "001", "002", ...
    titulo : nome da história
    link   : URL de destino
    thumb  : URL da imagem de capa (deixe "" para ícone padrão)
  */
  folhas: [
    { numero:"001", 
    titulo:"Nunca viu um desenho, burrão?",                      
    link:"Nunca_viu_um_desenho_burrão/Laetitia_trollagens.html", 
    thumb:"img/folhalunatica001.png", 
    sinopse:"Laetitia fazendo brincadeiras e risadas" },

    { numero:"002", 
    titulo:"TROLLAMOS A MISKA E VEJA NO QUE DEU!!!",             
    link:"", 
    thumb:"img/folhalunatica002.jpg", 
    sinopse:"Eles decidem pregar uma peça na Miska." },

    { numero:"003", 
    titulo:"Eu te amo, eu te odeio (e depois te explodo)",        
    link:"Eu-te-amo-eu-te-odeio-e-depois-te-explodo/Eu-te-amo-eu-te-odeio-e-depois-te-explodo.html", 
    thumb:"img/folhalunatica003.jpg", 
    sinopse:"Laetitia apenas quer um afeto de Thrauma, sua irmã mais velha. Será que ela irá conseguir? (A respota é não) " },
    
    { numero:"004", 
    titulo:"Duas garotas, uma bandeira",                          
    link:"Duas-garotas-uma-bandeira/two-girls-one-flag.html", 
    thumb:"img/folhalunatica004.jpg", 
    sinopse:"Tu é lésbica, cara?" },
    
    { numero:"005", 
    titulo:"O Diário de Miska mas é escrito pela Vivziepop",      
    link:"O_Diário_de_Miska_mas_foi_escrito_pela_Vivziepop/O_FODENDO_DIÁRIO_DE_MISKA.html", 
    thumb:"img/folhalunatica005.png", 
    sinopse:"Eu odeio o caralho de porra de merda da puta que pariu da minha vida" },
    
    { numero:"006", 
    titulo:"Era pra desestressar",                                
    link:"Era_pra_desestressar/Era_pra_desestressar.html", 
    thumb:"img/folhalunatica006.png", 
    sinopse:"Eu não esperava jogar Roblox dessa forma." },

    { numero:"007", 
    titulo:"O Demônio",                                
    link:"o_mal_de_pano/o_mal_de_pano.html", 
    thumb:"img/folhalunatica007.png", 
    sinopse:"Laetitia termina sua maior criação!" },

    { numero:"008", 
    titulo:"As várias faces de mim",                                
    link:"As_várias_faces_de_mim/folhalunática008.html", 
    thumb:"img/folhalunatica008.jpg", 
    sinopse:"Nesse VASTO E ENTEDIANTE multiverso, existe uma quantidade infinita de realidades e universos, não apenas em número ou extensão, mas também em escala, profundidade e tamanho.\n\nTodos esses universos se expandem para além de qualquer noção de distância que você tente conceber, atravessando distâncias tão inescrutáveis e fodidas que noções como “fim”, “borda” ou “vazio” deixam de fazer sentido pras nossas mentes frágeis. Existem universos tão vastos que outros universos inteiros pareceriam microscópicos quando comparados a eles; estruturas cósmicas tão descomunais que galáxias deixam de ser impérios estelares e passam a existir como poeira flutuando em algo muito maior.\n\nTá afim de ter uma ideia melhor de como é isso? Cada universo abriga incontáveis camadas de existência coexistindo simultaneamente. Existem infinitas dimensões espaciais e temporais sustentando cada realidade, eixos, direções e estruturas que atravessam tudo o que existe. Sobre elas se empilham planos paralelos, sub-realidades, linhas temporais divergentes e mundos que se dobram uns dentro dos outros numa cadeia chata e interminável. Dentro dessa caralhada de estruturas também existem galáxias sem fim, sistemas estelares incontáveis, universos menores encapsulados em universos maiores e, às vezes, até estruturas inteiras escondidas dentro de partículas subatômicas. (Eu nem sabia que isso era possível)\n\nBlá, blá e blá, uma sequência interminável de estruturas contidas dentro de estruturas ainda maiores, como se tudo o que existe fosse construído em espirais infinitas que nunca chegam a porra nenhuma.\n\nInfinito pra lá, infinito pra cá.\n\nMeu Deus, eu repeti esse mesmo termo tantas vezes que eu acho que um professor de escrita se mataria na minha frente. Mas fazer o que, né? Não tem outra forma de descrever. É literalmente isso.\n\nAcho bom que você tenha entendido. Se não entendeu, eu não vou explicar de novo.\n\nEnfim... nesse oceano interminável de possibilidades, cada realidade se sustenta através de suas próprias leis, lógicas e narrativas.\n\nAlgumas seguem princípios relativamente familiares, espelhando aquilo que entendemos como física, lógica e ciência. Outras, porém, são completamente alienígenas. Em outras palavras: esquisitas pra caralho. Mundos onde o tempo flui em incontáveis direções ao mesmo tempo; universos onde a existência se fragmenta em versões contraditórias de si mesma; realidades onde identidade, matéria e consciência deixam de ser ideias fixas.\n\nOnde eu quero chegar? Vou resumir pra você: Existem VÁRIAS Miskas espalhadas por aí.\n\nDiferentes vidas. Diferentes escolhas. Diferentes tragédias, vitórias, fracassos e versões de quem ela poderia ter sido. Algumas são quase idênticas à que conhecemos. Outras são tão bizarras que mal poderiam ser reconhecidas como a mesma pessoa.\n\nE, por culpa de um certo alguém, a nossa velha e conhecida Miska descobrirá isso ao vivo e a cores.. entrevistando elas!\n\nO que poderia dar errado, né?\n\n... Né?" 
  },

    { numero:"009", 
    titulo:"O Rato Terrível",                                
    link:"O_Rato_Terrível/folhalunatica009.html", 
    thumb:"img/folhalunatica009.jpg", 
    sinopse:"Jellie documenta o dia em que se deparou com o verdadeiro terror." },

    { numero:"010", 
    titulo:"É tiro, porrada e doces!",                                
    link:"é-tiro-porrada-e-doces/folhalunatica010.html", 
    thumb:"img/folhalunatica010.png", 
    sinopse:"Em um universo distinto, Miska, após matar dois policiais, se depara com uma garotinha de pano inofensiva... ou quase." },

    { numero:"011", 
    titulo:"Tentando ser uma pessoa melhor",                                
    link:"Tentando-ser-uma-pessoa-melhor/folhalunática011.html", 
    thumb:"img/folhalunatica011.png", 
    sinopse:"“Calma, caro amigo. Só porque eu esmaguei crânios com socos, parti corpos ao meio, esquartejei, comi a carne e bebi o sangue, não significa que eu não possa ser melhor que isso.”\n\nVocê poderia não me interromper? Eu ainda tenho que dar um resumo da sua história, beleza? Muito obrigada!\n\nAhem!\n\nApós ser enviada de volta ao seu universo por Laetitia e, consequentemente, ser presa por causa de inúmeros assassinos hediondos, essa Miska conseguiu escapar da prisão, de alguma forma. Ainda assim, ela não quer mais saber de matar. Tudo o que deseja agora é se tornar uma pessoa melhor. Pelo menos, é o que ela diz.\n\nVocê daria uma chance pra ela? Porque eu não.\n\n“Qual é? Foram só 356 pessoas durante anos, que diferença faz? Ainda temos 8 bilhões de pessoas.”\n\nPor favor, cale a boca." },

    { numero:"012", 
    titulo:"Infecção",                                
    link:"Infecção/folhalunática012.html", 
    thumb:"img/folhalunatica012.png", 
    sinopse:"Uma infecção horrível se espalha pela cidade, agora todos estão fodidos. Restou a Laetitia e Thrauma descobrirem o problema." },

    { numero:"013", 
    titulo:"A Mulher de Aço",                                
    link:"a-mulher-de-aço/folhalunática013.html", 
    thumb:"img/folhalunatica013.png", 
    sinopse:"“É um pássaro? Um avião? Não, é a Mulher de Aço! Não importa o perigo, não importa a ameaça, ela não sangra perante nada!”\n\nDepois de ter sua novela interrompida por mais uma entre centenas de ameaças dispostas a espalhar o caos pela Terra, coube novamente à Inabalável resolver a situação e salvar a bunda do planeta Terra, como ela sempre faz.\n\nQuer saber como essa história se desenrola? Eu não. Mas, se você quiser descobrir, basta mergulhar de cabeça nesta aventura explosiva da mulher mais poderosa de todo o multiverso!\n\n" },
  ]
 
};
/* ================================================================
   FIM DA CONFIGURAÇÃO
================================================================ */
 
/* ---- Utilidades ---- */
function rainbowLunatica() {
  const w = "LUNÁTICA";
  const c = ['#ff4444','#ff8800','#ffdd00','#44cc44','#4488ff','#aa44ff','#ff44cc','#ff6699'];
  return '<span class="lunatica-rainbow">' + w.split('').map((ch,i)=>`<span style="color:${c[i%c.length]}">${ch}</span>`).join('') + '</span>';
}
 
function dlSyncBg() { /* fundo agora aplicado diretamente no #dl-body, sem necessidade de sync */ }
 
// Mantém o overlay sempre alinhado à janela
(function dlOverlayLoop() {
  dlSyncOverlay();
  requestAnimationFrame(dlOverlayLoop);
})();
function buildImagemFundo() {
  const body = document.getElementById('dl-body');
  if (!body) return;
  if (dlConfig.imagemFundo && dlConfig.imagemFundo.trim()) {
    const opacity = dlConfig.imagemFundoOpacidade ?? 0.2;
    // Aplica a imagem como layer do background do dl-body via CSS variable
    body.style.setProperty('--dl-bg-img', `url(${dlConfig.imagemFundo.trim()})`);
    // Recria os background-image com opacidade via pseudo-element trick:
    // usamos um ::before no dl-content para a imagem com opacidade
    let styleEl = document.getElementById('dl-bg-img-style');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'dl-bg-img-style';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `
      #dl-body::before {
        content: '';
        position: sticky;
        top: 0; left: 0;
        display: block;
        width: 100%;
        height: 0;
        z-index: 0;
      }
      #dl-body {
        background-image:
          radial-gradient(ellipse at 50% 0%, rgba(80,0,120,0.5) 0%, transparent 65%),
          linear-gradient(rgba(13,2,32,${1 - opacity}), rgba(13,2,32,${1 - opacity})),
          url(${dlConfig.imagemFundo.trim()}),
          linear-gradient(160deg, #3a0a5a, #1a0535, #0d0220, #2a0040, #1a0535) !important;
        background-size: 100% 100%, 100% 100%, cover, 300% 300% !important;
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat !important;
        background-position: 0% 0%, 0% 0%, center, 0% 0% !important;
        background-attachment: local, local, local, local !important;
      }
    `;
  } else {
    // Remove imagem de fundo personalizada
    const styleEl = document.getElementById('dl-bg-img-style');
    if (styleEl) styleEl.remove();
  }
}
function buildFonteDiario() {
  // Carrega fonte externa (Google Fonts etc.) se informada
  if (dlConfig.fonteDiarioUrl && dlConfig.fonteDiarioUrl.trim()) {
    let link = document.getElementById('dl-font-link');
    if (!link) {
      link = document.createElement('link');
      link.id  = 'dl-font-link';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = dlConfig.fonteDiarioUrl.trim();
  }
  // Aplica a fonte em todos os elementos do Diário
  if (dlConfig.fonteDiario && dlConfig.fonteDiario.trim()) {
    let style = document.getElementById('dl-font-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'dl-font-style';
      document.head.appendChild(style);
    }
    const f = dlConfig.fonteDiario.trim();
    style.textContent = `
      #dl-body, #dl-body *,
      #dl-ls-overlay, #dl-ls-overlay * {
        font-family: "${f}", Georgia, serif !important;
      }
    `;
  }
}
function buildMusica() {
  const p = document.getElementById('dl-audio-player');
  if (dlConfig.musicaUrl) p.src = dlConfig.musicaUrl;
}
function buildAviso() {
  document.getElementById('dl-aviso-text').textContent = dlConfig.aviso;
}
function buildDiaryText() {
  document.getElementById('dl-diary-text-container').innerHTML = dlConfig.textoDiario.map(p=>`<p>${p}</p>`).join('');
}
function buildImagemTopo() {
  const wrap = document.getElementById('dl-topo-img-wrap');
  const img  = document.getElementById('dl-topo-img');
  if (dlConfig.imagemTopo && dlConfig.imagemTopo.trim()) {
    img.src = dlConfig.imagemTopo.trim();
    wrap.style.display = 'block';
    img.onerror = () => { wrap.style.display = 'none'; };
  } else {
    wrap.style.display = 'none';
  }
}
/* ---- Level Select do Diário ---- */
let dlLsSelected = -1;
 
function buildFolhas() {
  const list = document.getElementById('dl-ls-list');
  if (!list) return;
  list.innerHTML = '';
  dlConfig.folhas.forEach((f, i) => {
    const item = document.createElement('div');
    item.className = 'dl-ls-item';
    item.innerHTML = `<span class="dl-ls-num">${f.numero}</span><span class="dl-ls-name">${f.titulo}</span>`;
    item.addEventListener('click', () => dlSelectFolha(i));
    list.appendChild(item);
  });
  // Seleciona a primeira por padrão
  if (dlConfig.folhas.length > 0) dlSelectFolha(0);
}
 
function dlSelectFolha(idx) {
  dlLsSelected = idx;
  const f = dlConfig.folhas[idx];
  // Atualiza itens da lista
  document.querySelectorAll('.dl-ls-item').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
    if (i === idx) el.scrollIntoView({ block: 'nearest' });
  });
  // Preview
  const prev = document.getElementById('dl-ls-preview-img');
  if (f.thumb) {
    prev.style.backgroundImage = `url(${f.thumb})`;
    prev.textContent = '';
    prev.classList.add('has-img');
  } else {
    prev.style.backgroundImage = '';
    prev.textContent = '📓';
    prev.classList.remove('has-img');
  }
  // Info
  document.getElementById('dl-ls-numero').textContent = `Folha ${f.numero}`;
  document.getElementById('dl-ls-titulo').textContent = f.titulo;
  // Sinopse — suporta \n para separar parágrafos
  const sinopseEl = document.getElementById('dl-ls-sinopse');
  if (f.sinopse && f.sinopse.trim()) {
    sinopseEl.innerHTML = f.sinopse
      .split('\n')
      .map(p => p.trim())
      .filter(p => p.length > 0)
      .map(p => `<p style="margin-bottom:8px">${p}</p>`)
      .join('');
    sinopseEl.style.display = 'block';
  } else {
    sinopseEl.innerHTML = '';
    sinopseEl.style.display = 'none';
  }
  // Botão
  const btn = document.getElementById('dl-ls-btn');
  btn.href = f.link || '#';
  btn.classList.add('show');
  btn.style.display = 'inline-block';
}
 
function dlSyncOverlay() {
  const win     = document.getElementById('dl-win');
  const overlay = document.getElementById('dl-ls-overlay');
  if (!win || !overlay || !overlay.classList.contains('open')) return;
  const r  = win.getBoundingClientRect();
  const tb = win.querySelector('.win-titlebar');
  const sb = win.querySelector('.win-statusbar');
  const tbH = tb ? tb.offsetHeight : 22;
  const sbH = sb ? sb.offsetHeight : 24;
  overlay.style.left   = r.left   + 'px';
  overlay.style.top    = (r.top + tbH) + 'px';
  overlay.style.width  = r.width  + 'px';
  overlay.style.height = (r.height - tbH - sbH) + 'px';
  overlay.style.zIndex = (parseInt(win.style.zIndex || 100) + 1) + '';
}
 
function dlOpenLevelSelect() {
  const overlay = document.getElementById('dl-ls-overlay');
  overlay.classList.add('open');
  dlSyncOverlay();
  document.addEventListener('keydown', dlLsKeydown);
}
 
function dlCloseLevelSelect() {
  const overlay = document.getElementById('dl-ls-overlay');
  overlay.classList.remove('open');
  document.removeEventListener('keydown', dlLsKeydown);
}
 
function dlLsKeydown(e) {
  if (e.key === 'Escape') { dlCloseLevelSelect(); return; }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    dlSelectFolha(Math.min(dlLsSelected + 1, dlConfig.folhas.length - 1));
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    dlSelectFolha(Math.max(dlLsSelected - 1, 0));
  }
  if (e.key === 'Enter' && dlLsSelected >= 0) {
    const f = dlConfig.folhas[dlLsSelected];
    if (f.link) window.open(f.link, '_blank');
  }
}
 
function toggleCollapsible(id) {
  const header = document.querySelector(`#dl-${id}-panel .dl-collapsible-header`);
  const body   = document.getElementById(`dl-${id}-body`);
  const isOpen = body.classList.contains('open');
  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}
 
/* ---- Relógio ---- */
function updateClock() {
  const n = new Date();
  document.getElementById('clock').textContent = String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');
}
updateClock(); setInterval(updateClock, 10000);
 
/* ---- Dimensões responsivas ---- */
function winSize(id) {
  const vw = window.innerWidth, vh = window.innerHeight - 30; // descontar taskbar
  const isMobile = vw < 600;
  if (id === 'dl-win') {
    const w = isMobile ? vw - 4  : Math.min(820, vw - 20);
    const h = isMobile ? vh - 4  : Math.min(580, vh - 20);
    return { w, h, l: isMobile ? 2 : Math.max(2, Math.round((vw - w) / 2)), t: isMobile ? 2 : 20 };
  }
  if (id === 'wp-win') {
    const w = isMobile ? vw - 4  : Math.min(360, vw - 20);
    const h = isMobile ? vh - 4  : Math.min(520, vh - 20);
    return { w, h, l: isMobile ? 2 : Math.max(2, Math.round((vw - w) / 2)), t: isMobile ? 2 : 30 };
  }
  if (id === 'wa-win') {
    return { w: 275, h: 'auto', l: Math.max(2, Math.round((vw - 275) / 2)), t: Math.max(2, Math.round((vh - 340) / 2)) };
  }
  if (id === 'sol-win') {
    const w = Math.min(660, vw - 4);
    const h = Math.min(540, vh - 4);
    return { w, h, l: Math.max(2, Math.round((vw - w) / 2)), t: Math.max(2, Math.round((vh - h) / 2)) };
  }
}
 
function applyWinSize(id) {
  const win = document.getElementById(id);
  const s = winSize(id);
  win.style.width = s.w + 'px';
  win.style.left  = s.l + 'px';
  win.style.top   = s.t + 'px';
  if (id === 'dl-win') {
    const tb = 22, sb = 24;
    document.getElementById('dl-body').style.height = (s.h - tb - sb) + 'px';
    win.style.height = s.h + 'px';
  } else if (id === 'wp-win') {
    const inner = win.querySelector('.tab-content.active');
    if (inner) inner.style.maxHeight = (s.h - 22 - 28 - 30) + 'px';
    win.style.height = s.h + 'px';
  } else if (id === 'sol-win') {
    win.style.height = s.h + 'px';
    const body = document.getElementById('sol-body');
    if (body) body.style.height = (s.h - 22 - 24) + 'px';
  }
  // wa-win: altura automática, sem forçar
}
 
window.addEventListener('resize', () => {
  Object.keys(openWins).forEach(id => applyWinSize(id));
  dlSyncBg();
  dlSyncOverlay();
});
 
/* ---- Window management ---- */
let zTop = 200;
const openWins = {};
 
function openWin(id) {
  const win = document.getElementById(id);
  applyWinSize(id);
  win.classList.remove('anim-close','anim-minimize');
  win.style.display = 'block';
  void win.offsetWidth;
  win.classList.add('anim-open');
  win.addEventListener('animationend', () => {
    win.classList.remove('anim-open');
    if (id === 'sol-win') solRender();
    if (id === 'dl-win') dlSyncBg();
  }, { once: true });
  setActive(id);
  if (!openWins[id]) { openWins[id] = true; addTbBtn(id); }
}
function closeWin(id) {
  if (id === 'wa-win') { waAudio.pause(); waPlaying = false; waStopVis(); waHideEmbed(); }
  if (id === 'dl-win') dlCloseLevelSelect();
  const win = document.getElementById(id);
  win.classList.remove('anim-open','anim-minimize');
  void win.offsetWidth;
  win.classList.add('anim-close');
  win.addEventListener('animationend', () => {
    win.style.display = 'none';
    win.classList.remove('anim-close');
  }, { once: true });
  if (openWins[id]) { delete openWins[id]; removeTbBtn(id); }
}
function minimizeWin(id) {
  if (id === 'wa-win') { waAudio.pause(); waPlaying = false; waStopVis(); waHideEmbed(); }
  if (id === 'dl-win') dlCloseLevelSelect();
  const win = document.getElementById(id);
  win.classList.remove('anim-open','anim-close');
  void win.offsetWidth;
  win.classList.add('anim-minimize');
  win.addEventListener('animationend', () => {
    win.style.display = 'none';
    win.classList.remove('anim-minimize');
  }, { once: true });
  const btn = document.getElementById('tb-'+id);
  if (btn) btn.classList.remove('active');
}
function setActive(id) {
  document.querySelectorAll('.win98').forEach(w => {
    w.querySelector('.win-titlebar')?.classList.add('inactive');
  });
  const win = document.getElementById(id);
  win.querySelector('.win-titlebar')?.classList.remove('inactive');
  win.style.zIndex = ++zTop;
  document.querySelectorAll('.tb-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tb-'+id)?.classList.add('active');
}
document.querySelectorAll('.win98').forEach(w => w.addEventListener('mousedown', () => setActive(w.id)));
 
const winNames = Object.fromEntries(Object.entries(appsConfig).map(([id,c])=>[id, c.nome]));
function addTbBtn(id) {
  const tb = document.getElementById('tb-items');
  const btn = document.createElement('button');
  btn.className='tb-btn'; btn.id='tb-'+id; btn.textContent=winNames[id]||id;
  btn.onclick = () => {
    const win = document.getElementById(id);
    if (win.style.display==='none' || win.classList.contains('anim-minimize')) {
      win.classList.remove('anim-close','anim-minimize');
      win.style.display='block';
      void win.offsetWidth;
      win.classList.add('anim-open');
      win.addEventListener('animationend', ()=>win.classList.remove('anim-open'),{once:true});
      setActive(id);
    } else if (parseInt(win.style.zIndex)<zTop) {
      setActive(id);
    } else {
      minimizeWin(id);
    }
  };
  tb.appendChild(btn);
}
function removeTbBtn(id) { document.getElementById('tb-'+id)?.remove(); }
 
/* ---- Drag (mouse + touch) ---- */
let dragging=null, dragOffX=0, dragOffY=0;
 
function getDragTarget(el) {
  const tb = el.closest('.win-titlebar');
  if (!tb) return null;
  if (el.classList.contains('win-ctrl-btn')) return null;
  return tb.closest('.win98');
}
 
function startDragAt(win, cx, cy) {
  dragging = win;
  dragOffX = cx - win.offsetLeft;
  dragOffY = cy - win.offsetTop;
  win.querySelector('.win-titlebar').style.cursor = 'grabbing';
  setActive(win.id);
}
 
document.querySelectorAll('.win-titlebar').forEach(tb => {
  tb.addEventListener('mousedown', e => {
    const win = getDragTarget(e.target);
    if (win) { startDragAt(win, e.clientX, e.clientY); e.preventDefault(); }
  });
  tb.addEventListener('touchstart', e => {
    const win = getDragTarget(e.target);
    if (win) { const t=e.touches[0]; startDragAt(win, t.clientX, t.clientY); e.preventDefault(); }
  }, {passive:false});
});
 
document.addEventListener('mousemove', e => {
  if (!dragging) return;
  const maxL = window.innerWidth  - dragging.offsetWidth;
  const maxT = window.innerHeight - 30 - dragging.offsetHeight;
  dragging.style.left = Math.max(0, Math.min(e.clientX - dragOffX, maxL)) + 'px';
  dragging.style.top  = Math.max(0, Math.min(e.clientY - dragOffY, maxT)) + 'px';
  if (dragging.id === 'dl-win') { dlSyncBg(); dlSyncOverlay(); }
});
document.addEventListener('touchmove', e => {
  if (!dragging) return;
  const t = e.touches[0];
  const maxL = window.innerWidth  - dragging.offsetWidth;
  const maxT = window.innerHeight - 30 - dragging.offsetHeight;
  dragging.style.left = Math.max(0, Math.min(t.clientX - dragOffX, maxL)) + 'px';
  dragging.style.top  = Math.max(0, Math.min(t.clientY - dragOffY, maxT)) + 'px';
  e.preventDefault();
}, {passive:false});
document.addEventListener('mouseup',  () => {
  if (dragging) { dragging.querySelector('.win-titlebar').style.cursor = 'move'; dragging = null; }
});
document.addEventListener('touchend', () => {
  if (dragging) { dragging.querySelector('.win-titlebar').style.cursor = 'move'; dragging = null; }
});
 
/* ---- Icon tap (mobile double-tap simulation) ---- */
const lastTap = {};
function handleIconTap(e, winId, iconId) {
  e.preventDefault();
  selectIcon(iconId);
  const now = Date.now();
  if (now - (lastTap[iconId]||0) < 400) { openWin(winId); }
  lastTap[iconId] = now;
}
 
/* ---- Start menu ---- */
function toggleStartMenu() {
  const sm = document.getElementById('start-menu');
  sm.style.display = sm.style.display==='block' ? 'none' : 'block';
}
document.addEventListener('click', e => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn'))
    document.getElementById('start-menu').style.display='none';
});
document.addEventListener('touchend', e => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn'))
    document.getElementById('start-menu').style.display='none';
});
 
function desligar() {
  window.open(linkDesligar, '_blank');
}
 
/* ---- Icon select ---- */
function selectIcon(id) {
  document.querySelectorAll('.desktop-icon').forEach(i=>i.classList.remove('selected'));
  document.getElementById(id).classList.add('selected');
}
document.getElementById('desktop').addEventListener('click', e => {
  if (!e.target.closest('.desktop-icon'))
    document.querySelectorAll('.desktop-icon').forEach(i=>i.classList.remove('selected'));
});
 
/* ---- Tabs ---- */
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  document.getElementById('tabcontent-'+name).classList.add('active');
}
 
/* ---- Wallpaper ---- */
let currentWallpaper=null, currentBgColor='#008080';
 
function applyWallpaper(src) {
  currentWallpaper=src; updatePosition();
  const p=document.getElementById('wp-preview');
  p.style.backgroundImage=`url(${src})`; p.style.backgroundSize='cover'; p.style.backgroundPosition='center';
  document.getElementById('wp-preview-text').style.display='none';
  document.getElementById('wp-status').textContent='Papel de parede aplicado!';
}
function updatePosition() {
  if (!currentWallpaper) return;
  const pos=document.getElementById('wp-position').value, d=document.getElementById('desktop');
  d.style.backgroundImage=`url(${currentWallpaper})`;
  if (pos==='tile') { d.style.backgroundSize='auto'; d.style.backgroundRepeat='repeat'; d.style.backgroundPosition='top left'; }
  else if (pos==='auto-center') { d.style.backgroundSize='auto'; d.style.backgroundRepeat='no-repeat'; d.style.backgroundPosition='center'; }
  else { d.style.backgroundSize=pos; d.style.backgroundRepeat='no-repeat'; d.style.backgroundPosition='center'; }
}
function applyFromUrl() {
  const url=document.getElementById('wp-url').value.trim();
  if (!url) { alert('Insira uma URL válida.'); return; }
  document.getElementById('wp-status').textContent='Carregando...';
  const img=new Image();
  img.onload=()=>applyWallpaper(url);
  img.onerror=()=>{ document.getElementById('wp-status').textContent='Erro.'; alert('Não foi possível carregar a imagem.'); };
  img.src=url;
}
function removeWallpaper() {
  currentWallpaper=null;
  const d=document.getElementById('desktop');
  d.style.backgroundImage=''; d.style.backgroundColor=currentBgColor;
  const p=document.getElementById('wp-preview');
  p.style.backgroundImage=''; p.style.background=currentBgColor;
  document.getElementById('wp-preview-text').style.display='';
  document.getElementById('wp-url').value='';
  document.getElementById('wp-status').textContent='Papel de parede removido.';
}
function handleFileSelect(e) {
  const f=e.target.files[0]; if(!f) return;
  const r=new FileReader(); r.onload=ev=>applyWallpaper(ev.target.result); r.readAsDataURL(f);
}
function handleDragOver(e) { e.preventDefault(); e.dataTransfer.dropEffect='copy'; document.getElementById('drop-zone').classList.add('dragover'); }
function handleDragLeave() { document.getElementById('drop-zone').classList.remove('dragover'); }
function handleDrop(e) {
  e.preventDefault(); document.getElementById('drop-zone').classList.remove('dragover');
  const f=e.dataTransfer.files[0];
  if (f&&f.type.startsWith('image/')) { const r=new FileReader(); r.onload=ev=>applyWallpaper(ev.target.result); r.readAsDataURL(f); }
  else alert('Arraste apenas arquivos de imagem.');
}
 
/* ---- Cor do fundo ---- */
const paletteColors=[
  '#000000','#808080','#c0c0c0','#ffffff','#800000','#ff0000','#ff8000','#ffff00',
  '#008000','#00ff00','#008080','#00ffff','#000080','#0000ff','#800080','#ff00ff',
  '#804000','#ff8040','#ffff80','#80ff00','#004040','#80ffff','#0080ff','#ff80ff',
  '#400000','#ff4040','#804040','#ffcc80','#408040','#40ff80','#004080','#8080ff',
  '#c00000','#008040','#400080','#804080','#408000','#406080','#804060','#408080'
];
function buildColorGrid() {
  const g=document.getElementById('color-grid');
  paletteColors.forEach(c=>{
    const sw=document.createElement('div');
    sw.className='color-swatch'; sw.style.background=c; sw.title=c;
    if(c==='#008080') sw.classList.add('selected');
    sw.onclick=()=>{ document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('selected')); sw.classList.add('selected'); applyBgColor(c); };
    g.appendChild(sw);
  });
}
buildColorGrid();
function applyBgColor(c) {
  currentBgColor=c;
  document.getElementById('desktop').style.backgroundColor=c;
  document.getElementById('current-color-box').style.background=c;
  document.getElementById('current-color-label').textContent=c;
  document.getElementById('custom-color-picker').value=c;
  document.getElementById('custom-preview').style.background=c;
  if(!currentWallpaper) document.getElementById('wp-preview').style.background=c;
  document.getElementById('wp-status').textContent='Cor aplicada: '+c;
}
function previewCustomColor(c){ document.getElementById('custom-preview').style.background=c; }
function applyCustomColor(){ const c=document.getElementById('custom-color-picker').value; document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('selected')); applyBgColor(c); }
function resetBgColor(){ document.querySelectorAll('.color-swatch').forEach(s=>{ s.classList.remove('selected'); if(s.title==='#008080')s.classList.add('selected'); }); applyBgColor('#008080'); }
 
/* ---- Som de clique ---- */
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
 
// Pré-carrega o som personalizado, se definido
let customClickBuffer = null;
if (somClick && somClick.trim()) {
  fetch(somClick.trim())
    .then(r => r.arrayBuffer())
    .then(ab => audioCtx.decodeAudioData(ab))
    .then(buf => { customClickBuffer = buf; })
    .catch(() => { customClickBuffer = null; }); // fallback silencioso
}
 
function playClickDefault() {
  const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.04, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 6);
  }
  const src = audioCtx.createBufferSource();
  src.buffer = buf;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 1800;
  const gain = audioCtx.createGain();
  gain.gain.value = 0.55;
  src.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  src.start();
}
 
function playClick() {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  if (customClickBuffer) {
    const src = audioCtx.createBufferSource();
    src.buffer = customClickBuffer;
    src.connect(audioCtx.destination);
    src.start();
  } else {
    playClickDefault();
  }
}
 
document.addEventListener('mousedown', e => {
  if (['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return;
  playClick();
});
 
/* ---- WINAMP ---- */
const waAudio    = document.getElementById('wa-audio');
const waProgress = document.getElementById('wa-progress');
const waTimeEl   = document.getElementById('wa-time');
const waBitrate  = document.getElementById('wa-bitrate');
const waTicker   = document.getElementById('wa-ticker');
const waPlaylist = document.getElementById('wa-playlist');
const waBars     = document.querySelectorAll('.wa-bar');
const waEmbedWrap   = document.getElementById('wa-embed-wrap');
const waEmbedIframe = document.getElementById('wa-embed-iframe');
const waEmbedLabel  = document.getElementById('wa-embed-label');
 
let waTracks      = [];
let waCurrent     = -1;
let waShuffle     = false;
let waRepeat      = false;
let waVisInterval = null;
let waPlaying     = false;
 
/*
  ┌─────────────────────────────────────────────────────┐
  │  PLAYLIST INICIAL — edite à vontade!                │
  │  Cada faixa: { nome: "...", url: "https://..." }    │
  └─────────────────────────────────────────────────────*/
const waInitialTracks = [
  { nome: "Super Mario Bros. 2 - Overworld Theme", url: "mp3/Super Mario Bros. 2 Overworld Theme.mp3" },
  { nome: "C418  - Sweden", url: "mp3/C418  - Sweden - Minecraft Volume Alpha.mp3" },
  { nome: "Pod Lounge - Xploshi", url: "mp3/Pod Lounge.mp3" },
  { nome: "Mesosphere - Xploshi", url: "mp3/Mesosphere.mp3" },
  { nome: "Lotus Waters - Yume 2kki", url: "mp3/Lotus Waters - Yume 2kki.mp3" },
  { nome: "Akira Yamaoka - Never Forgive Me, Never Forget Me", url: "mp3/Akira Yamaoka - Never Forgive Me, Never Forget Me.mp3" },
  { nome: "Super Mario 64 - Bob-Omb Battlefield", url: "mp3/Super Mario 64 - Bob-Omb Battlefield.mp3" },
  { nome: "Finger Eleven - Paralyzer", url: "mp3/Finger Eleven - Paralyzer.mp3" },
  { nome: "C418 - Aria Math", url: "mp3/C418 - Aria Math (Minecraft Volume Beta).mp3" },
  { nome: "ParagonX9- Chaoz Devotion", url: "mp3/ParagonX9- Chaoz Devotion.mp3" },
  { nome: "Futari no senaka - Look Back", url: "mp3/Futari no senaka - Look Back.mp3" },
  { nome: "Bullet for My Valentine - Hand of Blood", url: "mp3/Bullet for My Valentine - Hand of Blood.mp3" },
  { nome: "Honest Eyes - Black Tide - Interscope", url: "mp3/Honest Eyes - Black Tide - Interscope.mp3" },
  { nome: "SpiderBait - Black Betty", url: "mp3/SpiderBait - Black Betty.mp3" },
  { nome: "John's Desktop - No Players Online", url: "mp3/John's Desktop - No Players Online.mp3" },
  { nome: "Uma música de suspense que toca em algum momento de suspense", url: "mp3/Uma música de suspense que toca em algum momento de suspense.mp3" },
  { nome: "Isso é coisa do Ash", url: "mp3/♪Caguei nas Calças e Estou Borrado♪.mp3" },
  { nome: "Despertador da Thrauma", url: "mp3/despertador-da-thrauma.mp3" },
  { nome: "Que porra é essa mesmo?", url: "mp3/11.mp3" },
];
 
function waFormatTime(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s/60), sec = Math.floor(s%60);
  return m + ':' + String(sec).padStart(2,'0');
}
 
/* ── Detecção e conversão de URL para embed ── */
function waDetectEmbed(url) {
  // YouTube: watch, youtu.be, shorts
  let m;
  m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (m) return {
    type: 'youtube',
    label: '▶ YouTube',
    embedUrl: `https://www.youtube.com/embed/${m[1]}?autoplay=1&rel=0`,
    height: 158
  };
 
  // Spotify: track, album, playlist, episode
  m = url.match(/open\.spotify\.com\/(track|album|playlist|episode)\/([A-Za-z0-9]+)/);
  if (m) return {
    type: 'spotify',
    label: '▶ Spotify',
    embedUrl: `https://open.spotify.com/embed/${m[1]}/${m[2]}`,
    height: 80
  };
 
  // SoundCloud
  if (url.includes('soundcloud.com')) return {
    type: 'soundcloud',
    label: '▶ SoundCloud',
    embedUrl: `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23aeff00&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`,
    height: 80
  };
 
  return null; // MP3 direto ou arquivo local
}
 
function waShowEmbed(embedInfo, nome) {
  waEmbedWrap.style.display  = 'block';
  waEmbedLabel.textContent   = embedInfo.label + ' — ' + nome;
  waEmbedIframe.src          = embedInfo.embedUrl;
  waEmbedIframe.style.height = embedInfo.height + 'px';
  // esconde controles nativos que não se aplicam
  waProgress.parentElement.style.opacity = '0.3';
  waProgress.disabled = true;
  waTimeEl.textContent  = '--:--';
  waBitrate.textContent = embedInfo.label.replace('▶ ','') + ' · player externo';
  waStopVis();
}
 
function waHideEmbed() {
  waEmbedWrap.style.display  = 'none';
  waEmbedIframe.src          = '';
  waProgress.parentElement.style.opacity = '1';
  waProgress.disabled = false;
}
 
function waRenderPlaylist() {
  waPlaylist.innerHTML = '';
  waTracks.forEach((t,i) => {
    const div = document.createElement('div');
    div.className = 'wa-track' + (i===waCurrent?' active':'');
    div.innerHTML = `<span class="wa-track-name">${i+1}. ${t.nome}</span>`;
    div.ondblclick = () => waLoadTrack(i, true);
    waPlaylist.appendChild(div);
  });
}
 
function waLoadTrack(idx, autoplay) {
  if (idx < 0 || idx >= waTracks.length) return;
  waCurrent = idx;
  const t = waTracks[idx];
 
  // ticker
  const label = `♫  ${t.nome}  ♫`;
  waTicker.textContent = label + '      ' + label;
  waTicker.classList.remove('scrolling');
  void waTicker.offsetWidth;
  waTicker.classList.add('scrolling');
  waTicker.style.animationDuration = ((label.length + 6) * 9 / 40) + 's';
  waRenderPlaylist();
 
  const embed = waDetectEmbed(t.url);
  if (embed) {
    // Serviço externo — mostra iframe
    waAudio.pause(); waAudio.src = '';
    waPlaying = false; waStopVis();
    waHideEmbed(); // reset antes de mostrar novo
    if (autoplay) waShowEmbed(embed, t.nome);
    else {
      // pronto para tocar, mas aguarda play manual
      waEmbedWrap.style.display = 'none';
      waTimeEl.textContent  = '--:--';
      waBitrate.textContent = embed.label.replace('▶ ','') + ' · clique ▶ para abrir';
    }
    // guarda embed info na faixa para uso no waPlay
    t._embed = embed;
  } else {
    // MP3 / arquivo local
    waHideEmbed();
    t._embed = null;
    waAudio.src = t.url;
    waAudio.load();
    waProgress.value = 0;
    waTimeEl.textContent  = '0:00';
    waBitrate.textContent = 'MP3 · STEREO';
    if (autoplay) {
      waAudio.play().then(()=>{ waPlaying=true; waStartVis(); }).catch(()=>{});
    }
  }
}
 
function waPlay() {
  if (waTracks.length === 0) return;
  if (waCurrent < 0) { waLoadTrack(0, true); return; }
  const t = waTracks[waCurrent];
  if (t._embed) {
    waShowEmbed(t._embed, t.nome);
    waStartVis();
    waPlaying = true;
  } else {
    waAudio.play().then(()=>{ waPlaying=true; waStartVis(); }).catch(()=>{});
  }
}
function waPause() {
  waAudio.pause(); waPlaying=false; waStopVis();
}
function waStop() {
  waAudio.pause(); waAudio.currentTime=0; waPlaying=false;
  waProgress.value=0; waTimeEl.textContent='0:00'; waStopVis();
  waHideEmbed();
}
function waNext() {
  if (!waTracks.length) return;
  let next = waShuffle
    ? Math.floor(Math.random()*waTracks.length)
    : (waCurrent+1) % waTracks.length;
  waLoadTrack(next, waPlaying);
}
function waPrev() {
  if (!waTracks.length) return;
  let prev = waCurrent <= 0 ? waTracks.length-1 : waCurrent-1;
  waLoadTrack(prev, waPlaying);
}
function waToggleShuffle() {
  waShuffle = !waShuffle;
  document.getElementById('wa-shuf-btn').classList.toggle('active-btn', waShuffle);
}
function waToggleRepeat() {
  waRepeat = !waRepeat;
  waAudio.loop = waRepeat;
  document.getElementById('wa-rep-btn').classList.toggle('active-btn', waRepeat);
}
function waSetVolume(v) { waAudio.volume = v/100; }
function waSetPan(v) {
  if (!waAudio._panNode) return;
  waAudio._panNode.pan.value = parseFloat(v);
}
function waSeek(v) {
  if (waAudio.duration) waAudio.currentTime = (v/100)*waAudio.duration;
}
function waAddTrack() {
  const url  = document.getElementById('wa-add-url').value.trim();
  const nome = document.getElementById('wa-add-name').value.trim() || ('Faixa ' + (waTracks.length+1));
  if (!url) return;
  waTracks.push({nome, url});
  waRenderPlaylist();
  document.getElementById('wa-add-url').value  = '';
  document.getElementById('wa-add-name').value = '';
  if (waCurrent < 0) waLoadTrack(0, false);
}
 
function waHandleUpload(e) {
  const files = Array.from(e.target.files);
  const firstNew = waTracks.length;
  files.forEach(file => {
    const url  = URL.createObjectURL(file);
    // remove extensão do nome
    const nome = file.name.replace(/\.[^.]+$/, '');
    waTracks.push({ nome, url });
  });
  waRenderPlaylist();
  // se não havia nenhuma faixa, começa a tocar a primeira adicionada
  if (waCurrent < 0) waLoadTrack(firstNew, false);
  e.target.value = ''; // permite re-upload do mesmo arquivo
}
 
// Progresso e tempo
waAudio.addEventListener('timeupdate', () => {
  if (waAudio.duration) {
    waProgress.value = (waAudio.currentTime/waAudio.duration)*100;
    waTimeEl.textContent = waFormatTime(waAudio.currentTime);
  }
});
waAudio.addEventListener('ended', () => {
  if (!waRepeat) waNext();
});
waAudio.addEventListener('loadedmetadata', () => {
  waBitrate.textContent = 'MP3 · ' + waFormatTime(waAudio.duration);
});
 
// Visualizador (simulado)
function waStartVis() {
  if (waVisInterval) return;
  waVisInterval = setInterval(() => {
    waBars.forEach(b => {
      const h = waPlaying ? (4 + Math.random()*26) : 4;
      b.style.height = h + 'px';
    });
  }, 90);
}
function waStopVis() {
  clearInterval(waVisInterval); waVisInterval=null;
  waBars.forEach(b => b.style.height='4px');
}
 
// Pan node via Web Audio
waAudio.addEventListener('play', () => {
  if (!waAudio._panNode && window.audioCtx) {
    try {
      const src  = audioCtx.createMediaElementSource(waAudio);
      const pan  = audioCtx.createStereoPanner();
      waAudio._panNode = pan;
      src.connect(pan);
      pan.connect(audioCtx.destination);
    } catch(e) {}
  }
}, {once:true});
 
// Carrega playlist inicial
waInitialTracks.forEach(t => waTracks.push(t));
if (waTracks.length) waLoadTrack(0, false);
 
/* ================================================================
   PACIÊNCIA (KLONDIKE SOLITAIRE)
================================================================ */
const SOL_SUITS  = ['♥','♦','♣','♠'];
const SOL_RANKS  = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const SOL_RED    = new Set(['♥','♦']);
 
let solStock=[], solWaste=[], solFoundations=[[],[],[],[]];
let solTableau=[[],[],[],[],[],[],[]];
let solScore=0, solMoves=0, solTimer=null, solSeconds=0;
let solHistory=[];
let solDrag=null; // {cards, fromType, fromIdx, fromPos, el, ghost}
 
function solRank(c){ return SOL_RANKS.indexOf(c.rank); }
function solIsRed(c){ return SOL_RED.has(c.suit); }
function solOppColor(a,b){ return solIsRed(a) !== solIsRed(b); }
 
/* Cria baralho e embaralha */
function solNewDeck(){
  const d=[];
  SOL_SUITS.forEach(s=>SOL_RANKS.forEach(r=>d.push({suit:s,rank:r,up:false})));
  for(let i=d.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [d[i],d[j]]=[d[j],d[i]]; }
  return d;
}
 
/* Inicia novo jogo */
function solNewGame(){
  clearInterval(solTimer);
  solStock=solNewDeck(); solWaste=[]; solFoundations=[[],[],[],[]];
  solTableau=[[],[],[],[],[],[],[]]; solScore=0; solMoves=0; solSeconds=0; solHistory=[];
  document.getElementById('sol-win-overlay').classList.remove('show');
  // distribui tableau
  for(let c=0;c<7;c++){
    for(let r=0;r<=c;r++){
      const card=solStock.pop();
      card.up = (r===c);
      solTableau[c].push(card);
    }
  }
  solTimer=setInterval(()=>{ solSeconds++; solUpdateStatus(); },1000);
  solRender();
}
 
function solUpdateStatus(){
  document.getElementById('sol-score-el').textContent=solScore;
  document.getElementById('sol-moves-el').textContent=solMoves;
  const m=Math.floor(solSeconds/60), s=solSeconds%60;
  document.getElementById('sol-time-el').textContent=m+':'+(s<10?'0':'')+s;
}
 
/* Verifica vitória */
function solCheckWin(){
  if(solFoundations.every(f=>f.length===13)){
    clearInterval(solTimer);
    document.getElementById('sol-win-score').textContent=`Pontuação: ${solScore} • Tempo: ${document.getElementById('sol-time-el').textContent} • Movimentos: ${solMoves}`;
    document.getElementById('sol-win-overlay').classList.add('show');
  }
}
 
/* Salva estado para undo */
function solSaveHistory(){
  solHistory.push({
    stock: JSON.parse(JSON.stringify(solStock)),
    waste: JSON.parse(JSON.stringify(solWaste)),
    foundations: JSON.parse(JSON.stringify(solFoundations)),
    tableau: JSON.parse(JSON.stringify(solTableau)),
    score: solScore, moves: solMoves
  });
  if(solHistory.length>60) solHistory.shift();
}
 
function solUndo(){
  if(!solHistory.length) return;
  const s=solHistory.pop();
  solStock=s.stock; solWaste=s.waste; solFoundations=s.foundations;
  solTableau=s.tableau; solScore=Math.max(0,s.score-15); solMoves=s.moves;
  solRender(); solUpdateStatus();
}
 
/* Comprar carta do stock */
function solDraw(){
  solSaveHistory();
  if(solStock.length===0){
    // recicla waste
    solWaste.reverse().forEach(c=>{ c.up=false; solStock.push(c); });
    solWaste=[];
    solScore=Math.max(0,solScore-100);
  } else {
    const c=solStock.pop(); c.up=true; solWaste.push(c);
    solScore+=5; solMoves++;
  }
  solRender(); solUpdateStatus();
}
 
/* Tentar mover carta para foundation automaticamente */
function solAutoFoundation(card, fromType, fromIdx){
  for(let fi=0;fi<4;fi++){
    const f=solFoundations[fi];
    if(f.length===0 && card.rank==='A'){
      solSaveHistory();
      solRemoveCard(fromType,fromIdx);
      f.push(card); solScore+=10; solMoves++;
      solRender(); solUpdateStatus(); solCheckWin(); return true;
    }
    if(f.length>0 && f[f.length-1].suit===card.suit && solRank(card)===solRank(f[f.length-1])+1){
      solSaveHistory();
      solRemoveCard(fromType,fromIdx);
      f.push(card); solScore+=10; solMoves++;
      solRender(); solUpdateStatus(); solCheckWin(); return true;
    }
  }
  return false;
}
 
/* Remove topo de uma pilha */
function solRemoveCard(type,idx){
  if(type==='waste') solWaste.pop();
  else if(type==='tableau') solTableau[idx].pop();
  else if(type==='foundation') solFoundations[idx].pop();
}
 
/* ---- Criação de elemento de carta ---- */
function solCardEl(card, zIndex, top, extra){
  const el=document.createElement('div');
  el.className='sol-card '+(card.up?(solIsRed(card)?'red':'black'):'face-down');
  el.style.top=top+'px'; el.style.zIndex=zIndex; el.style.left='0';
  if(card.up){
    el.innerHTML=`<div class="sol-card-tl">${card.rank}<br>${card.suit}</div>
      <div class="sol-card-center">${card.suit}</div>
      <div class="sol-card-br">${card.rank}<br>${card.suit}</div>`;
  }
  if(extra) Object.assign(el, extra);
  return el;
}
 
/* ---- Renderização completa ---- */
function solRender(){
  // Stock
  const stockEl=document.getElementById('sol-stock');
  stockEl.innerHTML='';
  stockEl.className = solStock.length===0 ? 'empty' : '';
  if(solStock.length>0){
    const c=document.createElement('div');
    c.className='sol-card face-down'; c.style.top='0'; c.style.left='0'; c.style.zIndex=1;
    stockEl.appendChild(c);
  }
 
  // Waste
  const wasteEl=document.getElementById('sol-waste');
  wasteEl.innerHTML='';
  if(solWaste.length>0){
    const card=solWaste[solWaste.length-1];
    const el=solCardEl(card,1,0);
    el.addEventListener('dblclick',()=>solAutoFoundation(card,'waste',0));
    el.addEventListener('mousedown', e=>solStartDrag(e,card,[card],'waste',0,solWaste.length-1));
    wasteEl.appendChild(el);
  }
 
  // Foundations
  for(let fi=0;fi<4;fi++){
    const fEl=document.getElementById('sol-f'+fi);
    fEl.innerHTML=''; fEl.dataset.suit=SOL_SUITS[fi];
    fEl.style.color='rgba(255,255,255,0.25)';
    if(solFoundations[fi].length===0){
      fEl.textContent=SOL_SUITS[fi];
    } else {
      const card=solFoundations[fi][solFoundations[fi].length-1];
      const el=solCardEl(card,1,0);
      fEl.appendChild(el);
    }
    // drop target
    fEl.ondragover=e=>e.preventDefault();
    fEl.ondrop=()=>solDropFoundation(fi);
  }
 
  // Tableau
  const OFFSET_DOWN=18, OFFSET_UP=26;
  for(let ci=0;ci<7;ci++){
    const col=document.getElementById('sol-t'+ci);
    col.innerHTML='';
    let top=0;
    solTableau[ci].forEach((card,idx)=>{
      const el=solCardEl(card,idx+1,top);
      if(card.up){
        const cards=solTableau[ci].slice(idx);
        el.addEventListener('dblclick',()=>{
          if(idx===solTableau[ci].length-1) solAutoFoundation(card,'tableau',ci);
        });
        el.addEventListener('mousedown',e=>solStartDrag(e,card,cards,'tableau',ci,idx));
      } else if(idx===solTableau[ci].length-1){
        // virar carta oculta no topo
        el.style.cursor='pointer';
        el.addEventListener('click',()=>{
          solSaveHistory(); card.up=true; solScore+=5; solMoves++; solRender(); solUpdateStatus();
        });
      }
      // altura do elemento para empilhamento
      const isLast=idx===solTableau[ci].length-1;
      if(!isLast) el.style.height=(card.up?OFFSET_UP:OFFSET_DOWN)+'px';
      col.appendChild(el);
      top += card.up ? OFFSET_UP : OFFSET_DOWN;
    });
    col.style.minHeight=(top+90)+'px';
    // drop target no col
    col.ondragover=e=>e.preventDefault();
    col.ondrop=()=>solDropTableau(ci);
  }
 
  solUpdateStatus();
}
 
/* ---- Drag & Drop ---- */
let solGhost=null, solDragCards=null, solDragFrom=null, solDragFromIdx=null, solDragCardPos=null;
 
function solStartDrag(e,card,cards,fromType,fromIdx,cardIdx){
  if(e.button!==0) return;
  e.preventDefault(); e.stopPropagation();
  solDragCards=cards; solDragFrom=fromType; solDragFromIdx=fromIdx; solDragCardPos=cardIdx;
 
  // ghost visual
  const OFFSET_UP=26;
  solGhost=document.createElement('div');
  solGhost.style.position='fixed';
  solGhost.style.zIndex='99999';
  solGhost.style.pointerEvents='none';
  solGhost.style.left=(e.clientX-32)+'px';
  solGhost.style.top=(e.clientY-20)+'px';
  cards.forEach((c,i)=>{
    const el=solCardEl(c,i+1,i*OFFSET_UP);
    el.style.position='absolute';
    solGhost.appendChild(el);
  });
  solGhost.style.width='64px';
  solGhost.style.height=(cards.length*OFFSET_UP+90-OFFSET_UP)+'px';
  document.body.appendChild(solGhost);
 
  document.addEventListener('mousemove',solOnDragMove);
  document.addEventListener('mouseup',solOnDragEnd);
}
 
function solOnDragMove(e){
  if(!solGhost) return;
  solGhost.style.left=(e.clientX-32)+'px';
  solGhost.style.top=(e.clientY-20)+'px';
}
 
function solOnDragEnd(e){
  document.removeEventListener('mousemove',solOnDragMove);
  document.removeEventListener('mouseup',solOnDragEnd);
  if(!solGhost) return;
  solGhost.remove(); solGhost=null;
 
  // detecta alvo pelo elemento sob o cursor
  const target=document.elementFromPoint(e.clientX, e.clientY);
  if(!target){ solDragCards=null; return; }
 
  // foundation?
  const fEl=target.closest('.sol-foundation');
  if(fEl){
    const fi=parseInt(fEl.id.replace('sol-f',''));
    solDropFoundation(fi); return;
  }
  // tableau col?
  const col=target.closest('.sol-col');
  if(col){
    const ci=parseInt(col.id.replace('sol-t',''));
    solDropTableau(ci); return;
  }
  solDragCards=null;
}
 
function solDropFoundation(fi){
  if(!solDragCards||solDragCards.length!==1) return;
  const card=solDragCards[0];
  const f=solFoundations[fi];
  const ok=(f.length===0&&card.rank==='A') ||
           (f.length>0&&f[f.length-1].suit===card.suit&&solRank(card)===solRank(f[f.length-1])+1);
  if(!ok){ solDragCards=null; return; }
  solSaveHistory();
  solRemoveFromSource();
  // flip nova topo
  solFlipTop();
  f.push(card); solScore+=10; solMoves++;
  solRender(); solUpdateStatus(); solCheckWin();
  solDragCards=null;
}
 
function solDropTableau(ci){
  if(!solDragCards) return;
  const card=solDragCards[0];
  const col=solTableau[ci];
  const ok=(col.length===0&&card.rank==='K') ||
           (col.length>0&&col[col.length-1].up&&solOppColor(card,col[col.length-1])&&solRank(card)===solRank(col[col.length-1])-1);
  if(!ok){ solDragCards=null; return; }
  solSaveHistory();
  solRemoveFromSource();
  solFlipTop();
  solDragCards.forEach(c=>{ c.up=true; col.push(c); });
  solScore+=5; solMoves++;
  solRender(); solUpdateStatus();
  solDragCards=null;
}
 
function solRemoveFromSource(){
  if(solDragFrom==='waste') solWaste.pop();
  else if(solDragFrom==='tableau') solTableau[solDragFromIdx].splice(solDragCardPos);
  else if(solDragFrom==='foundation') solFoundations[solDragFromIdx].pop();
}
 
function solFlipTop(){
  if(solDragFrom==='tableau'){
    const col=solTableau[solDragFromIdx];
    if(col.length>0&&!col[col.length-1].up){ col[col.length-1].up=true; solScore+=5; }
  }
}
 
/* ══════════════════════════════════════════════════
   EFEITOS CARTUNESCO / ZOEIRA — Diário Lunático JS
══════════════════════════════════════════════════ */
const DL_SCROLL_MSGS = ['Eu te vejo.','Eu continuo te vendo.','Sai do meu PC, por favor.','Cê sabe que cê vai pagar por isso','Bro has the key', 'Olá. Você.', 'Tonight is the night', 'Todas as suas bases pertencem a mim.', 'Bota aí "uva thompson sem caroço até a morte"', 'Por que você ainda tá lendo isso ao invés de ler o capítulo?', 'Jenes', 'Tung tung sahur', 'Cara isso tá perfeito 💛', 'Penso, logo nao existo', 'ai henrique que pau enorme!!!!', 'Aquele bafo de cerveja, entorpecia meus sentidos', 'Eu queria ser um elefante rosa, o maior de todos sem comparação, pra poder engolir cada pessoa do planeta e colocar na minha barriga', 'To tell them how to live is to prevent them living', 'Boa tarde, to falando com geladeira', 'Um pombo na sala estava me encarando e as paredes se dobravam sobre si mesmo até se aproximar do olho dilatado do pombo', 'você pagou seu IPVA hoje? Se sim, tenha um péssimo dia', 'Thrauma diz: Alguém poderia me explicar o que eu estou vendo?', 'Laetitia diz: Como não sabe, irmã? São mensagens que os seres humanos estão deixando pra gente!! Seres humanos do mundo real!!', 'Thrauma diz: Já estou sentindo vontade de vomitar.', 'A verdade, Miska, é que você parecia mais feliz quando seu pai batia em você e na sua mãe ou quebrava garrafa de skol na cabeça de vocês. Themes and such', 'Você é a cachorra mais burra aqui desse calçadão', 'É essa peça que você queria?'];
 
/* ── Contador de guias ── */
let dlGuias = Math.floor(Math.random() * 900) + 100; // começa entre 100 e 999
const DL_GUIAS_LIMITE = Math.floor(Math.random() * 400) + 700; // limite entre 700 e 1100
 
// Injeta keyframe do efeito vermelho
(function(){
  const s = document.createElement('style');
  s.textContent = `@keyframes dl-status-red {
    from { color: #ff2222; text-shadow: 0 0 4px rgba(255,0,0,0.5); }
    to   { color: #ff7777; text-shadow: 0 0 10px rgba(255,60,60,0.9); }
  }`;
  document.head.appendChild(s);
})();
 
// Atualiza o contador a cada 1.5s — incremento aleatório entre 1 e 5
setInterval(() => {
  if (dlGuias < DL_GUIAS_LIMITE) {
    dlGuias += Math.floor(Math.random() * 5) + 1;
    if (dlGuias > DL_GUIAS_LIMITE) dlGuias = DL_GUIAS_LIMITE;
  }
}, 1500);
 
function dlRandomStatus() {
  const el = document.getElementById('dl-status');
  if (!el) return;
 
  // 1 em 4 de chance de mostrar a frase das guias
  const useGuias = Math.random() < 0.25;
 
  if (useGuias) {
    el.textContent = `feche essas ${dlGuias} guias, teu computador não aguenta`;
    el.style.fontWeight = 'bold';
    el.style.animation = 'dl-status-red 0.6s ease-in-out infinite alternate';
  } else {
    el.textContent = DL_SCROLL_MSGS[Math.floor(Math.random() * DL_SCROLL_MSGS.length)];
    el.style.fontWeight = '';
    el.style.animation = '';
  }
}
setInterval(dlRandomStatus, 4000);
 
/* Injetar efeitos nos elementos do Diário */
function dlAddFolhaFx() {
  // Pop ao clicar nos collapsibles
  document.querySelectorAll('.dl-collapsible-header').forEach(h => {
    h.addEventListener('click', e => dlPopEmoji(e.clientX, e.clientY));
  });
  // Título: muda apenas a cor ao clicar
  const title = document.querySelector('.dl-title');
  if (title) {
    const colors = [['#ffd700','#00cc66'],['#ff69b4','#00aaff'],['#ff4444','#ffcc00'],['#cc44ff','#44ffaa']];
    let ci = 0;
    title.style.cursor = 'pointer';
    title.addEventListener('click', () => {
      ci = (ci + 1) % colors.length;
      title.querySelector('.part1').style.color = colors[ci][0];
      title.querySelector('.part2').style.color = colors[ci][1];
    });
  }
}
 
/* ---- Init ---- */
buildDesktopIcons();
buildStartMenu();
buildTitlebarIcons();
buildMusica(); buildAviso(); buildDiaryText(); buildImagemTopo(); buildImagemFundo(); buildFonteDiario(); buildFolhas(); dlAddFolhaFx();
document.getElementById('dl-body').addEventListener('scroll', dlSyncBg);
solNewGame();