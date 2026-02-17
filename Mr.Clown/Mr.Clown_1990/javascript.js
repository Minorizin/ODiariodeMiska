/* ── engine: lê os <template> tags no HTML ── */
    const templates = Array.from(document.querySelectorAll('template[data-label]'));

    const FOLHAS = templates.map(t => ({
      title : t.dataset.title,
      year  : t.dataset.year,
      label : t.dataset.label,
      info  : t.dataset.info,
      node  : t.content   // DocumentFragment — clonado na renderização
    }));

    /* ── engine ── */
    let currentPage = 0;

    const entryEl    = document.querySelector('.entry');
    const titleEl    = document.querySelector('.story-title');
    const yearEl     = document.querySelector('.story-year');
    const pageInfoEl = document.getElementById('navPageInfo');
    const btnPrev    = document.getElementById('btnPrev');
    const btnNext    = document.getElementById('btnNext');
    const prevTitle  = document.getElementById('prevTitle');
    const nextTitle  = document.getElementById('nextTitle');

    function renderPage(idx, direction) {
      const folha = FOLHAS[idx];

      entryEl.style.opacity   = '0';
      entryEl.style.transform = direction > 0 ? 'translateY(12px)' : 'translateY(-12px)';
      entryEl.style.transition = 'opacity .2s, transform .2s';

      setTimeout(() => {
        /* swap header */
        titleEl.textContent  = folha.title;
        yearEl.textContent   = folha.year;
        pageInfoEl.innerHTML = folha.info;

        /* swap content — clone the template fragment */
        entryEl.innerHTML = '';
        entryEl.appendChild(folha.node.cloneNode(true));

        /* re-attach note toggle if present on this page */
        const noteToggle = document.getElementById('noteToggle');
        const noteBlock  = document.getElementById('noteBlock');
        if (noteToggle && noteBlock) {
          noteToggle.addEventListener('click', function () {
            const open = noteBlock.classList.toggle('open');
            noteToggle.classList.toggle('open', open);
            noteToggle.setAttribute('aria-expanded', String(open));
          });
        }

        /* update nav buttons */
        btnPrev.disabled = idx === 0;
        btnNext.disabled = idx === FOLHAS.length - 1;
        btnPrev.classList.toggle('disabled', idx === 0);
        btnNext.classList.toggle('disabled', idx === FOLHAS.length - 1);
        prevTitle.textContent = idx > 0 ? FOLHAS[idx - 1].label : '—';
        nextTitle.textContent = idx < FOLHAS.length - 1 ? FOLHAS[idx + 1].label : '—';

        /* fade in */
        entryEl.style.transition = 'none';
        entryEl.style.opacity    = '0';
        entryEl.style.transform  = direction > 0 ? 'translateY(-12px)' : 'translateY(12px)';
        requestAnimationFrame(() => {
          entryEl.style.transition = 'opacity .3s, transform .3s';
          entryEl.style.opacity    = '1';
          entryEl.style.transform  = 'translateY(0)';
        });

        document.querySelector('.card').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }

    function changePage(dir) {
      const next = currentPage + dir;
      if (next < 0 || next >= FOLHAS.length) return;
      currentPage = next;
      renderPage(currentPage, dir);
    }

    /* init */
    renderPage(0, 1);

    /* ── helpers for collapsibles ── */
    function togglePanel(btnId, panelId) {
      const btn   = document.getElementById(btnId);
      const panel = document.getElementById(panelId);
      if (!btn || !panel) return;
      btn.addEventListener('click', function () {
        const open = panel.classList.toggle('open');
        btn.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
      });
    }
    togglePanel('musicToggle', 'musicPanel');

    /* ── FILM GRAIN ── *//* ── FILM GRAIN ── */
    const canvas = document.getElementById('noise-canvas');
    const ctx    = canvas.getContext('2d');
    function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
    resize(); window.addEventListener('resize', resize);
    let _f = 0;
    (function grain() {
      if (++_f % 3 === 0) {
        const w = canvas.width, h = canvas.height;
        const img = ctx.createImageData(w, h), d = img.data;
        for (let i = 0; i < d.length; i += 4) {
          const v = Math.random() * 255 | 0;
          d[i] = v; d[i+1] = v; d[i+2] = v; d[i+3] = 255;
        }
        ctx.putImageData(img, 0, 0);
      }
      requestAnimationFrame(grain);
    })();

    /* ── subtle glitch lines ── */
    function spawnLine() {
      const el = document.createElement('div');
      el.style.cssText = `
        position:fixed;left:0;right:0;
        height:${(Math.random()*2+.5).toFixed(1)}px;
        top:${(Math.random()*100).toFixed(1)}vh;
        background:rgba(255,255,255,${(Math.random()*.08+.02).toFixed(2)});
        z-index:9997;pointer-events:none;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), Math.random() * 150 + 40);
    }
    setInterval(() => {
      if (Math.random() < 0.25) spawnLine();
    }, 2500);