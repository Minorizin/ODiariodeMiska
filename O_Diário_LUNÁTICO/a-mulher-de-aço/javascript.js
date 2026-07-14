const sections = document.querySelectorAll('.story-section');
  const bgSlides = document.querySelectorAll('.bg-slide');
  const hudDots  = document.querySelectorAll('.hud-dot');
  const progressBar = document.getElementById('progress-bar');
  const scrollHint  = document.getElementById('scroll-hint');
  const flash       = document.getElementById('chapter-flash');
  const fadeEls     = document.querySelectorAll('.fade-in-up');
 
  let currentChapter = 1;
 
  function getActiveChapter() {
  const mid = window.innerHeight * 0.45;
  let active = sections[0].dataset.chapter; // string, não number
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= mid) active = sec.dataset.chapter;
  });
  return active;
}

function switchChapter(n) {
  if (n === currentChapter) return;
  currentChapter = n;

  const activeSection = [...sections].find(s => s.dataset.chapter === n);
  const targetBgId = activeSection?.dataset.bg;

  bgSlides.forEach(s => s.classList.toggle('active', s.id === targetBgId));
  hudDots.forEach((d, i) => d.classList.toggle('active', d.dataset.chapter === n)); 
  // ↑ ajuste também os hudDots: hoje eles comparam `i + 1 === n`, o que só faz
  //   sentido se os capítulos forem sempre números sequenciais. Com "1u"/"xixu"
  //   isso quebra do mesmo jeito. É melhor dar um data-chapter="1u" etc. em cada
  //   hud-dot no HTML e comparar por string, como acima.

  progressBar.style.background = themeColors[n].bar;
  flash.style.background = themeColors[n].flash;
  flash.classList.add('flash');
  setTimeout(() => flash.classList.remove('flash'), 250);
}
 
  function updateProgress() {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
 
  function revealFadeEls() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) el.classList.add('visible');
    });
  }
 
  window.addEventListener('scroll', () => {
    updateProgress();
    revealFadeEls();
    const ch = getActiveChapter();
    switchChapter(ch);
    scrollHint.classList.toggle('visible', window.scrollY < 80);
  }, { passive: true });
 
  hudDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
 
  progressBar.style.background = themeColors[sections[0].dataset.chapter].bar;
  updateProgress();
  revealFadeEls();