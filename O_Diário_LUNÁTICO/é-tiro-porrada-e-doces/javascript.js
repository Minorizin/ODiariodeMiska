const sections    = document.querySelectorAll('.story-section');
const bgSlides    = document.querySelectorAll('.bg-slide');
const hudDots     = document.querySelectorAll('.hud-dot');
const progressBar = document.getElementById('progress-bar');
const scrollHint  = document.getElementById('scroll-hint');
const flash       = document.getElementById('chapter-flash');

// `fadeEls` é reatribuída após `buildSectionNav()` inserir as barras de
// navegação no DOM — senão os botões (criados depois desta linha) nunca
// entrariam nesta lista e ficariam presos em opacity:0 para sempre.
let fadeEls = document.querySelectorAll('.fade-in-up');

let currentChapter = null; // valor do data-chapter da seção ativa (string)
let currentIndex   = 0;    // índice da seção ativa dentro de `sections`

// Referências do sumário lateral (preenchidas em buildToc)
let tocPanel   = null;
let tocOverlay = null;
let tocToggle  = null;
let tocLinks   = [];

// ─────────────────────────────────────────────
// Cores por capítulo (barra de progresso / flash)
// Só aplica se `themeColors` estiver definido em algum outro
// script da página — evita quebrar a navegação caso não exista.
// ─────────────────────────────────────────────
function applyThemeColors(chapter) {
  if (typeof themeColors !== 'undefined' && themeColors[chapter]) {
    progressBar.style.background = themeColors[chapter].bar;
    flash.style.background = themeColors[chapter].flash;
  }
}

function switchChapter(n) {
  if (n === currentChapter) return;
  currentChapter = n;

  const activeSection = [...sections].find(s => s.dataset.chapter === n);
  const targetBgId = activeSection?.dataset.bg;

  bgSlides.forEach(s => s.classList.toggle('active', s.id === targetBgId));
  hudDots.forEach(d => d.classList.toggle('active', d.dataset.chapter === n));

  applyThemeColors(n);

  flash.classList.add('flash');
  setTimeout(() => flash.classList.remove('flash'), 250);
}

// ─────────────────────────────────────────────
// Navegação entre seções (Continuar / Retornar)
// ─────────────────────────────────────────────
function goToIndex(idx) {
  const clamped = Math.max(0, Math.min(idx, sections.length - 1));

  sections.forEach((s, i) => s.classList.toggle('active-section', i === clamped));
  currentIndex = clamped;

  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

  switchChapter(sections[clamped].dataset.chapter);
  revealFadeEls();
  updateProgress();
  updateTocActive();
}

function buildSectionNav() {
  sections.forEach((section, i) => {
    const nav = document.createElement('div');
    nav.className = 'section-nav fade-in-up';

    if (i > 0) {
      const backBtn = document.createElement('button');
      backBtn.type = 'button';
      backBtn.className = 'nav-btn nav-btn-back';
      backBtn.textContent = 'Retornar';
      backBtn.addEventListener('click', () => goToIndex(i - 1));
      nav.appendChild(backBtn);
    } else {
      const spacer = document.createElement('span');
      spacer.className = 'nav-spacer'; // espaçador, mantém o alinhamento em telas largas
      nav.appendChild(spacer);
    }

    if (i < sections.length - 1) {
      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'nav-btn nav-btn-next';
      nextBtn.textContent = 'Continuar';
      nextBtn.addEventListener('click', () => goToIndex(i + 1));
      nav.appendChild(nextBtn);
    }

    const body = section.querySelector('.story-body') || section;
    body.appendChild(nav);
  });
}

// ─────────────────────────────────────────────
// Sumário lateral — lista todas as story-section e
// navega até a escolhida usando o mesmo goToIndex()
// já usado pelos botões Continuar/Retornar e pelos hudDots.
// ─────────────────────────────────────────────
function buildToc() {
  tocToggle = document.createElement('button');
  tocToggle.type = 'button';
  tocToggle.id = 'toc-toggle';
  tocToggle.setAttribute('aria-label', 'Abrir sumário da história');
  tocToggle.textContent = 'Sumário';

  tocOverlay = document.createElement('div');
  tocOverlay.id = 'toc-overlay';

  tocPanel = document.createElement('nav');
  tocPanel.id = 'toc-panel';
  tocPanel.setAttribute('aria-label', 'Sumário da história');

  const header = document.createElement('div');
  header.id = 'toc-header';
  const headerLabel = document.createElement('span');
  headerLabel.textContent = 'FOLHA LUNÁTICA 010';
  header.appendChild(headerLabel);
  tocPanel.appendChild(header);

  const list = document.createElement('ul');
  list.id = 'toc-list';

  sections.forEach((section, i) => {
    const li = document.createElement('li');
    const link = document.createElement('button');
    link.type = 'button';
    link.className = 'toc-link';
    link.textContent = section.dataset.title || `Capítulo ${i + 1}`;

    // Se a seção tiver uma imagem definida em data-toc-image, ela aparece
    // como fundo do item (com o gradiente/opacidade definidos no CSS)
    // durante o hover e quando o item está ativo.
    if (section.dataset.tocImage) {
      link.style.setProperty('--toc-img', `url('${section.dataset.tocImage}')`);
      link.classList.add('has-image');
    }

    link.addEventListener('click', () => {
      goToIndex(i);
      closeToc();
    });
    li.appendChild(link);
    list.appendChild(li);
    tocLinks.push(link);
  });

  tocPanel.appendChild(list);

  tocToggle.addEventListener('click', () => {
    if (tocPanel.classList.contains('open')) closeToc();
    else openToc();
  });
  tocOverlay.addEventListener('click', closeToc);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeToc();
  });

  document.body.appendChild(tocOverlay);
  document.body.appendChild(tocPanel);
  document.body.appendChild(tocToggle);
}

function openToc() {
  tocPanel.classList.add('open');
  tocOverlay.classList.add('open');
  tocToggle.classList.add('panel-open');
}

function closeToc() {
  tocPanel.classList.remove('open');
  tocOverlay.classList.remove('open');
  tocToggle.classList.remove('panel-open');
}

function updateTocActive() {
  tocLinks.forEach((link, i) => link.classList.toggle('active', i === currentIndex));
}

// ─────────────────────────────────────────────
// Barra de progresso e fade-in (dentro da seção ativa)
// ─────────────────────────────────────────────
function updateProgress() {
  const total = document.body.scrollHeight - window.innerHeight;
  const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
  progressBar.style.width = pct + '%';
}

function revealFadeEls() {
  fadeEls.forEach(el => {
    if (el.offsetParent === null) return; // ignora elementos ocultos (seções não-ativas)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88) el.classList.add('visible');
  });
}

// ─────────────────────────────────────────────
// Listeners
// ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  updateProgress();
  revealFadeEls();
  if (scrollHint) scrollHint.classList.toggle('visible', window.scrollY < 80);
}, { passive: true });

hudDots.forEach(dot => {
  dot.addEventListener('click', () => {
    let idx = -1;

    if (dot.dataset.target) {
      idx = [...sections].findIndex(s => s.id === dot.dataset.target);
    }
    if (idx === -1 && dot.dataset.chapter) {
      idx = [...sections].findIndex(s => s.dataset.chapter === dot.dataset.chapter);
    }
    if (idx !== -1) goToIndex(idx);
  });
});

// ─────────────────────────────────────────────
// Inicialização
// ─────────────────────────────────────────────
buildSectionNav();
buildToc();
fadeEls = document.querySelectorAll('.fade-in-up'); // reconsulta: agora inclui botões de navegação e sumário
sections.forEach((s, i) => s.classList.toggle('active-section', i === 0));
currentIndex = 0;
switchChapter(sections[0].dataset.chapter);
updateProgress();
revealFadeEls();
updateTocActive();