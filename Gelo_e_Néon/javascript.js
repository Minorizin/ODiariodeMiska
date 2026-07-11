// Navegação por botões: um único container, troca de conteúdo e tema.
(function () {
  // Link de retorno usado no último trecho — troque pela URL que quiser.
  var RETURN_URL = 'https://thisismydiary.netlify.app/';
 
  var pages = Array.prototype.slice.call(document.querySelectorAll('template.story-page'));
  var shell = document.getElementById('story-shell');
  var content = document.getElementById('story-content');
  var btnBack = document.getElementById('btn-back');
  var btnNext = document.getElementById('btn-next');
  var progress = document.getElementById('story-progress');
  var layers = document.querySelectorAll('.bg-layer');
  var current = 0;
 
  function setBackground(theme) {
    layers.forEach(function (layer) {
      layer.classList.toggle('active', layer.getAttribute('data-theme') === theme);
    });
  }
 
  function render(index) {
    var page = pages[index];
    var theme = page.getAttribute('data-theme');
    var isLast = index === pages.length - 1;
 
    shell.setAttribute('data-theme', theme);
    content.innerHTML = page.innerHTML;
    setBackground(theme);
 
    btnBack.disabled = index === 0;
    btnBack.textContent = '◀  Voltar';
 
    btnNext.disabled = false;
    btnNext.textContent = isLast ? 'Retornar' : 'Prosseguir  ▶';
 
    progress.textContent = 'Trecho ' + (index + 1) + ' de ' + pages.length;
 
    // Rola a página inteira até o topo sempre que o trecho muda.
    // Tira o foco do botão clicado: se ele continuar focado, o navegador
    // tenta mantê-lo visível na tela e isso "briga" com o scroll pro topo.
    if (document.activeElement) {
      document.activeElement.blur();
    }
 
    function scrollToTop() {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
 
    // Executa imediatamente...
    scrollToTop();
    // ...e de novo logo depois, caso algo (imagem carregando, fonte
    // trocando) empurre o scroll de volta para baixo.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        scrollToTop();
      });
    });
    // Última garantia, depois que imagens/fontes tiveram tempo de carregar.
    setTimeout(scrollToTop, 200);
  }
 
  btnNext.addEventListener('click', function () {
    if (current < pages.length - 1) {
      current += 1;
      render(current);
    } else {
      window.location.href = RETURN_URL;
    }
  });
 
  btnBack.addEventListener('click', function () {
    if (current > 0) {
      current -= 1;
      render(current);
    }
  });
 
  render(current);
})();